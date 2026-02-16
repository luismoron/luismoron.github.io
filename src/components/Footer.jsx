import {
	ArrowUp,
	Code,
	Github,
	GitlabIcon as Gitlab,
	Linkedin,
	Mail,
} from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { mockProfile } from "../data/mockData";
import { translations } from "../data/translations";

const Footer = () => {
	const { language } = useLanguage();
	const t = translations[language].footer;
	const tNav = translations[language].nav;

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	const navLinks = [
		{ id: "home", label: tNav.home },
		{ id: "about", label: tNav.about },
		{ id: "skills", label: tNav.skills },
		{ id: "projects", label: tNav.projects },
		{ id: "experience", label: tNav.experience },
		{ id: "contact", label: tNav.contact },
	];

	return (
		<footer className="bg-muted/50 border-t border-border pt-16 pb-8">
			<div className="container mx-auto px-4 max-w-6xl">
				<div className="grid md:grid-cols-4 gap-12 mb-12">
					{/* Brand */}
					<div className="col-span-1 md:col-span-2 space-y-4">
						<div className="flex items-center space-x-2 mb-4">
							<div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
								<span className="text-white font-bold text-lg">LM</span>
							</div>
							<span className="font-bold text-2xl tracking-tight">
								{mockProfile.name}
							</span>
						</div>
						<p className="text-muted-foreground max-w-sm">
							{mockProfile.title[language]}
						</p>
						<div className="pt-4">
							<span className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-sm font-medium border border-green-500/20">
								<span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
								{t.freelance}
							</span>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className="font-bold text-lg mb-6">{t.quickLinks}</h3>
						<ul className="space-y-3">
							{navLinks.map((link) => (
								<li key={link.id}>
									<a
										href={`#${link.id}`}
										className="text-muted-foreground hover:text-primary transition-colors flex items-center space-x-2 group"
									>
										<span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>
										<span>{link.label}</span>
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Social */}
					<div>
						<h3 className="font-bold text-lg mb-6">{t.connect}</h3>
						<div className="flex flex-col space-y-4">
							<a
								href={mockProfile.github}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors group"
							>
								<div className="p-2 bg-background border border-border rounded-lg group-hover:border-primary/50 transition-colors">
									<Github className="w-5 h-5" />
								</div>
								<span>GitHub</span>
							</a>
							<a
								href={mockProfile.gitlab}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors group"
							>
								<div className="p-2 bg-background border border-border rounded-lg group-hover:border-primary/50 transition-colors">
									<Gitlab className="w-5 h-5" />
								</div>
								<span>GitLab</span>
							</a>
							<a
								href={mockProfile.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors group"
							>
								<div className="p-2 bg-background border border-border rounded-lg group-hover:border-primary/50 transition-colors">
									<Linkedin className="w-5 h-5" />
								</div>
								<span>LinkedIn</span>
							</a>
							<a
								href={`mailto:${mockProfile.email}`}
								className="flex items-center space-x-3 text-muted-foreground hover:text-foreground transition-colors group"
							>
								<div className="p-2 bg-background border border-border rounded-lg group-hover:border-primary/50 transition-colors">
									<Mail className="w-5 h-5" />
								</div>
								<span>Email</span>
							</a>
						</div>
					</div>
				</div>

				<div className="border-t border-border pt-8 mt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
					<p className="text-sm text-muted-foreground">
						© {new Date().getFullYear()} {mockProfile.name}. {t.rights}
					</p>

					<div className="flex items-center space-x-4">
						<p className="text-xs text-muted-foreground">
							{t.developedWith}{" "}
							<Code className="w-3 h-3 inline mx-1 text-primary" /> {t.using}
						</p>
						<button
							type="button"
							onClick={scrollToTop}
							className="p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
							aria-label={t.backToTop}
						>
							<ArrowUp className="w-4 h-4" />
						</button>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
