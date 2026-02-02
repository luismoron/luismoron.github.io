// Mock data para el portafolio
// Traducciones integradas para ES/EN

export const mockProfile = {
  name: "Luis Morón",
  title: {
    es: "Desarrollador de Software",
    en: "Software Developer"
  },
  email: "leonelmoron@gmail.com",
  phone: "+584241850752",
  location: "Venezuela",
  bio: {
    es: "Software Developer & Solutions Architect. > Especializado en construir arquitecturas escalables y automatización de alto impacto. Transformo desafíos técnicos complejos en productos digitales que destacan por su rendimiento, desde el núcleo del backend hasta la experiencia final del usuario.",
    en: "Software Developer & Solutions Architect. > Specialized in building scalable architectures and high-impact automation. I transform complex technical challenges into digital products that stand out for their performance, from the backend core to the final user experience."
  },
  aboutHighlights: [
    {
      title: { es: "Arquitectura Moderna", en: "Modern Architecture" },
      description: { es: "Orquestación con Podman y Docker para entornos ágiles", en: "Orchestration with Podman and Docker for agile environments" },
      iconType: "Server"
    },
    {
      title: { es: "Eficiencia en Datos", en: "Data Efficiency" },
      description: { es: "Diseño complejo en PostgreSQL y MongoDB", en: "Complex design in PostgreSQL and MongoDB" },
      iconType: "Database"
    },
    {
      title: { es: "Código con Propósito", en: "Purposeful Code" },
      description: { es: "Clean Code, React y lógica de negocio en Go", en: "Clean Code, React, and business logic in Go" },
      iconType: "Code"
    },
    {
      title: { es: "Mentalidad DevOps", en: "DevOps Mindset" },
      description: { es: "Automatización con IA y CI/CD", en: "Automation with AI and CI/CD" },
      iconType: "Terminal"
    }
  ],
  aboutText: {
    intro: {
      es: "Mi enfoque va más allá de escribir código; se trata de ingeniería de precisión. Creo firmemente que una solución robusta nace de la combinación entre un backend sólido y una infraestructura moderna.",
      en: "My approach goes beyond writing code; it's about precision engineering. I firmly believe that a robust solution is born from the combination of a solid backend and modern infrastructure."
    },
    body: [
      {
        es: "Soy un entusiasta del Open Source y del aprendizaje constante.",
        en: "I am an Open Source enthusiast and a lifelong learner."
      },
      {
        es: "Para mí, la tecnología no es solo una herramienta, es un medio para resolver problemas del mundo real de la manera más elegante y eficiente posible.",
        en: "For me, technology is not just a tool, it's a means to solve real-world problems in the most elegant and efficient way possible."
      }
    ]
  },
  github: "https://github.com/luismoron/",
  gitlab: "https://gitlab.com/luislmoron",
  linkedin: "https://www.linkedin.com/in/luis-morón-922711323",
  avatar: "/images/leonel.jpeg"
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
    name: "Dotfiles",
    description: {
      es: "Configuración personal de entorno de desarrollo con scripts y herramientas",
      en: "Personal development environment configuration with scripts and tools"
    },
    tech: ["Shell", "Linux", "Git"],
    github: "https://github.com/luismoron/dotfiles",
    demo: null,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: 2,
    name: "CLI Tool",
    description: {
      es: "Script principal de control para configuración de dotfiles Caelestia",
      en: "Main control script for Caelestia dotfiles configuration"
    },
    tech: ["Python", "Shell"],
    github: "https://github.com/luismoron/cli",
    demo: null,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: 3,
    name: "Sistema de Barbería",
    description: {
      es: "Sistema de gestión de citas para barberías en PHP y MySQL",
      en: "Barbershop appointment management system in PHP and MySQL"
    },
    tech: ["PHP", "MySQL", "HTML", "CSS"],
    github: "https://github.com/luismoron/barberianaza",
    demo: null,
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: 4,
    name: "Barbershop Teams",
    description: {
      es: "Aplicación para gestión de citas de barberos con equipos",
      en: "App for barber appointment management with teams"
    },
    tech: ["JavaScript", "Node.js", "Express"],
    github: "https://github.com/luismoron/barbershopteams",
    demo: null,
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
    featured: false
  }
];

export const mockExperience = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "Tech Solutions Inc.",
    period: "2022 - Presente", // "Presente" can be handled in UI or just kept as string. Let's make it bilingual string? Or just keep it. Let's make it bilingual.
    periodText: { es: "2022 - Presente", en: "2022 - Present" },
    description: {
      es: "Desarrollo de aplicaciones web y móviles usando React, Node.js y React Native.",
      en: "Development of web and mobile applications using React, Node.js, and React Native."
    }
  },
  {
    id: 2,
    title: "Frontend Developer",
    company: "Digital Agency",
    period: "2020 - 2022",
    periodText: { es: "2020 - 2022", en: "2020 - 2022" },
    description: {
      es: "Creación de interfaces de usuario responsivas y accesibles con React y Vue.js.",
      en: "Creation of responsive and accessible user interfaces with React and Vue.js."
    }
  },
  {
    id: 3,
    title: "Junior Developer",
    company: "StartUp Innovation",
    period: "2019 - 2020",
    periodText: { es: "2019 - 2020", en: "2019 - 2020" },
    description: {
      es: "Desarrollo de funcionalidades web y apoyo en proyectos de modernización.",
      en: "Development of web features and support in modernization projects."
    }
  }
];