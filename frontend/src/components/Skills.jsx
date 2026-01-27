import React from 'react';
import { skills } from '../data/mock';
import { Code2, Database, Globe, BarChart3, Cloud, Wrench } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../animations.css';

const SkillCard = ({ category, index }) => {
  const [ref, isVisible] = useScrollAnimation(0.1);

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

  return (
    <div
      ref={ref}
      className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 hover:border-purple-200 group ${
        isVisible ? `animate-scale-in stagger-${Math.min(index + 1, 6)}` : 'opacity-0'
      }`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`${iconColors[index % 8]} group-hover:scale-110 transition-transform`}>
          {category.icon}
        </div>
        <h3 className="text-lg font-bold text-gray-900">{category.category}</h3>
      </div>

      {/* Skills Tags */}
      <div className="flex flex-wrap gap-2">
        {category.items.map((skill, idx) => (
          <span
            key={idx}
            className="bg-gradient-to-br from-gray-50 to-purple-50 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium hover:scale-110 hover:shadow-md transition-all cursor-default border border-gray-200"
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
      category: "Databases",
      icon: <Database size={28} />,
      items: skills["Databases"]
    },
    {
      category: "Data Tools",
      icon: <Database size={28} />,
      items: skills["Data Tools"]
    },
    {
      category: "Web Development",
      icon: <Globe size={28} />,
      items: skills["Web Development"]
    },


    {
      category: "Machine Learning & AI",
      icon: <BarChart3 size={28} />,
      items: skills["Machine Learning & AI"]
    },

    {
      category: "Visualization",
      icon: <BarChart3 size={28} />,
      items: skills["Visualization"]
    },
    {
      category: "Cloud & DevOps",
      icon: <Cloud size={28} />,
      items: skills["Cloud & DevOps"]
    },
    {
      category: "Other Tools",
      icon: <Wrench size={28} />,
      items: skills["Other Tools"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-300 to-pink-400 rounded-full filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-indigo-300 to-cyan-400 rounded-full filter blur-3xl opacity-20 animate-float-slow"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className={isVisible ? 'animate-fade-in-up' : 'opacity-0'}>
          <h2 className="text-5xl font-bold text-center mb-4">
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