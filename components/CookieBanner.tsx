
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const { t } = useLanguage();
  
  // Cookie States
  const [preferences, setPreferences] = useState({
    essential: true, // Always true & locked
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Check local storage on load
    const consent = localStorage.getItem('linier_cookie_consent');
    if (!consent) {
      setTimeout(() => setIsVisible(true), 1500);
    }

    // Listen for custom event from Footer to open settings
    const handleOpenSettings = () => {
        setIsVisible(true);
        setShowSettings(true);
    };
    
    window.addEventListener('open-cookie-settings', handleOpenSettings);
    return () => window.removeEventListener('open-cookie-settings', handleOpenSettings);
  }, []);

  // Support mobile/hardware back button to close cookie settings modal
  useEffect(() => {
    if (showSettings) {
      window.history.pushState({ cookieSettingsOpen: true }, '');

      const handlePopState = (event: PopStateEvent) => {
        setShowSettings(false);
      };

      window.addEventListener('popstate', handlePopState);

      return () => {
        window.removeEventListener('popstate', handlePopState);
        if (window.history.state && window.history.state.cookieSettingsOpen) {
          window.history.back();
        }
      };
    }
  }, [showSettings]);

  const handleAcceptAll = () => {
    const allTrue = { essential: true, analytics: true, marketing: true };
    setPreferences(allTrue);
    saveAndClose(allTrue);
  };

  const handleDecline = () => {
    const onlyEssential = { essential: true, analytics: false, marketing: false };
    setPreferences(onlyEssential);
    saveAndClose(onlyEssential);
  };

  const handleSavePreferences = () => {
    saveAndClose(preferences);
  };

  const saveAndClose = (prefs: typeof preferences) => {
    localStorage.setItem('linier_cookie_consent', 'true');
    localStorage.setItem('linier_cookie_prefs', JSON.stringify(prefs));
    setShowSettings(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  const togglePreference = (key: keyof typeof preferences) => {
    if (key === 'essential') return;
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <AnimatePresence mode="wait">
      
      {/* 1. SIMPLE FLOATING BANNER */}
      {isVisible && !showSettings && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed bottom-6 right-6 z-[60] w-[calc(100%-2rem)] md:w-[430px]"
        >
                    <div className="bg-neutral-900 border border-white/10 shadow-2xl p-7 md:p-9">
                        <div className="flex justify-between items-start mb-5">
                                <h4 className="text-base font-display font-bold uppercase tracking-wider text-white">
                    {t.cookie_banner.title}
                </h4>
            </div>
            
            <p className="text-sm text-neutral-400 leading-relaxed mb-7 font-light">
                {t.cookie_banner.description}
            </p>

            <div className="flex flex-col gap-3">
                <button 
                    onClick={handleAcceptAll}
                    className="w-full py-4 bg-white hover:bg-bronze-500 text-neutral-950 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors duration-300"
                >
                    {t.cookie_banner.accept}
                </button>
                <div className="flex gap-3">
                    <button 
                        onClick={() => setShowSettings(true)}
                        className="flex-1 py-4 border border-white/10 hover:border-white/30 text-neutral-400 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors"
                    >
                        {t.cookie_banner.preferences}
                    </button>
                    <button 
                        onClick={handleDecline}
                        className="flex-1 py-4 border border-white/10 hover:border-white/30 text-neutral-400 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors"
                    >
                        {t.cookie_banner.decline}
                    </button>
                </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* 2. MINIMALIST SETTINGS MODAL */}
      {showSettings && (
         <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm"
         >
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="w-full max-w-lg bg-neutral-900 border border-white/10 shadow-2xl overflow-hidden"
            >
                {/* Header */}
                <div className="p-6 md:p-8 border-b border-white/5 flex justify-between items-center bg-neutral-900">
                    <h3 className="text-xl font-display font-bold uppercase tracking-tight text-white">
                        {t.cookie_banner.settings_title}
                    </h3>
                    <button 
                        onClick={() => setShowSettings(false)}
                        className="text-neutral-500 hover:text-white transition-colors"
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6 md:p-8 space-y-6 bg-neutral-900">
                    
                    {/* Item 1 */}
                    <div className="flex items-center justify-between group">
                        <div className="pr-4">
                            <h5 className="text-sm font-bold uppercase tracking-widest text-white mb-1">
                                {t.cookie_banner.essential}
                            </h5>
                            <p className="text-xs text-neutral-500 leading-relaxed">
                                {t.cookie_banner.essential_desc}
                            </p>
                        </div>
                            <div className="w-12 h-6 bg-neutral-800 rounded-full border border-white/5 opacity-50 cursor-not-allowed flex items-center px-1">
                                <div className="w-4 h-4 bg-neutral-500 rounded-full" />
                        </div>
                    </div>

                    {/* Item 2 */}
                    <div className="flex items-center justify-between group">
                        <div className="pr-4">
                            <h5 className="text-sm font-bold uppercase tracking-widest text-white mb-1">
                                {t.cookie_banner.analytics}
                            </h5>
                            <p className="text-xs text-neutral-500 leading-relaxed">
                                {t.cookie_banner.analytics_desc}
                            </p>
                        </div>
                        <SimpleToggle 
                            active={preferences.analytics} 
                            onClick={() => togglePreference('analytics')} 
                        />
                    </div>

                    {/* Item 3 */}
                    <div className="flex items-center justify-between group">
                        <div className="pr-4">
                            <h5 className="text-sm font-bold uppercase tracking-widest text-white mb-1">
                                {t.cookie_banner.marketing}
                            </h5>
                            <p className="text-xs text-neutral-500 leading-relaxed">
                                {t.cookie_banner.marketing_desc}
                            </p>
                        </div>
                        <SimpleToggle 
                            active={preferences.marketing} 
                            onClick={() => togglePreference('marketing')} 
                        />
                    </div>
                </div>

                {/* Footer */}
                <div className="p-6 border-t border-white/5 bg-neutral-900 flex justify-end gap-4">
                    <button 
                        onClick={() => setShowSettings(false)}
                        className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-white transition-colors"
                    >
                        {t.cookie_banner.cancel}
                    </button>
                    <button 
                        onClick={handleSavePreferences}
                        className="px-8 py-4 bg-white text-neutral-950 text-xs font-bold uppercase tracking-widest hover:bg-bronze-500 hover:text-white transition-colors"
                    >
                        {t.cookie_banner.save}
                    </button>
                </div>
            </motion.div>
         </motion.div>
      )}
    </AnimatePresence>
  );
};

// Clean, Simple Toggle Component
const SimpleToggle: React.FC<{ active: boolean; onClick: () => void }> = ({ active, onClick }) => (
    <button 
        onClick={onClick}
        className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors duration-300 ${active ? 'bg-bronze-500' : 'bg-neutral-800 border border-white/10'}`}
    >
        <motion.div 
            layout
            initial={false}
            animate={{ x: active ? 24 : 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className={`w-4 h-4 rounded-full shadow-sm ${active ? 'bg-white' : 'bg-neutral-400'}`}
        />
    </button>
);

export default CookieBanner;
