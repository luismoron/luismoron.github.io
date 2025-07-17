import React from 'react';
import { Code, Smartphone, Globe, Database } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Desarrollo Web",
      description: "Experiencia en React, Vue.js, Node.js y frameworks modernos"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Desarrollo Móvil",
      description: "Aplicaciones nativas y híbridas con React Native y Flutter"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Backend & APIs",
      description: "Arquitectura de servidores robustos y APIs RESTful"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "DevOps & Cloud",
      description: "Despliegue y gestión en AWS, Docker y herramientas CI/CD"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Acerca de Mí</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Soy un desarrollador full-stack apasionado por crear soluciones innovadoras y eficientes. 
            Con varios años de experiencia en desarrollo web y móvil, me especializo en tecnologías 
            modernas y siempre estoy buscando nuevos desafíos.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                Mi trayectoria como desarrollador comenzó con la curiosidad por entender cómo 
                funcionan las cosas. Esta pasión me ha llevado a explorar diferentes tecnologías 
                y a mantenerme actualizado con las últimas tendencias del desarrollo.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Me enfoco en escribir código limpio, escalable y mantenible. Creo firmemente 
                en la importancia de la colaboración en equipo y en la comunicación efectiva 
                para lograr resultados excepcionales.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cuando no estoy programando, me gusta contribuir a proyectos open source, 
                aprender nuevas tecnologías y compartir conocimientos con la comunidad de desarrolladores.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 bg-card rounded-lg border">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Proyectos Completados</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Años de Experiencia</div>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-card rounded-lg border hover:shadow-lg transition-shadow"
              >
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  {highlight.icon}
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
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