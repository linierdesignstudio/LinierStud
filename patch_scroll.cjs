const fs = require('fs');
let code = fs.readFileSync('/app/applet/components/ScrollHighlightText.tsx', 'utf8');

code = code.replace(
  'offset: ["start 0.8", "end 0.4"]',
  'offset: ["start 0.8", "start 0.4"]'
);

fs.writeFileSync('/app/applet/components/ScrollHighlightText.tsx', code);
