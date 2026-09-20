import React, { useRef, useState, useEffect } from 'react';

const StickyReveal: React.FC<{ children: React.ReactNode; zIndex?: number }> = ({ children, zIndex = 0 }) => {
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setHeight(entry.borderBoxSize?.[0]?.blockSize || entry.contentRect.height);
      }
    });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div style={{ height }} className="w-full pointer-events-none hidden md:block" />
      <div ref={ref} className={`fixed bottom-0 left-0 w-full hidden md:block`} style={{ zIndex }}>
        {children}
      </div>
      <div className="md:hidden relative" style={{ zIndex }}>
        {children}
      </div>
    </>
  );
};
export default StickyReveal;
