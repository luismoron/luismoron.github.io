import { useEffect, useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

const LanguageSwitcher = () => {
	const { language, setLanguage } = useLanguage();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<div className="fixed bottom-6 left-6 z-50 animate-in fade-in slide-in-from-bottom-4 duration-500">
			<div className="bg-black/80 backdrop-blur-md rounded-full p-1.5 flex items-center shadow-lg border border-white/10">
				<button
					type="button"
					onClick={() => setLanguage("es")}
					className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
						language === "es"
							? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md transform scale-105"
							: "text-gray-400 hover:text-white"
					}`}
				>
					ES
				</button>
				<button
					type="button"
					onClick={() => setLanguage("en")}
					className={`px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
						language === "en"
							? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md transform scale-105"
							: "text-gray-400 hover:text-white"
					}`}
				>
					EN
				</button>
			</div>
		</div>
	);
};

export default LanguageSwitcher;
