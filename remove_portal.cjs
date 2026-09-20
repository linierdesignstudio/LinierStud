const fs = require('fs');
let code = fs.readFileSync('/app/applet/components/Navbar.tsx', 'utf8');

// replace createPortal
const regex = /\{createPortal\(\s*<AnimatePresence>\s*\{isOpen && \(\s*<motion\.div([\s\S]*?)<\/motion\.div>\s*\)\}\s*<\/AnimatePresence>,\s*document\.body\s*\)\}/m;
const match = code.match(regex);
if (match) {
    const replacement = `<AnimatePresence>
        {isOpen && (
          <motion.div\${match[1]}</motion.div>
        )}
      </AnimatePresence>`;
    code = code.replace(regex, replacement);
    fs.writeFileSync('/app/applet/components/Navbar.tsx', code);
    console.log("Portal removed");
} else {
    // Try the other format just in case
    const regex2 = /<AnimatePresence>\s*\{isOpen && createPortal\(\s*<motion\.div([\s\S]*?)<\/motion\.div>,\s*document\.body\s*\)\}\s*<\/AnimatePresence>/m;
    const match2 = code.match(regex2);
    if (match2) {
        const replacement = `<AnimatePresence>
        {isOpen && (
          <motion.div\${match2[1]}</motion.div>
        )}
      </AnimatePresence>`;
        code = code.replace(regex2, replacement);
        fs.writeFileSync('/app/applet/components/Navbar.tsx', code);
        console.log("Portal removed (format 2)");
    } else {
        console.log("Pattern not found");
    }
}
