import React from 'react';
import { Download } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6">
          {/* Resume Download Button */}
          <div>
            <button
              onClick={() => window.open(personalInfo.resumeUrl, '_blank')}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-medium inline-flex items-center gap-2 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Download size={20} />
              Download My Resume
            </button>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <p className="text-gray-400 text-sm">
              © {currentYear} Diksha Bidikar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;