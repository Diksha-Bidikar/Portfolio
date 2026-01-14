import React from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { workExperience } from '../data/mock';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Work Experience</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <div
                key={job.id}
                className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-all border border-gray-200"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                      <Briefcase className="text-blue-600" size={24} />
                      {job.title}
                    </h3>
                    <p className="text-xl text-blue-600 font-semibold mb-2">{job.company}</p>
                  </div>
                  <div className="flex flex-col gap-1 md:text-right">
                    <p className="text-gray-600 flex items-center gap-1 md:justify-end">
                      <Calendar size={16} />
                      {job.period}
                    </p>
                    <p className="text-gray-600 flex items-center gap-1 md:justify-end">
                      <MapPin size={16} />
                      {job.location}
                    </p>
                  </div>
                </div>

                <ul className="space-y-3 mt-4">
                  {job.description.map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-blue-600 mt-1.5 flex-shrink-0">•</span>
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;