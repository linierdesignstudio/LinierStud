const fs = require('fs');
let code = fs.readFileSync('/app/applet/pages/Contact.tsx', 'utf8');

// Increase vertical spacing to prevent overlapping of error messages and floating labels
code = code.replace(/space-y-8 md:space-y-12/g, 'space-y-12 md:space-y-16');
code = code.replace(/gap-8 md:gap-12/g, 'gap-12 md:gap-16');

fs.writeFileSync('/app/applet/pages/Contact.tsx', code);
