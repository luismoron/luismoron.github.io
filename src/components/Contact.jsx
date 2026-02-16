import { Mail, MapPin, Phone, Send } from "lucide-react";
import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { mockProfile } from "../data/mockData";
import { translations } from "../data/translations";

const Contact = () => {
	const { language } = useLanguage();
	const t = translations[language].contact;

	const whatsappLink = `https://wa.me/${mockProfile.phone.replace("+", "")}`;

	return (
		<section id="contact" className="py-20 px-4">
			<div className="container mx-auto max-w-6xl">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
						{t.title}
					</h2>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
						{t.description}
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-12">
					{/* Contact Info */}
					<div className="space-y-8">
						<div className="bg-card p-8 rounded-2xl border border-border shadow-lg">
							<h3 className="text-2xl font-bold mb-6">{t.available}</h3>
							<p className="text-muted-foreground mb-8">{t.availabilityText}</p>

							<div className="space-y-6">
								<a
									href={`mailto:${mockProfile.email}`}
									className="flex items-center space-x-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors group"
								>
									<div className="p-3 bg-primary/10 text-primary rounded-lg group-hover:scale-110 transition-transform">
										<Mail className="w-6 h-6" />
									</div>
									<div>
										<p className="text-sm text-muted-foreground">{t.email}</p>
										<p className="font-medium text-lg">{mockProfile.email}</p>
									</div>
								</a>

								<a
									href={whatsappLink}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center space-x-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors group"
								>
									<div className="p-3 bg-primary/10 text-primary rounded-lg group-hover:scale-110 transition-transform">
										<Phone className="w-6 h-6" />
									</div>
									<div>
										<p className="text-sm text-muted-foreground">{t.call}</p>
										<p className="font-medium text-lg">{mockProfile.phone}</p>
									</div>
								</a>

								<div className="flex items-center space-x-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors group">
									<div className="p-3 bg-primary/10 text-primary rounded-lg group-hover:scale-110 transition-transform">
										<MapPin className="w-6 h-6" />
									</div>
									<div>
										<p className="text-sm text-muted-foreground">
											{t.location}
										</p>
										<p className="font-medium text-lg">
											{mockProfile.location}
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="flex items-center p-6 bg-blue-500/10 rounded-xl border border-blue-500/20 text-blue-500">
							<div className="relative flex h-3 w-3 mr-3">
								<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
								<span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
							</div>
							<span className="font-medium">{t.available}</span>
						</div>
					</div>

					{/* WhatsApp Direct Action */}
					<div className="bg-card p-8 rounded-2xl border border-border shadow-lg flex flex-col items-center justify-center text-center space-y-8">
						<div className="p-6 bg-green-500/10 rounded-full">
							<Phone className="w-16 h-16 text-green-500" />
						</div>

						<div>
							<h3 className="text-2xl font-bold mb-4">{t.form.send}</h3>
							<p className="text-muted-foreground max-w-sm mx-auto">
								{language === "es"
									? "Hablemos directamente por WhatsApp para una respuesta más rápida."
									: "Let's chat directly on WhatsApp for a faster response."}
							</p>
						</div>

						<a
							href={whatsappLink}
							target="_blank"
							rel="noopener noreferrer"
							className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl hover:scale-105"
						>
							<Send className="w-6 h-6" />
							<span>WhatsApp</span>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
