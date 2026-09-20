const fs = require('fs');
let code = fs.readFileSync('/app/applet/pages/Contact.tsx', 'utf8');

// Move error messages to the right side and slightly lower to avoid overlapping with next input's label
code = code.replace(/absolute -bottom-5 left-0/g, 'absolute -bottom-6 right-0 text-right');

fs.writeFileSync('/app/applet/pages/Contact.tsx', code);
