import React, { useState } from 'react';
import { ExternalLink, Github, Filter, Star } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { mockProjects } from '../data/mockData';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);

  const allTechs = [...new Set(mockProjects.flatMap(project => project.tech))];

  const filteredProjects = mockProjects.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'featured') return project.featured;
    return project.tech.includes(filter);
  });

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Proyectos</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Una selección de proyectos que he desarrollado, obtenidos automáticamente de mis
            repositorios de GitHub y GitLab.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('all')}
            className={`flex items-center space-x-2 ${filter === 'all' ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700' : ''}`}
          >
            <Filter className="w-4 h-4" />
            <span>Todos</span>
          </Button>
          <Button
            variant={filter === 'featured' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('featured')}
            className={`flex items-center space-x-2 ${filter === 'featured' ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700' : ''}`}
          >
            <Star className="w-4 h-4" />
            <span>Destacados</span>
          </Button>
          {allTechs.slice(0, 6).map(tech => (
            <Button
              key={tech}
              variant={filter === tech ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter(tech)}
              className={filter === tech ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700' : ''}
            >
              {tech}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
          {displayedProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <Badge variant="default" className=" from-primary to-secondary text-primary-foreground shadow-lg">
                      <Star className="w-3 h-3 mr-1" />
                      Destacado
                    </Badge>
                  </div>
                )}
              </div>

              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{project.name}</span>
                  <div className="flex space-x-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Show More Button */}
        {filteredProjects.length > 4 && (
          <div className="text-center">
            <Button
              variant="outline"
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-2"
            >
              {showAll ? 'Ver menos' : `Ver todos (${filteredProjects.length})`}
            </Button>
          </div>
        )}

        {/* Auto-sync Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground bg-card p-4 rounded-lg border inline-block">
            🔄 <strong>Sincronización automática:</strong> Los proyectos se actualizan automáticamente
            desde mis repositorios de GitHub y GitLab cada 24 horas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;