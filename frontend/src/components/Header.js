import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { Moon, Sun, Menu, X, Download, Github, GitlabIcon as Gitlab } from 'lucide-react';
import { mockProfile } from '../data/mockData';

const Header = ({ activeSection, setActiveSection }) => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Inicio' },
    { id: 'about', label: 'Acerca de' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'experience', label: 'Experiencia' },
    { id: 'contact', label: 'Contacto' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const downloadCV = () => {
    // Mock download - se implementará con archivo real
    alert('Descarga de CV en construcción...');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg">
              <span className="text-primary-foreground font-bold text-sm">LM</span>
            </div>
            <span className="font-bold text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Luis Morón</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            {/* Social Links */}
            <div className="hidden md:flex items-center space-x-2">
              <a
                href={mockProfile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-accent transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={mockProfile.gitlab}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-accent transition-colors"
              >
                <Gitlab className="w-4 h-4" />
              </a>
            </div>

            {/* Download CV */}
            <button
              onClick={downloadCV}
              className="hidden md:flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>CV</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-accent transition-colors"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-accent transition-colors"
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-2 mt-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-left py-2 px-4 rounded-lg transition-colors hover:bg-accent ${
                    activeSection === item.id ? 'text-primary bg-accent' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={downloadCV}
                className="flex items-center space-x-2 py-2 px-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors mt-2"
              >
                <Download className="w-4 h-4" />
                <span>Descargar CV</span>
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;