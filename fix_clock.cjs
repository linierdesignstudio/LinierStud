const fs = require('fs');
let content = fs.readFileSync('/app/applet/components/Footer.tsx', 'utf8');

const originalBlock = `       <div className="relative h-6 overflow-hidden">
           <AnimatePresence mode="popLayout">
               <motion.div 
                 key={formattedTime}
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -10 }}
                 transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                 className="text-lg font-display font-medium text-neutral-900 dark:text-white tabular-nums leading-none"
               >
                   {formattedTime}
               </motion.div>
           </AnimatePresence>
       </div>`;

const newBlock = `       <div className="relative h-6 flex items-center">
           <div className="text-lg font-display font-medium text-neutral-900 dark:text-white tabular-nums leading-none">
               {formattedTime}
           </div>
       </div>`;

content = content.replace(originalBlock, newBlock);

fs.writeFileSync('/app/applet/components/Footer.tsx', content);
