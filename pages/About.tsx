import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import ScrollHighlightText from '../components/ScrollHighlightText';
import RevealOnScroll from '../components/RevealOnScroll';
import RevealSentences from '../components/RevealSentences';
import AboutHeroAndra from '../components/AboutHeroAndra';
import TextWave from '../components/TextWave';

const About: React.FC = () => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Scroll animations for smooth parallax and fades
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -60]);

  const cards = [
    {
      title: t.about.vision_title,
      description: t.about.vision_text,
      tag: "01 / VISION",
      color: "bg-neutral-100 dark:bg-neutral-900",
      top: "top-6 md:top-24"
    },
    {
      title: t.about.mission_title,
      description: t.about.mission_text,
      tag: "02 / MISSION",
      color: "bg-neutral-200 dark:bg-neutral-800",
      top: "top-10 md:top-32"
    },
    {
      title: t.about.core_values_title,
      description: t.about.core_values_desc,
      tag: "03 / VALUES",
      color: "bg-white dark:bg-neutral-950",
      top: "top-14 md:top-40",
      isCommitment: true
    }
  ];

  return (
    <div ref={containerRef} className="w-full bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white selection:bg-bronze-500 selection:text-white">
      
      {/* NEW HERO SECTION INSPIRED BY REFERENCE */}
      <AboutHeroAndra />

      {/* HEADER SECTION (Restored) */}
      <section className="relative pt-24 md:pt-32 pb-16 px-6 md:px-12 overflow-hidden flex flex-col gap-12 bg-white dark:bg-neutral-950 border-t border-neutral-200 dark:border-white/5">
        <motion.div style={{ y: heroY }} className="relative z-10 w-full max-w-6xl mx-auto flex flex-col">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="flex items-center gap-4 mb-6"
            >
                <div className="h-[2px] w-12 bg-bronze-500"></div>
                <span className="text-xs font-mono uppercase tracking-widest text-bronze-500">Linier Studio</span>
            </motion.div>
            
            <h1 className="text-5xl sm:text-7xl md:text-[9vw] leading-[0.85] font-display font-bold uppercase tracking-tighter text-neutral-900 dark:text-white mb-8">
                <TextWave text={t.about.title} />
            </h1>
            
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
               className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8"
            >
                <p className="text-lg md:text-2xl font-light text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
                    {t.about.subtitle || "The Studio"}
                </p>
                <div className="hidden md:block w-[1px] h-8 bg-white/20"></div>
                <p className="text-sm font-mono text-neutral-500 uppercase tracking-widest">
                    Design / Interior / Construction
                </p>
            </motion.div>
        </motion.div>
      </section>

      {/* STATEMENT SECTION (Restored) */}
      <section className="px-6 md:px-12 py-16 md:py-32 bg-white dark:bg-neutral-950">
         <div className="w-full max-w-6xl mx-auto">
              <div className="text-2xl sm:text-3xl md:text-5xl lg:text-[2.8rem] font-display font-normal leading-[1.3] text-neutral-800 dark:text-neutral-200">
                 <ScrollHighlightText content={t.about.paragraph_1} />
              </div>
         </div>
      </section>

      {/* MULTI-COLUMN CONTENT */}
      <section className="px-6 md:px-12 py-16 md:py-32 bg-neutral-900/20">
           <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
                {/* Column One: Our Approach */}
                <div className="md:col-span-6 flex flex-col gap-8 md:gap-12">
                     <RevealOnScroll>
                          <div className="flex items-center gap-4 mb-4">
                               <span className="font-mono text-sm text-bronze-500">01 /</span>
                               <h3 className="text-xs font-mono text-neutral-900 dark:text-white uppercase tracking-widest">Our Approach</h3>
                          </div>
                          <div className="text-base md:text-lg font-light text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-6">
                               <RevealSentences>{t.about.paragraph_2}</RevealSentences>
                               <RevealSentences>{t.about.paragraph_3}</RevealSentences>
                          </div>
                     </RevealOnScroll>
                </div>
                {/* Column Two: Our Scope */}
                <div className="md:col-span-6 flex flex-col gap-8 md:gap-12">
                     <RevealOnScroll>
                          <div className="flex items-center gap-4 mb-4">
                               <span className="font-mono text-sm text-bronze-500">02 /</span>
                               <h3 className="text-xs font-mono text-neutral-900 dark:text-white uppercase tracking-widest">Our Scope</h3>
                          </div>
                          <div className="text-base md:text-lg font-light text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-6">
                               <RevealSentences>{t.about.paragraph_4}</RevealSentences>
                               <RevealSentences>{t.about.paragraph_5}</RevealSentences>
                          </div>
                     </RevealOnScroll>
                </div>
           </div>
      </section>

      {/* STACKED CARDS SECTION */}
      <section className="px-6 md:px-12 py-16 md:py-32 relative bg-white dark:bg-neutral-950">
        <div className="w-full max-w-5xl mx-auto relative">
          <div className="mb-20">
             <span className="text-[10px] font-mono text-bronze-500 uppercase tracking-widest block mb-2">[ DIRECTIVES ]</span>
             <h2 className="text-3xl md:text-5xl font-display font-bold uppercase tracking-tight text-neutral-900 dark:text-white">Our Philosophy</h2>
          </div>
          
          <div className="flex flex-col gap-4 pb-32">
            {cards.map((card, idx) => (
              <div 
                key={idx} 
                className={`relative sticky ${card.top} w-full min-h-[calc(100svh-3rem)] md:min-h-[60vh] ${card.color} rounded-2xl border border-neutral-300 dark:border-white/10 p-6 md:p-16 flex flex-col shadow-2xl transition-all duration-500`}
                style={{ zIndex: idx }}
              >
                <div className="flex justify-between items-start mb-8 md:mb-16">
                   <span className="text-xs font-mono text-bronze-500 tracking-widest uppercase">{card.tag}</span>
                   <span className="text-xs font-mono text-neutral-500">0{idx + 1}</span>
                </div>
                
                <div className="flex-grow flex flex-col justify-end">
                   <h3 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter text-neutral-900 dark:text-white mb-6">
                     {card.title}
                   </h3>
                   {card.isCommitment ? (
                     <div className="w-full">
                       <div className="text-xl md:text-3xl font-display font-normal leading-[1.3] text-neutral-800 dark:text-neutral-200 mb-12 max-w-4xl">
                         <ScrollHighlightText content={t.about.paragraph_6} />
                       </div>
                       
                       <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-8 border-t border-neutral-300 dark:border-white/10">
                            <div className="md:col-span-4">
                                 <span className="text-[10px] font-mono text-bronze-500 uppercase tracking-widest block mb-2">[ TRUST ]</span>
                                 <h4 className="text-lg font-display uppercase tracking-tight text-neutral-900 dark:text-white font-medium">Guaranteed Craftsmanship.</h4>
                            </div>
                            <div className="md:col-span-8 text-sm md:text-base text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
                                 {t.about.trusted_statement}
                            </div>
                       </div>
                     </div>
                   ) : (
                     <p className="text-lg md:text-2xl font-light text-neutral-700 dark:text-neutral-300 max-w-3xl leading-relaxed">
                       {card.description}
                     </p>
                   )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
