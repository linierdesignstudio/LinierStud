
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Use MotionValues for better performance (avoids React render loop on mousemove)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for a "weighty" high-end feel
  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Detect hoverable elements
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-hover') ||
        target.closest('.cursor-hover')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[10000] mix-blend-difference flex items-center justify-center"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      {/* 
        ARCHITECTURAL SHAPE:
        Normal: Small Diamond (45deg rotated square)
        Hover: Large Square Frame
      */}
      <motion.div
        className="bg-white flex items-center justify-center relative"
        animate={{
          width: isHovering ? 64 : 10,
          height: isHovering ? 64 : 10,
          rotate: isHovering ? 0 : 45, // Rotate from diamond to square
          scale: isClicking ? 0.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
        style={{
          // On hover, we make it a frame (transparent center), otherwise solid
          backgroundColor: isHovering ? 'transparent' : 'white',
          border: isHovering ? '1px solid white' : '0px solid transparent'
        }}
      >
         {/* Crosshair Lines (CAD / Precision Look) - Only visible on hover */}
         <motion.div 
            className="absolute bg-white/50"
            animate={{ 
                width: isHovering ? '120%' : '0%', 
                height: '1px',
                opacity: isHovering ? 1 : 0
            }} 
         />
         <motion.div 
            className="absolute bg-white/50"
            animate={{ 
                height: isHovering ? '120%' : '0%', 
                width: '1px',
                opacity: isHovering ? 1 : 0
            }} 
         />

         {/* Text Label */}
         <motion.span 
            className="text-[8px] font-bold uppercase tracking-widest text-white absolute"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovering ? 1 : 0 }}
            transition={{ duration: 0.2 }}
         >
            VIEW
         </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default CustomCursor;
