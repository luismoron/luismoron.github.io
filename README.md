# 🚀 Luis Morón - Portfolio

Un portafolio personal moderno construido con **Astro** y **React**, estilizado con **Tailwind CSS**. Incluye secciones para mostrar proyectos, experiencia, habilidades y contacto.

## ✨ Características

- **⚡ Astro Framework**: Rendimiento optimizado con generación de sitios estáticos
- **⚛️ React Components**: Componentes interactivos como "islands" para mejor rendimiento
- **🎨 Tailwind CSS**: Diseño moderno y responsivo
- **🌙 Modo Oscuro**: Soporte completo para tema claro y oscuro
- **📱 Responsive**: Diseño adaptativo para todos los dispositivos
- **🔧 Node 20+**: Compatible con versiones modernas de Node.js
- **📄 CV Automático**: Generación y descarga de CV en PDF con toda tu información

## 🛠️ Tecnologías Utilizadas

- **Framework**: [Astro](https://astro.build/)
- **UI Components**: React con [Radix UI](https://www.radix-ui.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Package Manager**: [pnpm](https://pnpm.io/)

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 20.0.0 o superior
- pnpm (recomendado) o npm

### Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/luismoron/luismoron.github.io.git
cd luismoron.github.io
```

2. Instala las dependencias:
```bash
pnpm install
```

3. Inicia el servidor de desarrollo:
```bash
pnpm run start
```

4. Abre [http://localhost:4321](http://localhost:4321) en tu navegador

## 📜 Scripts Disponibles

- `pnpm run start` - Inicia el servidor de desarrollo
- `pnpm run build` - Construye el proyecto para producción
- `pnpm run preview` - Vista previa del build de producción
- `pnpm run deploy` - Despliega a GitHub Pages (requiere configuración)

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React reutilizables
│   ├── ui/             # Componentes de UI básicos
│   ├── About.jsx       # Sección Acerca de
│   ├── Contact.jsx     # Sección de Contacto
│   ├── Experience.jsx  # Sección de Experiencia
│   ├── Footer.jsx      # Pie de página
│   ├── Header.jsx      # Navegación principal
│   ├── Hero.jsx        # Sección principal
│   ├── Projects.jsx    # Sección de Proyectos
│   └── Skills.jsx      # Sección de Habilidades
├── contexts/           # Contextos de React
│   └── ThemeContext.jsx # Gestión de tema oscuro/claro
├── data/               # Datos estáticos
│   └── mockData.ts     # Información del portafolio
├── hooks/              # Hooks personalizados
│   └── use-toast.ts    # Hook para notificaciones
├── lib/                # Utilidades
│   └── utils.ts        # Funciones de utilidad
├── pages/              # Páginas de Astro
│   └── index.astro     # Página principal
└── styles/             # Estilos globales
    └── global.css      # Estilos base de Tailwind
```

## 🎨 Personalización

### Cambiar Información Personal

Edita el archivo `src/data/mockData.ts` para actualizar:
- Información personal
- Proyectos
- Experiencia laboral
- Habilidades
- Enlaces de contacto

### Modificar Estilos

Los estilos están centralizados en Tailwind CSS. Para cambios globales, modifica:
- `tailwind.config.mjs` - Configuración de Tailwind
- `src/styles/global.css` - Estilos base

### Agregar Nuevas Secciones

1. Crea un nuevo componente en `src/components/`
2. Importalo en `src/pages/index.astro`
3. Agrega el componente con `client:load` si necesita interactividad

### Funcionalidad de CV

El portafolio incluye un botón de descarga de CV que permite descargar un archivo PDF estático profesional.

**Contenido del CV:**
- Información personal completa
- Biografía profesional
- Habilidades técnicas
- Experiencia laboral
- Proyectos destacados
- Información de contacto

Para descargar el CV, simplemente haz clic en el botón "CV" en la barra de navegación.

**Archivo del CV:**
- Ubicación: `public/CV_Luis_Moron.pdf`
- Nombre de descarga: `CV_Luis_Moron.pdf`
- Para actualizar el CV, reemplaza el archivo en la carpeta `public/`

## 🚀 Despliegue

### GitHub Pages

El proyecto está configurado para desplegarse automáticamente en GitHub Pages:

```bash
pnpm run deploy
```

### Otros Servicios

El build de producción se genera en la carpeta `dist/` y puede desplegarse en cualquier servicio de hosting estático como:
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## 🤝 Contribuir

Si encuentras algún problema o tienes sugerencias:

1. Abre un issue en [GitHub Issues](https://github.com/luismoron/luismoron.github.io/issues)
2. Crea un pull request con tus mejoras

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la [Licencia MIT](LICENSE).

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!</content>
<parameter name="filePath">README.md