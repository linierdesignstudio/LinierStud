const fs = require('fs');
let code = fs.readFileSync('/app/applet/pages/Contact.tsx', 'utf8');

const helpers = `
  const handleBlur = (field: string) => (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!e.target.value.trim()) {
      setErrors(prev => ({ ...prev, [field]: true }));
    }
  };

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.target.value.trim()) {
      setErrors(prev => ({ ...prev, [field]: false }));
    } else {
      setErrors(prev => ({ ...prev, [field]: true }));
    }
  };
`;

code = code.replace(
  'const [errors, setErrors] = React.useState<Record<string, boolean>>({});',
  'const [errors, setErrors] = React.useState<Record<string, boolean>>({});\n' + helpers
);

// update inputs
code = code.replace(
  '<input type="text" id="name" placeholder=" "',
  '<input type="text" id="name" placeholder=" " onBlur={handleBlur("name")} onChange={handleChange("name")}'
);

code = code.replace(
  '<input type="email" id="email" placeholder=" "',
  '<input type="email" id="email" placeholder=" " onBlur={handleBlur("email")} onChange={handleChange("email")}'
);

code = code.replace(
  '<input type="tel" id="phone" placeholder=" "',
  '<input type="tel" id="phone" placeholder=" " onBlur={handleBlur("phone")} onChange={handleChange("phone")}'
);

// If there's an address field that needs validation
if (!code.includes('{errors.address')) {
    code = code.replace(
      '<input type="text" id="address" placeholder=" "',
      '<input type="text" id="address" placeholder=" " onBlur={handleBlur("address")} onChange={handleChange("address")}'
    );
    code = code.replace(
      '{t.contact.form.address}</label>',
      '{t.contact.form.address}</label>\\n                            {errors.address && <span className="absolute -bottom-5 left-0 text-xs text-red-500 font-bold uppercase tracking-widest">{t.common?.required || "Wajib di isi"}</span>}'
    );
    code = code.replace(
      'if (!phone) newErrors.phone = true;',
      'if (!phone) newErrors.phone = true;\\n                            if (!address) newErrors.address = true;'
    );
}


code = code.replace(
  '<textarea id="message" rows={4} placeholder=" "',
  '<textarea id="message" rows={4} placeholder=" " onBlur={handleBlur("message")} onChange={handleChange("message")}'
);

fs.writeFileSync('/app/applet/pages/Contact.tsx', code);
