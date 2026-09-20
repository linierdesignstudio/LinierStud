const fs = require('fs');
let code = fs.readFileSync('/app/applet/App.tsx', 'utf8');

// Move Navbar outside the relative z-10 container
code = code.replace(
  '<div className="flex flex-col min-h-screen relative z-10 bg-white dark:bg-neutral-950 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">\n              <Navbar />',
  '<Navbar />\n            <div className="flex flex-col min-h-screen relative z-10 bg-white dark:bg-neutral-950 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">'
);

fs.writeFileSync('/app/applet/App.tsx', code);
