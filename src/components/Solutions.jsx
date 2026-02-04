import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Zap, Cpu, BarChart3, Cloud, Database } from 'lucide-react';

const Solutions = () => {
    const { language } = useLanguage();

    const solutions = [
        {
            title: { es: "Núcleo de Operaciones (Go)", en: "Operations Core (Go)" },
            description: {
                es: "Motor en Golang con Whatsmeow para comunicación nativa con WhatsApp y Protobuf para eficiencia extrema en datos.",
                en: "Golang engine with Whatsmeow for native WhatsApp communication and Protobuf for extreme data efficiency."
            },
            icon: <Zap className="w-8 h-8" />
        },
        {
            title: { es: "Cerebro IA (Gemini 1.5 Flash)", en: "AI Brain (Gemini 1.5 Flash)" },
            description: {
                es: "Interpretación inteligente de requerimientos y gestión autónoma de interacciones complejas con clientes.",
                en: "Intelligent requirement interpretation and autonomous management of complex client interactions."
            },
            icon: <Cpu className="w-8 h-8" />
        },
        {
            title: { es: "Ecosistema Backend (Kasa)", en: "Backend Ecosystem (Kasa)" },
            description: {
                es: "Arquitectura basada en PostgreSQL 15+ con seguridad RLS, API automática vía PostgREST y tiempo real con Elixir.",
                en: "Architecture based on PostgreSQL 15+ with RLS security, automatic API via PostgREST, and real-time with Elixir."
            },
            icon: <Database className="w-8 h-8" />
        },
        {
            title: { es: "Orquestación y Gateway", en: "Orchestration & Gateway" },
            description: {
                es: "Unificación de servicios bajo Kong API Gateway, gestión de identidades con GoTrue y persistencia en Redes ZeroTier.",
                en: "Service unification under Kong API Gateway, identity management with GoTrue, and persistence on ZeroTier Networks."
            },
            icon: <Cloud className="w-8 h-8" />
        }
    ];

    return (
        <section id="solutions" className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        {language === 'es' ? 'Ingeniería de Sistemas y Soluciones' : 'Systems Engineering & Solutions'}
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        {language === 'es'
                            ? 'Arquitecturas robustas diseñadas para la escalabilidad y la eficiencia operativa.'
                            : "Robust architectures designed for scalability and operational efficiency."}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {solutions.map((sol, index) => (
                        <div key={index} className="flex items-start space-x-6 p-8 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 group hover:shadow-xl">
                            <div className="p-4 bg-primary/10 rounded-2xl text-primary group-hover:scale-110 transition-transform duration-300">
                                {sol.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{sol.title[language]}</h3>
                                <p className="text-muted-foreground leading-relaxed">{sol.description[language]}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solutions;
