import React from 'react';
import { workExperience } from '../data/mock';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 text-center">
            Work Experience
          </h2>
          
          <div className="border-t-2 border-gray-300 w-24 mx-auto mb-16"></div>

          <div className="space-y-12">
            {workExperience.map((job) => (
              <div key={job.id} className="border-l-4 border-gray-300 pl-8 pb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                <p className="text-xl text-gray-700 font-medium mb-3">{job.company}</p>
                
                <div className="flex flex-wrap gap-4 text-gray-600 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar size={16} />
                    {job.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={16} />
                    {job.location}
                  </span>
                </div>

                <ul className="space-y-2">
                  {job.description.map((item, idx) => (
                    <li key={idx} className="text-gray-700 leading-relaxed flex gap-2">
                      <span className="text-gray-400 mt-1.5">•</span>
                      <span>{item}</span>
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