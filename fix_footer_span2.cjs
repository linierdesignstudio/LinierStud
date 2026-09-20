const fs = require('fs');
let content = fs.readFileSync('/app/applet/components/Footer.tsx', 'utf8');

// Revert the key
content = content.replace(
  '<li key=<span>{social.name}</span>>',
  '<li key={social.name}>'
);

// Add span around social.name inside the anchor
content = content.replace(
  '<ArrowUpRight size={12}',
  '<span>{social.name}</span>\n                                        <ArrowUpRight size={12}'
);

content = content.replace(
  '                                        {social.name}\n                                        <span>{social.name}</span>',
  '                                        <span>{social.name}</span>'
);

fs.writeFileSync('/app/applet/components/Footer.tsx', content);
