import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import '../animations.css';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  
  // Move words inside useMemo to prevent re-creation on every render
  const words = React.useMemo(() => ["Hi,", "I'm", "Diksha"], []);

  useEffect(() => {
    if (wordIndex < words.length) {
      if (charIndex < words[wordIndex].length) {
        const timeout = setTimeout(() => {
          setDisplayedText(prev => prev + words[wordIndex][charIndex]);
          setCharIndex(prev => prev + 1);
        }, 150);
        return () => clearTimeout(timeout);
      } else if (wordIndex < words.length - 1) {
        const timeout = setTimeout(() => {
          setDisplayedText(prev => prev + ' ');
          setWordIndex(prev => prev + 1);
          setCharIndex(0);
        }, 300);
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, wordIndex, words]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Fade */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070)',
            opacity: 0.08
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-pink-400 to-rose-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float-slow"></div>
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center pt-20">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight min-h-[1.2em]">
            {displayedText}
            <span className="animate-pulse">|</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 font-light animate-fade-in-up">
            Data Scientist crafting intelligent solutions through ML & AI
          </p>

          <div className="pt-12 animate-bounce">
            <ChevronDown className="mx-auto text-purple-600" size={40} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;