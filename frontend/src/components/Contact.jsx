import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Get In Touch!
          </h2>
          
          <div className="border-t-2 border-gray-300 w-24 mx-auto mb-12"></div>

          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            I'm a Data Science graduate from Rice University and actively seeking opportunities 
            in data science, machine learning, and AI. Feel free to reach out!
          </p>

          <div className="flex justify-center gap-8 mb-12">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex flex-col items-center group"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-gray-900 transition-all duration-300">
                <Mail className="text-gray-700 group-hover:text-white transition-colors" size={28} />
              </div>
              <span className="text-sm text-gray-600 group-hover:text-gray-900">Email</span>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center group"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-gray-900 transition-all duration-300">
                <Linkedin className="text-gray-700 group-hover:text-white transition-colors" size={28} />
              </div>
              <span className="text-sm text-gray-600 group-hover:text-gray-900">LinkedIn</span>
            </a>

            <a
              href={`tel:${personalInfo.phone}`}
              className="flex flex-col items-center group"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-3 group-hover:bg-gray-900 transition-all duration-300">
                <svg className="w-7 h-7 text-gray-700 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="text-sm text-gray-600 group-hover:text-gray-900">Phone</span>
            </a>
          </div>

          <div className="text-gray-600">
            <p className="mb-2"><strong>Email:</strong> {personalInfo.email}</p>
            <p className="mb-2"><strong>Phone:</strong> {personalInfo.phone}</p>
            <p><strong>Location:</strong> {personalInfo.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;