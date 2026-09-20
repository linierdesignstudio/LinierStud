const fs = require('fs');
let code = fs.readFileSync('/app/applet/components/Navbar.tsx', 'utf8');

code = code.replace(
  /<div className="flex gap-3">\s*\{\(\['ID', 'EN', 'CN'\] as Language\[\]\)\.map/g,
  '<div className="flex items-center gap-3">\n                    <Globe size={16} className="opacity-40" />\n                    {(["ID", "EN", "CN"] as Language[]).map'
);

code = code.replace(
  /<div className="flex gap-4">\s*\{\(\['ID', 'EN', 'CN'\] as Language\[\]\)\.map/g,
  '<div className="flex items-center gap-4">\n                                <Globe size={18} className="text-neutral-500" />\n                                {(["ID", "EN", "CN"] as Language[]).map'
);

fs.writeFileSync('/app/applet/components/Navbar.tsx', code);
