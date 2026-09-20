import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const AboutHeroTypography: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="relative w-full h-full bg-white dark:bg-neutral-950 flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_0%,transparent_60%)] pointer-events-none" />
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-6xl lg:text-8xl font-display font-bold uppercase tracking-tighter text-white text-center z-10"
      >
        {t.about.title}
      </motion.h1>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="mt-8 text-neutral-600 dark:text-neutral-400 font-mono text-sm uppercase tracking-widest z-10 text-center"
      >
        {t.about.subtitle || "The Studio"}
      </motion.div>
    </div>
  );
};

export default AboutHeroTypography;
