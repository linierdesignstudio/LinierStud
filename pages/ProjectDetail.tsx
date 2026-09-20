
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import RevealOnScroll from '../components/RevealOnScroll';
import ScrollHighlightText from '../components/ScrollHighlightText';

const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  const baseProject = PROJECTS.find((p) => p.id === id);
  
  // Merge base project data with translated data if available
  const translatedData = id && t.projects ? t.projects[id] : {};
  const project = baseProject ? { ...baseProject, ...translatedData } : undefined;
  
  // Find next project index
  const currentIndex = PROJECTS.findIndex((p) => p.id === id);
  const nextProjectIndex = (currentIndex + 1) % PROJECTS.length;
  const nextProjectBase = PROJECTS[nextProjectIndex];
  
  // Get translation for next project title
  const nextProjectTranslatedData = nextProjectBase && t.projects ? t.projects[nextProjectBase.id] : {};
  const nextProject = nextProjectBase ? { ...nextProjectBase, ...nextProjectTranslatedData } : undefined;

  // Parallax for Hero
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 150]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  if (!project || !nextProject) {
    return (
      <div className="h-screen flex items-center justify-center bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
        <div className="text-center">
            <h1 className="text-4xl font-display font-bold mb-4">{t.project_detail?.not_found || "Project Not Found"}</h1>
            <Link to="/portfolio" className="text-bronze-500 hover:text-neutral-900 dark:hover:text-white transition-colors uppercase tracking-widest text-xs font-bold">
                {t.project_detail?.return || "Return to Portfolio"}
            </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white selection:bg-bronze-500 selection:text-white">
      
      {/* 1. HERO HEADER */}
      <section className="relative h-[80vh] md:h-screen w-full overflow-hidden">
         <motion.div 
            style={{ y: heroY, scale: heroScale }} 
            className="absolute inset-0 z-0"
         >
             {/* Removed bg-black/40 overlay for clear image */}
             <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
         </motion.div>

         <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-12 pb-24 md:pb-32 mix-blend-difference text-white">
             <div className="container mx-auto">
                 <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                 >
                     <div className="flex items-center gap-4 mb-6">
                         <Link to="/portfolio" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white hover:text-bronze-500 transition-colors cursor-hover">
                             <ArrowLeft size={14} /> {t.project_detail?.back || "Back to Portfolio"}
                         </Link>
                         <span className="w-12 h-[1px] bg-white/30"></span>
                         <span className="text-xs font-mono uppercase tracking-widest text-neutral-600 dark:text-neutral-300">
                             {t.categories[project.category]}
                         </span>
                     </div>
                     <h1 className="text-4xl md:text-8xl font-display font-bold uppercase tracking-tighter leading-none mb-6">
                         {project.title}
                     </h1>
                     <p className="text-xl md:text-2xl font-light text-neutral-600 dark:text-neutral-300">
                         {project.location} — {project.year}
                     </p>
                 </motion.div>
             </div>
         </div>
      </section>

      {/* 2. PROJECT INFO GRID */}
      <section className="border-b border-neutral-200 dark:border-white/10 bg-white dark:bg-neutral-950 relative z-20">
          <div className="container mx-auto px-6 md:px-12 py-16">
              <RevealOnScroll>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                      <div>
                          <span className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-2">{t.project_detail?.client || "Client"}</span>
                          <span className="text-lg md:text-xl font-display font-medium text-neutral-900 dark:text-white">{project.client || "Private"}</span>
                      </div>
                      <div>
                          <span className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-2">{t.project_detail?.area || "Area"}</span>
                          <span className="text-lg md:text-xl font-display font-medium text-neutral-900 dark:text-white">{project.area || "N/A"}</span>
                      </div>
                      <div>
                          <span className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-2">{t.project_detail?.year || "Year"}</span>
                          <span className="text-lg md:text-xl font-display font-medium text-neutral-900 dark:text-white">{project.year}</span>
                      </div>
                      <div>
                          <span className="block text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-2">{t.project_detail?.role || "Role"}</span>
                          <span className="text-lg md:text-xl font-display font-medium text-neutral-900 dark:text-white">{t.project_detail?.role_value || "Design & Build"}</span>
                      </div>
                  </div>
              </RevealOnScroll>
          </div>
      </section>

      {/* 3. NARRATIVE SECTION */}
      <section className="py-24 md:py-40 px-6 md:px-12 bg-white dark:bg-neutral-950 relative z-20">
          <div className="container mx-auto max-w-6xl">
              
              {/* Description */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32">
                  <div className="md:col-span-4">
                      <span className="sticky top-32 text-sm font-bold uppercase tracking-widest text-bronze-500">{t.project_detail?.concept || "The Concept"}</span>
                  </div>
                  <div className="md:col-span-8">
                      <div className="text-2xl md:text-4xl font-light leading-relaxed text-neutral-800 dark:text-neutral-200">
                          <ScrollHighlightText content={project.description || "A meticulously crafted space designed to harmonize with its environment."} />
                      </div>
                  </div>
              </div>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
                  <RevealOnScroll>
                      <h3 className="text-2xl font-display font-bold uppercase mb-6 text-neutral-900 dark:text-white border-l-2 border-neutral-300 dark:border-white/20 pl-6">{t.project_detail?.challenge || "The Challenge"}</h3>
                      <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                          {project.challenge || "Balancing structural integrity with aesthetic purity in a challenging site context."}
                      </p>
                  </RevealOnScroll>
                  <RevealOnScroll delay={0.2}>
                      <h3 className="text-2xl font-display font-bold uppercase mb-6 text-neutral-900 dark:text-white border-l-2 border-bronze-500 pl-6">{t.project_detail?.solution || "The Solution"}</h3>
                      <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                          {project.solution || "Implementing innovative materials and engineering solutions to create a seamless experience."}
                      </p>
                  </RevealOnScroll>
              </div>

          </div>
      </section>

      {/* 4. GALLERY */}
      {project.gallery && project.gallery.length > 0 && (
          <section className="py-24 bg-neutral-900">
              <div className="container mx-auto px-6 md:px-12">
                  <RevealOnScroll>
                      <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-16 text-center">{t.project_detail?.visual || "Visual Documentation"}</h2>
                  </RevealOnScroll>
                  
                  <div className="flex flex-col gap-16">
                      {/* First Image - Full Width */}
                      <RevealOnScroll>
                          <div className="w-full aspect-video md:aspect-[21/9] overflow-hidden">
                              <img src={project.gallery[0]} alt="Detail 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s]" />
                          </div>
                      </RevealOnScroll>

                      {/* Remaining Images - Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                          {project.gallery.slice(1).map((img, i) => (
                              <RevealOnScroll key={i} delay={i * 0.1}>
                                  <div className="w-full aspect-[4/5] overflow-hidden">
                                      <img src={img} alt={`Detail ${i+2}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s]" />
                                  </div>
                              </RevealOnScroll>
                          ))}
                      </div>
                  </div>
              </div>
          </section>
      )}

      {/* 5. NEXT PROJECT NAVIGATION */}
      <section className="relative h-[60vh] overflow-hidden bg-white dark:bg-neutral-950 flex items-center justify-center group cursor-hover">
          <Link to={`/portfolio/${nextProject.id}`} className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center">
              <span className="text-sm font-mono text-bronze-500 uppercase tracking-widest mb-4">{t.project_detail?.next || "Next Project"}</span>
              <h2 className="text-4xl md:text-9xl font-display font-bold uppercase text-neutral-900 dark:text-white tracking-tighter group-hover:scale-105 transition-transform duration-700">
                  {nextProject.title}
              </h2>
              <div className="mt-8 flex items-center gap-2 text-neutral-900 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                  <span className="uppercase tracking-widest text-sm font-bold">{t.project_detail?.view_case || "View Case Study"}</span>
                  <ArrowRight size={18} />
              </div>
          </Link>
          
          <div className="absolute inset-0 z-10 bg-black/60 group-hover:bg-black/40 transition-colors duration-700" />
          <img 
            src={nextProject.image} 
            alt="Next Project" 
            className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-1000 scale-105" 
          />
      </section>

    </div>
  );
};

export default ProjectDetail;
