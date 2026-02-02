import React, { useState, useEffect } from 'react';

// Estado global singleton para compartir entre islas de Astro
let globalLanguage = 'es';
const listeners = new Set();

// Función auxiliar para inicializar el idioma
const initLanguage = () => {
    if (typeof window !== 'undefined') {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            globalLanguage = savedLanguage;
        } else {
            // Detectar idioma del navegador si no hay preferencia guardada
            const browserLang = navigator.language.split('-')[0];
            globalLanguage = browserLang === 'es' ? 'es' : 'en'; // Default fallback to English if not Spanish
            // Actually, user requested switching button, let's default to 'es' firmly if uncertain, but browser detection is nice.
            // Let's stick to 'es' default as requested implicitly by the user's primary language.
            if (globalLanguage !== 'es' && globalLanguage !== 'en') {
                globalLanguage = 'es';
            }
        }
    }
};

// Ejecutar inicialización inmediatamente
initLanguage();

const setLanguageGlobal = (newLanguage) => {
    globalLanguage = newLanguage;
    if (typeof window !== 'undefined') {
        localStorage.setItem('language', newLanguage);
    }
    listeners.forEach(listener => listener(newLanguage));
};

export const useLanguage = () => {
    const [language, setLocalLanguage] = useState(globalLanguage);

    useEffect(() => {
        // Sincronizar estado local al montar
        setLocalLanguage(globalLanguage);

        const listener = (newLanguage) => setLocalLanguage(newLanguage);
        listeners.add(listener);

        return () => {
            listeners.delete(listener);
        };
    }, []);

    const toggleLanguage = () => {
        setLanguageGlobal(language === 'es' ? 'en' : 'es');
    };

    return { language, toggleLanguage, setLanguage: setLanguageGlobal };
};

// Componente "Pass-through" para mantener compatibilidad si se usa como wrapper
export const LanguageProvider = ({ children }) => {
    useEffect(() => {
        initLanguage();
    }, []);

    return <>{children}</>;
};
