
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface RevealSentencesProps {
  children: string;
  className?: string;
  delay?: number; // Base delay for the whole block
}

const RevealSentences: React.FC<RevealSentencesProps> = ({ 
  children, 
  className = "",
  delay = 0 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  
  // Split text into sentences but preserve content. 
  // Logic: Matches segments ending in punctuation (.!?) or end of string.
  // trim() is used in render to clean up, margins used for spacing.
  const sentences = typeof children === 'string' 
    ? (children.match(/[^.!?]+[.!?]+(\s|$)|[^.!?]+$/g) || [children])
    : [children];

  return (
    <p ref={ref} className={className}>
      {sentences.map((sentence, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            delay: delay + (i * 0.15), // Stagger delay per sentence
            ease: [0.22, 1, 0.36, 1]
          }}
          className="inline-block mr-[0.3em]"
        >
          {sentence.trim()}
        </motion.span>
      ))}
    </p>
  );
};

export default RevealSentences;
