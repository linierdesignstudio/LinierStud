const fs = require('fs');
let content = fs.readFileSync('/app/applet/components/ScrollHighlightText.tsx', 'utf8');

content = content.replace(
  'offset: ["start 0.5", "start -0.25"]',
  'offset: ["start 0.8", "end 0.5"]'
);

content = content.replace(
  '[0.1, 1]',
  '[0.2, 1]'
);

fs.writeFileSync('/app/applet/components/ScrollHighlightText.tsx', content);
