import { ArrowRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-brand-dark">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero/hero-main.webp" 
          alt="Luxury yacht docked in South Florida marina" 
          className="w-full h-full object-cover object-[center_30%] opacity-60 scale-105 animate-pulse-slow"
          referrerPolicy="no-referrer"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/40 to-transparent" />
      </div>

      <div className="w-full max-w-[1440px] mx-auto relative z-10 pt-20 px-6 md:px-12 lg:px-20 xl:px-24">
        <div className="max-w-2xl space-y-5 md:space-y-8 -translate-y-16 md:-translate-y-12">
          <div className="space-y-2">
            <span className="text-brand-accent text-xs font-bold uppercase tracking-[0.3em] block animate-in fade-in slide-in-from-left duration-700">
              {t('hero.label')}
            </span>
            <h1 className="text-[40px] md:text-7xl font-bold text-white leading-[1] md:leading-[1.1] animate-in fade-in slide-in-from-left duration-1000 delay-100">
              {t('hero.title1')}<span className="text-white">{t('hero.title2')}</span>
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-white/80 leading-normal md:leading-relaxed max-w-xl animate-in fade-in slide-in-from-left duration-1000 delay-200">
            {t('hero.desc')}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2 md:pt-4 animate-in fade-in slide-in-from-bottom duration-1000 delay-300">
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto bg-white text-brand-dark px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-brand-gray transition-all flex items-center justify-center gap-2 group"
            >
              {t('hero.btnQuote')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://wa.me/17542990399?text=Hi%2C%20I%27d%20like%20to%20send%20photos%20of%20my%20boat%20for%20a%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border border-white/30 text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all text-center"
            >
              {t('hero.btnPhotos')}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
          });
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors cursor-pointer animate-bounce p-2"
        aria-label="Scroll to next section"
      >
        <ChevronDown className="w-8 h-8" strokeWidth={1.5} />
      </button>
    </section>
  );
}
