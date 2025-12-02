import React from 'react';
import { Building, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { mockExperience } from '../data/mockData';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-emerald-700 from-primary to-secondary bg-clip-text text-transparent">Experiencia</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mi trayectoria profesional en el desarrollo de software, combinando experiencia 
            técnica con liderazgo y trabajo en equipo.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:transform md:-translate-x-0.5"></div>
            
            {mockExperience.map((experience, index) => (
              <div key={experience.id} className="relative mb-8 md:mb-12">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background md:left-1/2 md:transform md:-translate-x-1/2"></div>
                
                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-xs">
                          <Calendar className="w-3 h-3 mr-1" />
                          {experience.period}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl">{experience.title}</CardTitle>
                      <CardDescription className="flex items-center space-x-2">
                        <Building className="w-4 h-4" />
                        <span>{experience.company}</span>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {experience.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-card rounded-lg border">
              <div className="text-2xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Años de Experiencia</div>
            </div>
            <div className="p-6 bg-card rounded-lg border">
              <div className="text-2xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Proyectos Completados</div>
            </div>
            <div className="p-6 bg-card rounded-lg border">
              <div className="text-2xl font-bold text-primary mb-2">10+</div>
              <div className="text-sm text-muted-foreground">Clientes Satisfechos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;