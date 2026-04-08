import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export default function FinalCTA() {
  const { t } = useLanguage();

  return (
    <section className="pt-40 pb-16 bg-brand-dark relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/20 rounded-full" />
      </div>

      <div className="container-wide relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            {t('cta.title')}
          </h2>
          <p className="text-white/60 leading-relaxed text-lg md:text-xl">
            {t('cta.desc')}
          </p>
        </div>
      </div>
    </section>
  );
}
