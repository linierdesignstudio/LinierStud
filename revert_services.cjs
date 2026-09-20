const fs = require('fs');
let content = fs.readFileSync('/app/applet/pages/Services.tsx', 'utf8');

const searchBlock = `  return (
    <div className="w-full bg-neutral-950 text-white selection:bg-bronze-500 selection:text-white  pb-24">
      
      {/* 1. HERO TYPOGRAPHY SECTION */}
      <ServiceHeroTypography />

      {/* ORIGINAL HERO SECTION */}
      <section className="px-6 md:px-12 mt-32 mb-32 md:mb-48">`;

const replaceBlock = `  return (
    <div className="w-full bg-neutral-950 text-white selection:bg-bronze-500 selection:text-white pt-32 md:pt-48 pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="px-6 md:px-12 mb-32 md:mb-48">`;

content = content.replace(searchBlock, replaceBlock);
content = content.replace("import ServiceHeroTypography from '../components/ServiceHeroTypography';\n", "");

fs.writeFileSync('/app/applet/pages/Services.tsx', content);
