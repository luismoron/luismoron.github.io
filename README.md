# 👨‍💻 Luis Morón - Portfolio Personal

![Astro](https://img.shields.io/badge/Astro-5.17-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vanilla JS](https://img.shields.io/badge/Vanilla_JS-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Portfolio personal de **Luis Morón**, Software Developer y Solutions Architect. 
Sitio optimizado para máximo rendimiento y SEO, construido completamente con la arquitectura de renderizado estático de **Astro**.

## 🚀 Arquitectura y Tecnologías

Esta versión del portfolio se centra en **cero JavaScript de React en el cliente**. Todo el contenido se renderiza en el servidor en tiempo de construcción, lo que resulta en puntuaciones perfectas en Lighthouse (SEO, Accesibilidad, Rendimiento).

- **Framework Core:** [Astro](https://astro.build/)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Iconos:** [Lucide](https://lucide.dev/) (Incrustados directamente como SVGs para no depender de JS)
- **Interactividad:** Vanilla JavaScript nativo (Light/Dark mode, menús, scroll tracking)
- **Internacionalización (i18n):** Rutas estáticas generadas por servidor (`/` para ES, `/en/` para EN) usando metadatos `hreflang` para un SEO óptimo.

## 📁 Estructura del Proyecto

```text
/
├── public/                 # Archivos estáticos (imágenes, favicons, CV.pdf)
├── src/
│   ├── components/         # Componentes nativos de Astro (.astro)
│   ├── data/               # Datos estáticos (mockData.ts, translations.js)
│   ├── layouts/            # Layouts base (Layout.astro maneja todo el SEO)
│   ├── pages/              # Páginas del sitio (Rutas basadas en archivos)
│   │   ├── index.astro     # Versión en Español (Default)
│   │   └── en/
│   │       └── index.astro # Versión en Inglés
│   └── styles/             # Estilos globales de CSS (global.css)
└── astro.config.mjs        # Configuración de Astro
```

## 🛠️ Instalación y Uso Local

Asegúrate de tener Node.js >= 20.0 instalado.

1. Clona el repositorio:
   ```bash
   git clone https://github.com/luismoron/luismoron.github.io.git
   ```
2. Instala las dependencias:
   ```bash
   npm install
   # o
   pnpm install
   ```
3. Inicia el servidor de desarrollo local:
   ```bash
   npm run dev
   ```
   Abre [http://localhost:4321](http://localhost:4321) en tu navegador para ver el resultado.

## 📝 Gestión de Contenidos

El sitio obtiene su contenido de archivos estáticos en `src/data/`:

- **`mockData.ts`**: Contiene la información personal, experiencia laboral, habilidades, línea de tiempo y lista de proyectos.
- **`translations.js`**: Diccionario de textos en varios idiomas (`es`, `en`). Si necesitas añadir un nuevo idioma, agrégalo aquí y crea una nueva carpeta en `src/pages/[idioma]/index.astro`.

## 🌐 Despliegue

El sitio está configurado para ser desplegado en **GitHub Pages**. 
Para hacer un despliegue manual usando pnpm:

```bash
npm run deploy
```

*(Esto ejecutará el comando `astro build` para generar los archivos estáticos en la carpeta `dist/` y luego usará el paquete `gh-pages` para enviarlos a la rama correspondiente).*