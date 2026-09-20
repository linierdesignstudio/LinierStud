const fs = require('fs');
let content = fs.readFileSync('/app/applet/components/AboutHeroAndra.tsx', 'utf8');

if (!content.includes("import { Link }")) {
    content = content.replace(
        "import { useLanguage } from '../contexts/LanguageContext';",
        "import { useLanguage } from '../contexts/LanguageContext';\nimport { Link } from 'react-router-dom';"
    );
}

content = content.replace(
    '<div className="absolute bottom-6 left-6 text-white text-sm font-medium flex items-center gap-2">\n                   <span>→</span> {t.about.learn_more}\n                </div>',
    '<Link to="/portfolio" className="absolute bottom-6 left-6 text-white text-sm font-medium flex items-center gap-2 group z-20 hover:text-bronze-500 transition-colors">\n                   <span className="group-hover:translate-x-2 transition-transform duration-300">→</span> <span className="underline decoration-transparent group-hover:decoration-current underline-offset-4 transition-all duration-300">{t.about.learn_more}</span>\n                </Link>'
);

fs.writeFileSync('/app/applet/components/AboutHeroAndra.tsx', content);
