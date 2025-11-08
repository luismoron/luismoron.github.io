# Portafolio de Luis Morón

¡Bienvenido a mi portafolio personal! Soy Luis Morón, un apasionado Desarrollador Full Stack con experiencia en desarrollo web y móvil. Este sitio web muestra mis proyectos, habilidades y experiencia profesional.

## 🌟 Características

- **Diseño Responsivo**: Optimizado para dispositivos móviles y desktop
- **Tema Oscuro/Claro**: Cambia entre modos de visualización
- **Secciones Interactivas**: Hero, Acerca de mí, Habilidades, Proyectos, Experiencia, Contacto
- **Integración con WhatsApp**: Formulario de contacto que abre WhatsApp directamente
- **Enlaces a Redes Sociales**: GitHub, GitLab, LinkedIn

## 🛠️ Tecnologías Utilizadas

### Frontend

- **React 19** - Framework principal
- **Tailwind CSS** - Estilos y diseño
- **React Router** - Navegación
- **Radix UI** - Componentes accesibles
- **Lucide React** - Iconos
- **Next Themes** - Gestión de temas

### Herramientas de Desarrollo

- **Create React App** con CRACO
- **ESLint** - Linting
- **PostCSS** - Procesamiento CSS
- **Autoprefixer** - Prefijos CSS
- **GitHub Pages** - Despliegue

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js 22+
- pnpm (recomendado) o npm

### Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/luismoron/luismoron.github.io.git
   cd luismoron.github.io/frontend
   ```

2. Instala las dependencias:

   ```bash
   pnpm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   pnpm start
   ```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Construcción para Producción

```bash
pnpm run build
```

Esto crea una carpeta `build` con los archivos optimizados.

## 📦 Despliegue

El sitio está desplegado automáticamente en GitHub Pages. Para desplegar manualmente:

```bash
pnpm run deploy
```

Esto construye el proyecto y lo publica en la rama `gh-pages`.

## 📁 Estructura del Proyecto

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ui/          # Componentes reutilizables
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   ├── Experience.js
│   │   └── Contact.js
│   ├── contexts/
│   │   └── ThemeContext.js
│   ├── data/
│   │   └── mockData.js
│   ├── hooks/
│   │   └── use-toast.js
│   ├── lib/
│   │   └── utils.js
│   ├── pages/
│   │   └── Portfolio.js
│   └── App.js
├── package.json
└── tailwind.config.js
```

## 🎯 Proyectos Destacados

### 1. Dotfiles

Configuración personal de entorno de desarrollo con scripts y herramientas.

- **Tecnologías**: Shell, Linux, Git
- **Enlace**: [GitHub](https://github.com/luismoron/dotfiles)

### 2. CLI Tool

Script principal de control para configuración de dotfiles Caelestia.

- **Tecnologías**: Python, Shell
- **Enlace**: [GitHub](https://github.com/luismoron/cli)

### 3. Sistema de Barbería

Sistema de gestión de citas para barberías en PHP y MySQL.

- **Tecnologías**: PHP, MySQL, HTML, CSS
- **Enlace**: [GitHub](https://github.com/luismoron/barberianaza)

### 4. Barbershop Teams

Aplicación para gestión de citas de barberos con equipos.

- **Tecnologías**: JavaScript, Node.js, Express
- **Enlace**: [GitHub](https://github.com/luismoron/barbershopteams)

## 📞 Contacto

- **Email**: [leonelmoron@gmail.com](mailto:leonelmoron@gmail.com)
- **WhatsApp**: +58 424 123 4567 (reemplaza con tu número real)
- **GitHub**: [luismoron](https://github.com/luismoron)
- **GitLab**: [luislmoron](https://gitlab.com/luislmoron)
- **LinkedIn**: [luismoron](https://linkedin.com/in/luismoron)

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

⭐ Si te gusta mi trabajo, ¡dale una estrella al repositorio!
