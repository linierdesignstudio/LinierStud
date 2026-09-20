const fs = require('fs');
let content = fs.readFileSync('/app/applet/index.tsx', 'utf8');

content = content.replace(
  "// Ensure the app always starts at the home page on a fresh load\nif (!sessionStorage.getItem('app_initialized')) {\n  window.location.hash = '';\n  sessionStorage.setItem('app_initialized', 'true');\n}",
  "// Force home page on app boot to avoid sticky preview URL hashes\nwindow.location.hash = '/';"
);

fs.writeFileSync('/app/applet/index.tsx', content);
