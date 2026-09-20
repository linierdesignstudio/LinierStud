
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import RevealOnScroll from '../components/RevealOnScroll';
import ServiceHeroTypography from '../components/ServiceHeroTypography';
import RevealSentences from '../components/RevealSentences';
import ScrollHighlightText from '../components/ScrollHighlightText';

// Mapping images to Service IDs
const SERVICE_IMAGES: Record<string, string> = {
  'arch_int': 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1600&auto=format&fit=crop',
  'design_build': 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop',
    'construction': "/cons.png",
  'renovation': 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1600&auto=format&fit=crop',
  'consultation': 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1600&auto=format&fit=crop',
  'management': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop'
};

const Services: React.FC = () => {
  const { t } = useLanguage();
  
  // State to track which image to show on the right based on scroll position
  const [activeImageId, setActiveImageId] = useState<string>('arch_int');

  return (
    <div className="w-full bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white selection:bg-bronze-500 selection:text-white pb-24">

      {/* 1. HERO TYPOGRAPHY SECTION */}
      <ServiceHeroTypography />

      
      {/* 1. HERO SECTION */}
      <section className="px-6 md:px-12 mb-32 md:mb-48">
        <RevealOnScroll>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-bronze-500"></div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-600 dark:text-neutral-400">
              {t.services.hero_sub}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-[10vw] font-display font-bold uppercase tracking-tighter leading-[0.8] mb-12 mix-blend-difference text-white">
            {t.services.hero_title_1} <br/>
            <span className="text-neutral-600">{t.services.hero_title_2}</span>
          </h1>
        </RevealOnScroll>
      </section>

      {/* 2. OVERVIEW SECTION */}
      <section className="px-6 md:px-12 mb-32 md:mb-48">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-neutral-300 dark:border-white/10 pt-12">
               <div className="md:col-span-4">
                   <RevealOnScroll>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-bronze-500 sticky top-32">
                            {t.services.overview.title}
                        </h3>
                   </RevealOnScroll>
               </div>
               <div className="md:col-span-8">
                   <div className="text-lg md:text-3xl font-light text-neutral-700 dark:text-neutral-300 leading-relaxed text-justify">
                        <ScrollHighlightText content={t.services.overview.content} />
                   </div>
               </div>
          </div>
      </section>

      {/* 3. SPLIT LAYOUT: STICKY IMAGE (Right) & SCROLLABLE CONTENT (Left) */}
      <section className="relative w-full border-t border-neutral-300 dark:border-white/10">
        <div className="flex flex-col md:flex-row">
            
            {/* LEFT SIDE: SCROLLABLE LIST */}
            <div className="w-full md:w-1/2 z-10 bg-white dark:bg-neutral-950 relative">
                 {t.services.list.map((service: { id: string; title: string; description: string }, index: number) => {
                    return (
                        <motion.div 
                            key={index} 
                            className="min-h-[60vh] flex flex-col justify-center border-b border-neutral-300 dark:border-white/10 px-6 md:px-12 py-24 group transition-colors duration-500 hover:bg-neutral-100 dark:hover:bg-neutral-100 dark:hover:bg-neutral-900"
                            onViewportEnter={() => setActiveImageId(service.id)}
                            viewport={{ amount: 0.5, margin: "0px 0px -20% 0px" }}
                        >
                            <RevealOnScroll>
                                <div className="mb-8">
                                    <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight leading-none mb-8 group-hover:text-neutral-900 dark:group-hover:text-white text-neutral-600 dark:text-neutral-300 transition-colors">
                                        {service.title}
                                    </h2>
                                </div>
                            </RevealOnScroll>

                            <div className="pl-0 md:pl-8 border-l border-neutral-300 dark:border-white/20 md:border-bronze-500/50">
                                <RevealSentences className="text-base md:text-xl text-neutral-600 dark:text-neutral-400 font-light leading-relaxed mb-8">
                                    {service.description}
                                </RevealSentences>
                                
                                <RevealOnScroll delay={0.3}>
                                    <div className="flex items-center gap-2 text-bronze-500 text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-500">
                                        <ArrowDownRight size={16} />
                                        <span>{t.services.comprehensive_solution || "Comprehensive Solution"}</span>
                                    </div>
                                </RevealOnScroll>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* RIGHT SIDE: STICKY IMAGE */}
            <div className="hidden md:block w-1/2 sticky top-0 h-screen right-0 border-l border-neutral-200 dark:border-white/10 overflow-hidden bg-neutral-900">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={activeImageId}
                        initial={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute inset-0 w-full h-full"
                    >
                         <img 
                            src={SERVICE_IMAGES[activeImageId] || SERVICE_IMAGES['arch_int']} 
                            alt="Service Preview" 
                            className="w-full h-full object-cover"
                         />
                         {/* Vignette Overlay */}
                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                    </motion.div>
                </AnimatePresence>

                {/* Dynamic Label on Image */}
                <div className="absolute bottom-12 left-12 z-20">
                     <div className="bg-white/10 backdrop-blur-md border border-neutral-300 dark:border-white/20 text-white px-6 py-4">
                          <span className="block text-[10px] uppercase tracking-widest mb-1 text-neutral-300">{t.services.currently_viewing || "Currently Viewing"}</span>
                         <span className="text-xl font-display font-bold uppercase tracking-tight">
                             {t.services.list.find((s: { id: string; title: string }) => s.id === activeImageId)?.title}
                         </span>
                     </div>
                </div>
            </div>

        </div>
      </section>

      {/* 4. COMMITMENT SECTION */}
      <section className="px-6 md:px-12 mt-32 md:mt-48">
         <div className="bg-white text-neutral-950 p-8 md:p-24 rounded-sm">
             <RevealOnScroll>
                 <div className="max-w-4xl">
                     <div className="flex items-center gap-4 mb-12">
                        <div className="w-8 h-8 bg-neutral-950"></div>
                        <h3 className="text-sm font-bold uppercase tracking-widest text-neutral-500">
                            {t.services.commitment.title}
                        </h3>
                     </div>
                     
                     <div className="text-2xl md:text-5xl font-display font-bold uppercase leading-tight tracking-tighter mb-12 text-neutral-900">
                        <ScrollHighlightText content={`"${t.services.commitment.content}"`} />
                     </div>

                     <div className="w-full h-[1px] bg-neutral-200 mb-8"></div>
                     <div className="flex justify-between items-center">
                         <span className="text-xs font-mono uppercase tracking-widest text-neutral-600">Linier Studio</span>
                         <span className="text-xs font-mono uppercase tracking-widest text-neutral-600">Est. 2024</span>
                     </div>
                 </div>
             </RevealOnScroll>
         </div>
      </section>

    </div>
  );
};

export default Services;
