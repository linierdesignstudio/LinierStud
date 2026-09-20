
import React from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import RevealOnScroll from '../components/RevealOnScroll';
import RevealSentences from '../components/RevealSentences';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [selectedType, setSelectedType] = React.useState<string>("");
  const [errors, setErrors] = React.useState<Record<string, boolean>>({});

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


  return (
    <div className="w-full pt-32 md:pt-40 pb-24 min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white selection:bg-bronze-500 selection:text-white">
            <div className="container mx-auto px-5 sm:px-6 md:px-12">
                <div className="flex flex-col lg:flex-row gap-12 md:gap-16 lg:gap-24">
          
          {/* Info Side - Fixed: Removed 'sticky' on mobile, added 'lg:sticky' */}
          <div className="lg:w-1/3 relative lg:sticky lg:top-32 h-fit">
            <div>
                <RevealOnScroll>
                    <h1 className="text-4xl md:text-7xl font-display font-bold uppercase tracking-tight mb-8 md:mb-12">{t.contact.title}</h1>
                </RevealOnScroll>
                
                <RevealSentences className="text-base md:text-2xl text-neutral-600 dark:text-neutral-400 mb-8 md:mb-12 font-light leading-relaxed">
                   {t.contact.subtitle}
                </RevealSentences>

                <div className="space-y-10 md:space-y-16 border-t border-neutral-300 dark:border-white/10 pt-8 md:pt-12">
                    <RevealOnScroll delay={0.2}>
                        {/* Address */}
                        <div className="flex items-start gap-6 group mb-8 md:mb-12">
                            <div className="w-12 h-12 rounded-full border border-neutral-300 dark:border-white/20 flex items-center justify-center text-bronze-500 group-hover:border-bronze-500 transition-colors shrink-0">
                                <MapPin size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold uppercase tracking-widest text-xs mb-2 text-neutral-500">{t.contact.office}</h4>
                                <p className="text-lg text-neutral-900 dark:text-white font-light leading-relaxed">
                                    {t.common.address_line1}<br/>
                                    {t.common.address_line2}<br/>
                                    {t.common.address_country}
                                </p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-6 group mb-8 md:mb-12">
                             <div className="w-12 h-12 rounded-full border border-neutral-300 dark:border-white/20 flex items-center justify-center text-bronze-500 group-hover:border-bronze-500 transition-colors shrink-0">
                                <Mail size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold uppercase tracking-widest text-xs mb-2 text-neutral-500">{t.contact.email}</h4>
                                <a href="mailto:hello@linierstudio.com" className="text-lg text-neutral-900 dark:text-white font-light hover:text-bronze-500 transition-colors">hello@linierstudio.com</a>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-6 group">
                             <div className="w-12 h-12 rounded-full border border-neutral-300 dark:border-white/20 flex items-center justify-center text-bronze-500 group-hover:border-bronze-500 transition-colors shrink-0">
                                <Phone size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold uppercase tracking-widest text-xs mb-2 text-neutral-500">{t.contact.phone}</h4>
                                <a href="https://wa.me/6281775030638" target="_blank" rel="noopener noreferrer" className="text-lg text-neutral-900 dark:text-white font-light hover:text-bronze-500 transition-colors">+62 817 7503 0638</a>
                            </div>
                        </div>
                    </RevealOnScroll>
                </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3">
            <form className="space-y-12 md:space-y-16" onSubmit={(e) => e.preventDefault()}>
                {/* Row 1 */}
                <RevealOnScroll delay={0.1}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                        <div className="group relative">
                            <input type="text" id="name" placeholder=" " onBlur={handleBlur("name")} onChange={handleChange("name")} className="peer w-full bg-transparent border-b border-neutral-300 dark:border-white/20 py-4 text-xl text-neutral-900 dark:text-white focus:outline-none focus:border-bronze-500 transition-colors placeholder-transparent" />
                            <label htmlFor="name" className="absolute left-0 top-4 text-neutral-500 text-sm font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-bronze-500 peer-[&:not(:placeholder-shown)]:-top-6 peer-[&:not(:placeholder-shown)]:text-xs">{t.contact.form.name}</label>
                            {errors.name && <span className="absolute -bottom-6 right-0 text-right text-xs text-red-500 font-bold uppercase tracking-widest">{t.common?.required || "Wajib di isi"}</span>}
                        </div>
                        <div className="group relative">
                            <input type="email" id="email" placeholder=" " onBlur={handleBlur("email")} onChange={handleChange("email")} className="peer w-full bg-transparent border-b border-neutral-300 dark:border-white/20 py-4 text-xl text-neutral-900 dark:text-white focus:outline-none focus:border-bronze-500 transition-colors placeholder-transparent" />
                            <label htmlFor="email" className="absolute left-0 top-4 text-neutral-500 text-sm font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-bronze-500 peer-[&:not(:placeholder-shown)]:-top-6 peer-[&:not(:placeholder-shown)]:text-xs">{t.contact.form.email}</label>
                            {errors.email && <span className="absolute -bottom-6 right-0 text-right text-xs text-red-500 font-bold uppercase tracking-widest">{t.common?.required || "Wajib di isi"}</span>}
                        </div>
                    </div>
                </RevealOnScroll>

                {/* Row 2 */}
                <RevealOnScroll delay={0.2}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                        <div className="group relative">
                            <input type="tel" id="phone" placeholder=" " onBlur={handleBlur("phone")} onChange={handleChange("phone")} className="peer w-full bg-transparent border-b border-neutral-300 dark:border-white/20 py-4 text-xl text-neutral-900 dark:text-white focus:outline-none focus:border-bronze-500 transition-colors placeholder-transparent" />
                            <label htmlFor="phone" className="absolute left-0 top-4 text-neutral-500 text-sm font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-bronze-500 peer-[&:not(:placeholder-shown)]:-top-6 peer-[&:not(:placeholder-shown)]:text-xs">{t.contact.form.phone}</label>
                            {errors.phone && <span className="absolute -bottom-6 right-0 text-right text-xs text-red-500 font-bold uppercase tracking-widest">{t.common?.required || "Wajib di isi"}</span>}
                        </div>
                        <div className="group relative">
                            <input type="text" id="address" placeholder=" " onBlur={handleBlur("address")} onChange={handleChange("address")} className="peer w-full bg-transparent border-b border-neutral-300 dark:border-white/20 py-4 text-xl text-neutral-900 dark:text-white focus:outline-none focus:border-bronze-500 transition-colors placeholder-transparent" />
                            <label htmlFor="address" className="absolute left-0 top-4 text-neutral-500 text-sm font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-bronze-500 peer-[&:not(:placeholder-shown)]:-top-6 peer-[&:not(:placeholder-shown)]:text-xs">{t.contact.form.address}</label>
                            {errors.address && <span className="absolute -bottom-6 right-0 text-right text-xs text-red-500 font-bold uppercase tracking-widest">{t.common?.required || "Wajib di isi"}</span>}
                        </div>
                    </div>
                </RevealOnScroll>

                {/* Dropdowns */}
                <RevealOnScroll delay={0.3}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                        <div className="group">
                            <label className="block text-xs font-bold uppercase tracking-widest text-neutral-500 mb-4">{t.contact.form.project}</label>
                            <div className="grid grid-cols-1 gap-3">
                                {(t.contact.types || []).map((type, i) => (
                                    <label key={i} className="flex items-center gap-4 cursor-pointer group/item hover:bg-white/5 p-2 -ml-2 rounded-sm transition-colors">
                                        <div className="relative flex items-center justify-center">
                                            <input 
                                                type="radio" 
                                                name="project_type" 
                                                value={type} 
                                                checked={selectedType === type}
                                                onChange={() => {
                                                    setSelectedType(type);
                                                    const budgetSelect = document.getElementById('budget') as HTMLSelectElement;
                                                    if (budgetSelect) {
                                                        budgetSelect.value = "";
                                                    }
                                                }}
                                                className="peer sr-only" 
                                            />
                                            <div className="w-5 h-5 rounded-full border border-neutral-300 dark:border-white/20 peer-checked:border-bronze-500 peer-checked:bg-bronze-500 transition-all"></div>
                                            <div className="absolute w-2 h-2 bg-white rounded-full opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity"></div>
                                        </div>
                                        <span className="text-lg text-neutral-600 dark:text-neutral-400 group-hover/item:text-neutral-900 dark:group-hover/item:text-white transition-colors font-light">{type}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-12 md:gap-16">
                            <div className="group">
                                <label className="block text-xs font-bold uppercase tracking-widest text-neutral-500 mb-4">{t.contact.form.budget}</label>
                                 <div className="relative">
                                    <select id="budget" className="w-full bg-transparent border-b border-neutral-300 dark:border-white/20 py-4 text-xl text-neutral-900 dark:text-white focus:outline-none focus:border-bronze-500 transition-colors appearance-none rounded-none cursor-pointer">
                                        <option value="" disabled className="bg-neutral-900 text-neutral-500">{t.contact.form.select_range || "Select Range"}</option>
                                        {(t.contact.types.indexOf(selectedType) === 3
                                            ? (t.contact.interior_contractor_budget_options || [])
                                            : (t.contact.budget_options || [])
                                        ).map((opt, i) => (
                                            <option key={i} value={opt} className="bg-neutral-900 text-white">{opt}</option>
                                        ))}
                                    </select>
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                                    </div>
                                 </div>
                                 {(t.contact.types.indexOf(selectedType) === 1 || 
                                   t.contact.types.indexOf(selectedType) === 2 || 
                                   t.contact.types.indexOf(selectedType) === 4) && (
                                     <p className="mt-3 text-xs text-neutral-600 dark:text-neutral-400 font-light leading-relaxed border-l border-bronze-500 pl-3">
                                         {t.contact.form.budget_note}
                                     </p>
                                 )}
                            </div>

                            <div className="group">
                                <label className="block text-xs font-bold uppercase tracking-widest text-neutral-500 mb-4">{t.contact.form.style || "Design Style"}</label>
                                 <div className="relative">
                                    <select id="design_style" className="w-full bg-transparent border-b border-neutral-300 dark:border-white/20 py-4 text-xl text-neutral-900 dark:text-white focus:outline-none focus:border-bronze-500 transition-colors appearance-none rounded-none cursor-pointer">
                                        <option value="" disabled className="bg-neutral-900 text-neutral-500">{t.contact.form.select_style || "Select Design Style"}</option>
                                        {(t.contact.styles || []).map((opt: string, i: number) => (
                                            <option key={i} value={opt} className="bg-neutral-900 text-white">{opt}</option>
                                        ))}
                                    </select>
                                    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
                                    </div>
                                 </div>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>

                {/* Message */}
                <RevealOnScroll delay={0.4}>
                    <div className="group relative">
                        <textarea id="message" rows={4} placeholder=" " onBlur={handleBlur("message")} onChange={handleChange("message")} className="peer w-full bg-transparent border-b border-neutral-300 dark:border-white/20 py-4 text-xl text-neutral-900 dark:text-white focus:outline-none focus:border-bronze-500 transition-colors placeholder-transparent resize-none"></textarea>
                        <label htmlFor="message" className="absolute left-0 top-4 text-neutral-500 text-sm font-bold uppercase tracking-widest transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-neutral-500 peer-placeholder-shown:top-4 peer-focus:-top-6 peer-focus:text-xs peer-focus:text-bronze-500 peer-[&:not(:placeholder-shown)]:-top-6 peer-[&:not(:placeholder-shown)]:text-xs">{t.contact.form.message}</label>
                        {errors.message && <span className="absolute -bottom-6 right-0 text-right text-xs text-red-500 font-bold uppercase tracking-widest">{t.common?.required || "Wajib di isi"}</span>}
                    </div>
                </RevealOnScroll>

                {/* Submit */}
                <RevealOnScroll delay={0.5}>
                    <div className="pt-8">
                        <a 
                          href="https://wa.me/6281775030638" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          onClick={(e) => {
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
                            if (!address) newErrors.address = true;
                            if (!message) newErrors.message = true;
                            
                            setErrors(newErrors);
                            
                            if (Object.keys(newErrors).length > 0) {
                                return; // Stop if errors
                            }
                            
                            let whatsappText = `Halo Linier Studio 👋\n\nSaya ingin berkonsultasi mengenai rencana proyek saya dan mendapatkan informasi lebih lanjut.\n\n*DATA KONSULTASI PROYEK*\n`;
                            if (name) whatsappText += `👤 *Nama:* ${name}\n`;
                            if (email) whatsappText += `✉️ *Email:* ${email}\n`;
                            if (phone) whatsappText += `📞 *No. Telepon:* ${phone}\n`;
                            if (address) whatsappText += `📍 *Lokasi:* ${address}\n`;
                            if (projectType) whatsappText += `🏗️ *Jenis Proyek:* ${projectType}\n`;
                            if (designStyle) whatsappText += `🎨 *Gaya Desain:* ${designStyle}\n`;
                            if (budget) whatsappText += `💰 *Perkiraan Anggaran:* ${budget}\n`;
                            if (message) whatsappText += `\n📝 *Detail Kebutuhan:*\n${message}\n`;
                            whatsappText += `\nTerima kasih. Saya siap berdiskusi lebih lanjut mengenai proyek ini. Mohon informasi mengenai langkah selanjutnya 🙏`;
                            
                            const encodedText = encodeURIComponent(whatsappText.trim());
                            window.open(`https://wa.me/6281775030638?text=${encodedText}`, '_blank', 'noopener,noreferrer');
                          }}
                          className="group relative px-10 py-5 bg-white text-neutral-950 text-sm font-bold uppercase tracking-widest hover:bg-bronze-500 hover:text-white transition-all duration-300 w-full md:w-auto inline-flex items-center justify-center gap-4 cursor-hover"
                        >
                            <span>{t.contact.form.submit}</span>
                            <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </RevealOnScroll>

            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
