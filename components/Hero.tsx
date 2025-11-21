import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-white mb-6 drop-shadow-lg animate-fade-in-up">
          Find Your Peace <br/> at <span className="text-brand-300">Jiraa-inn</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-brand-100 max-w-2xl mb-10 font-light drop-shadow-md">
          Exquisite studios and luxury 2-bedroom suites designed for short stays and long memories.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
            <a 
            href="#accommodations" 
            className="bg-white text-brand-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-brand-50 transition-all shadow-xl hover:scale-105"
            >
            View Rooms
            </a>
            <a 
            href="#contact" 
            className="bg-brand-600/90 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-brand-600 transition-all shadow-xl border border-white/20 hover:scale-105"
            >
            Check Availability
            </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70">
        <ChevronDown size={32} />
      </div>
    </div>
  );
};

export default Hero;