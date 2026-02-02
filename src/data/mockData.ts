// Mock data para el portafolio - Se reemplazará con datos reales de GitHub/GitLab
export const mockProfile: {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  bio: string;
  github: string;
  gitlab: string;
  linkedin: string;
  avatar: string;
} = {
  name: "Luis Morón",
  title: "Desarrollador de Software",
  email: "leonelmoron@gmail.com",
  phone: "+584241850752", // Reemplaza con tu número real de WhatsApp
  location: "Venezuela",
  bio: "Desarrollador apasionado con experiencia en desarrollo web y móvil. Siempre buscando nuevas tecnologías y desafíos.",
  github: "https://github.com/luismoron/",
  gitlab: "https://gitlab.com/luislmoron",
  linkedin: "https://www.linkedin.com/in/luis-morón-922711323",
  avatar: "/images/leonel.jpeg"
};

export const mockSkills: {
  name: string;
  level: number;
  projects: number;
}[] = [
    { name: "JavaScript", level: 90, projects: 15 },
    { name: "React", level: 85, projects: 12 },
    { name: "Node.js", level: 80, projects: 10 },
    { name: "Python", level: 75, projects: 8 },
    { name: "MongoDB", level: 70, projects: 6 },
    { name: "React Native", level: 65, projects: 4 },
    { name: "Docker", level: 60, projects: 5 },
    { name: "AWS", level: 55, projects: 3 }
  ];

export const mockProjects: {
  id: number;
  name: string;
  description: string;
  tech: string[];
  github: string;
  demo: string | null;
  image: string;
  featured: boolean;
}[] = [
    {
      id: 1,
      name: "Dotfiles",
      description: "Configuración personal de entorno de desarrollo con scripts y herramientas",
      tech: ["Shell", "Linux", "Git"],
      github: "https://github.com/luismoron/dotfiles",
      demo: null,
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: 2,
      name: "CLI Tool",
      description: "Script principal de control para configuración de dotfiles Caelestia",
      tech: ["Python", "Shell"],
      github: "https://github.com/luismoron/cli",
      demo: null,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
      featured: true
    },
    {
      id: 3,
      name: "Sistema de Barbería",
      description: "Sistema de gestión de citas para barberías en PHP y MySQL",
      tech: ["PHP", "MySQL", "HTML", "CSS"],
      github: "https://github.com/luismoron/barberianaza",
      demo: null,
      image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80",
      featured: false
    },
    {
      id: 4,
      name: "Barbershop Teams",
      description: "Aplicación para gestión de citas de barberos con equipos",
      tech: ["JavaScript", "Node.js", "Express"],
      github: "https://github.com/luismoron/barbershopteams",
      demo: null,
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
      featured: false
    }
  ];

export const mockExperience: {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
}[] = [
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