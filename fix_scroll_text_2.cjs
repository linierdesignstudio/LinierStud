const fs = require('fs');
let content = fs.readFileSync('/app/applet/components/ScrollHighlightText.tsx', 'utf8');

content = content.replace(
  'offset: ["start 0.8", "end 0.5"]',
  'offset: ["start 0.9", "start 0.4"]'
);

fs.writeFileSync('/app/applet/components/ScrollHighlightText.tsx', content);
