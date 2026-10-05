SIGAD v0.2 INTEGRADO
Sistema Integral de Gestión del Archivo Desconcentrado

NOVEDADES DE ESTA VERSION

1. DEVOLUCION DE CARGOS
- Correlativo sugerido por año.
- Registro de una o varias dependencias.
- Totales automáticos de paquetes y expedientes.
- Expedientes observados y paquetes observados por separado.
- Catálogo automático de tipos de observación.
- Pegado masivo desde Excel.
- Importación XLSX/XLS/CSV.
- Vista previa con formato institucional.
- Generación de Word .docx real mediante OOXML.
- Generación de PDF mediante jsPDF.
- Historial, duplicado de oficio y auditoría.

2. ARCHIVO 360
- Buscador de ubicación de paquetes por rangos.
- Repositorios iniciales: Sáenz Peña, NCPP - Sótano, López Padilla y Dunas.
- Rangos iniciales cargados únicamente con información confirmada:
  Sáenz Peña: 26-1 a 26-822.
  López Padilla: 1R a 13100R.
  NCPP - Sótano: 13101R a 24000R.
- Registro de nuevos rangos sin modificar código.
- Campos preparados para sector, estantería y nivel.

3. TRANSFERENCIAS AL GOBIERNO REGIONAL
- Fecha.
- Destino.
- Cantidad de paquetes.
- Metros lineales.
- Periodo documental.
- Estado del proceso.
- Referencia y observaciones.
- Indicadores acumulados.

4. ELIMINACION DOCUMENTAL
- Registro estadístico sin expediente por expediente.
- Cantidad de paquetes.
- Metros lineales.
- Periodo documental.
- Repositorios involucrados.
- Participantes.
- Documento sustentatorio.
- Estado.

5. DASHBOARD Y REPORTES
- Indicadores de todos los módulos implementados.
- Ranking de causas de observación.
- Reporte consolidado.
- Exportación CSV.

6. AUDITORIA
- Registro de creación, eliminación, generación y consultas relevantes.
- Búsqueda y exportación CSV.

7. ASISTENTE GRATUITO
- No utiliza API de pago.
- Responde consultas estructuradas usando la data local de SIGAD.
- Puede consultar oficios, paquetes, observaciones, transferencias, eliminaciones, metros lineales y Archivo 360.

8. SAAMIR Y SAMICERT
- Se mantienen como sistemas independientes y estables.
- Se accede desde SIGAD mediante enlaces a:
  https://saamir.ecomindsetgo.com
  https://samicert.ecomindsetgo.com
- No se usan iframe ni se mezclan sus autenticaciones en esta fase.
- La integración de indicadores se debe realizar posteriormente mediante una capa autorizada de lectura o consolidación.

ALMACENAMIENTO ACTUAL
SIGAD v0.2 utiliza localStorage para permitir probar todos los módulos sin crear todavía un backend nuevo.
Incluye respaldo/restauración JSON para evitar pérdida accidental durante pruebas.

FIREBASE
La carpeta firebase contiene:
- firebase-config.example.js
- firestore.rules

Para convertir SIGAD a multiusuario hace falta crear o definir el proyecto Firebase que será propio de SIGAD. No se debe reutilizar a ciegas el proyecto Firebase de SAAMIR o SAMICERT, porque ambos sistemas actuales usan proyectos y autenticaciones independientes.

LIBRERIAS EXTERNAS
Para las funciones Word/PDF/Excel el navegador carga:
- JSZip (incluido localmente)
- jsPDF
- jsPDF AutoTable
- SheetJS
Estas dependencias requieren conexión a Internet al abrir la aplicación, salvo que luego se descarguen y empaqueten localmente.

PRUEBA RAPIDA
1. Abra index.html.
2. Entre a Devolución de cargos.
3. Complete destinatario y una dependencia.
4. Agregue observaciones manualmente o importe data/plantilla_observaciones.csv.
5. Genere el documento.
6. Pruebe Word y PDF.
7. Entre a Archivo 360 y busque 14572R o 26-458.
8. Registre una transferencia y una eliminación.
9. Revise Dashboard, Reportes, Auditoría y Asistente.
