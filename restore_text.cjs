const fs = require('fs');
let content = fs.readFileSync('/app/applet/components/Footer.tsx', 'utf8');

const target = '{/* Bottom Bar - Added Padding back here */}';
const replacement = `            {/* Massive Text - Full Width Edge-to-Edge */}
            <h1 className="text-[13.5vw] md:text-[15.5vw] leading-none font-display font-bold text-center text-neutral-900 dark:text-white select-none pointer-events-none tracking-tighter w-full m-0 p-0 whitespace-nowrap overflow-hidden">
                LINIER STUDIO
            </h1>

            {/* Bottom Bar - Added Padding back here */}`;

content = content.replace(target, replacement);

fs.writeFileSync('/app/applet/components/Footer.tsx', content);
