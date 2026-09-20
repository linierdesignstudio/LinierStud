const fs = require('fs');
let content = fs.readFileSync('/app/applet/components/Footer.tsx', 'utf8');

// Find and remove the massive text block
const textBlockRegex = /\{\/\* Massive Text - Full Width Edge-to-Edge \*\/\}\s*<h1[^>]*>[\s\S]*?<\/h1>/;
content = content.replace(textBlockRegex, '');

fs.writeFileSync('/app/applet/components/Footer.tsx', content);
