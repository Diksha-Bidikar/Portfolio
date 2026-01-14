import React, { useState } from 'react';
import { projects } from '../data/mock';

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 text-center">
            Projects
          </h2>
          
          <div className="border-t-2 border-gray-300 w-24 mx-auto mb-16"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div 
                    className={`absolute inset-0 bg-gray-900 bg-opacity-80 flex flex-col items-center justify-center p-6 transition-opacity duration-300 ${
                      hoveredId === project.id ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <p className="text-sm text-gray-300 uppercase tracking-wider mb-2">Machine Learning</p>
                    <h3 className="text-white text-lg font-bold text-center">{project.title}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 uppercase font-semibold mb-2">Technologies:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold mb-2">Key Results:</p>
                    <ul className="space-y-1">
                      {project.achievements.slice(0, 2).map((achievement, index) => (
                        <li key={index} className="text-xs text-gray-600 flex gap-2">
                          <span className="text-gray-400">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;