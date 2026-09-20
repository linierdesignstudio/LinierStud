
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, ArrowUpRight, Globe } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { Language } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // State for Language and Theme
  const { language, setLanguage, t } = useLanguage();
  const [isDark, setIsDark] = useState(true);

  useEffect(() => { setIsOpen(false); }, [location]);

  // Sync state with DOM on mount
  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const getLabel = (path: string) => {
    switch(path) {
      case '/': return t.nav.home;
      case '/about': return t.nav.about;
      case '/portfolio': return t.nav.portfolio;
      case '/services': return t.nav.services;
      case '/contact': return t.nav.contact;
      default: return '';
    }
  };

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Support mobile/hardware back button to close the menu
  useEffect(() => {
    if (isOpen) {
      // Push state to intercept back button
      window.history.pushState({ menuOpen: true }, '');

      const handlePopState = (event: PopStateEvent) => {
        setIsOpen(false);
      };

      window.addEventListener('popstate', handlePopState);

      return () => {
        window.removeEventListener('popstate', handlePopState);
        // If the menu is closed programmatically (not by back button/popstate),
        // we revert the pushed state to keep history clean
        if (window.history.state && window.history.state.menuOpen) {
          window.history.back();
        }
      };
    }
  }, [isOpen]);

  // Animation Variants
  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }
    },
    open: {
      opacity: 1,
      y: "0%",
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }
    }
  };

  const listVariants = {
    closed: { opacity: 0, y: 50 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.3 + (i * 0.1), duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }
    })
  };

  return (
    <>
      {/* 
        === MAIN NAVBAR === 
        z-index set to 50. 
        Fixed positioning is now relative to the viewport because it is outside the App.tsx transform container.
      */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 w-full z-50 px-4 py-4 sm:px-6 sm:py-6 md:px-8 md:py-8 lg:px-12 lg:py-10 flex justify-between items-center text-neutral-900 dark:text-white pointer-events-none"
      >
        
        {/* 1. LEFT: LOGO ONLY */}
        <div className="pointer-events-auto absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
          <NavLink to="/" className="group flex items-center gap-3 md:gap-4">
            <span className="relative block w-[64px] h-[64px] sm:w-[76px] sm:h-[76px] md:w-[108px] md:h-[108px] overflow-hidden group-hover:opacity-80 transition-opacity" aria-hidden="true">
              <span
                className="absolute inset-0 bg-white"
                style={{
                  WebkitMaskImage: 'url("/LInier%20ds%20copy11.png")',
                  maskImage: 'url("/LInier%20ds%20copy11.png")',
                  WebkitMaskSize: '150% auto',
                  maskSize: '150% auto',
                  WebkitMaskPosition: '50% 35%',
                  maskPosition: '50% 35%',
                  WebkitMaskRepeat: 'no-repeat',
                  maskRepeat: 'no-repeat',
                  WebkitMaskMode: 'luminance',
                  maskMode: 'luminance',
                } as React.CSSProperties & { WebkitMaskMode: string; maskMode: string }}
              />
            </span>
            <span className="sr-only">Linier Studio</span>
          </NavLink>
        </div>

        {/* 2. RIGHT: NAVIGATION & CONTROLS */}
        <div className="flex items-center gap-12 pointer-events-auto">
            
            {/* Desktop Nav Links (Hidden on Mobile & Tablet) */}
            <div className="hidden lg:flex gap-10 mix-blend-difference text-white">
                {NAV_ITEMS.map((item) => (
                    <NavLink 
                        key={item.path} 
                        to={item.path}
                        className={({ isActive }) => 
                            `text-base font-mono font-bold uppercase tracking-widest relative group transition-colors duration-300 ${isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`
                        }
                    >
                        {getLabel(item.path)}
                        <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-neutral-900 dark:bg-white group-hover:w-full transition-all duration-300" />
                    </NavLink>
                ))}
            </div>

            {/* Divider (Hidden on Mobile & Tablet) */}
            <div className="hidden lg:block w-[1px] h-6 bg-white/40 mix-blend-difference"></div>

            {/* Controls: Language & Theme (Desktop Only) */}
            <div className="hidden lg:flex items-center gap-6 mix-blend-difference text-white">
                <div className="flex items-center gap-3">
                    <Globe size={16} className="opacity-40" />
                    {(["ID", "EN", "CN"] as Language[]).map((l) => (
                        <button
                            key={l}
                            onClick={() => setLanguage(l)}
                            className={`text-xs font-bold uppercase tracking-wider transition-colors ${
                                language === l ? 'opacity-100 underline decoration-1 underline-offset-4' : 'opacity-40 hover:opacity-100'
                            }`}
                        >
                            {l}
                        </button>
                    ))}
                </div>
                <button 
                    onClick={toggleTheme} 
                    className="hover:opacity-70 transition-opacity flex items-center gap-2"
                >
                    {isDark ? <Sun size={20} /> : <Moon size={20} />}
                </button>
            </div>

            {/* 
                === MOBILE/TABLET MENU TRIGGER === 
                Visible on Mobile & Tablet.
                High Z-Index (70).
            */}
            <div className="lg:hidden">
                 <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className={`relative z-[70] flex items-center gap-2 text-base font-bold font-mono uppercase tracking-widest transition-colors duration-300 ${isOpen ? 'text-neutral-900 dark:text-white' : 'text-white mix-blend-difference'}`}
                 >
                    <span className="hidden sm:inline">{isOpen ? 'Close' : 'Menu'}</span>
                    
                    {/* Circle Icon Container - Added background for better visibility if blend mode fails */}
                    <div className={`relative w-10 h-10 flex items-center justify-center rounded-full transition-colors ${isOpen ? 'bg-white/10' : ''}`}>
                         <AnimatePresence mode="wait">
                            {isOpen ? (
                                <motion.div 
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X size={24} />
                                </motion.div>
                            ) : (
                                <motion.div 
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu size={24} />
                                </motion.div>
                            )}
                         </AnimatePresence>
                    </div>
                 </button>
            </div>
        </div>
      </motion.nav>


      {/* 
        === FULL SCREEN MOBILE OVERLAY (AWWWARDS STYLE) === 
        Fixed Z-60.
      */}
      <AnimatePresence>
        {isOpen && (
          
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[60] bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-white flex flex-col justify-between overflow-y-auto"
          >
             {/* Background Decoration */}
             <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
                   style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}
              />
             
             {/* 1. Header Spacer (Matches Navbar Height) */}
             <div className="h-[72px] sm:h-[80px] w-full flex items-center px-4 sm:px-6 shrink-0">
                 {/* Empty space for alignment with fixed navbar */}
             </div>

             {/* 2. Menu Links */}
             <div className="flex-1 flex flex-col justify-center px-6 py-8 relative z-20">
                <div className="flex flex-col">
                    {NAV_ITEMS.map((item, idx) => (
                        <motion.div
                            key={item.path}
                            custom={idx}
                            variants={listVariants}
                            className="group relative border-b border-neutral-300 dark:border-white/10"
                        >
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 text-[10px] font-mono text-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4">
                                0{idx + 1}
                            </span>
                            <NavLink
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) => 
                                    `block py-4 sm:py-5 md:py-6 text-4xl sm:text-7xl font-display font-bold uppercase tracking-tight leading-[0.9] transition-all duration-500 ${
                                        isActive 
                                        ? 'text-neutral-900 dark:text-white translate-x-4'
                                        : 'text-neutral-500 hover:text-neutral-900 dark:text-white hover:translate-x-4'
                                    }`
                                }
                            >
                                {getLabel(item.path)}
                            </NavLink>
                        </motion.div>
                    ))}
                </div>
             </div>

             {/* 3. Footer / Controls Wrapper */}
            <div className="relative z-10 shrink-0 pb-4 sm:pb-0">
                 
                 {/* Content Controls */}
                 <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="px-4 py-5 sm:p-6 relative z-20"
                 >
                     <div className="flex flex-col gap-6">
                         
                         {/* Language & Theme for Mobile */}
                         <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <Globe size={18} className="text-neutral-500" />
                                {(["ID", "EN", "CN"] as Language[]).map((l) => (
                                    <button
                                        key={l}
                                        onClick={() => setLanguage(l)}
                                        className={`text-xs font-bold uppercase tracking-widest ${
                                            language === l 
                                            ? 'text-neutral-900 dark:text-white border-b border-white'
                                            : 'text-neutral-600'
                                        }`}
                                    >
                                        {l}
                                    </button>
                                ))}
                            </div>
                            <button 
                                onClick={toggleTheme} 
                                className="w-10 h-10 rounded-full border border-neutral-200 dark:border-white/10 flex items-center justify-center text-neutral-500 dark:text-neutral-400 bg-white dark:bg-[#0a0a0a]"
                            >
                                {isDark ? <Sun size={18} /> : <Moon size={18} />}
                            </button>
                         </div>

                         {/* Contact Info */}
                         <div className="flex justify-between items-end gap-4">
                             <div>
                                 <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block mb-1">Get in touch</span>
                                 <a href="mailto:hello@linierstudio.com" className="text-lg font-display font-bold text-neutral-900 dark:text-white hover:text-bronze-500 transition-colors">
                                    hello@linierstudio.com
                                 </a>
                             </div>
                             <a href="#/contact" onClick={() => setIsOpen(false)} className="w-12 h-12 bg-bronze-500 flex items-center justify-center text-neutral-900 dark:text-white rounded-full">
                                 <ArrowUpRight size={20} />
                             </a>
                         </div>

                     </div>
                 </motion.div>

                 {/* MASSIVE FOOTER-LIKE TEXT */}
                 <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none z-10 flex justify-center items-end leading-none">
                     <h1 className="text-[12vw] leading-[0.75] font-display font-bold text-[#141414] tracking-tighter select-none translate-y-[10%] text-center w-full">
                         LINIER STUDIO
                     </h1>
                 </div>

             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
