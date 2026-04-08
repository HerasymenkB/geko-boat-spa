import { useLanguage } from '../hooks/useLanguage';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-brand-dark pt-24 pb-12 border-t border-white/5">
      <div className="container-wide space-y-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Brand */}
          <div className="space-y-8">
            <a href="/" className="flex items-center gap-2">
              <img 
                src="/images/brand/logo.svg" 
                alt="GEKO Logo" 
                className="w-8 h-8 object-contain" 
              />
              <span className="font-display font-bold text-lg tracking-widest uppercase text-white">
                Geko <span className="font-light opacity-70">Boat Spa</span>
              </span>
            </a>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              {t('footer.desc')}
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-8">
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em]">{t('footer.contact')}</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+17542990399" className="text-white/60 text-sm hover:text-white transition-colors">+1 (754) 299-0399</a>
              </li>
              <li>
                <a href="mailto:gekopd24@gmail.com" className="text-white/60 text-sm hover:text-white transition-colors">gekopd24@gmail.com</a>
              </li>
              <li className="text-white/60 text-sm">{t('footer.available')}</li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="space-y-8">
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em]">{t('footer.areas')}</h4>
            <ul className="space-y-4">
              <li className="text-white/60 text-sm">Miami</li>
              <li className="text-white/60 text-sm">Fort Lauderdale</li>
              <li className="text-white/60 text-sm">Hollywood</li>
              <li className="text-white/60 text-sm">{t('footer.marinas')}</li>
            </ul>
          </div>

          {/* Social/Legal Links */}
          <div className="space-y-8">
            <h4 className="text-white text-xs font-bold uppercase tracking-[0.2em]">{t('footer.follow')}</h4>
            <div className="flex gap-6">
              <a href="https://www.instagram.com/gekoboatspafl" target="_blank" rel="noopener noreferrer" className="text-white/60 text-xs uppercase tracking-widest hover:text-white transition-colors">Instagram</a>
              <a href="https://www.facebook.com/people/GEKO-BOAT-SPA/61583696190046/" target="_blank" rel="noopener noreferrer" className="text-white/60 text-xs uppercase tracking-widest hover:text-white transition-colors">Facebook</a>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex justify-center items-center">
          <p className="text-white/20 text-[10px] uppercase tracking-widest text-center">
            © {currentYear} GEKO BOAT SPA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
