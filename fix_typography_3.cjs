const fs = require('fs');
let content = fs.readFileSync('/app/applet/components/ServiceHeroTypography.tsx', 'utf8');

content = content.replace(
  /className="text-\[14vw\] sm:text-\[12vw\] md:text-\[11vw\] lg:text-\[10\.5vw\] font-display font-bold uppercase tracking-tighter leading-\[0\.85\] m-0 p-0 text-neutral-950 dark:text-white break-words"/g,
  'className="text-[12.5vw] sm:text-[12.5vw] md:text-[11vw] lg:text-[10.5vw] font-display font-bold uppercase tracking-tighter leading-[0.85] m-0 p-0 text-neutral-950 dark:text-white"'
);

fs.writeFileSync('/app/applet/components/ServiceHeroTypography.tsx', content);
