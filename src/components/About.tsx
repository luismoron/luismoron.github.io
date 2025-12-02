import React from 'react';
import { Code, Smartphone, Globe, Database } from 'lucide-react';

const About: React.FC = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4  from-primary to-secondary bg-clip-text text-transparent">Acerca de Mí</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ingeniero de Software enfocado en la excelencia técnica y la innovación. Transformo ideas complejas en soluciones digitales robustas, especializándome en arquitecturas escalables tanto para web como para móvil. Mi objetivo es crear software que no solo funcione, sino que destaque por su rendimiento y experiencia de usuario.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                Mi carrera se define por una búsqueda constante de la calidad y la eficiencia. Desde el diseño de sistemas backend de alto rendimiento hasta la creación de interfaces de usuario intuitivas, abordo cada proyecto con una mentalidad analítica y orientada a resultados.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Priorizo la escritura de código limpio, modular y mantenible, siguiendo las mejores prácticas de la industria. Valoro profundamente la colaboración técnica y creo que las mejores soluciones surgen de la comunicación clara y el trabajo en equipo.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Más allá del código, soy un entusiasta del aprendizaje continuo y el código abierto. Dedico tiempo a explorar tecnologías emergentes y a compartir conocimientos, contribuyendo activamente al crecimiento de la comunidad tecnológica.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border border-primary/10">
                <div className="text-2xl font-bold bg-emerald-700 from-primary to-secondary bg-clip-text text-transparent">50+</div>
                <div className="text-sm text-muted-foreground">Proyectos Completados</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-secondary/5 to-primary/5 rounded-lg border border-secondary/10">
                <div className="text-2xl font-bold bg-emerald-700 from-secondary to-primary bg-clip-text text-transparent">5+</div>
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
                <div className="p-3 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg text-primary border border-primary/20">
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