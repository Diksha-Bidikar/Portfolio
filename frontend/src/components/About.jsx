import React, { useState, useEffect } from 'react';
import { Award, Target, TrendingUp, Zap } from 'lucide-react';
import { personalInfo } from '../data/mock';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../animations.css';

const CounterCard = ({ icon, endValue, suffix, title, description, index }) => {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isVisible && count < endValue) {
      const increment = endValue / 50;
      const timer = setTimeout(() => {
        setCount(prev => Math.min(prev + increment, endValue));
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [isVisible, count, endValue]);

  return (
    <div
      ref={ref}
      className={`bg-gradient-to-br from-white to-purple-50 p-6 rounded-xl border-2 border-purple-200 hover:shadow-2xl hover:scale-105 transition-all group ${
        isVisible ? `animate-scale-in stagger-${index + 1}` : 'opacity-0'
      }`}
    >
      <div className="mb-4 text-purple-600 group-hover:scale-110 group-hover:rotate-6 transition-transform">{icon}</div>
      <div className="text-3xl font-bold text-purple-600 mb-1">
        {Math.round(count)}{suffix}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const About = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const [ref2, isVisible2] = useScrollAnimation(0.1);

  const highlights = [
    {
      icon: <Award size={32} />,
      endValue: 3,
      suffix: '+',
      title: "Years Experience",
      description: "Professional experience in data science and software engineering"
    },
    {
      icon: <Target size={32} />,
      endValue: 81,
      suffix: '%',
      title: "Accuracy Achieved",
      description: "Improved OCR model accuracy through CNN-based optimization"
    },
    {
      icon: <TrendingUp size={32} />,
      endValue: 70,
      suffix: '%',
      title: "Time Saved",
      description: "Automated workflows reducing manual work significantly"
    },
    {
      icon: <Zap size={32} />,
      endValue: 3,
      suffix: '',
      title: "Major Projects",
      description: "ML/DL projects with measurable real-world impact"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-br from-indigo-200 to-purple-300 rounded-full filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-pink-200 to-rose-300 rounded-full filter blur-3xl opacity-20 animate-float-slow"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div ref={ref} className={isVisible ? 'animate-fade-in-up' : 'opacity-0'}>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto mb-12 rounded-full"></div>
          </div>

          <div className={`space-y-6 max-w-3xl mx-auto mb-12 ${isVisible ? 'animate-fade-in-up stagger-2' : 'opacity-0'}`}>
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
          </div>

          {/* Highlights Grid with Counters */}
          <div ref={ref2} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <CounterCard
                key={index}
                icon={item.icon}
                endValue={item.endValue}
                suffix={item.suffix}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;