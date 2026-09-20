const fs = require('fs');
let code = fs.readFileSync('/app/applet/components/Navbar.tsx', 'utf8');

const overlayCode = `
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-[60] bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-white flex flex-col justify-between overflow-y-auto"
          >
             {/* Background Decoration */}
             <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
                   style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\\'0 0 200 200\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cfilter id=\\'noiseFilter\\'%3E%3CfeTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.65\\' numOctaves=\\'3\\' stitchTiles=\\'stitch\\'/%3E%3C/filter%3E%3Crect width=\\'100%25\\' height=\\'100%25\\' filter=\\'url(%23noiseFilter)\\'/%3E%3C/svg%3E")' }}
              />
             
             {/* 1. Header Spacer (Matches Navbar Height) */}
             <div className="h-[80px] w-full flex items-center px-6 shrink-0">
                 {/* Empty space for alignment with fixed navbar */}
             </div>

             {/* 2. Menu Links */}
             <div className="flex-1 flex flex-col justify-center px-6 py-8 relative z-20">
                <div className="flex flex-col">
                    {NAV_ITEMS.map((item, idx) => (
                        <motion.div
                            key={item.path}
                            custom={idx}
                            variants={listVariants}
                            className="group relative border-b border-neutral-300 dark:border-white/10"
                        >
                            <span className="absolute left-0 top-1/2 -translate-y-1/2 text-[10px] font-mono text-neutral-600 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4">
                                0{idx + 1}
                            </span>
                            <NavLink
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) => 
                                    \`block py-5 md:py-6 text-5xl sm:text-7xl font-display font-bold uppercase tracking-tight leading-[0.9] transition-all duration-500 \${
                                        isActive 
                                        ? 'text-neutral-900 dark:text-white translate-x-4'
                                        : 'text-neutral-500 hover:text-neutral-900 dark:text-white hover:translate-x-4'
                                    }\`
                                }
                            >
                                {getLabel(item.path)}
                            </NavLink>
                        </motion.div>
                    ))}
                </div>
             </div>

             {/* 3. Footer / Controls Wrapper */}
             <div className="relative z-10 shrink-0">
                 
                 {/* Content Controls */}
                 <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="p-6 relative z-20"
                 >
                     <div className="flex flex-col gap-6">
                         
                         {/* Language & Theme for Mobile */}
                         <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <Globe size={18} className="text-neutral-500" />
                                {(["ID", "EN", "CN"] as Language[]).map((l) => (
                                    <button
                                        key={l}
                                        onClick={() => setLanguage(l)}
                                        className={\`text-xs font-bold uppercase tracking-widest \${
                                            language === l 
                                            ? 'text-neutral-900 dark:text-white border-b border-white'
                                            : 'text-neutral-600'
                                        }\`}
                                    >
                                        {l}
                                    </button>
                                ))}
                            </div>
                            <button 
                                onClick={toggleTheme} 
                                className="w-10 h-10 rounded-full border border-neutral-200 dark:border-white/10 flex items-center justify-center text-neutral-500 dark:text-neutral-400 bg-white dark:bg-[#0a0a0a]"
                            >
                                {isDark ? <Sun size={18} /> : <Moon size={18} />}
                            </button>
                         </div>

                         {/* Contact Info */}
                         <div className="flex justify-between items-end">
                             <div>
                                 <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block mb-1">Get in touch</span>
                                 <a href="mailto:hello@linierstudio.com" className="text-lg font-display font-bold text-neutral-900 dark:text-white hover:text-bronze-500 transition-colors">
                                    hello@linierstudio.com
                                 </a>
                             </div>
                             <a href="#/contact" onClick={() => setIsOpen(false)} className="w-12 h-12 bg-bronze-500 flex items-center justify-center text-neutral-900 dark:text-white rounded-full">
                                 <ArrowUpRight size={20} />
                             </a>
                         </div>

                     </div>
                 </motion.div>

                 {/* MASSIVE FOOTER-LIKE TEXT */}
                 <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none z-10 flex justify-center items-end leading-none">
                     <h1 className="text-[12vw] leading-[0.75] font-display font-bold text-[#141414] tracking-tighter select-none translate-y-[10%] text-center w-full">
                         LINIER STUDIO
                     </h1>
                 </div>

             </div>
          </motion.div>`;

code = code.replace(/<motion\.div\$\{match\[1\]\}<\/motion\.div>/, overlayCode);

fs.writeFileSync('/app/applet/components/Navbar.tsx', code);
