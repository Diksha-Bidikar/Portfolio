import React from 'react';
import { Mail, Linkedin, Phone, Github } from 'lucide-react';
import { personalInfo } from '../data/mock';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../animations.css';

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const contactMethods = [
    {
      icon: <Mail size={32} />,
      label: 'Email',
      href: `mailto:${personalInfo.email}`,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      icon: <Linkedin size={32} />,
      label: 'LinkedIn',
      href: personalInfo.linkedin,
      color: 'from-blue-500 to-cyan-600',
      external: true
    },
    {
      icon: <Phone size={32} />,
      label: 'Phone',
      href: `tel:${personalInfo.phone}`,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: <Github size={32} />,
      label: 'GitHub',
      href: 'https://github.com',
      color: 'from-gray-700 to-gray-900',
      external: true
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-indigo-300 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-300 to-rose-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-slow"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div ref={ref} className={isVisible ? 'animate-fade-in-up' : 'opacity-0'}>
            <h2 className="text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-lg text-gray-700 mb-12">
              I'm actively seeking opportunities in data science, machine learning, and AI. Let's connect!
            </p>
          </div>

          <div className={`flex justify-center gap-6 flex-wrap ${isVisible ? 'animate-fade-in-up stagger-2' : 'opacity-0'}`}>
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target={method.external ? '_blank' : undefined}
                rel={method.external ? 'noopener noreferrer' : undefined}
                className="group"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg group-hover:shadow-2xl`}>
                  <div className="text-white">{method.icon}</div>
                </div>
                <p className="text-sm text-gray-600 mt-3 font-medium group-hover:text-purple-600 transition-colors">
                  {method.label}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;