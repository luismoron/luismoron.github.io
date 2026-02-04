import React from 'react';
import { timelineEvents } from '../data/mockData';
import { useLanguage } from '../contexts/LanguageContext';
import { CheckCircle2 } from 'lucide-react';

const Timeline = () => {
    const { language } = useLanguage();

    return (
        <section id="timeline" className="py-20 px-4 bg-muted/10">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {language === 'es' ? 'Línea de Tiempo de mi Carrera' : 'My Career Timeline'}
                </h2>

                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/20 before:to-transparent">
                    {timelineEvents.map((event, index) => (
                        <div key={index} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${event.era}`}>
                            {/* Icon */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/20 bg-card shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 transition-all duration-300 group-hover:scale-125 group-hover:border-primary">
                                <CheckCircle2 className="w-5 h-5 text-primary" />
                            </div>
                            {/* Content Card */}
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card p-6 rounded-xl border border-border shadow-sm transition-all duration-300 group-hover:shadow-md">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="font-bold text-primary text-xl font-mono">{event.year}</div>
                                </div>
                                <div className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{event.title[language]}</div>
                                <div className="text-muted-foreground">{event.description[language]}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
