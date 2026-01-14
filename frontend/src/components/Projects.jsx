import React, { useState } from 'react';
import { projects } from '../data/mock';
import { ExternalLink, Award, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../animations.css';

const ProjectCard = ({ project, index }) => {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const [isHovered, setIsHovered] = useState(false);
  
  const gradients = [
    'from-indigo-500 to-purple-600',
    'from-pink-500 to-rose-600',
    'from-cyan-500 to-blue-600'
  ];

  return (
    <div
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-purple-300 flex flex-col group transform hover:-translate-y-2 ${
        isVisible ? `animate-fade-in-up stagger-${Math.min(index + 1, 6)}` : 'opacity-0'
      }`}
    >
      {/* Project Image with Gradient Overlay */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index % 3]} transition-opacity duration-300 ${
          isHovered ? 'opacity-80' : 'opacity-0'
        }`}></div>
        
        {/* Hover Content */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center p-6 transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <TrendingUp className="text-white mb-3 animate-bounce" size={40} />
          <p className="text-sm text-white uppercase tracking-wider font-bold mb-2">Machine Learning Project</p>
          <h3 className="text-white text-xl font-bold text-center">{project.title}</h3>
        </div>

        {/* Category Badge */}
        <div className={`absolute top-4 right-4 transition-all duration-300 ${
          isHovered ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
        }`}>
          <div className={`bg-gradient-to-r ${gradients[index % 3]} text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg`}>
            ML/AI
          </div>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
          {project.title}
        </h3>

        <p className="text-gray-700 mb-4 leading-relaxed text-sm">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className={`bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700 px-3 py-1 rounded-full text-xs font-medium hover:scale-110 transition-all cursor-default border border-purple-200 shadow-sm`}
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
          {project.achievements.slice(0, 2).map((achievement, idx) => (
            <p key={idx} className="text-xs text-gray-600 flex gap-2 group/item">
              <span className="text-emerald-600 group-hover/item:scale-125 transition-transform">✓</span>
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
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-300 rounded-full filter blur-3xl opacity-20 animate-float-slow"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-indigo-200 to-cyan-300 rounded-full filter blur-3xl opacity-20 animate-float"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className={isVisible ? 'animate-fade-in-up' : 'opacity-0'}>
          <h2 className="text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore my latest work in machine learning, deep learning, and data science
          </p>
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
