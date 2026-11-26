/*
 * Adaptado de portolan-sdi.org (Apache-2.0), archivos
 * src/components/home/hero-points.ts y hero-renderer.ts de
 * github.com/portolan-sdi/portolan-sdi.org.
 * Cambios: solo se toma el cuadro del catálogo, no el globo ni el vuelo de
 * los puntos. La geometría se calcula en la build y se entrega como datos
 * para SVG (antes se dibujaba en canvas 2D en cada cuadro): contornos del
 * mapa del GeoParquet, sus tres regiones con tinte, la tabla de row groups
 * y la pirámide de rásters del COG (planos, aristas, rejilla de teselas y
 * píxeles por tramos). Árbol de ejemplo de Kipu360 (camisea-ejemplo/) con
 * notas en español. El mundo precalculado es src/data/hero-world.json,
 * copiado sin cambios de public/data/hero-world.json del mismo repositorio.
 */
import mundo from "../data/hero-world.json";

/* --- Árbol --------------------------------------------------------------- */

export type Tipo = "raiz" | "dir" | "archivo" | "dato";

export interface Nodo {
  nombre: string;
  tipo: Tipo;
  /** El papel del archivo, a la derecha del nombre. */
  nota?: string;
  /** El formato de un archivo de datos. */
  formato?: string;
  dibujo?: "parquet" | "cog";
  hijos?: Nodo[];
}

/**
 * Ejemplo ilustrativo de Kipu360 en torno a Camisea. Sigue la forma del
 * árbol de Portolan (una colección GeoParquet con su PMTiles y una
 * colección COG). No es un catálogo completo ni válido.
 */
export const ARBOL: Nodo = {
  nombre: "camisea-ejemplo/",
  tipo: "raiz",
  hijos: [
    { nombre: "catalog.json", tipo: "archivo", nota: "catálogo STAC" },
    { nombre: "README.md", tipo: "archivo", nota: "para personas" },
    { nombre: "AGENTS.md", tipo: "archivo", nota: "para agentes" },
    {
      nombre: "estaciones/",
      tipo: "dir",
      hijos: [
        { nombre: "collection.json", tipo: "archivo", nota: "colección STAC" },
        { nombre: "estaciones.parquet", tipo: "dato", formato: "GeoParquet", dibujo: "parquet" },
        { nombre: "estaciones.pmtiles", tipo: "archivo", nota: "para visualización" },
      ],
    },
    {
      nombre: "relieve/",
      tipo: "dir",
      hijos: [
        { nombre: "collection.json", tipo: "archivo", nota: "colección STAC" },
        { nombre: "relieve.tif", tipo: "dato", formato: "COG", dibujo: "cog" },
      ],
    },
  ],
};

/** Las filas en orden de lectura, para numerar el fundido de cada una. */
export function filas(nodo: Nodo = ARBOL, salida: Nodo[] = []): Nodo[] {
  salida.push(nodo);
  for (const hijo of nodo.hijos ?? []) filas(hijo, salida);
  return salida;
}

/* --- El mundo ------------------------------------------------------------ */

interface NivelRaster {
  nx: number;
  ny: number;
  /** Cada tramo es `[columna, fila, largo]`. */
  runs: Array<[number, number, number]>;
}

const RING_UNIT = 10000;
/** Ventana del mapa: 78 N a 57 S, como en Portolan. */
const LAT_SPAN = 135;
const uOf = (lon: number) => (lon + 180) / 360;
const r1 = (v: number) => Math.round(v * 10) / 10;

/** El tinte de cada región, compartido por el mapa y su row group. */
export const TINTES = [0.12, 0.26, 0.42];

/* --- GeoParquet: mapa de contornos y tabla de row groups ----------------- */

/** El mapa en un viewBox de 360 x 135 (un grado por unidad). */
export const MAPA = (() => {
  const w = 360;
  const h = LAT_SPAN;
  let d = "";
  for (const ring of mundo.rings as number[][]) {
    for (let k = 0; k < ring.length; k += 2) {
      const x = r1((ring[k] / RING_UNIT) * w);
      const y = r1((ring[k + 1] / RING_UNIT) * h);
      d += `${k === 0 ? "M" : "L"}${x} ${y}`;
    }
    d += "Z";
  }
  // Tres regiones por longitud, como los tres row groups de la tabla.
  const cortes: Array<[number, number]> = [[-180, -27], [-27, 60], [60, 180]];
  const regiones = cortes.map(([a, b], k) => ({
    x: r1(uOf(a) * w),
    w: r1((uOf(b) - uOf(a)) * w),
    tinte: TINTES[k],
  }));
  return { w, h, d, regiones };
})();

/** La tabla en un viewBox propio: etiqueta, tres row groups y cuatro columnas. */
export const TABLA = (() => {
  const w = 118;
  const top = 14;
  const alto = 14;
  const hueco = 4;
  const bandas = [0, 1, 2].map((i) => top + i * (alto + hueco));
  const cols = [0.13, 0.13, 0.49].map((s) => Math.round(w * s));
  cols.push(w - cols[0] - cols[1] - cols[2]);
  const celdas: Array<{ x: number; y: number; w: number; h: number; tinte: number }> = [];
  bandas.forEach((y, k) => {
    let x = 0.5;
    cols.forEach((cw, c) => {
      celdas.push({ x, y: y + 0.5, w: cw, h: alto, tinte: c === 2 ? TINTES[k] : 0 });
      x += cw;
    });
  });
  return {
    vw: w + 1,
    vh: bandas[2] + alto + 1,
    celdas,
    etiquetaX: 0.5 + cols[0] + cols[1] + 1,
    etiquetaY: 10,
  };
})();

/* --- COG: pirámide de rásters -------------------------------------------- */

interface Plano {
  nivel: NivelRaster;
  x0: number;
  y0: number;
  w: number;
  depth: number;
  shear: number;
}

/** Un lugar del plano, `u` y `v` de 0 a 1, en el dibujo. */
function punto(p: Plano, u: number, v: number): [number, number] {
  return [r1(p.x0 + p.shear * (1 - v) + u * p.w), r1(p.y0 + v * p.depth)];
}

function poligono(p: Plano): string {
  return [punto(p, 0, 0), punto(p, 1, 0), punto(p, 1, 1), punto(p, 0, 1)]
    .map(([x, y]) => `${x},${y}`)
    .join(" ");
}

export const PIRAMIDE = (() => {
  const niveles = mundo.levels as unknown as NivelRaster[];
  const celda = 3;
  const celdaFondo = 2.5;
  const inclinacion = 0.62;
  const margen = 1;
  const completo = niveles[0].nx * celda;
  const shearMax = niveles[0].ny * celdaFondo * inclinacion;
  const centro = margen + (completo + shearMax) / 2;
  const planos: Plano[] = [];
  let top = margen;
  for (let k = niveles.length - 1; k >= 0; k--) {
    const nivel = niveles[k];
    const pw = nivel.nx * celda;
    const depth = nivel.ny * celdaFondo;
    const shear = depth * inclinacion;
    planos[k] = { nivel, x0: centro - (pw + shear) / 2, y0: top, w: pw, depth, shear };
    top += depth + 11;
  }
  const lleno = planos[0];
  const cima = planos[planos.length - 1];
  const aristas = ([[0, 0], [1, 0], [1, 1], [0, 1]] as Array<[number, number]>).map(([u, v]) => [
    ...punto(lleno, u, v),
    ...punto(cima, u, v),
  ]);
  const capas = planos.map((p, k) => {
    const { nx, ny, runs } = p.nivel;
    let d = "";
    for (const [col, fila, largo] of runs) {
      const a = punto(p, col / nx, fila / ny);
      const b = punto(p, (col + largo) / nx, fila / ny);
      const e = punto(p, (col + largo) / nx, (fila + 1) / ny);
      const f = punto(p, col / nx, (fila + 1) / ny);
      d += `M${a[0]} ${a[1]}L${b[0]} ${b[1]}L${e[0]} ${e[1]}L${f[0]} ${f[1]}Z`;
    }
    return { k, poligono: poligono(p), pixeles: d };
  });
  // La rejilla de teselas del plano a resolución completa: 8 x 3.
  const rejilla: number[][] = [];
  for (let i = 1; i < 8; i++) rejilla.push([...punto(lleno, i / 8, 0), ...punto(lleno, i / 8, 1)]);
  for (let i = 1; i < 3; i++) rejilla.push([...punto(lleno, 0, i / 3), ...punto(lleno, 1, i / 3)]);
  return {
    vw: r1(completo + shearMax + 2 * margen),
    vh: r1(top - 11 + margen),
    aristas,
    // De la base a la cima, en el orden de Portolan.
    capas,
    rejilla,
  };
})();
