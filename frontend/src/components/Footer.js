import React from 'react';
import { Github, GitlabIcon as Gitlab, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { mockProfile } from '../data/mockData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: mockProfile.github,
      label: 'GitHub'
    },
    {
      icon: <Gitlab className="w-5 h-5" />,
      href: mockProfile.gitlab,
      label: 'GitLab'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: mockProfile.linkedin,
      label: 'LinkedIn'
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: `mailto:${mockProfile.email}`,
      label: 'Email'
    }
  ];

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">LM</span>
              </div>
              <span className="font-bold text-lg">{mockProfile.name}</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Desarrollador Full Stack especializado en crear experiencias digitales 
              excepcionales con tecnologías modernas.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Enlaces Rápidos</h3>
            <nav className="flex flex-col space-y-2">
              {[
                { label: 'Inicio', href: '#home' },
                { label: 'Acerca de', href: '#about' },
                { label: 'Proyectos', href: '#projects' },
                { label: 'Contacto', href: '#contact' }
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social & Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Conecta conmigo</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background rounded-full border hover:bg-accent transition-colors"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Disponible para colaboraciones y proyectos freelance
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 {mockProfile.name}. Todos los derechos reservados.
            </p>
            
            <div className="flex items-center space-x-4">
              <p className="text-xs text-muted-foreground">
                Desarrollado con ❤️ usando React & FastAPI
              </p>
              <button
                onClick={scrollToTop}
                className="p-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors"
                title="Volver arriba"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;