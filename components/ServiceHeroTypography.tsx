import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const ServiceHeroTypography: React.FC = () => {
  const { t } = useLanguage();

  return (
      <div className="w-full bg-neutral-100 dark:bg-[#0a0a0a] text-neutral-950 dark:text-white min-h-[78svh] md:min-h-[90vh] flex flex-col justify-between px-5 sm:px-6 py-6 sm:py-8 md:px-12 md:py-12 relative mb-16 md:mb-32">
         <div className="flex justify-between items-start relative z-10 w-full pt-16 md:pt-8">
         <div className="font-bold text-sm md:text-base tracking-tighter uppercase">
            Linier Studio™
         </div>
      </div>

      {/* Main Typography */}
      <div className="flex flex-col mt-16 sm:mt-20 md:mt-32 w-full">
         <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12.5vw] sm:text-[12.5vw] md:text-[11vw] lg:text-[10.5vw] font-display font-bold uppercase tracking-tighter leading-[0.85] m-0 p-0 text-neutral-950 dark:text-white"
         >
            {t.services.hero_typography_1}
         </motion.h1>
         <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[12.5vw] sm:text-[12.5vw] md:text-[11vw] lg:text-[10.5vw] font-display font-bold uppercase tracking-tighter leading-[0.85] m-0 p-0 text-neutral-950 dark:text-white"
         >
            {t.services.hero_typography_2}
         </motion.h1>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-20 md:mt-32 items-end pb-8">
          <div className="hidden md:block md:col-span-4" />
         <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm md:text-sm font-medium">
             <div className="max-w-xs leading-relaxed text-neutral-950 dark:text-neutral-300">
                 {t.services.hero_typography_desc}
             </div>
             <div className="whitespace-pre-line leading-relaxed text-neutral-600 dark:text-neutral-400">
                 {t.services.hero_typography_col1}
             </div>
             <div className="whitespace-pre-line leading-relaxed text-neutral-600 dark:text-neutral-400">
                 {t.services.hero_typography_col2}
             </div>
         </div>
      </div>
    </div>
  );
};

export default ServiceHeroTypography;
