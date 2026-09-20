const fs = require('fs');
let content = fs.readFileSync('/app/applet/components/Footer.tsx', 'utf8');

content = content.replace(
  'className="bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white relative pt-0 z-40 border-t border-neutral-200 dark:border-white/10 flex flex-col relative"',
  'className="bg-neutral-100 dark:bg-neutral-950 text-neutral-900 dark:text-white relative pt-0 border-t border-neutral-200 dark:border-white/10 flex flex-col"'
);

fs.writeFileSync('/app/applet/components/Footer.tsx', content);
