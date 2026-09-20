import React from 'react';
import Footer from './Footer';
import Marquee from './Marquee';

const StickyFooterWrapper: React.FC = () => {
  return (
    <div className="w-full relative z-10 bg-white dark:bg-neutral-950">
      <Marquee />
      <Footer />
    </div>
  );
};

export default StickyFooterWrapper;
