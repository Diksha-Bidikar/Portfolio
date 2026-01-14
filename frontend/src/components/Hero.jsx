import React from 'react';
import { Button } from './ui/button';
import { Download, ChevronDown } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-white pt-16">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Profile Image */}
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1557562645-4eee56b29bc1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHw0fHxtYWNoaW5lJTIwbGVhcm5pbmd8ZW58MHx8fHwxNzY4NDA5MTg0fDA&ixlib=rb-4.1.0&q=85"
              alt="Diksha Bidikar"
              className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-gray-200 shadow-lg"
            />
          </div>

          <div className="border-t-4 border-gray-300 w-32 mx-auto mb-6"></div>

          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-4">
            Diksha Bidikar
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 font-light mb-8 leading-relaxed max-w-3xl mx-auto">
            {personalInfo.bio}
          </p>

          <Button
            onClick={() => window.open(personalInfo.resumeUrl, '_blank')}
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-lg rounded-none font-normal"
          >
            <Download className="mr-2" size={20} />
            Download Resume
          </Button>

          <div className="pt-12">
            <ChevronDown className="mx-auto text-gray-400 animate-bounce" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;