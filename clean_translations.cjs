const fs = require('fs');

let content = fs.readFileSync('/app/applet/translations.ts', 'utf8');

content = content.replace(
  '      hero_typography_1: "WE BUILD",\n      hero_typography_2: "YOUR VISION.",\n      hero_typography_desc: "We design thoughtful spaces for smart clients.",\n      hero_typography_col1: "Architecture &\\nInterior",\n      hero_typography_col2: "Jakarta\\nIndonesia",\n      hero_sub: "Our Expertise",',
  '      hero_sub: "Our Expertise",'
);

content = content.replace(
  '      hero_typography_1: "KAMI MEMBANGUN",\n      hero_typography_2: "VISI ANDA.",\n      hero_typography_desc: "Kami merancang ruang yang cermat untuk klien yang cerdas.",\n      hero_typography_col1: "Arsitektur &\\nInterior",\n      hero_typography_col2: "Jakarta\\nIndonesia",\n      hero_sub: "Keahlian Kami",',
  '      hero_sub: "Keahlian Kami",'
);

content = content.replace(
  '      hero_typography_1: "我们共筑",\n      hero_typography_2: "您的愿景。",\n      hero_typography_desc: "我们为明智的客户设计周到的空间。",\n      hero_typography_col1: "建筑与室内\\n设计",\n      hero_typography_col2: "雅加达\\n印度尼西亚",\n      hero_sub: "我们的专业知识",',
  '      hero_sub: "我们的专业知识",'
);

fs.writeFileSync('/app/applet/translations.ts', content);
