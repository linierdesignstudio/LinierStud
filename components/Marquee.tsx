
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Marquee: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative overflow-hidden py-6 sm:py-8 md:py-16 bg-white dark:bg-neutral-950 border-y border-neutral-200 dark:border-neutral-800 transition-colors duration-500">
      <div className="whitespace-nowrap animate-marquee flex items-center">
        {[...Array(4)].map((_, i) => (
          <span 
            key={i} 
            className="text-4xl sm:text-6xl md:text-8xl font-display font-bold tracking-tighter mx-5 sm:mx-8 text-[#B7FF00] uppercase opacity-100"
          >
            {t.home.marquee}
          </span>
        ))}
      </div>
      {/* Gradient fade on sides - Updated to match the page background */}
      <div className="absolute top-0 left-0 h-full w-12 md:w-32 bg-gradient-to-r from-white dark:from-neutral-950 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 h-full w-12 md:w-32 bg-gradient-to-l from-white dark:from-neutral-950 to-transparent z-10 pointer-events-none"></div>
    </div>
  );
};

export default Marquee;
