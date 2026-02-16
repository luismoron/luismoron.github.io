import { useEffect, useState } from "react";

// Estado global singleton para compartir entre islas de Astro
let globalTheme = "light";
const listeners = new Set();

// Función auxiliar para inicializar el tema
const initTheme = () => {
	if (typeof window !== "undefined") {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) {
			globalTheme = savedTheme;
		} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
			globalTheme = "dark";
		}
		document.documentElement.className = globalTheme;
	}
};

// Ejecutar inicialización inmediatamente
initTheme();

const setThemeGlobal = (newTheme) => {
	globalTheme = newTheme;
	if (typeof window !== "undefined") {
		localStorage.setItem("theme", newTheme);
		document.documentElement.className = newTheme;
	}
	listeners.forEach((listener) => {
		listener(newTheme);
	});
};

export const useTheme = () => {
	const [theme, setLocalTheme] = useState(globalTheme);

	useEffect(() => {
		// Sincronizar estado local al montar
		setLocalTheme(globalTheme);

		const listener = (newTheme) => setLocalTheme(newTheme);
		listeners.add(listener);

		return () => {
			listeners.delete(listener);
		};
	}, []);

	const toggleTheme = () => {
		setThemeGlobal(theme === "light" ? "dark" : "light");
	};

	return { theme, toggleTheme };
};

// Componente "Pass-through" para mantener compatibilidad si se usa como wrapper
export const ThemeProvider = ({ children }) => {
	// Asegurar que el tema esté inicializado en el cliente también
	useEffect(() => {
		initTheme();
	}, []);

	return <>{children}</>;
};
