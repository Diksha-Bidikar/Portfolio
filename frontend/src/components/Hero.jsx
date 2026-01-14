import React from 'react';
import { Button } from './ui/button';
import { Download, Linkedin, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Hero = () => {
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
    <section id="hero" className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-blue-50 pt-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-blue-600 font-semibold text-lg">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                {personalInfo.name}
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-600 font-medium">
                {personalInfo.title}
              </h2>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">
              {personalInfo.bio}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                onClick={handleDownloadResume}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-6 text-base"
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
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-6 text-base"
              >
                Get In Touch
              </Button>
            </div>

            {/* Quick Contact Icons */}
            <div className="flex gap-4 pt-4">
              <button
                onClick={() => handleContactClick('email')}
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg hover:scale-110 transition-all"
                aria-label="Email"
              >
                <Mail className="text-blue-600" size={22} />
              </button>
              <button
                onClick={() => handleContactClick('linkedin')}
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg hover:scale-110 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="text-blue-600" size={22} />
              </button>
              <a
                href={`tel:${personalInfo.phone}`}
                className="p-3 rounded-full bg-white shadow-md hover:shadow-lg hover:scale-110 transition-all"
                aria-label="Phone"
              >
                <Phone className="text-blue-600" size={22} />
              </a>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-teal-400 rounded-full opacity-20 blur-3xl"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden p-8">
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