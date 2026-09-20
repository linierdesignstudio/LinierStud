const fs = require('fs');
let content = fs.readFileSync('/app/applet/pages/Home.tsx', 'utf8');

content = content.replace(
  'className="text-xl md:text-3xl lg:text-4xl font-display leading-[1.4] text-neutral-200"',
  'className="text-xl md:text-3xl lg:text-4xl font-display leading-[1.4] text-neutral-800 dark:text-neutral-200"'
);

fs.writeFileSync('/app/applet/pages/Home.tsx', content);
