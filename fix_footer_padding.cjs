const fs = require('fs');
let content = fs.readFileSync('/app/applet/components/Footer.tsx', 'utf8');

// Change the bottom bar to accommodate the fixed audio player on the left
content = content.replace(
    'className="w-full flex justify-between items-end border-t border-neutral-200 dark:border-white/10 pt-4 mt-8 pb-4 px-4 md:px-8 bg-white dark:bg-neutral-950"',
    'className="w-full flex flex-col md:flex-row justify-between items-start md:items-end border-t border-neutral-200 dark:border-white/10 pt-4 mt-8 pb-8 md:pb-4 px-4 md:px-8 bg-white dark:bg-neutral-950 gap-4 pl-20 md:pl-[120px]"'
);

fs.writeFileSync('/app/applet/components/Footer.tsx', content);
