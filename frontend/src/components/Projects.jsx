import React from 'react';
import { ExternalLink, Code, Award } from 'lucide-react';
import { projects } from '../data/mock';
import { Button } from './ui/button';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Featured Projects</h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all border border-gray-200 flex flex-col"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
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
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;