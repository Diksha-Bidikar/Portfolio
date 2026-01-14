import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Download, Linkedin, Mail, Phone, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/mock';
import '../animations.css';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullName = personalInfo.name;

  useEffect(() => {
    if (currentIndex < fullName.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullName[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullName]);

  const handleDownloadResume = () => {
    window.open(personalInfo.resumeUrl, '_blank');
  };

  const handleContactClick = (type) => {
    if (type === 'email') {
      window.location.href = `mailto:${personalInfo.email}`;
    } else if (type === 'linkedin') {
      window.open(personalInfo.linkedin, '_blank');
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-slow"></div>
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-2 animate-fade-in-left">
              <p className="text-blue-600 font-semibold text-lg flex items-center gap-2">
                <Sparkles size={20} className="animate-pulse" />
                Hello, I'm
              </p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight min-h-[1.2em]">
                {displayedText}
                <span className="animate-pulse">|</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-600 font-medium">
                {personalInfo.title}
              </h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed animate-fade-in-up stagger-2">
              {personalInfo.bio}
            </p>

            <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up stagger-3">
              <Button
                onClick={handleDownloadResume}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-6 text-base hover-lift shine-effect"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </Button>
              <Button
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                variant="outline"
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-6 text-base hover-lift"
              >
                Get In Touch
              </Button>
            </div>

            {/* Quick Contact Icons */}
            <div className="flex gap-4 pt-4 animate-fade-in-up stagger-4">
              <button
                onClick={() => handleContactClick('email')}
                className="p-3 rounded-full bg-white shadow-md hover:shadow-xl hover:scale-110 transition-all hover-glow"
                aria-label="Email"
              >
                <Mail className="text-blue-600" size={22} />
              </button>
              <button
                onClick={() => handleContactClick('linkedin')}
                className="p-3 rounded-full bg-white shadow-md hover:shadow-xl hover:scale-110 transition-all hover-glow"
                aria-label="LinkedIn"
              >
                <Linkedin className="text-blue-600" size={22} />
              </button>
              <a
                href={`tel:${personalInfo.phone}`}
                className="p-3 rounded-full bg-white shadow-md hover:shadow-xl hover:scale-110 transition-all hover-glow"
                aria-label="Phone"
              >
                <Phone className="text-blue-600" size={22} />
              </a>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative animate-fade-in-right">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full opacity-20 blur-3xl animate-pulse"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden p-8 hover-lift">
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600 rounded-full filter blur-2xl opacity-30 animate-float"></div>
                <img
                  src="https://images.unsplash.com/photo-1557562645-4eee56b29bc1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHw0fHxtYWNoaW5lJTIwbGVhcm5pbmd8ZW58MHx8fHwxNzY4NDA5MTg0fDA&ixlib=rb-4.1.0&q=85"
                  alt="Data Science Visualization"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;