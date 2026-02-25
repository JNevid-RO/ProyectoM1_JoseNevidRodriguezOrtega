# Generador de Paletas de Colores

Una aplicación web simple y elegante para generar paletas de colores aleatorias. Los colores se generan en formatos HSL o HEX, con opciones para personalizar el tamaño de la paleta.

## Demo

Puedes ver la aplicación en funcionamiento aquí: [Generador de Paletas de Colores](https://jnevid-ro.github.io/ProyectoM1_JoseNevidRodriguezOrtega/)

## Instrucciones de Uso

1. Abre el archivo `index.html` en tu navegador web preferido.
2. Selecciona el tamaño de la paleta deseado (6, 8 o 9 colores) en el menú desplegable.
3. Activa o desactiva la casilla de verificación para alternar entre formatos HSL y HEX.
4. Haz clic en el botón "Generar paleta" para crear una nueva paleta de colores.
5. Los colores se mostrarán en tarjetas con animaciones suaves. Puedes hacer clic en las tarjetas para copiar el código del color (si implementas esa funcionalidad adicional).

## Decisiones Técnicas

- **Tecnologías utilizadas**: HTML5, CSS3 y JavaScript vanilla para mantener la aplicación ligera y sin dependencias externas (excepto las fuentes de Google Fonts).
- **Estructura del proyecto**: Archivos organizados en carpetas (`css/` para estilos, `JS/` para scripts) para una mejor mantenibilidad.
- **Generación de colores**:
  - HSL: Valores de matiz aleatorios (0-360), saturación (20-100%) y luminosidad (20-90%) para colores vibrantes pero legibles.
  - HEX: Generación aleatoria de códigos hexadecimales de 6 dígitos.
- **Animaciones**: Transiciones CSS con cubic-bezier para efectos de aparición y desaparición suaves.
- **Diseño responsivo**: Uso de CSS Grid para adaptar el layout a diferentes tamaños de pantalla.
- **Accesibilidad**: Atributo `aria-live` en el contenedor de paletas para lectores de pantalla.

## Pasos para Ejecutar la Aplicación

### Requisitos Previos
- Un navegador web moderno (Chrome, Firefox, Safari, Edge).

### Ejecución
1. Clona o descarga este repositorio en tu máquina local.
2. Navega a la carpeta del proyecto.
3. Abre el archivo `index.html` directamente en tu navegador. No se requiere un servidor web, ya que es una aplicación estática.

## Despliegue

### GitHub Pages
1. Sube tu proyecto a un repositorio de GitHub.
2. Ve a la configuración del repositorio (Settings > Pages).
3. Selecciona la rama `main` (o `master`) y la carpeta raíz (`/`).
4. Guarda los cambios. GitHub Pages generará una URL pública para tu sitio.

