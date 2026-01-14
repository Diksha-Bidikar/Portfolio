import React from 'react';
import { skills } from '../data/mock';

const Skills = () => {
  const skillCategories = [
    { name: 'Programming Languages', items: skills['Programming Languages'] },
    { name: 'Machine Learning & AI', items: skills['Machine Learning & AI'] },
    { name: 'Web Development', items: skills['Web Development'] },
    { name: 'Data Tools', items: skills['Data Tools'] },
    { name: 'Databases', items: skills['Databases'] },
    { name: 'Cloud & DevOps', items: skills['Cloud & DevOps'] },
    { name: 'Visualization', items: skills['Visualization'] },
    { name: 'Other Tools', items: skills['Other Tools'] }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 text-center">
            Skills & Technologies
          </h2>
          
          <div className="border-t-2 border-gray-300 w-24 mx-auto mb-16"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="">
                <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b-2 border-gray-200">
                  {category.name}
                </h3>
                <div className="space-y-2">
                  {category.items.map((skill, idx) => (
                    <div key={idx} className="text-gray-700 text-sm">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;