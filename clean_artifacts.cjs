const fs = require('fs');
const path = require('path');

const walk = (dir) => {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.tsx')) {
            results.push(file);
        }
    });
    return results;
}

const files = [...walk('/app/applet/pages'), ...walk('/app/applet/components')];

files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');
    
    // Clean up duplicated or conflicting classes
    content = content.replace(/dark:text-neutral-900 dark:text-white/g, 'dark:text-white');
    content = content.replace(/dark:bg-white dark:bg-neutral-950/g, 'dark:bg-neutral-950');
    content = content.replace(/text-neutral-900 text-neutral-900/g, 'text-neutral-900');
    content = content.replace(/bg-white bg-white/g, 'bg-white');
    content = content.replace(/text-white text-neutral-900/g, 'text-neutral-900');
    
    // Also, some places might have shadow that needs tweaking for light mode
    // shadow-[0_-50px_100px_rgba(0,0,0,1)] -> dark:shadow-[0_-50px_100px_rgba(0,0,0,1)] shadow-[0_-50px_100px_rgba(0,0,0,0.1)]
    content = content.replace(/shadow-\[0_-50px_100px_rgba\(0,0,0,1\)\]/g, 'shadow-[0_-50px_100px_rgba(0,0,0,0.1)] dark:shadow-[0_-50px_100px_rgba(0,0,0,1)]');
    
    fs.writeFileSync(f, content);
});

