
import React from 'react';
import { useParams } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import RevealOnScroll from '../components/RevealOnScroll';
import ScrollHighlightText from '../components/ScrollHighlightText';

// Helper for images (since images aren't in translation file usually, but mapped here)
const ELEMENT_IMAGES: Record<string, string[]> = {
    "1": [ // LIGHT
        "https://images.unsplash.com/photo-1507646227500-4d389b0012be?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200&auto=format&fit=crop"
    ],
    "2": [ // TEXTURE
        "https://images.unsplash.com/photo-1596627689914-7299a47321c1?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1620626012053-93f268504dd9?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1617159268737-e73b4668e832?q=80&w=1200&auto=format&fit=crop"
    ],
    "3": [ // VOID
        "https://images.unsplash.com/photo-1519962551779-513473b64cf6?q=80&w=2000&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1606744881471-a748801be956?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1594803138660-f725916f195d?q=80&w=1200&auto=format&fit=crop"
    ]
};

const ElementDetail: React.FC = () => {
  const { id } = useParams();
  const { t } = useLanguage();
  
  // Find data based on ID
  const elementIndex = t.elements?.findIndex(e => e.id.toString() === id);
  const element = elementIndex !== undefined && elementIndex >= 0 ? t.elements[elementIndex] : null;
  
  // Images
  const images = id && ELEMENT_IMAGES[id] ? ELEMENT_IMAGES[id] : [element?.image || ""];

  // Scroll Animations
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const titleY = useTransform(scrollYProgress, [0, 0.4], [0, 200]);

  if (!element) return <div className="h-screen bg-white dark:bg-neutral-950 flex items-center justify-center text-neutral-900 dark:text-white">Element Not Found</div>;

  return (
    <div className="w-full bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white selection:bg-bronze-500 selection:text-white overflow-hidden">
        
        {/* 1. HERO - IMMERSIVE TYPOGRAPHY */}
        <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden border-b border-neutral-300 dark:border-white/10">
            {/* Removed opacity-40 so image is clear and remove grayscale */}
            <motion.div style={{ scale: heroScale }} className="absolute inset-0 z-0">
                 <img src={images[0]} alt={element.title} className="w-full h-full object-cover" />
            </motion.div>
            
            <motion.div style={{ y: titleY }} className="relative z-10 text-center mix-blend-difference text-white">
                 <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="block text-sm font-mono text-bronze-500 uppercase tracking-widest mb-4"
                 >
                     Deconstructed /// 0{element.id}
                 </motion.span>
                 <h1 className="text-[20vw] leading-[0.75] font-display font-bold uppercase tracking-tighter text-white">
                     {element.title}
                 </h1>
                 <motion.p 
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 0.5 }}
                     className="mt-8 text-xl md:text-3xl font-light text-neutral-300 tracking-wide uppercase"
                 >
                     {element.subtitle}
                 </motion.p>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 1 }}
               className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-16 bg-white/50" />
            </motion.div>
        </section>

        {/* 2. SPLIT LAYOUT: NARRATIVE & STICKY IMAGE */}
        <section className="relative w-full">
             <div className="flex flex-col md:flex-row">
                 
                 {/* Left: Sticky Image */}
                 <div className="hidden md:block w-1/2 h-screen sticky top-0 border-r border-neutral-300 dark:border-white/10 overflow-hidden">
                     <img src={images[1] || images[0]} alt="Detail" className="w-full h-full object-cover opacity-100" />
                     <div className="absolute bottom-8 left-8 text-[10px] font-mono uppercase text-white/50">
                         Fig 1.1 — {element.title} Study
                     </div>
                 </div>

                 {/* Right: Scrolling Text */}
                 <div className="w-full md:w-1/2 bg-white dark:bg-neutral-950 p-8 md:p-24 flex flex-col gap-32">
                     
                     <div className="min-h-[50vh] flex flex-col justify-center">
                         <RevealOnScroll>
                             <h2 className="text-sm font-bold uppercase tracking-widest text-bronze-500 mb-6">The Definition</h2>
                             <p className="text-2xl md:text-4xl font-light leading-relaxed text-neutral-200">
                                 {element.details?.narrative}
                             </p>
                         </RevealOnScroll>
                     </div>

                     <div className="min-h-[30vh]">
                         <RevealOnScroll>
                             <h2 className="text-sm font-bold uppercase tracking-widest text-bronze-500 mb-6">The Application</h2>
                             <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                 {element.details?.application}
                             </p>
                         </RevealOnScroll>
                     </div>

                 </div>
             </div>
        </section>

        {/* 3. PHILOSOPHY QUOTE (CENTERED) */}
        <section className="py-40 px-6 border-y border-neutral-300 dark:border-white/10 bg-neutral-900">
             <div className="max-w-5xl mx-auto text-center">
                 <div className="mb-8 flex justify-center">
                    <div className="w-12 h-1 bg-bronze-500" />
                 </div>
                 <div className="text-3xl md:text-6xl font-display font-bold uppercase leading-tight text-white">
                     <ScrollHighlightText content={element.details?.philosophy || element.desc} />
                 </div>
             </div>
        </section>

        {/* 4. GALLERY STRIP */}
        <section className="w-full overflow-hidden py-32 bg-white dark:bg-neutral-950">
            <div className="container mx-auto px-6 mb-12 flex justify-between items-end">
                <h3 className="text-xl font-display font-bold uppercase">Visual Index</h3>
                <span className="text-xs font-mono text-neutral-500">01 — 03</span>
            </div>
            
            <div className="flex gap-8 px-6 md:px-12 overflow-x-auto pb-8 snap-x">
                {images.map((img, i) => (
                    <RevealOnScroll key={i} delay={i * 0.1} className="shrink-0 w-[85vw] md:w-[40vw] snap-center">
                        <div className="aspect-[4/3] bg-neutral-900 overflow-hidden relative group">
                            <img 
                                src={img} 
                                alt="Gallery" 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                        </div>
                        <div className="mt-4 flex justify-between border-t border-neutral-300 dark:border-white/10 pt-2">
                             <span className="text-xs font-mono text-neutral-500">Plate 0{i+1}</span>
                             <span className="text-xs font-mono text-neutral-500">Raw Capture</span>
                        </div>
                    </RevealOnScroll>
                ))}
            </div>
        </section>

    </div>
  );
};

export default ElementDetail;
