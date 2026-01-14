import React from 'react';
import { Award, Target, TrendingUp } from 'lucide-react';
import { personalInfo } from '../data/mock';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../animations.css';

const About = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const [ref2, isVisible2] = useScrollAnimation(0.1);

  const highlights = [
    {
      icon: <Award className="text-blue-600" size={28} />,
      title: "3+ Years Experience",
      description: "Professional experience in data science and software engineering"
    },
    {
      icon: <Target className="text-teal-600" size={28} />,
      title: "Problem Solver",
      description: "Passionate about using data-driven approaches to solve real-world challenges"
    },
    {
      icon: <TrendingUp className="text-emerald-600" size={28} />,
      title: "Rice University Graduate",
      description: "Master's in Data Science from Rice University (GPA: 3.7)"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-teal-100 rounded-full filter blur-3xl opacity-30 animate-float"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div ref={ref} className={isVisible ? 'animate-fade-in-up' : 'opacity-0'}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
          </div>

          <div className={`space-y-8 ${isVisible ? 'animate-fade-in-up stagger-2' : 'opacity-0'}`}>
            <p className="text-lg text-gray-700 leading-relaxed">
              {personalInfo.bio}
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              With a strong foundation in both data science and full-stack development, I bring a unique 
              perspective to every project. My experience spans from building responsive web interfaces at 
              Infosys to conducting large-scale healthcare data analysis at Spurtree Technologies.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              I specialize in machine learning, deep learning, and creating end-to-end data solutions. 
              Whether it's developing OCR pipelines with 81% accuracy improvement or building predictive 
              models that save millions in operational costs, I thrive on turning complex data challenges 
              into actionable insights.
            </p>

            {/* Highlights Grid */}
            <div ref={ref2} className="grid md:grid-cols-3 gap-6 mt-12">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-lg border border-gray-200 hover:shadow-xl hover-lift ${
                    isVisible2 ? `animate-scale-in stagger-${index + 1}` : 'opacity-0'
                  }`}
                >
                  <div className="mb-4 animate-bounce">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;