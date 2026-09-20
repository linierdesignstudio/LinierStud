import React, { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/Navbar';
import StickyFooterWrapper from './components/StickyFooterWrapper';
import CustomCursor from './components/CustomCursor';
import CookieBanner from './components/CookieBanner';
import AudioPlayer from './components/AudioPlayer';
import Preloader from './components/Preloader';

import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import ProjectDetail from './pages/ProjectDetail'; 
import ElementDetail from './pages/ElementDetail'; 
import { LanguageProvider } from './contexts/LanguageContext';

// Scroll to top wrapper & Path Saver
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
    // Save last path so we can restore it if the iframe reloads without a hash
    sessionStorage.setItem('last_path', pathname);
  }, [pathname]);

  return null;
};

// Animated Routes Wrapper
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<ProjectDetail />} />
        <Route path="/journal/:id" element={<ElementDetail />} /> 
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [scrollLocked, setScrollLocked] = useState(true);
  
  // Theme Initialization Logic
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Handle Preloader Completion
  const handlePreloaderComplete = () => {
    setLoading(false);
    
    // DELAY UNLOCKING SCROLL
    // This prevents the scrollbar from appearing abruptly while the curtain is still opening.
    // The delay matches the Preloader exit transition duration (1.2s).
    setTimeout(() => {
      setScrollLocked(false);
    }, 1200);
  };

  return (
    <LanguageProvider>
      <HashRouter>
        <ScrollToTop />
        
        {/* Preloader with Exit Animation (Curtain) */}
        <AnimatePresence mode="wait">
          {loading && <Preloader onComplete={handlePreloaderComplete} />}
        </AnimatePresence>

        {/* 
            RENDER STRATEGY FOR SMOOTHNESS:
            We render the main content ALWAYS, even when loading.
            It sits behind the Preloader (z-index lower).
            This ensures no "paint flash" or layout shift when Preloader vanishes.
        */}
        
        {/* Fixed Elements */}
        <div className="hidden md:block">
           <CustomCursor />
        </div>
        
        {/* Main Wrapper */}
        <div 
          className={`
            text-neutral-900 dark:text-neutral-100 
            selection:bg-bronze-500 selection:text-white 
            transition-colors duration-500
            ${scrollLocked ? 'h-screen overflow-hidden' : ''}
          `}
        >
            <Navbar />
            <div className="flex flex-col min-h-screen relative z-10 bg-white dark:bg-neutral-950 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <main className="flex-grow">
                <AnimatedRoutes />
              </main>
            </div>
            
            <StickyFooterWrapper />

            <CookieBanner />
            <AudioPlayer />
        </div>
      </HashRouter>
    </LanguageProvider>
  );
};

export default App;
