const fs = require('fs');
let content = fs.readFileSync('/app/applet/components/ServiceHeroTypography.tsx', 'utf8');

content = content.replace(
  /className="text-\[16vw\] md:text-\[14vw\] font-display font-bold uppercase tracking-tighter leading-\[0\.8\] m-0 p-0 text-neutral-950 dark:text-white"/g,
  'className="text-[11vw] sm:text-[10vw] md:text-[9vw] lg:text-[8vw] font-display font-bold uppercase tracking-tighter leading-[0.9] m-0 p-0 text-neutral-950 dark:text-white break-words"'
);

fs.writeFileSync('/app/applet/components/ServiceHeroTypography.tsx', content);
