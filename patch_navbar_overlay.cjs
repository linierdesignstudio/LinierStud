const fs = require('fs');
let code = fs.readFileSync('/app/applet/components/Navbar.tsx', 'utf8');

if (!code.includes("import { createPortal }")) {
  code = code.replace(
    "import React, { useState, useEffect } from 'react';",
    "import React, { useState, useEffect } from 'react';\nimport { createPortal } from 'react-dom';"
  );
}

// Replace overflow-hidden with overflow-y-auto
code = code.replace(
  'className="fixed inset-0 z-[60] bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-white flex flex-col justify-between overflow-hidden"',
  'className="fixed inset-0 z-[60] bg-white dark:bg-[#0a0a0a] text-neutral-900 dark:text-white flex flex-col justify-between overflow-y-auto"'
);

// Wrap the modal with createPortal
const targetRegex = /<AnimatePresence>\s*\{isOpen && \(\s*<motion\.div([\s\S]*?)<\/motion\.div>\s*\)\}\s*<\/AnimatePresence>/m;
const match = code.match(targetRegex);

if (match) {
  const replacement = `<AnimatePresence>\n        {isOpen && createPortal(\n          <motion.div${match[1]}</motion.div>,\n          document.body\n        )}\n      </AnimatePresence>`;
  code = code.replace(targetRegex, replacement);
} else {
  console.log("Could not find overlay pattern");
}

fs.writeFileSync('/app/applet/components/Navbar.tsx', code);
