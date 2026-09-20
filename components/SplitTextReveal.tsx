import React from 'react';
import { motion } from 'framer-motion';

interface SplitTextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
}

const SplitTextReveal: React.FC<SplitTextRevealProps> = ({
  text,
  className = "",
  delay = 0,
  duration = 1.2,
  stagger = 0.03
}) => {
  // Split text into words, then each word into characters
  const words = text.split(" ");

  // Container variants to stagger the words/letters if needed, 
  // but let's do direct item index stagger calculations for maximum flexibility
  return (
    <span className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, wordIndex) => {
        // Calculate the base character index for this word to maintain continuous stagger
        const previousWordsLength = words
          .slice(0, wordIndex)
          .reduce((sum, w) => sum + w.length, 0);

        return (
          <span key={wordIndex} className="inline-flex overflow-hidden whitespace-nowrap mr-[0.25em] last:mr-0">
            {word.split("").map((char, charIndex) => {
              const globalIndex = previousWordsLength + charIndex;
              return (
                <span key={charIndex} className="inline-block overflow-hidden py-1">
                  <motion.span
                    initial={{ y: "105%", scale: 0.4, opacity: 0 }}
                    animate={{ y: "0%", scale: 1, opacity: 1 }}
                    transition={{
                      duration: duration,
                      ease: [0.16, 1, 0.3, 1], // Custom premium elastic-smooth ease
                      delay: delay + (globalIndex * stagger),
                    }}
                    className="inline-block origin-bottom will-change-transform"
                  >
                    {char}
                  </motion.span>
                </span>
              );
            })}
          </span>
        );
      })}
    </span>
  );
};

export default SplitTextReveal;
