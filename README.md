# kipu360.github.io

Sitio institucional de Kipu360. HTML, CSS y fuentes locales. Sin build, sin JS, sin dependencias.

## Estructura

- `index.html`: inicio, problema, qué hacemos, compromisos, recorrido del dato, principios, para quién, preguntas frecuentes y contacto.
- `como-trabajamos.html`: proceso con entregables, requisitos, criterios de aceptación, formatos, propiedad, estado, límites y preguntas de proceso.
- `nosotros.html`: nombre, misión, visión, principios, referencias y equipo.
- `404.html`: página no encontrada, con navegación.
- `assets/css/tokens.css`: tokens de marca. `assets/css/site.css`: todo lo demás.
- `assets/fonts/`: Manrope 400, 600 y 700 en woff2, con su licencia OFL.
- `assets/img/brand/`: logos SVG, favicons y tarjeta social.

## Editar

1. Cambia el texto en el HTML. No hay plantillas ni generador.
2. Si cambias colores o tipografía, edita `assets/css/tokens.css`.
3. Revisa que los enlaces internos y las anclas sigan existiendo.
4. Si cambias una pregunta frecuente, actualiza también su `FAQPage` en el JSON-LD del `<head>`.

## Pendientes antes de difundir

- **Nombre y dominio.** `kipu360.pe` ya está en uso por una plataforma educativa peruana y `kipu360.com` está aparcado. Confirmar marca y dominio antes de difundir la web o invertir en posicionamiento.
- **Correo.** El sitio usa `contacto@kipu360.com` como demo. Verificar que el buzón reciba antes de difundir.
- Añadir CNAME y actualizar canonical, og:url y sitemap cuando haya dominio.
- Confirmar cifras y casos antes de publicar cualquier resultado de cliente.
- Confirmar el nombre público de Bran antes de mantenerlo en la sección de equipo.
- Añadir fotos reales solo con autor, lugar, fecha y permiso.
- El código del visor (`environmental-data-explorer`) no tiene licencia resuelta; no afirmar que el código base es abierto hasta que exista.

## Publicar

GitHub Pages sirve la rama `main`, carpeta raíz. Cada push publica en un minuto.

© 2026 Kipu360. Código MIT (ver `LICENSE`). Textos y logo, todos los derechos reservados.
