import React from 'react';
import { personalInfo } from '../data/mock';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">About Me</h2>
          
          <div className="border-t-2 border-gray-300 w-24 mx-auto mb-12"></div>

          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Data Science graduate from Rice University with 3+ years of experience in machine learning, 
              deep learning, and full-stack development. Passionate about solving real-world problems through 
              data-driven approaches, particularly in healthcare and environmental safety.
            </p>

            <p>
              With a strong foundation in both data science and full-stack development, I bring a unique 
              perspective to every project. My experience spans from building responsive web interfaces at 
              Infosys to conducting large-scale healthcare data analysis at Spurtree Technologies.
            </p>

            <p>
              I specialize in machine learning, deep learning, and creating end-to-end data solutions. 
              Whether it's developing OCR pipelines with 81% accuracy improvement or building predictive 
              models that save millions in operational costs, I thrive on turning complex data challenges 
              into actionable insights.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;