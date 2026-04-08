import { Instagram, Facebook, MessageCircle, Mail } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

export default function Locations() {
  const { t } = useLanguage();
  const cities = ["MIAMI", "FORT LAUDERDALE", "HOLLYWOOD"];

  return (
    <section className="py-16 bg-brand-gray overflow-hidden">
      <div className="container-wide flex flex-col items-center text-center gap-6">
        
        {/* Header Segment */}
        <div className="flex flex-col items-center">
          <span className="text-brand-accent text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-4">{t('locations.label')}</span>
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark">{t('locations.title')}</h2>
        </div>

        {/* Cities Segment */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mt-2">
          {cities.map((city, index) => (
            <div key={index} className="flex items-center gap-4 md:gap-8">
              <span className="text-base md:text-lg font-display font-medium text-brand-accent tracking-[0.25em] hover:text-brand-accent/80 transition-colors cursor-default">
                {city}
              </span>
              {index < cities.length - 1 && (
                <div className="w-1 h-1 bg-brand-accent/40 rounded-full" />
              )}
            </div>
          ))}
        </div>

        {/* Social & Contact Icons Segment */}
        <div className="mt-3 flex items-center justify-center gap-6">
          <a href="https://www.instagram.com/gekoboatspafl" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:text-brand-accent/70 hover:scale-110 transition-all duration-300" aria-label="Instagram">
            <Instagram className="w-8 h-8" strokeWidth={1.5} />
          </a>
          <a href="https://www.facebook.com/people/GEKO-BOAT-SPA/61583696190046/" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:text-brand-accent/70 hover:scale-110 transition-all duration-300" aria-label="Facebook">
            <Facebook className="w-8 h-8" strokeWidth={1.5} />
          </a>
          <a href="https://wa.me/17542990399" target="_blank" rel="noopener noreferrer" className="text-brand-accent hover:text-brand-accent/70 hover:scale-110 transition-all duration-300" aria-label="WhatsApp">
            <MessageCircle className="w-8 h-8" strokeWidth={1.5} />
          </a>
          <a href="mailto:gekopd24@gmail.com" className="text-brand-accent hover:text-brand-accent/70 hover:scale-110 transition-all duration-300" aria-label="Email">
            <Mail className="w-8 h-8" strokeWidth={1.5} />
          </a>
        </div>

      </div>
    </section>
  );
}
