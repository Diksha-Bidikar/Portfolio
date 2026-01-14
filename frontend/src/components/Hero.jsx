import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Download, Linkedin, Mail, Phone, Sparkles, ChevronDown } from 'lucide-react';
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
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-pink-400 to-rose-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float-slow"></div>
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-2 animate-fade-in-left">
              <p className="text-purple-600 font-semibold text-lg flex items-center gap-2">
                <Sparkles size={20} className="animate-pulse" />
                Hello, I'm
              </p>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight min-h-[1.2em]">
                {displayedText}
                <span className="animate-pulse">|</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                {personalInfo.title}
              </h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed animate-fade-in-up stagger-2">
              {personalInfo.bio}
            </p>

            <div className="flex flex-wrap gap-4 pt-4 animate-fade-in-up stagger-3">
              <Button
                onClick={handleDownloadResume}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-6 text-base hover-lift shine-effect shadow-lg hover:shadow-xl"
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
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-6 text-base hover-lift shadow-lg hover:shadow-xl transition-all"
              >
                Get In Touch
              </Button>
            </div>

            {/* Quick Contact Icons */}
            <div className="flex gap-4 pt-4 animate-fade-in-up stagger-4">
              <button
                onClick={() => handleContactClick('email')}
                className="p-4 rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-110 transition-all group border-2 border-transparent hover:border-indigo-200"
                aria-label="Email"
              >
                <Mail className="text-indigo-600 group-hover:scale-110 transition-transform" size={22} />
              </button>
              <button
                onClick={() => handleContactClick('linkedin')}
                className="p-4 rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-110 transition-all group border-2 border-transparent hover:border-blue-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="text-blue-600 group-hover:scale-110 transition-transform" size={22} />
              </button>
              <a
                href={`tel:${personalInfo.phone}`}
                className="p-4 rounded-full bg-white shadow-lg hover:shadow-xl hover:scale-110 transition-all group border-2 border-transparent hover:border-teal-200"
                aria-label="Phone"
              >
                <Phone className="text-teal-600 group-hover:scale-110 transition-transform" size={22} />
              </a>
            </div>
          </div>

          {/* Right Content - Image with Creative Design */}
          <div className="relative animate-fade-in-right">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Rotating gradient ring */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl opacity-40 blur-2xl animate-pulse"></div>
              
              {/* Main card */}
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden p-8 hover-lift border-4 border-white">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full filter blur-3xl opacity-50 animate-float"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-indigo-400 to-cyan-500 rounded-full filter blur-3xl opacity-50 animate-float-slow"></div>
                
                <img
                  src="https://images.unsplash.com/photo-1557562645-4eee56b29bc1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHw0fHxtYWNoaW5lJTIwbGVhcm5pbmd8ZW58MHx8fHwxNzY4NDA5MTg0fDA&ixlib=rb-4.1.0&q=85"
                  alt="Data Science Visualization"
                  className="w-full h-full object-cover rounded-lg relative z-10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-purple-600" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;