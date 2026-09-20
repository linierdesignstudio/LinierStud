const fs = require('fs');
let content = fs.readFileSync('/app/applet/components/StickyFooterWrapper.tsx', 'utf8');

// Replace the isRevealAllowed logic
content = content.replace(
    'const isRevealAllowed = footerHeight > 0 && footerHeight <= windowHeight;',
    'const isMobile = window.innerWidth < 768;\n  const isRevealAllowed = !isMobile && footerHeight > 0 && footerHeight <= windowHeight;'
);

fs.writeFileSync('/app/applet/components/StickyFooterWrapper.tsx', content);
