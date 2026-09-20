import React, { useEffect, useState, useRef } from 'react';

interface CyclingScrambleTextProps {
  words: string[];
  className?: string;
  duration?: number; // Duration of the scramble effect
  pauseDuration?: number; // How long to stay on a word
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+";

const CyclingScrambleText: React.FC<CyclingScrambleTextProps> = ({ 
  words, 
  className = "", 
  duration = 800,
  pauseDuration = 2000 
}) => {
  const [displayText, setDisplayText] = useState(words[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const isAnimating = useRef(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const animateToNextWord = () => {
      if (isAnimating.current) return;
      isAnimating.current = true;

      const nextIndex = (currentIndex + 1) % words.length;
      const nextWord = words[nextIndex];
      const startWord = words[currentIndex];
      
      const startTime = Date.now();

      const updateFrame = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / duration, 1);

        if (progress < 1) {
          let tempText = "";
          // Determine the length of the string at this frame (smooth transition in length)
          const currentLength = Math.floor(
             startWord.length + (nextWord.length - startWord.length) * progress
          );

          for (let i = 0; i < currentLength; i++) {
             // Logic: partial reveal based on progress
             // Accelerate reveal at the end (progress^3)
             if (i < nextWord.length && Math.random() < Math.pow(progress, 3)) { 
               tempText += nextWord[i];
             } else {
               tempText += CHARS[Math.floor(Math.random() * CHARS.length)];
             }
          }
          setDisplayText(tempText);
          requestAnimationFrame(updateFrame);
        } else {
          // Animation complete
          setDisplayText(nextWord);
          setCurrentIndex(nextIndex);
          isAnimating.current = false;
          // Note: We do NOT schedule the next timeout here. 
          // Changing currentIndex triggers the useEffect again, which schedules the next run.
        }
      };

      requestAnimationFrame(updateFrame);
    };

    // Schedule the animation start
    timeout = setTimeout(animateToNextWord, pauseDuration);

    return () => clearTimeout(timeout);
  }, [currentIndex, words, duration, pauseDuration]);

  return (
    <span className={`inline-block font-mono whitespace-nowrap ${className}`}>
      {displayText}
    </span>
  );
};

export default CyclingScrambleText;