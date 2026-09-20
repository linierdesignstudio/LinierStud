const fs = require('fs');
let content = fs.readFileSync('/app/applet/components/ScrollHighlightText.tsx', 'utf8');

content = content.replace(
  'offset: ["start 0.9", "start 0.4"]',
  'offset: ["start 0.8", "start 0.2"]'
);
content = content.replace(
  'offset: ["start 0.8", "end 0.5"]',
  'offset: ["start 0.8", "start 0.2"]'
);
content = content.replace(
  'offset: ["start 0.5", "start -0.25"]',
  'offset: ["start 0.8", "start 0.2"]'
);

content = content.replace(
  '[0.2, 1]',
  '[0.1, 1]'
);

fs.writeFileSync('/app/applet/components/ScrollHighlightText.tsx', content);
