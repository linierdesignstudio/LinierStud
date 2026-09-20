const fs = require('fs');
let content = fs.readFileSync('/app/applet/pages/Services.tsx', 'utf8');

content = content.replace(
  'className="text-2xl md:text-5xl font-display font-bold uppercase leading-tight tracking-tighter mb-12 text-neutral-950"',
  'className="text-2xl md:text-5xl font-display font-bold uppercase leading-tight tracking-tighter mb-12 text-neutral-900 dark:text-white"'
);

fs.writeFileSync('/app/applet/pages/Services.tsx', content);
