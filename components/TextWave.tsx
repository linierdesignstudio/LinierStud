import React from 'react';
import { motion } from 'framer-motion';

interface TextWaveProps {
  text: string;
  className?: string;
}

const TextWave: React.FC<TextWaveProps> = ({ text, className }) => {
  // Split text into words to prevent word-breaking across lines
  const words = text.split(' ');

  const containerVariants = {
    initial: {},
    animate: {},
  };

  const letterVariants = {
    initial: { y: 0 },
    animate: (i: number) => ({
      y: [0, -8, 0],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut" as const,
        delay: i * 0.06,
      }
    }),
    hover: {
      y: -16,
      color: "#B7FF00",
      scale: 1.05,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 12
      }
    }
  };

  let charIndex = 0;

  return (
    <motion.span
      className={`inline-flex flex-wrap gap-x-[0.25em] ${className || ''}`}
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-flex whitespace-nowrap">
          {Array.from(word).map((char, letterIndex) => {
            const currentIdx = charIndex++;
            return (
              <motion.span
                key={letterIndex}
                custom={currentIdx}
                variants={letterVariants}
                whileHover="hover"
                className="inline-block cursor-default select-none origin-bottom"
              >
                {char}
              </motion.span>
            );
          })}
        </span>
      ))}
    </motion.span>
  );
};

export default TextWave;
