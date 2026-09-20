import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ProjectCategory } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import RevealOnScroll from '../components/RevealOnScroll';
import PortfolioHero from '../components/PortfolioHero';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<ProjectCategory | 'All'>('All');
  const { t } = useLanguage();

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const categories = ['All', ...Object.values(ProjectCategory)];

  // Helper to get translated display name
  const getCategoryLabel = (cat: string) => {
    if (cat === 'All') return t.portfolio.filter_all;
    return t.categories[cat as ProjectCategory];
  };

  return (
    <div className="w-full pb-20 min-h-screen">
      <PortfolioHero />
      <div id="portfolio-projects" className="container mx-auto px-6 md:px-12">
        
        {/* Filters */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-12 gap-8">
          <div className="text-xl md:text-3xl font-display font-bold uppercase tracking-tight text-neutral-900 dark:text-white">
             {t.portfolio.subtitle}
          </div>
          <RevealOnScroll delay={0.2}>
            <div className="flex flex-wrap gap-4 md:gap-8">
                {categories.map((cat) => (
                <button
                    key={cat}
                    onClick={() => setFilter(cat as ProjectCategory | 'All')}
                    className={`text-sm font-bold uppercase tracking-widest pb-1 border-b-2 transition-all cursor-hover ${
                    filter === cat 
                        ? 'border-bronze-500 text-neutral-900 dark:text-white' 
                        : 'border-transparent text-neutral-600 dark:text-neutral-400 hover:text-neutral-600'
                    }`}
                >
                    {getCategoryLabel(cat)}
                </button>
                ))}
            </div>
          </RevealOnScroll>
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => {
              // Get translation if available
              const translatedTitle = t.projects?.[project.id]?.title || project.title;
              const translatedLocation = t.projects?.[project.id]?.location || project.location;

              return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group cursor-hover"
              >
                <RevealOnScroll yOffset={10} duration={0.6}>
                    <Link to={`/portfolio/${project.id}`}>
                        <div className="relative overflow-hidden aspect-[4/5] mb-6 rounded-md">
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-500"></div>
                        <img 
                             src={project.image} 
                             alt={translatedTitle} 
                             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                            <span className="bg-white dark:bg-neutral-900 text-xs font-bold px-3 py-1 uppercase tracking-widest text-neutral-900 dark:text-white">
                            {project.year}
                            </span>
                        </div>
                        </div>
                        <div>
                        <h3 className="text-xl font-display font-bold uppercase mb-1 group-hover:text-bronze-500 transition-colors">{translatedTitle}</h3>
                        <div className="flex justify-between items-center text-sm text-neutral-500">
                            <span className="font-mono uppercase">{translatedLocation}</span>
                            <span className="text-[10px] font-bold uppercase tracking-widest border border-neutral-200 dark:border-neutral-800 px-2 py-0.5 rounded-sm">
                            {t.categories[project.category]}
                            </span>
                        </div>
                        </div>
                    </Link>
                </RevealOnScroll>
              </motion.div>
            )})}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
};

export default Portfolio;
