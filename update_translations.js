const fs = require('fs');

let content = fs.readFileSync('/app/applet/translations.ts', 'utf8');

// EN
content = content.replace(
  'about: {',
  'about: {\n      hero_subtitle: "Refining and modernizing architectural design for a clean, contemporary aesthetic.",\n      firm_and_philosophy: "The firm<br/>and the<br/>philosophy",\n      firm_desc: "Our architectural style is characterized by a clean and modern approach, consistently reflecting our contemporary aesthetic.",\n      learn_more: "Learn more our project",'
);

content = content.replace(
  'portfolio: {',
  'portfolio: {\n      hero_title_1: "DESIGNING",\n      hero_title_2: "HOMES WITH",\n      hero_title_3: "PEOPLE",\n      hero_title_4: "AT HEART",\n      hero_desc_1: "We design spaces for people. No matter the scale\\nof the projects, our down-to-earth approach stays\\nthe same. We listen first, design second. We take\\nthe time to understand how you live, work, and\\nmove through your space.",\n      hero_desc_2: "Then, we bring your vision to life. Drawing from real\\nexperience, we create contemporary, aspirational\\nspaces that feel effortless and truly yours.",\n      hero_btn: "LEARN MORE ABOUT OUR STUDIO",\n      hero_tag: "(OUR STUDIO)",\n      hero_menu: "MENU",\n      hero_get_in_touch: "GET IN TOUCH",'
);

fs.writeFileSync('/app/applet/translations.ts', content);
