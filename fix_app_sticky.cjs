const fs = require('fs');
let content = fs.readFileSync('/app/applet/App.tsx', 'utf8');

// replace Footer import
content = content.replace(
  "import Footer from './components/Footer';",
  "import StickyFooterWrapper from './components/StickyFooterWrapper';"
);

// replace Footer tag
content = content.replace(
  '<div className="sticky bottom-0 left-0 w-full z-0 h-[600px] md:h-auto">\n               <Footer />\n            </div>',
  '<StickyFooterWrapper />'
);

fs.writeFileSync('/app/applet/App.tsx', content);
