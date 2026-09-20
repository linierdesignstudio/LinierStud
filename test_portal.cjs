const fs = require('fs');
let code = fs.readFileSync('/app/applet/components/Navbar.tsx', 'utf8');

// replace createPortal
const regex = /<AnimatePresence>\s*\{isOpen && createPortal\(\s*<motion\.div([\s\S]*?)<\/motion\.div>,\s*document\.body\s*\)\}\s*<\/AnimatePresence>/m;
const match = code.match(regex);
if (match) {
    const replacement = `{createPortal(
        <AnimatePresence>
          {isOpen && (
            <motion.div\${match[1]}</motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}`;
    code = code.replace(regex, replacement);
    fs.writeFileSync('/app/applet/components/Navbar.tsx', code);
    console.log("Portal patched");
} else {
    console.log("Pattern not found");
}
