const fs = require('fs');
let content = fs.readFileSync('/app/applet/components/Footer.tsx', 'utf8');

// Change WeChat to use onClick and copy ID to clipboard
// To do this simply without complex state, we can use a basic JS alert or just copy it.
// Actually, since alert is blocked in iframes, we could just change the link text to WeChat (Linierstudio)
// or just make the link `weixin://dl/chat` and copy to clipboard on click.

content = content.replace(
  "{ name: 'WeChat', href: 'tel:081775030638' },",
  "{ name: 'WeChat', href: '#', onClick: (e) => { e.preventDefault(); navigator.clipboard.writeText('Linierstudio'); const el = e.currentTarget.querySelector('span'); if(el) { const original = el.innerText; el.innerText = 'COPIED!'; setTimeout(() => el.innerText = original, 2000); } } },"
);

// We also need to make sure socialLinks map passes onClick
content = content.replace(
  '<a href={social.href} target={social.target} rel={social.rel} className="flex items-center justify-between text-sm font-bold uppercase text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white group border-b border-transparent hover:border-neutral-900/20 dark:hover:border-neutral-300 dark:border-white/20 pb-1 transition-all cursor-hover">',
  '<a href={social.href} target={social.target} rel={social.rel} onClick={social.onClick} className="flex items-center justify-between text-sm font-bold uppercase text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white group border-b border-transparent hover:border-neutral-900/20 dark:hover:border-neutral-300 dark:border-white/20 pb-1 transition-all cursor-hover">'
);
content = content.replace(
  '{social.name}',
  '<span>{social.name}</span>'
);


fs.writeFileSync('/app/applet/components/Footer.tsx', content);
