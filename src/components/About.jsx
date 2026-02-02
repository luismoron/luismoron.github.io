import React from 'react';
import { Code, Smartphone, Globe, Database, Server, Terminal } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Server className="w-6 h-6" />,
      title: "Arquitectura Moderna",
      description: "Orquestación con Podman y Docker para entornos ágiles"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Eficiencia en Datos",
      description: "Diseño complejo en PostgreSQL y MongoDB"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Código con Propósito",
      description: "Clean Code, React y lógica de negocio en Go"
    },
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "Mentalidad DevOps",
      description: "Automatización con IA y CI/CD"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4  from-primary to-secondary bg-clip-text text-transparent">Acerca de Mí</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mi enfoque va más allá de escribir código; se trata de ingeniería de precisión. Creo firmemente que una solución robusta nace de la combinación entre un backend sólido y una infraestructura moderna.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                Soy un entusiasta del Open Source y del aprendizaje constante.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Para mí, la tecnología no es solo una herramienta, es un medio para resolver problemas del mundo real de la manera más elegante y eficiente posible.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="text-center p-4 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border border-primary/10">
                <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">50+</div>
                <div className="text-sm text-muted-foreground">Proyectos Completados</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-secondary/5 to-primary/5 rounded-lg border border-secondary/10">
                <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">5+</div>
                <div className="text-sm text-muted-foreground">Años de Experiencia</div>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Lo que aporto a cada proyecto:</h3>
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