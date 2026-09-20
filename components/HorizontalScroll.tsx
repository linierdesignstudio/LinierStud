
import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const HorizontalScroll: React.FC = () => {
  const { t } = useLanguage();
  const targetRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [scrollRange, setScrollRange] = useState(0);
  
  // -- SCROLL LOGIC --
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"] 
  });

  // Measure content width to scroll exactly the right amount
  useEffect(() => {
    const measure = () => {
      if (contentRef.current) {
        const totalWidth = contentRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        setScrollRange(totalWidth - viewportWidth);
      }
    };

    // Initial measure
    measure();

    // Use ResizeObserver for robust updates (e.g. image loads, orientation change)
    const resizeObserver = new ResizeObserver(() => {
      measure();
    });

    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }

    window.addEventListener('resize', measure);
    
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [t.process.steps]); 

  // Transform scroll progress (0-1) to pixel translation
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollRange]);
  
  const images = [
    "https://images.unsplash.com/photo-1555597793-272cb9a61e7e?q=80&w=1600&auto=format&fit=crop", // Dialogue
    "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?q=80&w=1600&auto=format&fit=crop", // Schematic
    "https://images.unsplash.com/photo-1594803138660-f725916f195d?q=80&w=1600&auto=format&fit=crop", // Construct
    "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1600&auto=format&fit=crop"  // Legacy
  ];

  return (
    <section ref={targetRef} className="relative h-[500vh] bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
      
      {/* Sticky Viewport */}
      <div className="sticky top-0 h-[100dvh] flex items-center overflow-hidden">
        
        {/* Moving Content Track */}
        <motion.div 
            ref={contentRef}
            style={{ x }} 
            className="flex items-center pl-6 md:pl-32 gap-12 md:gap-64 w-max relative z-10 will-change-transform"
        >
            
            {/* 1. INTRO / TITLE CARD (Pure Text) */}
            <div className="w-[80vw] md:w-[40vw] shrink-0">
               <h3 className="text-4xl md:text-8xl font-display font-bold uppercase leading-[0.9] tracking-tighter text-neutral-900 dark:text-white mb-8">
                  {t.process.method_title_1} <br/>{t.process.method_title_2} <br/><span className="text-neutral-600">{t.process.method_title_3}</span>
               </h3>
               <p className="text-base md:text-2xl text-neutral-600 dark:text-neutral-400 font-light leading-relaxed max-w-md">
                 {t.process.method_desc}
               </p>
            </div>

            {/* 2. PROCESS CARDS (Gallery Style - No Numbers) */}
            {t.process.steps.map((step, i) => (
                <div key={i} className="group relative w-[85vw] md:w-[50vw] shrink-0 flex flex-col">
                    
                    {/* Cinematic Image Area */}
                    <div className="relative w-full aspect-[16/9] overflow-hidden mb-6 md:mb-10 bg-neutral-900">
                        <motion.img 
                            src={images[i]} 
                            alt={step.title}
                            className="w-full h-full object-cover opacity-100 transition-all duration-1000 ease-out scale-100 group-hover:scale-105"
                        />
                    </div>

                    {/* Text Content - Minimalist */}
                    <div className="flex flex-col gap-2 md:gap-4">
                         <h4 className="text-2xl md:text-4xl font-display font-bold uppercase tracking-tight text-neutral-900 dark:text-white group-hover:text-bronze-500 transition-colors duration-500">
                            {step.title}
                         </h4>
                         <p className="text-base md:text-2xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-light max-w-2xl">
                            {step.desc}
                         </p>
                    </div>

                </div>
            ))}

            {/* Final Spacer */}
            <div className="w-[20vw] shrink-0"></div>

        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScroll;
