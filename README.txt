SIGAD v0.3 ROBUSTO · Sistema Integral de Gestión del Archivo Desconcentrado
==========================================================================

NOVEDADES PRINCIPALES
- Nuevo logo SIGAD aplicado al sistema.
- Interfaz UX/UI reorganizada y adaptable a escritorio, tablet y móvil.
- Archivo 360 reconstruido como módulo independiente (js/archive360.js).
- Repositorio Dunas con plano interactivo, 44 anaqueles, 8 baldas por anaquel, 6 paquetes por balda y 2,094 paquetes de la referencia proporcionada.
- Búsqueda por paquete en Dunas para las series 2021, 2022, 2023 y 2024.
- Cálculo de anaquel, balda y ruta más corta desde el portón.
- Anaqueles interactivos: se pueden tocar/clicar para ver rango y recorrido.
- Control de zoom, pantalla completa y visualización del sentido de numeración.
- Sáenz Peña, NCPP-Sótano y López Padilla continúan operando mediante rangos configurables hasta disponer de sus planos físicos exactos.
- Asistente local consulta también Archivo 360.
- Menú móvil con fondo de seguridad y cierre por Escape.
- Mejoras de validación, mensajes y almacenamiento local.
- PWA: manifest y service worker para mejor experiencia móvil al publicarse bajo HTTPS.
- SAAMIR y SAMICERT continúan integrados mediante acceso externo seguro, sin iframe ni mezcla de bases de datos.

ARCHIVOS PRINCIPALES
index.html                 interfaz general
assets/app.css             estilos y diseño responsive
assets/logo-sigad.png      logo SIGAD optimizado
assets/logo-pj.png         logo institucional usado en oficios
js/app.js                  lógica general de SIGAD
js/archive360.js           motor de ubicación y plano de Archivo 360
manifest.webmanifest       configuración instalable móvil
service-worker.js          caché de la interfaz local
firebase/                  base para futura conexión multiusuario

ARCHIVO 360 · DUNAS
La parametrización actual reproduce la referencia entregada:
- 2021: 1,000 paquetes
- 2022: 504 paquetes
- 2023: 516 paquetes
- 2024: 74 paquetes
- Total: 2,094 paquetes
- 44 anaqueles
- 48 paquetes por anaquel (salvo el último)
- 8 baldas por anaquel
- 6 paquetes por balda

Ejemplos de búsqueda:
01-21T
504-22T
516-23T
74-24T

IMPORTANTE
El plano de Dunas es referencial, conforme al HTML entregado por el usuario. Antes de considerarlo ubicación institucional definitiva deben verificarse en campo la distribución física, sentido real de numeración, anaqueles y rangos.

PERSISTENCIA
La versión sigue usando localStorage para pruebas y desarrollo. El módulo "Respaldo" permite descargar/restaurar JSON.
Para producción multiusuario se recomienda activar Firebase Authentication + Firestore con un proyecto exclusivo de SIGAD.

EJECUCIÓN
Puede abrir index.html directamente para pruebas. Para funciones PWA/service worker debe publicarse por HTTPS o ejecutarse mediante un servidor local.
