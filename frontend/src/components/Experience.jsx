import React from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { workExperience } from '../data/mock';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../animations.css';

const ExperienceCard = ({ job, index }) => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`bg-white rounded-lg p-8 shadow-md hover:shadow-2xl transition-all border border-gray-200 hover-lift shine-effect ${
        isVisible ? `animate-fade-in-up stagger-${Math.min(index + 1, 6)}` : 'opacity-0'
      }`}
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
          <li key={idx} className="flex gap-3 group">
            <span className="text-blue-600 mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform">•</span>
            <span className="text-gray-700 leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Experience = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="experience" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-30 animate-float-slow"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div ref={ref} className={isVisible ? 'animate-fade-in-up' : 'opacity-0'}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Work Experience</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
          </div>

          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <ExperienceCard key={job.id} job={job} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;