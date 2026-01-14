import React, { useState, useEffect } from 'react';
import { skills } from '../data/mock';
import { Code2, Database, Globe, BarChart3, Cloud, Wrench } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../animations.css';

const SkillCard = ({ category, index }) => {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setProgress(85 + Math.random() * 15);
      }, index * 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, index]);

  const iconColors = [
    'text-indigo-600',
    'text-purple-600',
    'text-pink-600',
    'text-rose-600',
    'text-red-600',
    'text-cyan-600',
    'text-emerald-600',
    'text-gray-600'
  ];

  const bgGradients = [
    'from-indigo-50 to-purple-50',
    'from-purple-50 to-pink-50',
    'from-pink-50 to-rose-50',
    'from-rose-50 to-red-50',
    'from-red-50 to-orange-50',
    'from-cyan-50 to-blue-50',
    'from-emerald-50 to-teal-50',
    'from-gray-50 to-slate-50'
  ];

  return (
    <div
      ref={ref}
      className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-purple-200 ${
        isVisible ? `animate-scale-in stagger-${Math.min(index + 1, 6)}` : 'opacity-0'
      }`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`${iconColors[index % 8]}`}>
          {category.icon}
        </div>
        <h3 className="text-lg font-bold text-gray-900">{category.category}</h3>
      </div>
      
      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-gray-600 font-medium">Proficiency</span>
          <span className="text-xs font-bold text-purple-600">{Math.round(progress)}%</span>
        </div>
        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className={`h-full bg-gradient-to-r ${bgGradients[index % 8]} rounded-full transition-all duration-1000 ease-out`}
            style={{ width: `${progress}%` }}
          >
            <div className="h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {category.items.map((skill, idx) => (
          <span
            key={idx}
            className={`bg-gradient-to-r ${bgGradients[index % 8]} text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium hover:scale-110 transition-all cursor-default shadow-sm border border-gray-200`}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const skillCategories = [
    {
      category: "Programming Languages",
      icon: <Code2 size={28} />,
      items: skills["Programming Languages"]
    },
    {
      category: "Machine Learning & AI",
      icon: <BarChart3 size={28} />,
      items: skills["Machine Learning & AI"]
    },
    {
      category: "Web Development",
      icon: <Globe size={28} />,
      items: skills["Web Development"]
    },
    {
      category: "Data Tools",
      icon: <Database size={28} />,
      items: skills["Data Tools"]
    },
    {
      category: "Databases",
      icon: <Database size={28} />,
      items: skills["Databases"]
    },
    {
      category: "Cloud & DevOps",
      icon: <Cloud size={28} />,
      items: skills["Cloud & DevOps"]
    },
    {
      category: "Visualization",
      icon: <BarChart3 size={28} />,
      items: skills["Visualization"]
    },
    {
      category: "Other Tools",
      icon: <Wrench size={28} />,
      items: skills["Other Tools"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-300 to-pink-400 rounded-full filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-indigo-300 to-cyan-400 rounded-full filter blur-3xl opacity-20 animate-float-slow"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className={isVisible ? 'animate-fade-in-up' : 'opacity-0'}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive expertise across the data science and development stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;