SIGAD v0.1 - BASE INICIAL

Incluye:
- Portal general del Archivo Desconcentrado.
- Dashboard inicial alimentado por el módulo de devolución de cargos.
- Módulo funcional de Devolución de Cargos.
- Registro de dependencias, paquetes, expedientes y observaciones.
- Tabla independiente para paquetes observados.
- Generación automática de vista previa del oficio.
- Párrafo de exhortación construido según tipos de observación.
- Guardado de borradores e historial local en el navegador.
- Auditoría local inicial.
- Impresión / Guardar como PDF mediante el navegador.
- Descarga HTML del oficio.
- Integración fase 1 de SAAMIR y SAMICERT por enlace a sus dominios actuales.

SAAMIR:
https://saamir.ecomindsetgo.com

SAMICERT:
https://samicert.ecomindsetgo.com

IMPORTANTE
Esta versión es una base funcional de interfaz y lógica. Los registros del nuevo módulo todavía se guardan en localStorage. Para uso institucional/multiusuario, la siguiente fase debe incorporar Firebase Authentication, Firestore, reglas por roles y auditoría centralizada.

INTEGRACIÓN RECOMENDADA
Fase 1: enlaces desde SIGAD a los sistemas existentes, sin modificar sus flujos.
Fase 2: compartir indicadores mediante una capa de lectura autorizada o consolidación de estadísticas.
Fase 3: identidad unificada si se decide migrar ambos sistemas al mismo proveedor/proyecto de autenticación.
