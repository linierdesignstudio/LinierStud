const fs = require('fs');
let content = fs.readFileSync('/app/applet/components/Footer.tsx', 'utf8');

content = content.replace(
  '{social.name}',
  '<span>{social.name}</span>'
);

fs.writeFileSync('/app/applet/components/Footer.tsx', content);
