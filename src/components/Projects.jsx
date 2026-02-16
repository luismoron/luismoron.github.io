import { Code, ExternalLink, Github, Star } from "lucide-react";
import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { mockProjects } from "../data/mockData";
import { translations } from "../data/translations";

const Projects = () => {
	const [filter, setFilter] = useState("all");
	const { language } = useLanguage();
	const t = translations[language].projects;

	const filteredProjects = mockProjects.filter((project) => {
		if (filter === "featured") return project.featured;
		return true;
	});

	return (
		<section id="projects" className="py-20 px-4">
			<div className="container mx-auto max-w-6xl">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
						{t.title}
					</h2>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
						{t.description}
					</p>
				</div>

				{/* Filters */}
				<div className="flex justify-center space-x-4 mb-12">
					<button
						onClick={() => setFilter("all")}
						className={`px-6 py-2 rounded-full transition-all duration-300 ${
							filter === "all"
								? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
								: "bg-secondary text-muted-foreground hover:bg-secondary/80"
						}`}
					>
						{t.filterAll}
					</button>
					<button
						onClick={() => setFilter("featured")}
						className={`flex items-center space-x-2 px-6 py-2 rounded-full transition-all duration-300 ${
							filter === "featured"
								? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
								: "bg-secondary text-muted-foreground hover:bg-secondary/80"
						}`}
					>
						<Star className="w-4 h-4" />
						<span>{t.filterFeatured}</span>
					</button>
				</div>

				{/* Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{filteredProjects.map((project) => (
						<div
							key={project.id}
							className={`group bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${project.era || ""}`}
						>
							<div className="relative h-48 overflow-hidden">
								<img
									src={project.image}
									alt={project.name}
									className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
									<div className="flex space-x-2">
										<span className="text-white text-xs font-mono px-2 py-1 bg-black/50 rounded backdrop-blur-sm">
											{project.tech[0]}
										</span>
									</div>
								</div>
							</div>

							<div className="p-6">
								<div className="flex justify-between items-start mb-4">
									<h3 className="text-xl font-bold group-hover:text-primary transition-colors">
										{project.name}
									</h3>
									{project.featured && (
										<Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
									)}
								</div>

								<p className="text-muted-foreground mb-6 line-clamp-3">
									{project.description[language]}
								</p>

								<div className="flex flex-wrap gap-2 mb-6">
									{project.tech.map((tech) => (
										<span
											key={tech}
											className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
										>
											{tech}
										</span>
									))}
								</div>

								<div className="flex items-center justify-between pt-4 border-t border-border">
									<a
										href={project.github}
										target="_blank"
										rel="noopener noreferrer"
										className="flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
									>
										<Github className="w-4 h-4" />
										<span>{t.viewCode}</span>
									</a>
									{project.demo && (
										<a
											href={project.demo}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center space-x-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
										>
											<ExternalLink className="w-4 h-4" />
											<span>{t.viewDemo}</span>
										</a>
									)}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
