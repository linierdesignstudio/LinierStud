import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

interface ScrambleTextProps {
  text: string;
  className?: string;
  duration?: number;
  delay?: number;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+";

const ScrambleText: React.FC<ScrambleTextProps> = ({ 
  text, 
  className = "", 
  duration = 2000,
  delay = 0 
}) => {
  const [displayText, setDisplayText] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (isInView && !hasStarted) {
      const startTimeout = setTimeout(() => {
        let frame = 0;
        const totalFrames = duration / 50; // 50ms per frame
        
        const intervalId = setInterval(() => {
          let newText = '';
          const progress = frame / totalFrames;

          for (let i = 0; i < text.length; i++) {
            if (i < Math.floor(text.length * progress)) {
              // Revealed character
              newText += text[i];
            } else {
              // Random character
              newText += CHARS[Math.floor(Math.random() * CHARS.length)];
            }
          }

          setDisplayText(newText);
          frame++;

          if (frame > totalFrames) {
            clearInterval(intervalId);
            setDisplayText(text); // Ensure final text is correct
          }
        }, 50);

        setHasStarted(true);
        return () => clearInterval(intervalId);
      }, delay * 1000);

      return () => clearTimeout(startTimeout);
    }
  }, [isInView, text, duration, delay, hasStarted]);

  return (
    <span ref={ref} className={`inline-block font-mono ${className}`}>
      {displayText || text.split('').map(() => CHARS[Math.floor(Math.random() * CHARS.length)]).join('')}
    </span>
  );
};

export default ScrambleText;