const fs = require('fs');

let content = fs.readFileSync('/app/applet/components/AboutHeroAndra.tsx', 'utf8');

content = content.replace(
  "import { motion } from 'framer-motion';",
  "import { motion } from 'framer-motion';\nimport { useLanguage } from '../contexts/LanguageContext';"
);

content = content.replace(
  "const AboutHeroAndra: React.FC = () => {",
  "const AboutHeroAndra: React.FC = () => {\n  const { t } = useLanguage();"
);

content = content.replace(
  ">                 The firm<br/>and the<br/>philosophy               </motion.h2>",
  ' dangerouslySetInnerHTML={{ __html: t.about.firm_and_philosophy }}\n               ></motion.h2>'
);

content = content.replace(
  ">                   Refining and modernizing architectural design for a clean, contemporary aesthetic.                </p>",
  '>\n                   {t.about.hero_subtitle}\n                </p>'
);

content = content.replace(
  ">                     Our architectural style is characterized by a clean and modern approach, consistently reflecting our contemporary aesthetic.                  </p>",
  '>\n                     {t.about.firm_desc}\n                  </p>'
);

content = content.replace(
  ">                   <span>→</span> Learn more our project                </div>",
  '>\n                   <span>→</span> {t.about.learn_more}\n                </div>'
);

fs.writeFileSync('/app/applet/components/AboutHeroAndra.tsx', content);
