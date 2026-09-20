const fs = require('fs');
let content = fs.readFileSync('/app/applet/App.tsx', 'utf8');

content = content.replace(
  /<div \n           className={`\n            flex flex-col min-h-screen \n            bg-white dark:bg-neutral-950 \n            text-neutral-900 dark:text-neutral-100 \n            selection:bg-bronze-500 selection:text-white \n            transition-colors duration-500\n            overflow-x-clip\n            \$\{scrollLocked \? 'h-screen overflow-hidden' : ''\} \n           `}\n        >/g,
  `<div 
          className={\`
            flex flex-col min-h-screen 
            text-neutral-900 dark:text-neutral-100 
            selection:bg-bronze-500 selection:text-white 
            transition-colors duration-500
            \${scrollLocked ? 'h-screen overflow-hidden' : ''}
          \`}
        >
            <div className="flex-grow relative z-10 bg-white dark:bg-neutral-950 flex flex-col">`
);

content = content.replace(
  '            <Navbar />\n            <main className="flex-grow">\n              <AnimatedRoutes />\n            </main>\n            <Footer />\n            <CookieBanner />\n            <AudioPlayer />\n        </div>',
  `            <Navbar />
            <main className="flex-grow">
              <AnimatedRoutes />
            </main>
            </div>
            
            <div className="sticky bottom-0 z-0">
               <Footer />
            </div>

            <CookieBanner />
            <AudioPlayer />
        </div>`
);

fs.writeFileSync('/app/applet/App.tsx', content);
