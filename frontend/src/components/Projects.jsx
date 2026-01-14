import React from 'react';
import { ExternalLink, Code, Award } from 'lucide-react';
import { projects } from '../data/mock';
import { Button } from './ui/button';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../animations.css';

const ProjectCard = ({ project, index }) => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all border border-gray-200 flex flex-col hover-lift shine-effect ${
        isVisible ? `animate-fade-in-up stagger-${Math.min(index + 1, 6)}` : 'opacity-0'
      }`}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden bg-gray-100 group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-3 right-3">
          <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold animate-pulse">
            ML/AI
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-2">
          <Code className="text-blue-600 flex-shrink-0 mt-1" size={20} />
          {project.title}
        </h3>

        <p className="text-gray-700 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-all cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Achievements */}
        <div className="space-y-2 mt-auto">
          <div className="flex items-center gap-2 mb-2">
            <Award className="text-emerald-600" size={18} />
            <span className="text-sm font-semibold text-gray-900">Key Achievements:</span>
          </div>
          {project.achievements.map((achievement, index) => (
            <p key={index} className="text-sm text-gray-600 flex gap-2">
              <span className="text-emerald-600">✓</span>
              {achievement}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="projects" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30 animate-float-slow"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className={isVisible ? 'animate-fade-in-up' : 'opacity-0'}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;