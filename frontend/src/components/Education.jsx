import React from 'react';
import { education } from '../data/mock';
import { Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 text-center">
            Education
          </h2>
          
          <div className="border-t-2 border-gray-300 w-24 mx-auto mb-16"></div>

          <div className="space-y-10">
            {education.map((edu) => (
              <div key={edu.id} className="bg-white p-8 shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                <p className="text-xl text-gray-700 mb-4">{edu.institution}</p>
                
                <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={16} />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={16} />
                    {edu.location}
                  </span>
                  {edu.gpa && (
                    <span className="flex items-center gap-1">
                      <Award size={16} />
                      GPA: {edu.gpa}
                    </span>
                  )}
                </div>

                <p className="text-gray-700 leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;