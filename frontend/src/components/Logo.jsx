import React from 'react';

const Logo = ({ size = 'default' }) => {
  const sizeClasses = {
    small: 'w-8 h-8 text-sm',
    default: 'w-10 h-10 text-base',
    large: 'w-14 h-14 text-xl'
  };

  return (
    <div className={`${sizeClasses[size]} relative flex items-center justify-center`}>
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-lg rotate-3 animate-pulse"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 via-blue-500 to-indigo-600 rounded-lg -rotate-3 opacity-80"></div>
      
      {/* Logo text */}
      <div className="relative z-10 flex items-center justify-center w-full h-full bg-gradient-to-br from-indigo-600 to-purple-700 rounded-lg shadow-lg">
        <span className="font-bold text-white tracking-tight">
          DB
        </span>
      </div>
    </div>
  );
};

export default Logo;