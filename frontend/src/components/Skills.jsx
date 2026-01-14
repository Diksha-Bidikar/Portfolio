import React from 'react';
import { skills } from '../data/mock';
import { Code2, Database, Globe, BarChart3, Cloud, Wrench } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../animations.css';

const SkillCard = ({ category, index }) => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`bg-white rounded-lg p-6 shadow-md hover:shadow-2xl transition-all border border-gray-200 hover-lift ${
        isVisible ? `animate-scale-in stagger-${Math.min(index + 1, 6)}` : 'opacity-0'
      }`}
    >
      <div className="flex items-center gap-3 mb-4">
        {category.icon}
        <h3 className="text-lg font-bold text-gray-900">{category.category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.items.map((skill, idx) => (
          <span
            key={idx}
            className="bg-gradient-to-r from-gray-100 to-blue-50 hover:from-blue-100 hover:to-teal-100 text-gray-700 hover:text-blue-700 px-3 py-1.5 rounded-md text-sm font-medium transition-all cursor-default hover-scale"
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
      icon: <Code2 className="text-blue-600" size={28} />,
      items: skills["Programming Languages"]
    },
    {
      category: "Machine Learning & AI",
      icon: <BarChart3 className="text-purple-600" size={28} />,
      items: skills["Machine Learning & AI"]
    },
    {
      category: "Web Development",
      icon: <Globe className="text-teal-600" size={28} />,
      items: skills["Web Development"]
    },
    {
      category: "Data Tools",
      icon: <Database className="text-orange-600" size={28} />,
      items: skills["Data Tools"]
    },
    {
      category: "Databases",
      icon: <Database className="text-red-600" size={28} />,
      items: skills["Databases"]
    },
    {
      category: "Cloud & DevOps",
      icon: <Cloud className="text-indigo-600" size={28} />,
      items: skills["Cloud & DevOps"]
    },
    {
      category: "Visualization",
      icon: <BarChart3 className="text-emerald-600" size={28} />,
      items: skills["Visualization"]
    },
    {
      category: "Other Tools",
      icon: <Wrench className="text-gray-600" size={28} />,
      items: skills["Other Tools"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-20 w-80 h-80 bg-teal-100 rounded-full filter blur-3xl opacity-40 animate-float"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30 animate-float-slow"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className={isVisible ? 'animate-fade-in-up' : 'opacity-0'}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
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