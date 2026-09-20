
import React, { useRef } from 'react';
import { useScroll, motion, useTransform, MotionValue } from 'framer-motion';

interface ScrollHighlightTextProps {
  content: string;
  className?: string;
}

const ScrollHighlightText: React.FC<ScrollHighlightTextProps> = ({ content, className = "" }) => {
  const container = useRef(null);
  
  // -- UPDATED LOGIC --
  // 1. "Dimulai di tengah": offset "start 0.5" memastikan animasi dimulai tepat saat 
  //    bagian atas teks menyentuh garis tengah vertikal layar.
  // 2. "Diperlambat": Dengan mengubah titik akhir ke "start -0.25" (25% di atas viewport),
  //    kita memperpanjang jarak scroll yang dibutuhkan untuk menyelesaikan animasi.
  //    Jarak yang lebih jauh = Animasi lebih lambat.
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.8", "start 0.4"]
  });

  const words = content.split(" ");

  return (
    <div ref={container} className={`relative inline-block leading-tight ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + (1 / words.length);
        
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </div>
  );
};

const Word: React.FC<{ children: string; progress: MotionValue<number>; range: [number, number] }> = ({ children, progress, range }) => {
  // Opacity map: 
  // 0.1 (Sangat samar/gelap di awal) -> 1.0 (Putih bersih)
  const opacity = useTransform(progress, [range[0], range[1]], [0.1, 1]);
  
  return (
    <span className="relative inline-block mr-[0.25em]">
      <motion.span 
        style={{ opacity }} 
        className="inline-block"
      >
        {children}
      </motion.span>
    </span>
  );
};

export default ScrollHighlightText;
