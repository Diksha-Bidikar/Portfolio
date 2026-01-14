import React from 'react';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { education } from '../data/mock';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

          <div className="space-y-6">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-xl transition-all border border-gray-200"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="flex-grow">
                    <div className="flex items-start gap-3 mb-3">
                      <GraduationCap className="text-blue-600 flex-shrink-0 mt-1" size={28} />
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{edu.degree}</h3>
                        <p className="text-xl text-blue-600 font-semibold">{edu.institution}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-4 mb-4">
                      <p className="text-gray-600 flex items-center gap-2">
                        <Calendar size={16} />
                        {edu.period}
                      </p>
                      <p className="text-gray-600 flex items-center gap-2">
                        <MapPin size={16} />
                        {edu.location}
                      </p>
                      {edu.gpa && (
                        <p className="text-gray-600 flex items-center gap-2">
                          <Award size={16} />
                          GPA: {edu.gpa}
                        </p>
                      )}
                    </div>

                    <p className="text-gray-700 leading-relaxed mt-3">{edu.description}</p>
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

export default Education;