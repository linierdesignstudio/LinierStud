
import React from 'react';
import { motion } from 'framer-motion';
import RevealOnScroll from '../components/RevealOnScroll';
import { useLanguage } from '../contexts/LanguageContext';

const Privacy: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="w-full pt-40 pb-24 min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white selection:bg-bronze-500 selection:text-white">
      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 border-b border-neutral-300 dark:border-white/10 pb-12"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-bronze-500 mb-4 block">
            {t.common.legal_doc}
          </span>
          <h1 className="text-4xl md:text-7xl font-display font-bold uppercase tracking-tight mb-6">
            {t.common.privacy}
          </h1>
          <p className="text-neutral-500 font-mono text-sm uppercase tracking-wider">
            {t.legal.privacy_date}
          </p>
        </motion.div>

        {/* Content - UPDATED FONT SIZE */}
        <div className="space-y-12 text-lg md:text-2xl text-neutral-600 dark:text-neutral-400 font-light leading-relaxed">
          <div className="prose prose-invert max-w-none prose-p:text-lg prose-p:md:text-2xl prose-li:text-lg prose-li:md:text-2xl prose-h2:text-2xl prose-h2:md:text-3xl prose-h3:text-xl prose-h3:md:text-2xl">
            <RevealOnScroll>
                {t.legal.privacy_intro.map((p, i) => (
                    <p key={i} className={`mb-8 ${i === 0 ? 'text-xl md:text-3xl text-white' : ''}`}>
                        {p}
                    </p>
                ))}
            </RevealOnScroll>

            {/* Section 1 */}
            <RevealOnScroll>
                <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-neutral-900 dark:text-white uppercase mb-6">{t.legal.privacy_s1_title}</h2>
                
                <div className="pl-4 md:pl-0">
                    <h3 className="text-xl md:text-2xl font-bold text-bronze-500 mb-3">{t.legal.privacy_s1_1_title}</h3>
                    <p className="mb-4">{t.legal.privacy_s1_1_desc}</p>
                    <ul className="list-disc pl-5 space-y-2 mb-6 marker:text-bronze-500">
                      {t.legal.privacy_s1_1_list.map((item, i) => (
                          <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <p className="mb-8 italic text-base text-neutral-500">{t.legal.privacy_s1_1_note}</p>

                    <h3 className="text-2xl font-bold text-bronze-500 mb-3">{t.legal.privacy_s1_2_title}</h3>
                    <p className="mb-4">{t.legal.privacy_s1_2_desc}</p>
                    <ul className="list-disc pl-5 space-y-2 mb-8 marker:text-bronze-500">
                      {t.legal.privacy_s1_2_list.map((item, i) => (
                          <li key={i}>{item}</li>
                      ))}
                    </ul>

                    <h3 className="text-2xl font-bold text-bronze-500 mb-3">{t.legal.privacy_s1_3_title}</h3>
                    <p className="mb-4">{t.legal.privacy_s1_3_desc}</p>
                    <ul className="list-disc pl-5 space-y-2 mb-6 marker:text-bronze-500">
                      {t.legal.privacy_s1_3_list.map((item, i) => (
                          <li key={i}>{item}</li>
                      ))}
                    </ul>
                    <p className="italic text-base text-neutral-500">{t.legal.privacy_s1_3_note}</p>
                </div>
                </section>
            </RevealOnScroll>

            {/* Section 2 */}
            <RevealOnScroll>
                <section className="mb-12">
                <h2 className="text-3xl font-display font-bold text-neutral-900 dark:text-white uppercase mb-6">{t.legal.privacy_s2_title}</h2>
                <p className="mb-4">{t.legal.privacy_s2_desc}</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-bronze-500">
                   {t.legal.privacy_s2_list.map((item, i) => (
                       <li key={i}>{item}</li>
                   ))}
                </ul>
                </section>
            </RevealOnScroll>

            {/* Section 3 */}
            <RevealOnScroll>
                <section className="mb-12">
                <h2 className="text-3xl font-display font-bold text-neutral-900 dark:text-white uppercase mb-6">{t.legal.privacy_s3_title}</h2>
                <p className="mb-4">{t.legal.privacy_s3_desc}</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-bronze-500">
                    {t.legal.privacy_s3_list.map((item, i) => (
                       <li key={i}>{item}</li>
                   ))}
                </ul>
                </section>
            </RevealOnScroll>

            {/* Section 4 */}
            <RevealOnScroll>
                <section className="mb-12">
                <h2 className="text-3xl font-display font-bold text-neutral-900 dark:text-white uppercase mb-6">{t.legal.privacy_s4_title}</h2>
                <p className="mb-4">{t.legal.privacy_s4_desc}</p>
                <ul className="list-disc pl-5 space-y-2 mb-4 marker:text-bronze-500">
                    {t.legal.privacy_s4_list.map((item, i) => (
                       <li key={i}>{item}</li>
                   ))}
                </ul>
                <p className="text-base border-l-2 border-bronze-500 pl-4 text-white">{t.legal.privacy_s4_note}</p>
                </section>
            </RevealOnScroll>

            {/* Section 5 */}
            <RevealOnScroll>
                <section className="mb-12">
                <h2 className="text-3xl font-display font-bold text-neutral-900 dark:text-white uppercase mb-6">{t.legal.privacy_s5_title}</h2>
                <p className="mb-4">{t.legal.privacy_s5_desc}</p>
                <ul className="list-disc pl-5 space-y-2 marker:text-bronze-500">
                    {t.legal.privacy_s5_list.map((item, i) => (
                       <li key={i}>{item}</li>
                   ))}
                </ul>
                </section>
            </RevealOnScroll>

            {/* Section 6 */}
            <RevealOnScroll>
                <section className="mb-12">
                <h2 className="text-3xl font-display font-bold text-neutral-900 dark:text-white uppercase mb-6">{t.legal.privacy_s6_title}</h2>
                <p>{t.legal.privacy_s6_desc}</p>
                </section>
            </RevealOnScroll>

            {/* Section 7 */}
            <RevealOnScroll>
                <section className="mb-12">
                <h2 className="text-3xl font-display font-bold text-neutral-900 dark:text-white uppercase mb-6">{t.legal.privacy_s7_title}</h2>
                <p className="mb-4">{t.legal.privacy_s7_desc}</p>
                <ul className="list-disc pl-5 space-y-2 mb-4 marker:text-bronze-500">
                    {t.legal.privacy_s7_list.map((item, i) => (
                       <li key={i}>{item}</li>
                   ))}
                </ul>
                <p>{t.legal.privacy_s7_note}</p>
                </section>
            </RevealOnScroll>

            {/* Section 8 */}
            <RevealOnScroll>
                <section className="mb-12">
                <h2 className="text-3xl font-display font-bold text-neutral-900 dark:text-white uppercase mb-6">{t.legal.privacy_s8_title}</h2>
                <p>{t.legal.privacy_s8_desc}</p>
                </section>
            </RevealOnScroll>

            {/* Section 9 */}
            <RevealOnScroll>
                <section className="mb-12">
                <h2 className="text-3xl font-display font-bold text-neutral-900 dark:text-white uppercase mb-6">{t.legal.privacy_s9_title}</h2>
                <p>{t.legal.privacy_s9_desc}</p>
                </section>
            </RevealOnScroll>

            {/* Section 10 */}
            <RevealOnScroll>
                <section className="mb-12">
                <h2 className="text-3xl font-display font-bold text-neutral-900 dark:text-white uppercase mb-6">{t.legal.privacy_s10_title}</h2>
                <p>{t.legal.privacy_s10_desc}</p>
                </section>
            </RevealOnScroll>

            {/* Section 11 */}
            <RevealOnScroll>
                <section className="mb-12">
                <h2 className="text-3xl font-display font-bold text-neutral-900 dark:text-white uppercase mb-6">{t.legal.privacy_s11_title}</h2>
                <p>{t.legal.privacy_s11_desc}</p>
                </section>
            </RevealOnScroll>

            {/* Section 12 */}
            <RevealOnScroll>
                <section className="mb-12 bg-neutral-900 border border-neutral-300 dark:border-white/5 p-8 rounded-sm">
                <h2 className="text-3xl font-display font-bold text-neutral-900 dark:text-white uppercase mb-6">{t.legal.privacy_s12_title}</h2>
                <p className="mb-6">{t.legal.privacy_s12_desc}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-bronze-500 mb-2">{t.legal.privacy_s12_label_1}</h4>
                    <a href="mailto:hello@linier.com" className="text-2xl font-display font-bold hover:text-bronze-500 transition-colors">hello@linier.com</a>
                    </div>
                    <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-bronze-500 mb-2">{t.legal.privacy_s12_label_2}</h4>
                    <a href="mailto:compliance@linier.com" className="text-2xl font-display font-bold hover:text-bronze-500 transition-colors">compliance@linier.com</a>
                    </div>
                </div>
                </section>
            </RevealOnScroll>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
