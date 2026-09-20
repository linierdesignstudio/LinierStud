const fs = require('fs');

let translations = fs.readFileSync('/app/applet/translations.ts', 'utf8');

// EN
translations = translations.replace(
  'services: {\n      hero_sub: "Our Expertise",',
  'services: {\n      hero_typography_1: "WE BUILD",\n      hero_typography_2: "YOUR VISION.",\n      hero_typography_desc: "We design thoughtful spaces for smart clients.",\n      hero_typography_col1: "Architecture &\\nInterior",\n      hero_typography_col2: "Jakarta\\nIndonesia",\n      hero_sub: "Our Expertise",'
);

// ID
translations = translations.replace(
  'services: {\n      hero_sub: "Keahlian Kami",',
  'services: {\n      hero_typography_1: "KAMI MEMBANGUN",\n      hero_typography_2: "VISI ANDA.",\n      hero_typography_desc: "Kami merancang ruang yang cermat untuk klien yang cerdas.",\n      hero_typography_col1: "Arsitektur &\\nInterior",\n      hero_typography_col2: "Jakarta\\nIndonesia",\n      hero_sub: "Keahlian Kami",'
);

// ZH
translations = translations.replace(
  'services: {\n      hero_sub: "我们的专业知识",',
  'services: {\n      hero_typography_1: "我们共筑",\n      hero_typography_2: "您的愿景。",\n      hero_typography_desc: "我们为明智的客户设计周到的空间。",\n      hero_typography_col1: "建筑与室内\\n设计",\n      hero_typography_col2: "雅加达\\n印度尼西亚",\n      hero_sub: "我们的专业知识",'
);

fs.writeFileSync('/app/applet/translations.ts', translations);

const comp = `import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const ServiceHeroTypography: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full bg-white text-neutral-950 min-h-[90vh] flex flex-col justify-between px-6 py-8 md:px-12 md:py-12 relative mb-24 md:mb-32">
      {/* Top Nav Mock */}
      <div className="flex justify-between items-start relative z-10 w-full pt-16 md:pt-8">
         <div className="font-bold text-sm md:text-base tracking-tighter uppercase">
            Linier Studio™
         </div>
         <div className="hidden md:flex gap-8 text-sm font-medium">
             <span className="hover:opacity-60 transition-opacity cursor-pointer">{t.nav.portfolio}</span>
             <span className="hover:opacity-60 transition-opacity cursor-pointer">{t.nav.services}</span>
             <span className="hover:opacity-60 transition-opacity cursor-pointer">{t.nav.contact}</span>
         </div>
      </div>

      {/* Main Typography */}
      <div className="flex flex-col mt-24 md:mt-32 w-full">
         <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[16vw] md:text-[14vw] font-display font-bold uppercase tracking-tighter leading-[0.8] m-0 p-0 text-neutral-950"
         >
            {t.services.hero_typography_1}
         </motion.h1>
         <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[16vw] md:text-[14vw] font-display font-bold uppercase tracking-tighter leading-[0.8] m-0 p-0 text-neutral-950"
         >
            {t.services.hero_typography_2}
         </motion.h1>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-20 md:mt-32 items-end pb-8">
         <div className="md:col-span-4 flex items-end">
             <div className="w-16 h-16 rounded-full flex items-center justify-center border border-neutral-300 hover:bg-neutral-100 transition-colors cursor-pointer group">
                 {/* Thin right arrow */}
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-neutral-500 group-hover:text-neutral-950 transition-colors group-hover:translate-x-1 duration-300">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                 </svg>
             </div>
         </div>
         <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm md:text-sm font-medium">
             <div className="max-w-xs leading-relaxed text-neutral-950">
                 {t.services.hero_typography_desc}
             </div>
             <div className="whitespace-pre-line leading-relaxed text-neutral-600">
                 {t.services.hero_typography_col1}
             </div>
             <div className="whitespace-pre-line leading-relaxed text-neutral-600">
                 {t.services.hero_typography_col2}
             </div>
         </div>
      </div>
    </div>
  );
};

export default ServiceHeroTypography;
`;
fs.writeFileSync('/app/applet/components/ServiceHeroTypography.tsx', comp);

let services = fs.readFileSync('/app/applet/pages/Services.tsx', 'utf8');

services = services.replace(
  "import RevealOnScroll from '../components/RevealOnScroll';",
  "import RevealOnScroll from '../components/RevealOnScroll';\nimport ServiceHeroTypography from '../components/ServiceHeroTypography';"
);

services = services.replace(
  '<div className="w-full bg-neutral-950 text-white selection:bg-bronze-500 selection:text-white pt-32 md:pt-48 pb-24">',
  '<div className="w-full bg-neutral-950 text-white selection:bg-bronze-500 selection:text-white pb-24">\n\n      {/* 1. HERO TYPOGRAPHY SECTION */}\n      <ServiceHeroTypography />\n'
);

fs.writeFileSync('/app/applet/pages/Services.tsx', services);
