import { Check, ArrowRight } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function Craftsmanship() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"] // Starts when top of section enters bottom of viewport, ends when bottom of section leaves top of viewport
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  const points = [
    "Professional marine-grade materials",
    "Durability against harsh marine environments",
    "Ultimate mobile convenience"
  ];

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-brand-dark">
      <div className="flex flex-col lg:flex-row min-h-[700px]">
        {/* Image Side */}
        <div className="lg:w-1/2 relative h-[400px] lg:h-auto overflow-hidden">
          <motion.img 
            style={{ scale }}
            src="/images/craft/craft-main.webp" 
            alt="Technician polishing yacht surface with professional equipment" 
            className="w-full h-full object-cover contrast-105 will-change-transform"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-brand-dark/20 pointer-events-none" />
        </div>

        {/* Content Side */}
        <div className="lg:w-1/2 flex items-center p-10 md:p-24 lg:p-32">
          <div className="max-w-xl space-y-12">
            <div className="space-y-6">
              <span className="text-brand-accent text-xs font-bold uppercase tracking-[0.3em]">{t('craft.label')}</span>
              <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">{t('craft.title')}</h2>
              <div className="space-y-8 md:space-y-6 max-w-[90%] md:max-w-full">
                <p className="text-white/60 leading-relaxed text-lg">
                  {t('craft.p1')}
                </p>
                <p className="text-white/60 leading-relaxed text-lg">
                  {t('craft.p2')}
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-8 border-t border-white/10">
              {points.map((point, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white/50 transition-colors">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-white/80 font-medium">{point}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-12 md:pt-8">
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex bg-white text-brand-dark px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-brand-gray transition-all items-center justify-center gap-2 group"
              >
                {t('hero.btnQuote')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
