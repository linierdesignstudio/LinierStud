import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const PortfolioHero: React.FC = () => {
  const { t } = useLanguage();
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full bg-neutral-100 dark:bg-[#0a0a0a] text-neutral-950 dark:text-white px-6 pt-32 pb-16 md:px-12 md:pt-40 lg:px-20 relative overflow-hidden mb-16"
    >
      {/* Top Bar inside card */}
      <div className="flex justify-between items-center mb-12 md:mb-20">
         <div className="text-xs font-bold uppercase tracking-widest invisible md:visible">Linier Studio</div>
          <div className="flex items-center gap-4">
             <Link to="/contact" className="bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 px-5 py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors">
                 {t.portfolio.hero_get_in_touch} <span className="text-white/70 dark:text-neutral-950/70">↗</span>
             </Link>
         </div>
      </div>
      
      {/* Typography Block */}
      <div className="flex flex-col">
          <div className="overflow-hidden">
              <motion.h1 
                 initial={{ y: "100%" }}
                 animate={{ y: 0 }}
                 transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                 className="text-[13vw] md:text-[9.5vw] font-display font-bold uppercase tracking-tighter leading-[0.85] m-0 p-0"
              >
                 {t.portfolio.hero_title_1}
              </motion.h1>
          </div>
          <div className="overflow-hidden">
              <motion.h1 
                 initial={{ y: "100%" }}
                 animate={{ y: 0 }}
                 transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                 className="text-[13vw] md:text-[9.5vw] font-display font-bold uppercase tracking-tighter leading-[0.85] m-0 p-0"
              >
                 {t.portfolio.hero_title_2}
              </motion.h1>
          </div>
          
          <div className="flex flex-col md:flex-row items-start md:items-end mt-4 md:mt-2 lg:ml-[22%] gap-4 md:gap-8">
              <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.8, delay: 0.4 }}
                 className="w-full sm:w-64 h-40 md:w-80 md:h-52 overflow-hidden shrink-0 mt-4 md:mt-0"
              >
                 <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop" alt="Home design" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </motion.div>
              <div className="flex flex-col justify-center">
                 <div className="overflow-hidden">
                     <motion.h1 
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[13vw] md:text-[9.5vw] font-display font-bold uppercase tracking-tighter leading-[0.85] m-0 p-0"
                     >
                        {t.portfolio.hero_title_3}
                     </motion.h1>
                 </div>
                 <div className="overflow-hidden">
                     <motion.h1 
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[13vw] md:text-[9.5vw] font-display font-bold uppercase tracking-tighter leading-[0.85] m-0 p-0"
                     >
                        {t.portfolio.hero_title_4}
                     </motion.h1>
                 </div>
              </div>
          </div>
          
          {/* Bottom text block */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.6 }}
             className="flex flex-col md:flex-row justify-between items-start mt-12 md:mt-16 lg:ml-[22%] relative"
          >
             <div className="max-w-md text-sm md:text-base font-medium leading-relaxed text-neutral-800 dark:text-neutral-300">
                <p className="mb-6 whitespace-pre-wrap">
                   {t.portfolio.hero_desc_1}
                </p>
                <p className="mb-8 whitespace-pre-wrap">
                   {t.portfolio.hero_desc_2}
                </p>
                <Link to="#portfolio-projects" className="bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 px-6 py-3.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors">
                   {t.portfolio.hero_btn} <span className="text-white/70 dark:text-neutral-950/70">↗</span>
                </Link>
             </div>
             
             <div className="hidden lg:block absolute right-0 top-0">
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">{t.portfolio.hero_tag}</span>
             </div>
          </motion.div>
      </div>
    </motion.div>
  );
};

export default PortfolioHero;
