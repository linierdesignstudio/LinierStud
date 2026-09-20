const fs = require('fs');
let content = fs.readFileSync('/app/applet/components/Footer.tsx', 'utf8');

content = content.replace(
    'className="text-[13.5vw] md:text-[15.5vw] leading-none font-display font-bold text-center text-white select-none pointer-events-none tracking-tighter mix-blend-difference w-full m-0 p-0 whitespace-nowrap"',
    'className="text-[13.5vw] md:text-[15.5vw] leading-none font-display font-bold text-center text-neutral-900 dark:text-white select-none pointer-events-none tracking-tighter w-full m-0 p-0 whitespace-nowrap"'
);

fs.writeFileSync('/app/applet/components/Footer.tsx', content);
