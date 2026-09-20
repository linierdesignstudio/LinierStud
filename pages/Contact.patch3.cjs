const fs = require('fs');
let code = fs.readFileSync('/app/applet/pages/Contact.tsx', 'utf8');

code = code.replace(
  '\\n                            if (!address) newErrors.address = true;',
  '\n                            if (!address) newErrors.address = true;'
);

code = code.replace(
  '{t.contact.form.address}</label>\\n                            {errors.address && <span className="absolute -bottom-5 left-0 text-xs text-red-500 font-bold uppercase tracking-widest">{t.common?.required || "Wajib di isi"}</span>}',
  '{t.contact.form.address}</label>\n                            {errors.address && <span className="absolute -bottom-5 left-0 text-xs text-red-500 font-bold uppercase tracking-widest">{t.common?.required || "Wajib di isi"}</span>}'
);


fs.writeFileSync('/app/applet/pages/Contact.tsx', code);
