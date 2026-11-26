// Textos del sitio. Fuente única: el contexto del vault
// (kipu-360-web/context/piezas/texto/deck.txt, one-pager.txt y textos/*.md).
// No agregar cifras ni afirmaciones que no estén en esas fuentes.

export const DEMO_URL = "https://sammy-carlos.github.io/environmental-data-explorer/";

export const hero = {
  titulo: "Infraestructura de datos ambientales abierta y lista para la inteligencia artificial.",
  bajada:
    "Monitoreos, resultados de laboratorio, estudios, documentos y mapas. Ordenamos toda la información ambiental del Perú, conservamos la fuente de cada dato y la conectamos con sus equipos y sus agentes de IA.",
};

export const problema = {
  eyebrow: "El problema",
  titulo: ["La información ambiental del Perú existe.", "Está repartida."],
  texto:
    "Cada institución publica en su propio portal, con su formato y sus códigos. Cruzarla para un proyecto o un informe toma semanas.",
  cita: "La generación de información ambiental en Perú está desarticulada",
  fuente: "Compromiso PE0093 del Perú, Alianza para el Gobierno Abierto",
  instituciones: [
    "MINAM · SINIA",
    "ANA",
    "SENAMHI",
    "OEFA",
    "SENACE",
    "INGEMMET",
    "SERNANP",
    "Gobiernos regionales",
    "Empresas y consultoras",
  ],
  nota: "Cada una con su portal y su formato.",
};

export const porQueAhora = {
  eyebrow: "Por qué ahora",
  titulo: ["El Estado ya apostó por la IA.", "Sin datos ordenados, no funciona."],
  hitos: [
    { fecha: "2023", titulo: "Ley 31814", texto: "Promueve el uso de la inteligencia artificial en el país." },
    { fecha: "Ene 2026", titulo: "Entra en vigencia su reglamento", texto: "Decreto Supremo 115-2025-PCM." },
    {
      fecha: "May 2026",
      titulo: "Estrategia Nacional de IA 2026-2030",
      texto: "Obligatoria para el sector público. Crea el Catálogo IA Perú de conjuntos de datos.",
      destacado: true,
    },
    { fecha: "2026", titulo: "Oficial de IA", texto: "Nuevo rol en las entidades públicas, junto a un equipo técnico de datos e IA." },
  ],
  cierre: "Cada entidad necesitará datos confiables y con fuente. Kipu360 es esa base.",
};

export const queHacemos = {
  eyebrow: "Qué hacemos",
  titulo: "Un solo lugar para toda la información ambiental del Perú.",
  origenes: ["Gobierno nacional", "Regiones y municipios", "Empresas", "Consultoras", "Academia y ONG"],
  verbos: [
    { verbo: "Ordenamos", detalle: "fuente y calidad de cada dato" },
    { verbo: "Desplegamos", detalle: "infraestructura abierta" },
    { verbo: "Conectamos", detalle: "MCP, skills y API" },
  ],
  salidas: [
    { nombre: "Agentes de IA", detalle: "Claude, ChatGPT o propios" },
    { nombre: "Dashboards", detalle: "por cuenca o región" },
    { nombre: "Documentos", detalle: "con fuentes citadas" },
    { nombre: "Alertas", detalle: "ante cambios y excesos" },
  ],
};

export const servicios = {
  eyebrow: "Servicios",
  titulo: ["Una base ordenada.", "Todos los servicios se construyen sobre ella."],
  base: "Datos ambientales ordenados con fuente, calidad e historial verificables",
  grupos: [
    { nombre: "Monitorear", items: ["Dashboards", "Alertas tempranas", "Monitoreo satelital"] },
    { nombre: "Reportar", items: ["Documentos automáticos", "Reportes regulatorios", "Líneas base", "Planes de cierre"] },
    { nombre: "Analizar", items: ["Mapas de riesgo", "Análisis por cuenca", "Modelos predictivos", "Due diligence"] },
    { nombre: "Conectar", items: ["Agentes de IA", "APIs", "Integración con su SIG"] },
  ],
  nota: "Cada servicio usa los mismos datos verificados. Por eso cada cifra lleva su fuente.",
};

export const arquitectura = {
  eyebrow: "Arquitectura",
  titulo: ["Abierta, sin servidores", "y desplegada como código."],
  donde: "En AWS o en la nube del cliente",
  pasos: [
    { nombre: "Fuentes", detalle: "PDF, Excel, laboratorios y portales. Públicas y privadas." },
    { nombre: "Ingesta", detalle: "Extracción, validación y revisión." },
    { nombre: "Datos ordenados · Portolan", detalle: "Tablas, documentos y capas en S3 con catálogo STAC versionado.", destacado: true },
    { nombre: "Consulta", detalle: "Sin servidores, con permisos y rastro." },
    { nombre: "IA y agentes", detalle: "MCP, skills y asistente que cita fuentes." },
  ],
  detalle:
    "Tablas, documentos y capas en formatos abiertos sobre S3, catalogados con STAC según la especificación Portolan. Cada versión queda registrada.",
  formatos: [
    { nombre: "Portolan", logo: "/brand/tech/portolan.svg" },
    { nombre: "STAC", logo: "/brand/tech/stac.png" },
    { nombre: "GeoParquet", logo: "/brand/tech/apacheparquet.svg" },
    { nombre: "COG", logo: "/brand/tech/cog.png" },
    { nombre: "PMTiles", logo: "/brand/tech/pmtiles.svg" },
    { nombre: "S3", logo: "/brand/tech/s3.svg" },
  ],
};

export const piloto = {
  eyebrow: "Cómo empezamos",
  titulo: ["Tres meses para probarlo", "con un caso real suyo."],
  texto:
    "Usted elige el caso. Acordamos los criterios de éxito al inicio y al final los datos ordenados y su documentación quedan en su poder.",
  pasos: [
    { cuando: "Mes 1", nombre: "Inventario", texto: "Identificamos las fuentes del caso, las integramos y documentamos su procedencia." },
    { cuando: "Mes 2", nombre: "Despliegue", texto: "La plataforma queda operativa en su nube o en la nuestra, con un primer servicio en uso." },
    { cuando: "Mes 3", nombre: "Evaluación", texto: "Medimos horas ahorradas, cobertura y calidad frente a lo acordado." },
    { cuando: "Después", nombre: "Crecer", texto: "Según los resultados, sumamos otras áreas, fuentes o servicios.", abierto: true },
  ],
};

export const cierre = {
  eyebrow: "Siguiente paso",
  titulo: "¿Qué información le cuesta más reunir hoy?",
  texto: "Con esa respuesta definimos el caso del piloto, sus fuentes y cómo vamos a medir el resultado.",
};

// One-pager (one-pager.pdf de las piezas)
export const onePager = {
  bajada: "Monitoreos, laboratorios, estudios, documentos y mapas en una sola base. Cada dato conserva su fuente y cada corrección queda registrada.",
  arquitecturaRotulo: "Desplegada como código en AWS o en la nube del cliente",
  arquitectura: [
    { nombre: "Fuentes", detalle: "PDF, Excel, laboratorios, portales. Públicas y privadas" },
    { nombre: "Ingesta", detalle: "Extracción, validación y revisión" },
    { nombre: "Datos ordenados", detalle: "Tablas, documentos y capas en S3 con catálogo STAC versionado", destacado: true },
    { nombre: "Consulta", detalle: "Sin servidores, con permisos y rastro" },
    { nombre: "IA y agentes", detalle: "MCP, skills y asistente que cita fuentes" },
  ],
  problema:
    "Las empresas que operan en el territorio acumulan décadas de información ambiental, como monitoreos, resultados de laboratorio, estudios de impacto e informes de consultoras. Esa información está repartida en PDF, hojas de cálculo y sistemas que no se comunican entre sí, y cuesta saber qué fuente respalda cada cifra.",
  queHacemos: [
    { verbo: "Ordenamos.", texto: "Integramos fuentes públicas y privadas en catálogos STAC versionados. Cada valor se rastrea hasta su archivo, hoja y fila de origen." },
    { verbo: "Desplegamos.", texto: "Una infraestructura de datos nativa de la nube sobre la especificación abierta Portolan y STAC, sin servidores ni bases de datos que mantener, desplegada con OpenTofu en su nube o en la nuestra." },
    { verbo: "Conectamos con IA.", texto: "Servidor MCP y skills para que cualquier agente, como Claude, ChatGPT o los suyos, consulte los datos con permisos y cite cada fuente." },
  ],
  serviciosRotulo: "Servicios sobre los datos ordenados, por ejemplo",
  servicios: [
    "Dashboards de monitoreo por operación, cuenca o región.",
    "Documentos automáticos, como informes, líneas base y reportes regulatorios con cada cifra citada.",
    "Alertas tempranas cuando un parámetro supera un estándar o cambia de tendencia.",
    "Análisis geoespacial e integración con sus sistemas, su SIG y su data warehouse.",
  ],
  serviciosCierre: "Con la información ordenada, cualquier servicio que su organización necesite se construye encima.",
  comoTrabajamos:
    "Piloto de tres meses sobre un problema prioritario, con criterios de éxito acordados. Sus datos son suyos y no se usan para entrenar modelos.",
  paraQuien: [
    { nombre: "Minería y energía", texto: "Cruzar el monitoreo propio con el contexto público." },
    { nombre: "Consultoras ambientales", texto: "Reutilizar líneas base y antecedentes." },
    { nombre: "Instituciones públicas", texto: "Organizar, actualizar y publicar datos." },
  ],
  principios: [
    "Metodología pública y versionada.",
    "Nada se borra en silencio.",
    "Si un dato requiere revisión, lo decimos.",
    "El dato público sigue siendo público.",
  ],
};

export const materiales = [
  {
    nombre: "Deck",
    detalle: "Ocho láminas: el problema, por qué ahora, qué hacemos, servicios, arquitectura y cómo empezamos.",
    href: "/deck/",
    pdf: "/deck/kipu360-deck.pdf",
  },
  {
    nombre: "One-pager",
    detalle: "Kipu360 en una página: arquitectura, qué hacemos, servicios, para quién y principios.",
    href: "/one-pager/",
    pdf: "/one-pager/kipu360-one-pager.pdf",
  },
];
