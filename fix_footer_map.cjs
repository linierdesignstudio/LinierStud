const fs = require('fs');
let content = fs.readFileSync('/app/applet/components/Footer.tsx', 'utf8');

content = content.replace(
  '<a href={social.href}',
  '<a href={social.href} target={social.target} rel={social.rel}'
);

fs.writeFileSync('/app/applet/components/Footer.tsx', content);
