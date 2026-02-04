import React from 'react';
import { Code, Smartphone, Globe, Database, Server, Terminal, Cpu } from 'lucide-react';
import { mockProfile, yearsOfExperience } from '../data/mockData';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../data/translations';

const iconMap = {
  Server: <Server className="w-6 h-6" />,
  Database: <Database className="w-6 h-6" />,
  Code: <Code className="w-6 h-6" />,
  Terminal: <Terminal className="w-6 h-6" />,
  Smartphone: <Smartphone className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />
};

const About = () => {
  const { language } = useLanguage();
  const t = translations[language].about;
  const { aboutText } = mockProfile;

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {aboutText.title[language]}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {aboutText.intro[language]}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              {aboutText.body.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed">
                  {paragraph[language]}
                </p>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border border-primary/10">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">50+</div>
                <div className="text-sm text-muted-foreground">{t.stats.projects}</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-secondary/5 to-primary/5 rounded-lg border border-secondary/10">
                <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">{yearsOfExperience}+</div>
                <div className="text-sm text-muted-foreground">{t.stats.years}</div>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">{t.subtitle}</h3>
            {mockProfile.aboutHighlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-card rounded-lg border hover:shadow-lg transition-shadow"
              >
                <div className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg text-primary border border-primary/20">
                  {iconMap[highlight.iconType]}
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{highlight.title[language]}</h3>
                  <p className="text-sm text-muted-foreground">{highlight.description[language]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;