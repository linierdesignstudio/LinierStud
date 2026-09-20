const fs = require('fs');
let content = fs.readFileSync('/app/applet/components/StickyFooterWrapper.tsx', 'utf8');
content = content.replace(
  "import Footer from './Footer';",
  "import Footer from './Footer';\nimport Marquee from './Marquee';"
);
content = content.replace(
  /<Footer \/>/g,
  '<Marquee />\n        <Footer />'
);
fs.writeFileSync('/app/applet/components/StickyFooterWrapper.tsx', content);

let homeContent = fs.readFileSync('/app/applet/pages/Home.tsx', 'utf8');
homeContent = homeContent.replace("import Marquee from '../components/Marquee';\n", "");
homeContent = homeContent.replace("<Marquee />", "");
fs.writeFileSync('/app/applet/pages/Home.tsx', homeContent);
