import React from 'react';
import { Progress } from '../components/ui/progress';
import { Badge } from '../components/ui/badge';
import { mockSkills } from '../data/mockData';

const Skills = () => {
  const topSkills = mockSkills.slice(0, 6);
  const allSkills = mockSkills.map(skill => skill.name);

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-emerald-700 from-primary to-secondary bg-clip-text text-transparent">Habilidades</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tecnologías y herramientas que utilizo en mi día a día, constantemente actualizadas 
            basándose en mis proyectos de GitHub y GitLab.
          </p>
        </div>

        {/* Main Skills with Progress */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {topSkills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-medium">{skill.name}</span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">{skill.projects} proyectos</span>
                  <span className="text-sm font-medium">{skill.level}%</span>
                </div>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          ))}
        </div>

        {/* All Skills as Badges */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-center">Todas las Tecnologías</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {allSkills.map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-3 py-1 text-sm  hover:from-primary hover:to-secondary hover:text-primary-foreground transition-all duration-300 cursor-pointer transform hover:scale-105"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Note about automatic detection */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground bg-card p-4 rounded-lg border inline-block">
            💡 <strong>Datos automáticos:</strong> Estas habilidades son detectadas automáticamente 
            analizando los lenguajes y tecnologías utilizadas en mis repositorios de GitHub y GitLab.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;