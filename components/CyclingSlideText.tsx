import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CyclingSlideTextProps {
  words: string[];
  className?: string;
  interval?: number;
}

const CyclingSlideText: React.FC<CyclingSlideTextProps> = ({ 
  words, 
  className = "", 
  interval = 3000 
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span className={`inline-grid min-h-[1.12em] overflow-hidden relative align-bottom pr-4 pb-2 ${className}`}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[index]}
          initial={{ y: "105%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-105%", opacity: 0 }}
          transition={{
            y: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
            opacity: { duration: 0.5, ease: "easeOut" }
          }}
          className="col-start-1 row-start-1 block will-change-transform"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
      
      {/* Invisible element to maintain width/height stability based on the WIDEST word */}
      {/* We render ALL words in the same grid cell. The grid will size itself to the largest one. */}
      {words.map((word, i) => (
        <span key={i} className="col-start-1 row-start-1 opacity-0 pointer-events-none">
          {word}
        </span>
      ))}
    </span>
  );
};

export default CyclingSlideText;