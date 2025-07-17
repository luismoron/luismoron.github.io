// Mock data para el portafolio - Se reemplazará con datos reales de GitHub/GitLab
export const mockProfile = {
  name: "Luis Morón",
  title: "Desarrollador Full Stack",
  email: "luis@example.com",
  location: "España",
  bio: "Desarrollador apasionado con experiencia en desarrollo web y móvil. Siempre buscando nuevas tecnologías y desafíos.",
  github: "https://github.com/luismoron/",
  gitlab: "https://gitlab.com/luislmoron",
  linkedin: "https://linkedin.com/in/luismoron",
  avatar: "https://github.com/luismoron.png"
};

export const mockSkills = [
  { name: "JavaScript", level: 90, projects: 15 },
  { name: "React", level: 85, projects: 12 },
  { name: "Node.js", level: 80, projects: 10 },
  { name: "Python", level: 75, projects: 8 },
  { name: "MongoDB", level: 70, projects: 6 },
  { name: "React Native", level: 65, projects: 4 },
  { name: "Docker", level: 60, projects: 5 },
  { name: "AWS", level: 55, projects: 3 }
];

export const mockProjects = [
  {
    id: 1,
    name: "Portfolio Personal",
    description: "Portafolio personal desarrollado con React y Node.js",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/luismoron/portfolio",
    demo: "https://luismoron.dev",
    image: "https://via.placeholder.com/300x200/4f46e5/ffffff?text=Portfolio",
    featured: true
  },
  {
    id: 2,
    name: "E-commerce App",
    description: "Aplicación de comercio electrónico con React Native",
    tech: ["React Native", "Firebase", "Stripe"],
    github: "https://github.com/luismoron/ecommerce-app",
    demo: null,
    image: "https://via.placeholder.com/300x200/059669/ffffff?text=E-commerce",
    featured: true
  },
  {
    id: 3,
    name: "Task Manager",
    description: "Gestor de tareas con autenticación y sincronización",
    tech: ["Vue.js", "Express", "PostgreSQL"],
    github: "https://github.com/luismoron/task-manager",
    demo: "https://taskmanager.luismoron.dev",
    image: "https://via.placeholder.com/300x200/dc2626/ffffff?text=Task+Manager",
    featured: false
  },
  {
    id: 4,
    name: "Weather App",
    description: "Aplicación del clima con geolocalización",
    tech: ["JavaScript", "OpenWeather API", "CSS3"],
    github: "https://github.com/luismoron/weather-app",
    demo: "https://weather.luismoron.dev",
    image: "https://via.placeholder.com/300x200/0ea5e9/ffffff?text=Weather",
    featured: false
  }
];

export const mockExperience = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2022 - Presente",
    description: "Desarrollo de aplicaciones web y móviles usando React, Node.js y React Native."
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Digital Agency",
    period: "2020 - 2022",
    description: "Creación de interfaces de usuario responsivas y accesibles con React y Vue.js."
  },
  {
    id: 3,
    title: "Junior Developer",
    company: "StartUp Innovation",
    period: "2019 - 2020",
    description: "Desarrollo de funcionalidades web y apoyo en proyectos de modernización."
  }
];