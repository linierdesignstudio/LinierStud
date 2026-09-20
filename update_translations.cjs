const fs = require('fs');

let content = fs.readFileSync('/app/applet/translations.ts', 'utf8');

// The file has three sections: EN, ID, ZH. We can just string replace the specific keys.

// ID replacements
content = content.replace(
  'about: {\n       ...enTranslations.about,\n       title: "Tentang Kami",',
  'about: {\n       ...enTranslations.about,\n       title: "Tentang Kami",\n       hero_subtitle: "Menyempurnakan dan memodernisasi desain arsitektur untuk estetika kontemporer yang bersih.",\n       firm_and_philosophy: "Firma<br/>dan<br/>filosofi",\n       firm_desc: "Gaya arsitektur kami ditandai dengan pendekatan yang bersih dan modern, secara konsisten mencerminkan estetika kontemporer kami.",\n       learn_more: "Pelajari lebih lanjut proyek kami",'
);

content = content.replace(
  'portfolio: { ...enTranslations.portfolio, title: "Portofolio", subtitle: "Karya Terpilih", filter_all: "Semua" },',
  'portfolio: { ...enTranslations.portfolio, title: "Portofolio", subtitle: "Karya Terpilih", filter_all: "Semua", hero_title_1: "MERANCANG", hero_title_2: "HUNIAN DENGAN", hero_title_3: "MANUSIA", hero_title_4: "SEBAGAI PUSATNYA", hero_desc_1: "Kami merancang ruang untuk manusia. Tidak peduli skala proyeknya, pendekatan membumi kami tetap sama. Kami mendengarkan terlebih dahulu, merancang kemudian. Kami meluangkan waktu untuk memahami bagaimana Anda hidup, bekerja, dan bergerak di ruang Anda.", hero_desc_2: "Kemudian, kami mewujudkan visi Anda. Belajar dari pengalaman nyata, kami menciptakan ruang kontemporer dan aspirasional yang terasa mudah dan benar-benar milik Anda.", hero_btn: "PELAJARI LEBIH LANJUT TENTANG STUDIO KAMI", hero_tag: "(STUDIO KAMI)", hero_menu: "MENU", hero_get_in_touch: "HUBUNGI KAMI" },'
);

// ZH replacements
content = content.replace(
  'about: {\n       ...enTranslations.about,\n       title: "关于我们",',
  'about: {\n       ...enTranslations.about,\n       title: "关于我们",\n       hero_subtitle: "提炼并现代化建筑设计，打造简洁、当代的审美。",\n       firm_and_philosophy: "公司<br/>与<br/>理念",\n       firm_desc: "我们的建筑风格以简洁和现代的方法为特征，始终体现我们当代的审美。",\n       learn_more: "了解更多我们的项目",'
);

content = content.replace(
  'portfolio: { ...enTranslations.portfolio, title: "作品集" },',
  'portfolio: { ...enTranslations.portfolio, title: "作品集", hero_title_1: "设计", hero_title_2: "以人为本的", hero_title_3: "理想", hero_title_4: "居所", hero_desc_1: "我们为人设计空间。无论项目规模如何，我们务实的方法始终如一。我们先倾听，后设计。我们花时间了解您的生活、工作以及在空间中的移动方式。", hero_desc_2: "然后，我们将您的愿景变为现实。从实际经验出发，我们创造出令人向往的现代空间，让您感到轻松自在且真正属于您。", hero_btn: "了解更多关于我们的工作室", hero_tag: "(我们的工作室)", hero_menu: "菜单", hero_get_in_touch: "联系我们" },'
);

// EN replacements (first occurrence)
content = content.replace(
  'about: {\n      title: "About Us",',
  'about: {\n      hero_subtitle: "Refining and modernizing architectural design for a clean, contemporary aesthetic.",\n      firm_and_philosophy: "The firm<br/>and the<br/>philosophy",\n      firm_desc: "Our architectural style is characterized by a clean and modern approach, consistently reflecting our contemporary aesthetic.",\n      learn_more: "Learn more our project",\n      title: "About Us",'
);

content = content.replace(
  'portfolio: {\n      title: "Portfolio",',
  'portfolio: {\n      hero_title_1: "DESIGNING",\n      hero_title_2: "HOMES WITH",\n      hero_title_3: "PEOPLE",\n      hero_title_4: "AT HEART",\n      hero_desc_1: "We design spaces for people. No matter the scale\\nof the projects, our down-to-earth approach stays\\nthe same. We listen first, design second. We take\\nthe time to understand how you live, work, and\\nmove through your space.",\n      hero_desc_2: "Then, we bring your vision to life. Drawing from real\\nexperience, we create contemporary, aspirational\\nspaces that feel effortless and truly yours.",\n      hero_btn: "LEARN MORE ABOUT OUR STUDIO",\n      hero_tag: "(OUR STUDIO)",\n      hero_menu: "MENU",\n      hero_get_in_touch: "GET IN TOUCH",\n      title: "Portfolio",'
);

fs.writeFileSync('/app/applet/translations.ts', content);
