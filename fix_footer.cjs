const fs = require('fs');
let content = fs.readFileSync('/app/applet/components/Footer.tsx', 'utf8');

// Replace motion.h1 with h1 and remove style={{ y }}
content = content.replace(
    /<motion\.h1[^>]*style={{ y }}[^>]*>([\s\S]*?)<\/motion\.h1>/g,
    (match, p1) => {
        let inner = match.replace(/<motion\.h1/, '<h1').replace(/<\/motion\.h1>/, '</h1>');
        inner = inner.replace(/\s*style={{ y }}\s*/, ' ');
        return inner;
    }
);

// We might also want to change leading-[0.65] to leading-none to prevent clipping
content = content.replace(/leading-\[0\.65\]/g, 'leading-none');

fs.writeFileSync('/app/applet/components/Footer.tsx', content);
