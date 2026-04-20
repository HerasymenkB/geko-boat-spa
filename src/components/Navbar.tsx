import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, lang } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const basePath = lang === 'es' ? '/es' : '';
  const isPricingPage = location.pathname.includes('pricing');

  const navLinks = [
    { name: t('nav.services'), href: `${basePath || '/'}#services` },
    { name: t('nav.results'), href: `${basePath || '/'}#results` },
    { name: t('nav.process'), href: `${basePath || '/'}#process` },
    { name: t('nav.pricing'), href: `${basePath}/marine-upholstery-pricing`, isPage: true },
  ];

  const getLangPath = (targetLang: 'en' | 'es') => {
    const path = location.pathname;
    if (targetLang === 'en') {
      return path.replace('/es', '') || '/';
    } else {
      if (path.startsWith('/es')) return path;
      return `/es${path === '/' ? '' : path}`;
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-wide flex items-center justify-between">
        <Link to={lang === 'es' ? '/es' : '/'} className="flex items-center gap-2 group">
          <img 
            src="/images/brand/logo.svg" 
            alt="GEKO Logo" 
            className="w-8 h-8 object-contain group-hover:scale-110 transition-transform" 
          />
          <span className={`font-display font-bold text-lg tracking-widest uppercase ${isScrolled ? 'text-brand-dark' : 'text-white'}`}>
            Geko <span className="font-light opacity-70">Boat Spa</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            link.isPage ? (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-medium hover:opacity-70 transition-opacity ${
                  isScrolled ? 'text-brand-dark' : 'text-white'
                } ${location.pathname === link.href ? 'border-b-2 border-brand-accent' : ''}`}
              >
                {link.name}
              </Link>
            ) : (
              <a 
                key={link.name}
                href={link.href}
                className={`text-sm font-medium hover:opacity-70 transition-opacity ${
                  isScrolled ? 'text-brand-dark' : 'text-white'
                }`}
              >
                {link.name}
              </a>
            )
          ))}
          
          <div className={`flex items-center gap-2 border-l pl-4 ml-2 ${isScrolled ? 'border-brand-dark/20' : 'border-white/20'}`}>
            <Link 
              to={getLangPath('en')}
              className={`text-xs transition-colors ${lang === 'en' ? (isScrolled ? 'text-brand-dark font-semibold' : 'text-white font-semibold') : (isScrolled ? 'text-brand-dark/50 font-normal hover:text-brand-dark' : 'text-white/50 font-normal hover:text-white')}`}
            >
              EN
            </Link>
            <span className={isScrolled ? 'text-brand-dark/30 text-xs' : 'text-white/30 text-xs'}>/</span>
            <Link 
              to={getLangPath('es')}
              className={`text-xs transition-colors ${lang === 'es' ? (isScrolled ? 'text-brand-dark font-semibold' : 'text-white font-semibold') : (isScrolled ? 'text-brand-dark/50 font-normal hover:text-brand-dark' : 'text-white/50 font-normal hover:text-white')}`}
            >
              ES
            </Link>
          </div>

          <a 
            href={isPricingPage ? "https://wa.me/17542990399?text=Hi,%20I’d%20like%20an%20exact%20quote%20for%20boat%20upholstery.%20I%20will%20send%20photos." : "#contact"}
            onClick={(e) => {
              if (!isPricingPage) {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className={`px-5 py-2 rounded-sm text-xs font-bold uppercase tracking-widest transition-all ${
              isScrolled 
                ? 'bg-brand-dark text-white hover:bg-opacity-80' 
                : 'bg-white text-brand-dark hover:bg-brand-gray'
            }`}
          >
            {t('nav.quote')}
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className={isScrolled ? 'text-brand-dark' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-brand-dark' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 py-6 px-6 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="flex items-center justify-center gap-4 mb-4 pb-4 border-b border-gray-100">
            <Link 
              to={getLangPath('en')}
              onClick={() => setIsMenuOpen(false)}
              className={`text-sm transition-colors ${lang === 'en' ? 'text-brand-dark font-semibold' : 'text-brand-dark/50 font-normal hover:text-brand-dark'}`}
            >
              ENGLISH
            </Link>
            <span className="text-brand-dark/20">|</span>
            <Link 
              to={getLangPath('es')}
              onClick={() => setIsMenuOpen(false)}
              className={`text-sm transition-colors ${lang === 'es' ? 'text-brand-dark font-semibold' : 'text-brand-dark/50 font-normal hover:text-brand-dark'}`}
            >
              ESPAÑOL
            </Link>
          </div>
          {navLinks.map((link) => (
            link.isPage ? (
              <Link
                key={link.name}
                to={link.href}
                className="text-lg font-medium text-brand-dark text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ) : (
              <a 
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-brand-dark text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            )
          ))}
          <a 
            href={isPricingPage ? "https://wa.me/17542990399?text=Hi,%20I’d%20like%20an%20exact%20quote%20for%20boat%20upholstery.%20I%20will%20send%20photos." : "#contact"}
            className="w-full bg-brand-dark text-white py-4 mt-2 text-center font-bold uppercase tracking-widest rounded-sm"
            onClick={(e) => {
              if (!isPricingPage) {
                e.preventDefault();
                setIsMenuOpen(false);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              } else {
                setIsMenuOpen(false);
              }
            }}
          >
            {t('nav.quote')}
          </a>
        </div>
      )}
    </nav>
  );
}
