import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { mockExperience } from '../data/mockData';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const Experience = () => {
  const { language } = useLanguage();
  const t = translations[language].experience;

  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.description}
          </p>
        </div>

        <div className="relative border-l border-primary/20 ml-4 md:ml-12 space-y-12">
          {mockExperience.map((job) => (
            <div key={job.id} className="relative pl-8 md:pl-12">
              <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />

              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">{job.title}</h3>
                  <div className="flex items-center space-x-2 text-primary font-medium mt-1">
                    <Briefcase className="w-4 h-4" />
                    <span>{job.company}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground mt-2 md:mt-0 bg-background/50 px-3 py-1 rounded-full border border-border">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{job.periodText[language]}</span>
                </div>
              </div>

              <div className={`bg-card p-6 rounded-xl border border-border hover:shadow-lg transition-all duration-300 ${job.era || ''}`}>
                <p className="text-muted-foreground leading-relaxed">
                  {job.description[language]}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;