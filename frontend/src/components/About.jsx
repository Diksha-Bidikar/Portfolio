import React from 'react';
import { Award, Target, TrendingUp } from 'lucide-react';
import { personalInfo } from '../data/mock';

const About = () => {
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
      title: "Continuous Learner",
      description: "Currently pursuing Master's in Data Science at Rice University (GPA: 3.7)"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

          <div className="space-y-8">
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
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-lg hover:scale-105 transition-all"
                >
                  <div className="mb-4">{item.icon}</div>
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