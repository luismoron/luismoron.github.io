import React from 'react';
import { ArrowDown, MapPin, Mail } from 'lucide-react';
import { mockProfile } from '../data/mockData';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 rounded-full blur-2xl opacity-50 animate-pulse"></div>
            <img
              src={mockProfile.avatar}
              alt={mockProfile.name}
              className="relative w-80 h-80 rounded-full mx-auto border-4 border-blue-500/30 shadow-2xl z-10 object-cover object-[50%_35%]"
            />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
            {mockProfile.name}
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            {mockProfile.title}
          </p>

          {/* Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 mb-8">
            <div className="flex items-center space-x-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>{mockProfile.location}</span>
            </div>
            <div className="flex items-center space-x-2 text-muted-foreground">
              <Mail className="w-4 h-4" />
              <span>{mockProfile.email}</span>
            </div>
          </div>

          {/* Bio */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            {mockProfile.bio}
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToAbout}
            className="group inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <span>Conoce más sobre mí</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </section >
  );
};

export default Hero;