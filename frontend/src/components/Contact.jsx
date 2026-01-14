import React from 'react';
import { Mail, Phone, Linkedin, MapPin, Download } from 'lucide-react';
import { personalInfo } from '../data/mock';
import { Button } from './ui/button';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <p className="text-lg text-gray-700 text-center mb-10">
              I'm currently pursuing my Master's in Data Science at Rice University and actively seeking opportunities 
              in data science, machine learning, and AI. Feel free to reach out if you'd like to connect or discuss potential collaborations!
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {/* Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-6 bg-gray-50 rounded-lg hover:bg-blue-50 hover:shadow-md transition-all border border-gray-200"
              >
                <div className="bg-blue-600 p-3 rounded-full">
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
                className="flex items-center gap-4 p-6 bg-gray-50 rounded-lg hover:bg-blue-50 hover:shadow-md transition-all border border-gray-200"
              >
                <div className="bg-teal-600 p-3 rounded-full">
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
                className="flex items-center gap-4 p-6 bg-gray-50 rounded-lg hover:bg-blue-50 hover:shadow-md transition-all border border-gray-200"
              >
                <div className="bg-blue-700 p-3 rounded-full">
                  <Linkedin className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-medium">LinkedIn</p>
                  <p className="text-gray-900 font-semibold">Connect with me</p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-lg border border-gray-200">
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
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-base"
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