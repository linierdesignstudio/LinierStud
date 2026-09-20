import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  threshold?: number;
}

const TextReveal: React.FC<TextRevealProps> = ({ 
  children, 
  className = "", 
  delay = 0,
  threshold = 0.2
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  
  const words = children.split(" ");

  return (
    <span ref={ref} className={`inline-block leading-tight ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-top mr-[0.25em] last:mr-0">
          <motion.span
            initial={{ y: "110%" }}
            animate={isInView ? { y: "0%" } : { y: "110%" }}
            transition={{
              duration: 0.8,
              ease: [0.33, 1, 0.68, 1], // Cubic bezier for "editorial" feel
              delay: delay + (i * 0.02), // Stagger effect per word
            }}
            className="inline-block py-1"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

export default TextReveal;