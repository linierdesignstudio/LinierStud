const fs = require('fs');
let content = fs.readFileSync('/app/applet/components/Footer.tsx', 'utf8');

content = content.replace(
  '<li key=<span>{social.name}</span>>',
  '<li key={social.name}>'
);

fs.writeFileSync('/app/applet/components/Footer.tsx', content);
