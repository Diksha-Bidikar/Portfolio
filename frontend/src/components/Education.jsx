import React, { useState, useEffect } from 'react';
import { education } from '../data/mock';
import { Calendar, MapPin, Award, GraduationCap } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../animations.css';

const EducationCard = ({ edu, index }) => {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const [gpaProgress, setGpaProgress] = useState(0);
  
  const gradients = [
    'from-indigo-500 to-purple-600',
    'from-pink-500 to-rose-600'
  ];

  // Animate GPA circle
  useEffect(() => {
    if (isVisible && edu.gpa) {
      const targetProgress = (parseFloat(edu.gpa) / 4.0) * 100;
      const timer = setTimeout(() => {
        setGpaProgress(targetProgress);
      }, 300 + index * 200);
      return () => clearTimeout(timer);
    }
  }, [isVisible, edu.gpa, index]);

  return (
    <div
      ref={ref}
      className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-purple-300 group transform hover:-translate-y-2 ${
        isVisible ? `animate-scale-in stagger-${index + 1}` : 'opacity-0'
      }`}
    >
      <div className="flex items-start gap-6">
        {/* Icon */}
        <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${gradients[index % 2]} flex items-center justify-center group-hover:scale-110 transition-transform`}>
          <GraduationCap className="text-white" size={32} />
        </div>

        {/* Content */}
        <div className="flex-grow">
          <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
            {edu.degree}
          </h3>
          <p className="text-xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
            {edu.institution}
          </p>
          
          <div className="flex flex-wrap gap-3 text-sm text-gray-600 mb-4">
            <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-full">
              <Calendar size={16} className="text-purple-500" />
              {edu.period}
            </span>
            <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-full">
              <MapPin size={16} className="text-pink-500" />
              {edu.location}
            </span>
            {edu.gpa && (
              <span className="flex items-center gap-1.5 bg-gradient-to-r from-purple-50 to-pink-50 px-3 py-1.5 rounded-full border border-purple-200">
                <Award size={16} className="text-purple-600" />
                <span className="font-semibold text-purple-700">GPA: {edu.gpa}/4.0</span>
              </span>
            )}
          </div>

          <p className="text-gray-700 leading-relaxed">{edu.description}</p>
        </div>
      </div>
    </div>
  );
};

const Education = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section id="education" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-br from-indigo-200 to-purple-300 rounded-full filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-pink-200 to-rose-300 rounded-full filter blur-3xl opacity-20 animate-float-slow"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Academic foundation and continuous learning journey
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <EducationCard key={edu.id} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;