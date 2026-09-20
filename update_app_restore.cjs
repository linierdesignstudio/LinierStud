const fs = require('fs');
let content = fs.readFileSync('/app/applet/App.tsx', 'utf8');

const searchBlock = `// Scroll to top wrapper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};`;

const replaceBlock = `// Scroll to top wrapper & Path Saver
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
    // Save last path so we can restore it if the iframe reloads without a hash
    sessionStorage.setItem('last_path', pathname);
  }, [pathname]);
  return null;
};`;

content = content.replace(searchBlock, replaceBlock);
fs.writeFileSync('/app/applet/App.tsx', content);

let indexContent = fs.readFileSync('/app/applet/index.tsx', 'utf8');

if (!indexContent.includes('last_path')) {
  indexContent = indexContent.replace(
    "import App from './App';",
    "import App from './App';\n\n// Restore last path if available (useful for iframe refreshes that clear the hash)\nconst lastPath = sessionStorage.getItem('last_path');\nif (lastPath && !window.location.hash) {\n  window.location.hash = lastPath;\n}"
  );
  fs.writeFileSync('/app/applet/index.tsx', indexContent);
}

