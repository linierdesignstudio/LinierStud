
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [pct, setPct] = useState(0);
  
  // Animation States
  const [sparkOpacity, setSparkOpacity] = useState(0);
  const [lineVHeight, setLineVHeight] = useState('0');
  const [lineHWidth, setLineHWidth] = useState('0');
  const [sparkHeight, setSparkHeight] = useState('4px');
  const [linesOpacity, setLinesOpacity] = useState(1);
  
  const [text1State, setText1State] = useState<'idle' | 'active' | 'exit'>('idle');
  const [text2State, setText2State] = useState<'idle' | 'active' | 'exit'>('idle');
  
  const [brandVisible, setBrandVisible] = useState(false);

  useEffect(() => {
    let interval: ReturnType<typeof setTimeout>;
    const runSequence = async () => {
      const wait = (ms: number) => new Promise(r => setTimeout(r, ms));

      // 0. Initial
      await wait(300);

      // 1. Spark
      setSparkOpacity(1);
      await wait(400);

      // 2. Vertical
      setSparkHeight('30vh');
      setLineVHeight('30vh');
      setText1State('active');
      
      // Text 1 duration
      await wait(1500);
      setText1State('exit');
      await wait(200); 

      // 3. Horizontal
      setLineHWidth('40vw');
      setSparkOpacity(0);
      setText2State('active');
      
      // Text 2 duration
      await wait(1500);
      setText2State('exit');
      await wait(200);

      // 4. Full Expand
      setLineVHeight('100vh');
      setLineHWidth('100vw');
      setLinesOpacity(0.1);
      
      await wait(600);

      // 5. Brand Reveal
      setBrandVisible(true);

      // 6. Count
      let p = 0;
      // Count to 100
      interval = setInterval(() => {
        p += 2;
        if (p > 100) p = 100;
        setPct(p);
        if (p === 100) {
          clearInterval(interval);
          // Allow the 100% to be seen briefly, then trigger completion
          setTimeout(() => {
            onComplete();
          }, 800);
        }
      }, 30);
    };

    runSequence();
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
    >
       <style>{`
         .noise-overlay {
            position: absolute; top: 0; left: 0; width: 100%; height: 100%;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
            pointer-events: none; opacity: 0.4;
         }
         .line {
            position: absolute; background: rgba(0, 0, 0, 0.9);
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
            transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
            top: 50%; left: 50%; transform: translate(-50%, -50%);
         }
         .dark .line {
            background: rgba(255, 255, 255, 0.9);
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.2);
         }
         .spark {
            position: absolute; width: 4px; background: #000; border-radius: 50%;
            box-shadow: 0 0 20px 5px rgba(0, 0, 0, 0.8);
            top: 50%; left: 50%; transform: translate(-50%, -50%);
            transition: opacity 0.5s, height 0.8s ease-in-out;
         }
         .dark .spark {
            background: #fff;
            box-shadow: 0 0 20px 5px rgba(255, 255, 255, 0.8);
         }
         .narrative-text {
            display: block; font-family: 'Space Grotesk', sans-serif; font-size: 0.85rem; font-weight: 300;
            letter-spacing: 0.4rem; text-transform: uppercase;
            opacity: 0; transform: translateY(15px); filter: blur(5px);
            transition: all 0.6s ease-out; position: absolute; width: 100%; text-align: center; left: 0;
            color: #000;
         }
         .dark .narrative-text {
            color: #fff;
         }
         @media (max-width: 768px) {
            .narrative-text {
               font-size: 0.65rem;
               letter-spacing: 0.2rem;
               padding: 0 1rem;
            }
         }
         .narrative-text.active { opacity: 1; transform: translateY(0); filter: blur(0); }
         .narrative-text.exit { opacity: 0; transform: translateY(-15px); filter: blur(10px); }
         .brand-name {
            display: flex; justify-content: center; align-items: center;
            transform: translateY(100%); transition: transform 1.2s cubic-bezier(0.19, 1, 0.22, 1);
         }
       `}</style>

       {/* TOP SHUTTER - MATCHED COLOR TO #050505 (Neutral-950) */}
       <motion.div 
         className="absolute top-0 left-0 w-full h-1/2 bg-white dark:bg-[#050505] z-0"
         initial={{ y: 0 }}
         exit={{ 
            y: "-100%", 
            transition: { duration: 1.2, ease: [0.83, 0, 0.17, 1], delay: 0.1 } 
         }}
       >
          <div className="noise-overlay"></div>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-neutral-200 dark:bg-white/10"></div>
       </motion.div>

       {/* BOTTOM SHUTTER - MATCHED COLOR TO #050505 (Neutral-950) */}
       <motion.div 
         className="absolute bottom-0 left-0 w-full h-1/2 bg-white dark:bg-[#050505] z-0"
         initial={{ y: 0 }}
         exit={{ 
            y: "100%", 
            transition: { duration: 1.2, ease: [0.83, 0, 0.17, 1], delay: 0.1 } 
         }}
       >
          <div className="noise-overlay"></div>
          <div className="absolute top-0 left-0 w-full h-[1px] bg-neutral-200 dark:bg-white/10"></div>
       </motion.div>
       
       {/* CONTENT CONTAINER - Fades out slightly faster than shutters open */}
       <motion.div 
         className="relative w-full h-full flex flex-col justify-center items-center z-10"
         exit={{ opacity: 0, transition: { duration: 0.5 } }}
       >
          {/* Visual Elements */}
          <div className="spark" style={{ opacity: sparkOpacity, height: sparkHeight }}></div>
          <div className="line" style={{ width: '1px', height: lineVHeight, opacity: linesOpacity }}></div>
          <div className="line" style={{ width: lineHWidth, height: '1px', opacity: linesOpacity }}></div>

          {/* Narrative Text */}
          <div className="absolute z-10 text-center w-full top-1/2 -translate-y-1/2">
              <span className={`narrative-text ${text1State}`}>Every line has a purpose</span>
              <span className={`narrative-text ${text2State}`}>Perfect in Linear</span>
          </div>

          {/* Brand Final */}
          <div className="relative overflow-hidden z-20 text-center">
             <div className="brand-name" style={{ transform: brandVisible ? 'translateY(0)' : 'translateY(100%)' }}>
                <span
                   role="img"
                   aria-label="Linier Studio Logo"
                   className="block w-[48vw] h-[48vw] md:w-[30vw] md:h-[30vw] min-w-[170px] min-h-[170px] max-w-[350px] max-h-[350px] bg-neutral-900 dark:bg-white"
                   style={{
                     WebkitMaskImage: 'url("/LInier%20ds%20copy11.png")',
                     maskImage: 'url("/LInier%20ds%20copy11.png")',
                     WebkitMaskSize: '150% auto',
                     maskSize: '150% auto',
                     WebkitMaskPosition: '50% 35%',
                     maskPosition: '50% 35%',
                     WebkitMaskRepeat: 'no-repeat',
                     maskRepeat: 'no-repeat',
                     WebkitMaskMode: 'luminance',
                               maskMode: 'luminance',
                            } as React.CSSProperties & { WebkitMaskMode: string; maskMode: string }}
                />
             </div>
          </div>
          <div className={`mt-6 md:mt-8 text-[10px] md:text-xs font-light tracking-[0.3em] transition-opacity duration-1000 text-neutral-900 dark:text-white ${brandVisible ? 'opacity-100' : 'opacity-0'}`}>
             ARCHITECTURE INTERIOR & CONTRACTORS
          </div>

          {/* Loader UI */}
          <div className="absolute bottom-10 flex items-center gap-2 font-mono text-xs opacity-50 tracking-widest text-neutral-900 dark:text-white">
             <span>{pct.toString().padStart(2, '0')}</span>%
          </div>
       </motion.div>
    </motion.div>
  );
};

export default Preloader;
