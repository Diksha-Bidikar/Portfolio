import React from 'react';
import { Mail, Phone, Linkedin, MapPin, Download } from 'lucide-react';
import { personalInfo } from '../data/mock';
import { Button } from './ui/button';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import '../animations.css';

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const [ref2, isVisible2] = useScrollAnimation(0.1);

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-slow"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div ref={ref} className={isVisible ? 'animate-fade-in-up' : 'opacity-0'}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Get In Touch</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
          </div>

          <div className={`bg-white rounded-lg shadow-2xl p-8 md:p-12 ${isVisible ? 'animate-scale-in stagger-2' : 'opacity-0'}`}>
            <p className="text-lg text-gray-700 text-center mb-10">
              I'm a Data Science graduate from Rice University and actively seeking opportunities 
              in data science, machine learning, and AI. Feel free to reach out if you'd like to connect or discuss potential collaborations!
            </p>

            <div ref={ref2} className="grid md:grid-cols-2 gap-6 mb-10">
              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                className={`flex items-center gap-4 p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg hover:shadow-xl transition-all border border-gray-200 hover-lift group ${
                  isVisible2 ? 'animate-fade-in-up stagger-1' : 'opacity-0'
                }`}
              >
                <div className="bg-blue-600 p-3 rounded-full group-hover:scale-110 transition-transform">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">Email</p>
                  <p className="text-gray-900 font-semibold">{personalInfo.email}</p>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${personalInfo.phone}`}
                className={`flex items-center gap-4 p-6 bg-gradient-to-br from-gray-50 to-teal-50 rounded-lg hover:shadow-xl transition-all border border-gray-200 hover-lift group ${
                  isVisible2 ? 'animate-fade-in-up stagger-2' : 'opacity-0'
                }`}
              >
                <div className="bg-teal-600 p-3 rounded-full group-hover:scale-110 transition-transform">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">Phone</p>
                  <p className="text-gray-900 font-semibold">{personalInfo.phone}</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg hover:shadow-xl transition-all border border-gray-200 hover-lift group ${
                  isVisible2 ? 'animate-fade-in-up stagger-3' : 'opacity-0'
                }`}
              >
                <div className="bg-blue-700 p-3 rounded-full group-hover:scale-110 transition-transform">
                  <Linkedin className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">LinkedIn</p>
                  <p className="text-gray-900 font-semibold">Connect with me</p>
                </div>
              </a>

              {/* Location */}
              <div
                className={`flex items-center gap-4 p-6 bg-gradient-to-br from-gray-50 to-emerald-50 rounded-lg border border-gray-200 ${
                  isVisible2 ? 'animate-fade-in-up stagger-4' : 'opacity-0'
                }`}
              >
                <div className="bg-emerald-600 p-3 rounded-full">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">Location</p>
                  <p className="text-gray-900 font-semibold">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            {/* Download Resume Button */}
            <div className="text-center pt-4">
              <Button
                onClick={() => window.open(personalInfo.resumeUrl, '_blank')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base hover-lift shine-effect"
              >
                <Download className="mr-2" size={20} />
                Download My Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;