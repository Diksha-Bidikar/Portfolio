import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Diksha Bidikar</h3>
            <p className="text-gray-400 leading-relaxed">
              Data Scientist passionate about transforming data into actionable insights through machine learning and AI.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-all"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Diksha Bidikar. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              Built with <Heart className="text-red-500" size={16} fill="currentColor" /> and React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;