const fs = require('fs');
let code = fs.readFileSync('/app/applet/pages/Contact.tsx', 'utf8');

// 1. Add state for errors
code = code.replace(
  'const [selectedType, setSelectedType] = React.useState<string>("");',
  'const [selectedType, setSelectedType] = React.useState<string>("");\n  const [errors, setErrors] = React.useState<Record<string, boolean>>({});'
);

// 2. Add validation in onClick
const onClickRegex = /onClick=\{\(e\) => \{[\s\S]*?e\.currentTarget\.href = [^;]+;\s*\}\}/;
const onClickReplacement = `onClick={(e) => {
                            e.preventDefault();
                            const nameEl = document.getElementById('name') as HTMLInputElement;
                            const emailEl = document.getElementById('email') as HTMLInputElement;
                            const phoneEl = document.getElementById('phone') as HTMLInputElement;
                            const addressEl = document.getElementById('address') as HTMLInputElement;
                            const messageEl = document.getElementById('message') as HTMLTextAreaElement;
                            
                            const name = nameEl?.value || '';
                            const email = emailEl?.value || '';
                            const phone = phoneEl?.value || '';
                            const address = addressEl?.value || '';
                            const message = messageEl?.value || '';
                            
                            const selectedRadio = document.querySelector('input[name="project_type"]:checked') as HTMLInputElement;
                            const projectType = selectedRadio ? selectedRadio.value || '' : '';
                            
                            const budgetSelect = document.getElementById('budget') as HTMLSelectElement;
                            const budget = budgetSelect ? budgetSelect.value : '';
                            
                            const designStyleSelect = document.getElementById('design_style') as HTMLSelectElement;
                            const designStyle = designStyleSelect ? designStyleSelect.value : '';

                            const newErrors: Record<string, boolean> = {};
                            if (!name) newErrors.name = true;
                            if (!email) newErrors.email = true;
                            if (!phone) newErrors.phone = true;
                            if (!message) newErrors.message = true;
                            
                            setErrors(newErrors);
                            
                            if (Object.keys(newErrors).length > 0) {
                                return; // Stop if errors
                            }
                            
                            let whatsappText = \`Halo Linier Studio,\\n\\nSaya ingin berkonsultasi mengenai proyek saya:\\n\`;
                            if (name) whatsappText += \`- Nama: \${name}\\n\`;
                            if (email) whatsappText += \`- Email: \${email}\\n\`;
                            if (phone) whatsappText += \`- No. Telepon: \${phone}\\n\`;
                            if (address) whatsappText += \`- Lokasi: \${address}\\n\`;
                            if (projectType) whatsappText += \`- Jenis Proyek: \${projectType}\\n\`;
                            if (designStyle) whatsappText += \`- Gaya Desain: \${designStyle}\\n\`;
                            if (budget) whatsappText += \`- Perkiraan Anggaran: \${budget}\\n\`;
                            if (message) whatsappText += \`\\nPesan:\\n\${message}\`;
                            
                            const encodedText = encodeURIComponent(whatsappText.trim());
                            window.open(\`https://wa.me/6281775030638?text=\${encodedText}\`, '_blank', 'noopener,noreferrer');
                          }}`;

code = code.replace(onClickRegex, onClickReplacement);

// 3. Add error messages to fields
// Name
code = code.replace(
  '{t.contact.form.name}</label>',
  '{t.contact.form.name}</label>\n                            {errors.name && <span className="absolute -bottom-5 left-0 text-xs text-red-500 font-bold uppercase tracking-widest">{t.common?.required || "Wajib di isi"}</span>}'
);
// Email
code = code.replace(
  '{t.contact.form.email}</label>',
  '{t.contact.form.email}</label>\n                            {errors.email && <span className="absolute -bottom-5 left-0 text-xs text-red-500 font-bold uppercase tracking-widest">{t.common?.required || "Wajib di isi"}</span>}'
);
// Phone
code = code.replace(
  '{t.contact.form.phone}</label>',
  '{t.contact.form.phone}</label>\n                            {errors.phone && <span className="absolute -bottom-5 left-0 text-xs text-red-500 font-bold uppercase tracking-widest">{t.common?.required || "Wajib di isi"}</span>}'
);
// Message
code = code.replace(
  '{t.contact.form.message}</label>',
  '{t.contact.form.message}</label>\n                        {errors.message && <span className="absolute -bottom-5 left-0 text-xs text-red-500 font-bold uppercase tracking-widest">{t.common?.required || "Wajib di isi"}</span>}'
);

fs.writeFileSync('/app/applet/pages/Contact.tsx', code);
