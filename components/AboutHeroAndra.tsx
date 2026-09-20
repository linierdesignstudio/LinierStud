import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const AboutHeroAndra: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="w-full">
      {/* Top Section - Light Background */}
      <section className="relative w-full bg-[#f4f4f2] text-neutral-950 pt-32 pb-12 md:pt-40 md:pb-0 overflow-hidden">
        {/* Top Navbar items mock for the layout feel (optional, if you want it to look exactly like the image) */}
        <div className="absolute top-8 left-6 md:left-12 text-xs font-bold uppercase tracking-widest hidden md:block">
          Linier Studio
        </div>

        <div className="w-full flex flex-col md:flex-row relative z-10">
          
          {/* Left Side (Empty space for text overlap) */}
          <div className="w-full md:w-[45%] flex flex-col justify-end px-6 md:px-12 pb-12 md:pb-24 pt-48 md:pt-0">
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.5 }}
               className="max-w-xs z-20"
             >
                <p className="text-sm md:text-base font-medium text-neutral-900 leading-relaxed">
                   {t.about.hero_subtitle}
                </p>
             </motion.div>
          </div>

          {/* Right Side (Image) */}
          <div className="w-full md:w-[55%] relative">
             <div className="w-full aspect-[4/3] md:aspect-auto md:h-[75vh] relative overflow-hidden">
                <img 
                   src="/1.jpeg" 
                   alt="Architecture Detail" 
                   className="w-full h-full object-cover"
                />
                
                <Link to="/portfolio" className="absolute bottom-6 left-6 text-white text-sm font-medium flex items-center gap-2 group z-20 hover:text-bronze-500 transition-colors">
                   <span className="group-hover:translate-x-2 transition-transform duration-300">→</span> <span className="underline decoration-transparent group-hover:decoration-current underline-offset-4 transition-all duration-300">{t.about.learn_more}</span>
                </Link>
             </div>
          </div>
          
          {/* OVERLAPPING HUGE TEXT */}
          <div className="absolute -top-4 md:-top-4 left-0 w-full px-4 md:px-12 pointer-events-none z-30">
             <motion.h1 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[20vw] md:text-[16vw] font-display font-bold tracking-tighter leading-[0.75] text-neutral-950 uppercase"
             >
                Linier
             </motion.h1>
             <motion.h1 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-[20vw] md:text-[16vw] font-display font-bold tracking-tighter leading-[0.75] text-neutral-950 md:ml-[15%] uppercase"
             >
                Studio
             </motion.h1>
          </div>
        </div>
      </section>

      {/* Bottom Section - Sage Green */}
      <section className="relative w-full bg-[#8c9c8a] text-white pt-20 pb-32 md:pt-32 md:pb-48 px-6 md:px-12 overflow-hidden">
         <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
            
            {/* Left Text */}
            <div className="md:col-span-4 flex flex-col justify-between min-h-[40vh] z-20">
               <motion.h2 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
                 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight leading-[1.1] font-medium"
                 dangerouslySetInnerHTML={{ __html: t.about.firm_and_philosophy }}
               >
               </motion.h2>
               
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, delay: 0.2 }}
                 className="mt-16 md:mt-auto"
               >
                  <p className="text-xs font-mono opacity-60 mb-4 tracking-widest uppercase">01 — 03</p>
                  <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-md">
                     {t.about.firm_desc}
                  </p>
               </motion.div>
            </div>
            
            {/* Right Offset Images */}
            <div className="md:col-span-8 relative min-h-[50vh] md:min-h-[70vh] w-full mt-12 md:mt-0 z-10">
               {/* Image 1 */}
               <motion.div 
                 initial={{ opacity: 0, y: 40 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1 }}
                 className="absolute top-0 left-0 w-[65%] aspect-[16/9] md:aspect-[4/3] bg-neutral-200 shadow-2xl"
               >
                  <img 
                     src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop" 
                     className="w-full h-full object-cover" 
                     alt="Firm Detail 1" 
                  />
               </motion.div>
               
               {/* Image 2 */}
               <motion.div 
                 initial={{ opacity: 0, y: 60 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1, delay: 0.2 }}
                 className="absolute top-[40%] md:top-1/3 right-0 w-[55%] md:w-[45%] aspect-[3/4] bg-neutral-300 shadow-2xl"
               >
                  <img 
                     src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop" 
                     className="w-full h-full object-cover" 
                     alt="Firm Detail 2" 
                  />
                  {/* Decorative lines like in the image */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 border-t border-l border-white/40"></div>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b border-r border-white/40"></div>
               </motion.div>
            </div>
            
         </div>
      </section>
    </div>
  );
};

export default AboutHeroAndra;
