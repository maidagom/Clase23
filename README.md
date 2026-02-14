# Clase23

## Descripción
Este proyecto es una aplicación web simple de lista de tareas (To-Do List) que permite al usuario agregar, eliminar y limpiar tareas. Las tareas se almacenan en el almacenamiento local del navegador para mantener el historial incluso después de recargar la página.

## Tecnologías utilizadas
- **HTML5**: Estructura básica de la aplicación.
- **JavaScript (ES6+)**: Lógica de la aplicación, manipulación del DOM y gestión de eventos.
- **Módulos de JavaScript**: Separación de lógica en archivos (`app.js`, `auxiliar.js`).
- **Tailwind CSS**: Framework de utilidades para estilos rápidos y responsivos, incluido mediante CDN.
- **SweetAlert2 v11.26.18**: Librería para mostrar alertas y diálogos modernos, incluida mediante CDN o archivo local (`js/SweetAlert2.js`).
- **LocalStorage**: Persistencia de datos en el navegador para guardar tareas.

## Uso de librerías externas
No se utiliza ninguna API externa para datos. Se usan las siguientes librerías vía CDN o archivo local:
- **Tailwind CSS** para los estilos.
- **SweetAlert2 v11.26.18** para las alertas y confirmaciones (puede usarse desde CDN o desde el archivo `js/SweetAlert2.js`).

## Inicialización del proyecto
1. Descarga o clona el repositorio.
2. Abre el archivo `js/index.html` en tu navegador web.
3. No se requiere instalación de dependencias ni servidor, ya que todo funciona en el navegador.
4. Si deseas modificar estilos, puedes editar `tailwind.config.js`, pero no es necesario para el funcionamiento básico.

El proyecto funciona directamente en el navegador y los módulos están enlazados en el HTML. Las dependencias externas (Tailwind CSS y SweetAlert2) se cargan mediante CDN en el archivo HTML, o puedes usar el archivo local `js/SweetAlert2.js` si lo prefieres.

## Funcionalidades principales
- Agregar nuevas tareas a la lista.
- Eliminar tareas individuales con botón dedicado.
- Limpiar todas las tareas con confirmación mediante SweetAlert2 (optimización en el flujo de confirmación y mensajes).
- Persistencia automática de tareas usando LocalStorage.
- Recuperación automática de tareas al recargar la página.

## Estructura de archivos
- `js/index.html`: Archivo HTML principal.
- `js/app.js`: Lógica principal de la aplicación (gestión de tareas, eventos y renderizado).
- `js/auxiliar.js`: Funciones auxiliares para guardar y recuperar datos en LocalStorage.
- `tailwind.config.js`: Configuración de Tailwind (opcional, ya que se usa CDN).

---
Desarrollado como parte de la clase 23 de desarrollo web.
