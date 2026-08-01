// Mock data para el portafolio
// Traducciones integradas para ES/EN

const startYear = 2006;
const currentYear = new Date().getFullYear();
export const yearsOfExperience = currentYear - startYear;

export const mockProfile = {
	name: "Luis Morón",
	title: {
		es: "Software Developer & IA Architect",
		en: "Software Developer & AI Architect",
	},
	email: "leonelmoron@gmail.com",
	phone: "+584241850752",
	location: "Venezuela",
	bio: {
		es: "Software Developer & Solutions Architect. > Especializado en sistemas de alta disponibilidad con Go e Inteligencia Artificial generativa. Transformo la complejidad técnica en motores de backend eficientes y automatizaciones de impacto real.",
		en: "Software Developer & Solutions Architect. > Specialized in high-availability systems with Go and Generative AI. I transform technical complexity into efficient backend engines and real-impact automations.",
	},
	aboutHighlights: [
		{
			title: { es: "Backend con Go", en: "Backend with Go" },
			description: {
				es: "Desarrollo de motores de procesamiento de alto rendimiento usando Golang y Protobuf para una eficiencia brutal.",
				en: "Development of high-performance processing engines using Golang and Protobuf for brutal efficiency.",
			},
			iconType: "Server",
		},
		{
			title: { es: "Arquitectura IA", en: "AI Architecture" },
			description: {
				es: "Integración de Gemini 1.5 Flash para interpretación de lenguaje natural y toma de decisiones autónoma.",
				en: "Integration of Gemini 1.5 Flash for natural language interpretation and autonomous decision making.",
			},
			iconType: "Cpu",
		},
		{
			title: { es: "Infraestructura Segura", en: "Secure Infrastructure" },
			description: {
				es: "Orquestación con Docker, Redis y redes privadas ZeroTier para entornos de producción blindados.",
				en: "Orchestration with Docker, Redis, and ZeroTier private networks for shielded production environments.",
			},
			iconType: "Terminal",
		},
		{
			title: { es: "Datos en Tiempo Real", en: "Real-time Data" },
			description: {
				es: "Gestión de estados complejos con Redis y persistencia robusta en PostgreSQL (Hasura) y MongoDB.",
				en: "Complex state management with Redis and robust persistence in PostgreSQL (Hasura) and MongoDB.",
			},
			iconType: "Database",
		},
	],
	aboutText: {
		title: {
			es: `${yearsOfExperience} años construyendo el futuro digital`,
			en: `${yearsOfExperience} years building the digital future`,
		},
		intro: {
			es: "Mi viaje comenzó en 2006. Desde entonces, he evolucionado de la web artesanal a la construcción de ecosistemas donde la IA y el código de bajo nivel convergen. Mi carrera se define por la independencia como freelancer y la creación de soluciones propietarias disruptivas.",
			en: "My journey began in 2006. Since then, I've evolved from the artisanal web to building ecosystems where AI and low-level code converge. My career is defined by independence as a freelancer and the creation of disruptive proprietary solutions.",
		},
		body: [
			{
				es: "Dominio técnico extremo: Desde macros VBA que gestionan flujos masivos de procesos hasta bots en Go que hablan binario con WhatsApp directamente vía Whatsmeow.",
				en: "Extreme technical domain: From VBA macros managing complex operational flows to Go bots that speak binary with WhatsApp directly via Whatsmeow.",
			},
			{
				es: "Actualmente enfocado en el escalado de Corredor y la infraestructura inmobiliaria de Kasa, utilizando arquitecturas en el edge y orquestación de IA.",
				en: "Currently focused on scaling Corredor and Kasa's infrastructure, using edge architectures and AI orchestration.",
			},
		],
	},
	github: "https://github.com/luismoron/",
	gitlab: "https://gitlab.com/luislmoron",
	linkedin: "https://www.linkedin.com/in/luis-morón-922711323",
	avatar: "https://teki.luismoron.dev/img/luis.jpeg",
};

export const mockSkills = [
	{ name: "Go (Golang)", level: 90, projects: 10 },
	{ name: "Gemini AI", level: 85, projects: 5 },
	{ name: "PostgreSQL", level: 85, projects: 12 },
	{ name: "Redis", level: 80, projects: 8 },
	{ name: "Protobuf", level: 75, projects: 6 },
	{ name: "Docker", level: 80, projects: 15 },
	{ name: "MongoDB", level: 75, projects: 8 },
	{ name: "Astro", level: 85, projects: 4 },
	{ name: "Whatsmeow", level: 90, projects: 6 },
];

export const mockProjects = [
	{
		id: 1,
		name: "Corredor",
		description: {
			es: "Plataforma de gestión de apuestas hípicas. Backoffice administrativo, scraping de datos de carreras y sistema completo de gestión de usuarios y grupos.",
			en: "Horse racing betting management platform. Administrative backoffice, race data scraping, and complete user and group management system.",
		},
		tech: ["React + MUI", "Go + Fiber", "PostgreSQL", "Redis", "Puppeteer"],
		github: "https://github.com/luismoron/",
		demo: null,
		image:
			"https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=800&q=80",
		featured: true,
		era: "era-modern",
	},
	{
		id: 2,
		name: "Kasa (Real Estate Platform)",
		description: {
			es: "Plataforma SaaS inmobiliaria. Gestión de propiedades, agencias, citas y leads. Dashboard administrativo con Next.js 15 + React 19, API en Go + Gin, PostgreSQL 15, JWT y sistema RBAC.",
			en: "Real Estate SaaS platform. Property, agency, appointment and lead management. Admin dashboard with Next.js 15 + React 19, Go + Gin API, PostgreSQL 15, JWT and RBAC system.",
		},
		tech: ["Next.js 15", "React 19", "Go + Gin", "PostgreSQL 15", "JWT", "RBAC"],
		github: "https://github.com/luismoron/",
		demo: null,
		image:
			"https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80",
		featured: true,
		era: "era-modern",
	},
	{
		id: 3,
		name: "Dotfiles",
		description: {
			es: "Configuración personal de entorno de desarrollo con scripts y herramientas avanzadas.",
			en: "Personal development environment configuration with scripts and advanced tools.",
		},
		tech: ["Shell", "Linux", "Git"],
		github: "https://github.com/luismoron/dotfiles",
		demo: null,
		image:
			"https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
		featured: false,
		era: "era-modern",
	},
	{
		id: 4,
		name: "CLI Tool",
		description: {
			es: "Herramienta de línea de comandos para automatización de flujos de trabajo en sistemas Linux.",
			en: "Command-line tool for workflow automation in Linux systems.",
		},
		tech: ["Python", "Shell"],
		github: "https://github.com/luismoron/cli",
		demo: null,
		image:
			"https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
		featured: false,
		era: "era-modern",
	},
	{
		id: 112,
		name: "Solutions Backend",
		description: {
			es: "Conjunto de microservicios y herramientas de backend para procesamiento distribuido.",
			en: "Set of microservices and backend tools for distributed processing.",
		},
		tech: ["Node.js", "Express", "Vite"],
		github: "https://github.com/luismoron/barbershopteams",
		demo: null,
		image:
			"https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&w=800&q=80",
		featured: false,
		era: "era-classic",
	},
	{
		id: 113,
		name: "Teki",
		description: {
			es: "Portfolio bilingüe para creadora de contenido visual. Sitio Astro + React con animaciones Framer Motion y soporte i18n completo ES/EN.",
			en: "Bilingual portfolio for visual content creator. Astro + React site with Framer Motion animations and full i18n support ES/EN.",
		},
		tech: ["Astro", "React", "Tailwind", "Framer Motion", "i18n"],
		github: null,
		demo: "https://tekiofficial.me",
		image:
			"https://tekiofficial.me/img/red-full.webp?auto=format&fit=crop&w=800&q=80",
		featured: false,
		era: "era-modern",
	},
	{
		id: 114,
		name: "Pasos Firmes",
		description: {
			es: "Plataforma de salud comunitaria para adultos mayores. Landing en Astro + Dashboard en Next.js 14, backend en Go con PostgreSQL.",
			en: "Community health platform for elderly. Astro landing page + Next.js 14 dashboard, Go backend with PostgreSQL.",
		},
		tech: ["Astro", "Next.js 14", "Go", "PostgreSQL", "TanStack Query"],
		github: null,
		demo: null,
		image:
			"https://plus.unsplash.com/premium_photo-1675780422499-cc2ad971306b?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		featured: false,
		era: "era-modern",
	},
	{
		id: 115,
		name: "Reyes Asociados",
		description: {
			es: "LegalTech para bufete de abogados. Landing Astro + Dashboard Next.js 15, API Go + Fiber, generación de PDFs y almacenamiento en Cloudflare R2.",
			en: "LegalTech for law firm. Astro landing + Next.js 15 dashboard, Go + Fiber API, PDF generation and Cloudflare R2 storage.",
		},
		tech: ["Astro", "Next.js 15", "Go + Fiber", "PostgreSQL", "Cloudflare R2"],
		github: null,
		demo: null,
		image:
			"https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
		featured: false,
		era: "era-modern",
	},
];

export const mockExperience = [
	{
		id: 1,
		title: "IA Architect & Lead Developer",
		company: "Corredor / Kasa",
		period: "2024 - Presente",
		periodText: { es: "2024 - Presente", en: "2024 - Present" },
		description: {
			es: "Liderando ecosistemas complejos: Desde automatización en Go e integración de IA hasta infraestructuras backend escalables y API Gateways.",
			en: "Leading complex ecosystems: From Go automation and AI integration to scalable backend infrastructures and API Gateways.",
		},
		era: "era-modern",
	},
	{
		id: 2,
		title: "Senior Freelance Software Engineer",
		company: "Independiente",
		period: "2013 - 2023",
		periodText: { es: "2013 - 2023", en: "2013 - 2023" },
		description: {
			es: "Especializado en la modernización de sistemas de gestión. Diseño de bases de datos relacionales avanzadas y arquitecturas orientadas a servicios.",
			en: "Specialized in modernization of management systems. Advanced relational database design and service-oriented architectures.",
		},
		era: "era-classic",
	},
	{
		id: 3,
		title: "Full Stack Developer (Beginnings)",
		company: "Freelance",
		period: "2006 - 2012",
		periodText: { es: "2006 - 2012", en: "2006 - 2012" },
		description: {
			es: "Cimentación en PHP, jQuery y SQL. Desarrollo de sistemas de gestión y sitios web orientados a la eficiencia.",
			en: "Foundation in PHP, jQuery, and SQL. Development of management systems and efficiency-oriented websites.",
		},
		era: "era-retro",
	},
];

export const timelineEvents = [
	{
		year: "2006",
		title: { es: "El Inicio de la Travesía", en: "Journey Start" },
		description: {
			es: "Primeras líneas de código en un mundo web aún por explorar.",
			en: "First lines of code in a web world yet to be explored.",
		},
		era: "era-retro",
	},
	{
		year: "2013",
		title: { es: "Expansión Solucionadora", en: "Solver Expansion" },
		description: {
			es: "Consolidación como freelancer premium para soluciones de oficina y nube.",
			en: "Consolidation as a premium freelancer for office and cloud solutions.",
		},
		era: "era-classic",
	},
	{
		year: "2024",
		title: { es: "Nacimiento de Corredor", en: "Corredor Birth" },
		description: {
			es: "Integración masiva de IA y Go para revolucionar la gestión de procesos.",
			en: "Massive integration of AI and Go to revolutionize process management.",
		},
		era: "era-modern",
	},
	{
		year: "2026",
		title: { es: "Nacimiento de Kasa", en: "Kasa Birth" },
		description: {
			es: "Arquitectura inmobiliaria disruptiva con orquestación de IA y servicios escalables.",
			en: "Disruptive real estate architecture with AI orchestration and scalable services.",
		},
		era: "era-modern",
	},
];
