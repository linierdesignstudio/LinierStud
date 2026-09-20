
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const PhilosophySection: React.FC = () => {
  const { t } = useLanguage();
  
  const images = [
    `${import.meta.env.BASE_URL}R2.jpg`, // ARCHITECTURE / FORM
    `${import.meta.env.BASE_URL}2.jpeg`, // INTERIOR
    `${import.meta.env.BASE_URL}cons.png`  // CONSTRUCTION
  ];

  return (
    <div className="flex flex-col w-full pb-6 md:pb-10">
      {/* 1. Header Area */}
      <div className="w-full flex flex-col items-center justify-center px-6 md:px-12 py-20 md:py-48 text-center">
            <span className="text-sm font-mono text-bronze-500 uppercase tracking-widest mb-8 border border-bronze-500/30 px-4 py-2 rounded-full">
                {t.philosophy.title}
            </span>
            {/* Reduced font size from 6xl/9xl to 5xl/8xl */}
            <h2 className="text-4xl md:text-7xl lg:text-8xl font-display font-bold uppercase tracking-tighter max-w-6xl leading-none text-neutral-900 dark:text-white">
              {t.philosophy.hero_title_1} <br/><span className="italic font-serif text-neutral-500">{t.philosophy.hero_title_2}</span>
            </h2>
      </div>

      {/* 2. Philosophy Items */}
      <div className="flex flex-col gap-16 md:gap-40 lg:gap-64">
        {t.philosophy.items.map((item, i) => (
            <PhilosophyItem 
                key={i} 
                item={item} 
                index={i} 
                image={images[i]}
            />
        ))}
      </div>
    </div>
  );
};

const PhilosophyItem: React.FC<{ item: any, index: number, image: string }> = ({ item, index, image }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // ZigZag Pattern: 
  // Index 0 (Even) -> Image Left, Text Right
  // Index 1 (Odd)  -> Text Left, Image Right
  const isReverse = index % 2 !== 0;

  return (
    <div 
      ref={ref}
      className="w-full flex items-center bg-transparent transition-colors duration-500 text-neutral-900 dark:text-white"
    >
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-8 md:gap-16 lg:gap-32 ${isReverse ? 'md:flex-row-reverse' : ''}`}
        >
            {/* IMAGE SIDE */}
            <div className="w-full md:w-5/12 relative group">
                <div className="relative overflow-hidden aspect-[3/4] w-full bg-neutral-900">
                    <div className={`absolute top-6 z-20 bg-white text-black px-4 py-3 text-xs font-bold uppercase tracking-widest ${isReverse ? 'right-6' : 'left-6'}`}>
                        {item.tag}
                    </div>

                    <img 
                        src={image} 
                        alt={item.title}
                        className="w-full h-full object-cover transition-all duration-1000 ease-out opacity-100 scale-100 group-hover:scale-105"
                    />
                </div>
            </div>

            {/* TEXT SIDE */}
            <div className="w-full md:w-7/12 flex flex-col justify-center">
                <div className={`flex flex-col ${isReverse ? 'md:items-end md:text-right' : 'md:items-start md:text-left'}`}>
                    
                    {/* Giant Title */}
                    <h3 className="text-4xl md:text-6xl lg:text-8xl font-display font-bold uppercase leading-[0.9] mb-6 md:mb-10 text-neutral-900 dark:text-white tracking-tighter">
                        {item.title}
                    </h3>
                    
                    {/* Removed decorative bronze line here */}

                    {/* Larger Body Text for "Editorial" Feel - Resized to text-lg md:text-2xl */}
                    <p className="text-base md:text-xl lg:text-2xl text-neutral-600 dark:text-neutral-400 font-light leading-relaxed max-w-2xl">
                        {item.desc}
                    </p>

                    {/* Stats Footer */}
                    <div className="mt-8 md:mt-16 pt-8 border-t border-neutral-300 dark:border-white/10 w-full">
                        <div className={`flex flex-col gap-2 ${isReverse ? 'md:items-end' : 'md:items-start'}`}>
                            <span className="text-xs font-mono uppercase text-neutral-500 tracking-widest">{item.statLabel}</span>
                            <span className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-neutral-900 dark:text-white uppercase tracking-tight leading-tight">{item.statValue}</span>
                        </div>
                    </div>

                </div>
            </div>
        </motion.div>
    </div>
  );
};

export default PhilosophySection;
