
import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowUp } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { NAV_ITEMS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

// --- HELPER COMPONENTS ---

// 1. World Clock (Preserved & Styled)
interface WorldClockProps {
  label: string;
  zone: string;
  time: Date;
}

const WorldClock: React.FC<WorldClockProps> = ({ label, zone, time }) => {
  const formattedTime = React.useMemo(() => {
    try {
      return new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: zone,
        hour12: true // AM/PM for international readability
      }).format(time);
    } catch (e) {
      return "--:--";
    }
  }, [time, zone]);

  return (
    <div className="flex flex-col border-l border-neutral-300 dark:border-white/10 pl-6 py-2 group hover:bg-white/5 transition-colors duration-500">
       <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest block mb-2 group-hover:text-bronze-500 transition-colors">
         {label}
       </span>
       <div className="relative h-6 flex items-center">
           <div className="text-lg font-display font-medium text-neutral-900 dark:text-white tabular-nums leading-none">
               {formattedTime}
           </div>
       </div>
    </div>
  );
};

// --- MAIN COMPONENT ---

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  const footerRef = useRef(null);
  
  // Parallax for Big Text
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [-50, 0]);

  // Clock Timer
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const clocks = [
    { label: 'Jakarta', zone: 'Asia/Jakarta' },
    { label: 'Kendari', zone: 'Asia/Makassar' },
    { label: 'London', zone: 'Europe/London' },
    { label: 'New York', zone: 'America/New_York' },
  ];

  const socialLinks = [
    { name: 'WhatsApp', href: 'https://wa.me/6281775030638', target: '_blank', rel: 'noopener noreferrer' },
    { name: 'WeChat', href: '#', onClick: (e) => { e.preventDefault(); navigator.clipboard.writeText('Linierstudio'); const el = e.currentTarget.querySelector('span'); if(el) { const original = el.innerText; el.innerText = 'COPIED!'; setTimeout(() => el.innerText = original, 2000); } } },
    { name: 'Instagram', href: 'https://www.instagram.com/linierstudio/', target: '_blank', rel: 'noopener noreferrer' },
    { name: 'Behance', href: 'https://www.behance.net/linierstudio', target: '_blank', rel: 'noopener noreferrer' },
    { name: 'Facebook', href: 'https://www.facebook.com/linierstudio', target: '_blank', rel: 'noopener noreferrer' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openCookieSettings = () => {
    window.dispatchEvent(new Event('open-cookie-settings'));
  };

  const getNavLabel = (path: string) => {
    switch(path) {
        case '/': return t.nav.home;
        case '/about': return t.nav.about;
        case '/portfolio': return t.nav.portfolio;
        case '/services': return t.nav.services;
        case '/contact': return t.nav.contact;
        default: return path;
    }
  };

  return (
    <footer ref={footerRef} className="bg-neutral-100 dark:bg-neutral-950 text-neutral-900 dark:text-white relative pt-0 border-t border-neutral-200 dark:border-white/10 flex flex-col">
      
      <div className="flex flex-col lg:flex-row w-full h-full border-b border-neutral-300 dark:border-white/10">
          
          {/* 2. LEFT SECTION: CTA & BRANDING (50% Width) */}
          <div className="lg:w-1/2 border-r border-neutral-300 dark:border-white/10 p-8 md:p-12 lg:p-24 flex flex-col justify-between min-h-[400px] lg:min-h-[500px]">
              
              <div>
                <div className="mb-12 flex flex-col items-start gap-4">
                  <img
                    src="/LInier-logo-transparent.png"
                    alt="Linier Studio logo"
                    className="h-[140px] sm:h-[170px] md:h-[200px] w-auto object-contain"
                  />
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                    PT. LINIER NUSAKARYA PERSADA
                  </span>
                </div>
                  <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold uppercase leading-[0.9] tracking-tighter mb-8">
                     {t.footer.cta_title_1} <br/>
                     <span className="text-neutral-600">{t.footer.cta_title_2}</span>
                  </h2>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-6 group cursor-hover"
                  >
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-neutral-300 dark:border-white/20 flex items-center justify-center group-hover:bg-bronze-500 group-hover:border-bronze-500 transition-all duration-300">
                          <ArrowUpRight size={32} className="group-hover:rotate-45 transition-transform duration-300" />
                      </div>
                      <span className="text-xl font-bold uppercase tracking-widest border-b border-transparent group-hover:border-white transition-all">
                          {t.footer.cta_button}
                      </span>
                  </Link>
              </div>

              <div className="mt-24 lg:mt-0">
                   <div className="mb-6">
                       <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block mb-2">{t.contact.email}</span>
                       <a href="mailto:hello@linierstudio.com" className="text-2xl md:text-3xl font-display font-bold hover:text-bronze-500 transition-colors">
                           hello@linierstudio.com
                       </a>
                   </div>
                   
              </div>
          </div>

          {/* 3. RIGHT SECTION: GRID LINKS (50% Width) */}
          <div className="lg:w-1/2 flex flex-col">
              
              {/* Row 1: Clocks */}
              <div className="grid grid-cols-2 md:grid-cols-4 border-b border-neutral-300 dark:border-white/10">
                  {clocks.map((clock) => (
                      <WorldClock key={clock.label} {...clock} time={time} />
                  ))}
              </div>

              {/* Row 2: Navigation Grid */}
              <div className="flex-grow grid grid-cols-2">
                  
                  {/* Menu Col */}
                  <div className="border-r border-neutral-300 dark:border-white/10 p-8 md:p-12">
                      <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block mb-8">
                          {t.footer.menu}
                      </span>
                      <ul className="space-y-4">
                          {NAV_ITEMS.map((item, idx) => (
                              <li key={item.path}>
                                  <Link to={item.path} className="group flex items-center gap-3 text-lg font-bold uppercase tracking-wide text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-hover">
                                      <span className="text-[9px] font-mono text-bronze-500 opacity-0 group-hover:opacity-100 transition-opacity">0{idx+1}</span>
                                      {getNavLabel(item.path)}
                                  </Link>
                              </li>
                          ))}
                      </ul>
                  </div>

                  {/* Socials & Legal Col */}
                  <div className="p-8 md:p-12 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block mb-8">
                            {t.footer.connect}
                        </span>
                        <ul className="space-y-4">
                            {socialLinks.map((social) => (
                                <li key={social.name}>
                                    <a href={social.href} target={social.target} rel={social.rel} onClick={social.onClick} className="flex items-center justify-between text-sm font-bold uppercase text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white group border-b border-transparent hover:border-neutral-900/20 dark:hover:border-neutral-300 dark:border-white/20 pb-1 transition-all cursor-hover">
                                        <span>{social.name}</span>
                                        <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                      </div>
                      
                      <div className="mt-12">
                              <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block mb-2">{t.common.headquarters}</span>
                          <address className="not-italic text-xs text-neutral-500 font-mono leading-relaxed mb-4">
                              {t.common.address_line1}<br/>
                              {t.common.address_line2}
                          </address>
                          <div className="flex flex-col gap-2 items-start">
                              <Link to="/privacy" className="text-[10px] uppercase font-bold tracking-widest text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">{t.common.privacy}</Link>
                              <Link to="/terms" className="text-[10px] uppercase font-bold tracking-widest text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">{t.common.terms}</Link>
                              <button onClick={openCookieSettings} className="text-[10px] uppercase font-bold tracking-widest text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors">{t.common.cookies}</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      {/* 4. BOTTOM BRANDING */}
      {/* Remove padding to allow full-width text */}
      <div className="relative w-full overflow-hidden bg-white dark:bg-neutral-950 pt-12 md:pt-24 pb-0 flex flex-col items-center">
            
            {/* Scroll Top Button - Absolute Center Top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <button 
                    onClick={scrollToTop}
                    className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-white/10 hover:bg-bronze-500 dark:hover:bg-bronze-500 hover:border-bronze-500 flex items-center justify-center text-neutral-900 dark:text-white hover:text-white dark:hover:text-white transition-all duration-500 group cursor-hover"
                >
                    <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
                </button>
            </div>

            

                        {/* Massive Text - Full Width Edge-to-Edge */}
            <h1 className="text-[15vw] leading-none font-display font-bold text-center text-[#B7FF00] select-none pointer-events-none tracking-tighter w-full m-0 p-0 whitespace-nowrap overflow-visible">
                LINIER STUDI<span className="relative inline-block">O<span className="absolute left-[65%] bottom-full mb-1 text-[2.5vw] md:text-[3vw] leading-none tracking-normal">TM</span></span>
            </h1>

            {/* Bottom Bar - Added Padding back here */}
            <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end border-t border-neutral-200 dark:border-white/10 pt-4 mt-8 pb-8 md:pb-4 px-4 md:px-8 bg-white dark:bg-neutral-950 gap-4 md:pl-[120px]">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono uppercase text-neutral-500">
                  © {currentYear} Linier Studio. {t.footer.rights}
                </span>
              </div>
                <span className="text-xs font-mono uppercase text-neutral-500 hidden md:inline-block">
                    {t.footer.designed}
                </span>
            </div>
      </div>
    </footer>
  );
};

export default Footer;
