import React from 'react';
import { workExperience } from '../data/mock';
import { Calendar, MapPin, Briefcase } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../animations.css';

const ExperienceCard = ({ job, index }) => {
  const [ref, isVisible] = useScrollAnimation(0.1);
  
  const gradients = [
    'from-indigo-500 to-purple-600',
    'from-pink-500 to-rose-600',
    'from-cyan-500 to-blue-600'
  ];

  return (
    <div
      ref={ref}
      className={`relative ${
        isVisible ? `animate-fade-in-up stagger-${Math.min(index + 1, 3)}` : 'opacity-0'
      }`}
    >
      {/* Timeline dot and line */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex flex-col items-center">
        <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${gradients[index % 3]} shadow-lg animate-pulse z-10`}></div>
        {index < workExperience.length - 1 && (
          <div className="w-0.5 h-full bg-gradient-to-b from-purple-300 to-pink-300 mt-2"></div>
        )}
      </div>

      {/* Content Card - Alternating sides on desktop */}
      <div className={`ml-8 md:ml-0 md:w-5/12 ${
        index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
      }`}>
        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-purple-300 group transform hover:-translate-y-2">
          {/* Company Icon */}
          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${gradients[index % 3]} mb-4 group-hover:scale-110 transition-transform`}>
            <Briefcase className="text-white" size={24} />
          </div>

          {/* Title and Company */}
          <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">
            {job.title}
          </h3>
          <p className="text-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">
            {job.company}
          </p>
          
          {/* Date and Location */}
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
            <span className="flex items-center gap-1.5">
              <Calendar size={16} className="text-purple-500" />
              {job.period}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={16} className="text-pink-500" />
              {job.location}
            </span>
          </div>

          {/* Description */}
          <ul className="space-y-2">
            {job.description.map((item, idx) => (
              <li key={idx} className="flex gap-2 text-gray-700 text-sm leading-relaxed group/item">
                <span className="text-purple-500 mt-1 group-hover/item:scale-125 transition-transform">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-300 rounded-full filter blur-3xl opacity-20 animate-float-slow"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-indigo-200 to-cyan-300 rounded-full filter blur-3xl opacity-20 animate-float"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey in data science and software engineering
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="space-y-12">
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