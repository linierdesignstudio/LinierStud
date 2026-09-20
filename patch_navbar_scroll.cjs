const fs = require('fs');
let code = fs.readFileSync('/app/applet/components/Navbar.tsx', 'utf8');

// Add shrink-0 to header spacer
code = code.replace(
  '<div className="h-[80px] w-full flex items-center px-6">',
  '<div className="h-[80px] w-full flex items-center px-6 shrink-0">'
);

// Add shrink-0 to footer
code = code.replace(
  '<div className="relative z-10">\\n                                  {/* Content Controls */} ',
  '<div className="relative z-10 shrink-0">\\n                                  {/* Content Controls */} '
);

// Add some padding to menu links to prevent crowding when scrolling
code = code.replace(
  '<div className="flex-1 flex flex-col justify-center px-6 relative z-20">',
  '<div className="flex-1 flex flex-col justify-center px-6 py-8 relative z-20">'
);

fs.writeFileSync('/app/applet/components/Navbar.tsx', code);
