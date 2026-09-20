const fs = require('fs');
let content = fs.readFileSync('/app/applet/pages/ProjectDetail.tsx', 'utf8');

content = content.replace(
  'className="text-2xl md:text-4xl font-light leading-relaxed text-neutral-200"',
  'className="text-2xl md:text-4xl font-light leading-relaxed text-neutral-800 dark:text-neutral-200"'
);

fs.writeFileSync('/app/applet/pages/ProjectDetail.tsx', content);
