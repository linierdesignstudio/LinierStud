const fs = require('fs');
let content = fs.readFileSync('/app/applet/pages/Services.tsx', 'utf8');

const searchBlock = `  return (
    <div className="w-full bg-neutral-950 text-white selection:bg-bronze-500 selection:text-white pb-24">
      
      {/* 1. HERO TYPOGRAPHY SECTION */}
      <ServiceHeroTypography />

      {/* 2. OVERVIEW SECTION */}`;

const replaceBlock = `  return (
    <div className="w-full bg-neutral-950 text-white selection:bg-bronze-500 selection:text-white pt-32 md:pt-48 pb-24">
      
      {/* 1. HERO TYPOGRAPHY SECTION */}
      <ServiceHeroTypography />

      {/* ORIGINAL HERO SECTION */}
      <section className="px-6 md:px-12 mt-32 mb-32 md:mb-48">
        <RevealOnScroll>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-bronze-500"></div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400">
              {t.services.hero_sub}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-[10vw] font-display font-bold uppercase tracking-tighter leading-[0.8] mb-12 mix-blend-difference">
            {t.services.hero_title_1} <br/>
            <span className="text-neutral-600">{t.services.hero_title_2}</span>
          </h1>
        </RevealOnScroll>
      </section>

      {/* 2. OVERVIEW SECTION */}`;

content = content.replace(searchBlock, replaceBlock);
fs.writeFileSync('/app/applet/pages/Services.tsx', content);
