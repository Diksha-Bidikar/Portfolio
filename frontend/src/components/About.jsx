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
      className={`bg-gradient-to-br from-white to-purple-50 p-8 rounded-xl border-2 border-purple-200 hover:shadow-2xl hover:scale-105 transition-all group ${
        isVisible ? `animate-scale-in stagger-${index + 1}` : 'opacity-0'
      }`}
    >
      <div className="mb-4 text-purple-600 group-hover:scale-110 group-hover:rotate-6 transition-transform">{icon}</div>
      <div className="text-4xl font-bold text-purple-600 mb-2">
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
      icon: <Award size={36} />,
      endValue: 3,
      suffix: '+',
      title: "Years Experience",
      description: "Professional experience in data science and software engineering"
    },
    {
      icon: <Target size={36} />,
      endValue: 81,
      suffix: '%',
      title: "Accuracy Achieved",
      description: "Improved OCR model accuracy through CNN-based optimization"
    },
    {
      icon: <TrendingUp size={36} />,
      endValue: 70,
      suffix: '%',
      title: "Time Saved",
      description: "Automated workflows reducing manual work significantly"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-br from-indigo-200 to-purple-300 rounded-full filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-pink-200 to-rose-300 rounded-full filter blur-3xl opacity-20 animate-float-slow"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div ref={ref} className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto rounded-full"></div>
          </div>

          <div className={`grid md:grid-cols-2 gap-12 items-center mb-16 ${isVisible ? 'animate-fade-in-up stagger-2' : 'opacity-0'}`}>
            {/* Left - Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-2xl opacity-20 blur-2xl animate-pulse"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden p-4 border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800"
                  alt="Diksha Bidikar"
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
            </div>

            {/* Right - Description */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Data Science graduate from Rice University with 3+ years of experience in machine learning, 
                deep learning, and full-stack development. Passionate about solving real-world problems through 
                data-driven approaches, particularly in healthcare and environmental safety.
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
          </div>

          {/* Highlights Grid with Counters */}
          <div ref={ref2} className="grid md:grid-cols-3 gap-6">
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