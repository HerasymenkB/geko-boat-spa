import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, lang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.results'), href: '#results' },
    { name: t('nav.process'), href: '#process' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container-wide flex items-center justify-between">
        <a href={lang === 'es' ? '/es' : '/'} className="flex items-center gap-2 group">
          <img 
            src="/images/brand/logo.svg" 
            alt="GEKO Logo" 
            className="w-8 h-8 object-contain group-hover:scale-110 transition-transform" 
          />
          <span className={`font-display font-bold text-lg tracking-widest uppercase ${isScrolled ? 'text-brand-dark' : 'text-white'}`}>
            Geko <span className="font-light opacity-70">Boat Spa</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className={`text-sm font-medium hover:opacity-70 transition-opacity ${
                isScrolled ? 'text-brand-dark' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          
          <div className={`flex items-center gap-2 border-l pl-4 ml-2 ${isScrolled ? 'border-brand-dark/20' : 'border-white/20'}`}>
            <Link 
              to="/" 
              className={`text-xs transition-colors ${lang === 'en' ? (isScrolled ? 'text-brand-dark font-semibold' : 'text-white font-semibold') : (isScrolled ? 'text-brand-dark/50 font-normal hover:text-brand-dark' : 'text-white/50 font-normal hover:text-white')}`}
            >
              EN
            </Link>
            <span className={isScrolled ? 'text-brand-dark/30 text-xs' : 'text-white/30 text-xs'}>/</span>
            <Link 
              to="/es" 
              className={`text-xs transition-colors ${lang === 'es' ? (isScrolled ? 'text-brand-dark font-semibold' : 'text-white font-semibold') : (isScrolled ? 'text-brand-dark/50 font-normal hover:text-brand-dark' : 'text-white/50 font-normal hover:text-white')}`}
            >
              ES
            </Link>
          </div>

          <a 
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
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
              to="/" 
              onClick={() => setIsMenuOpen(false)}
              className={`text-sm transition-colors ${lang === 'en' ? 'text-brand-dark font-semibold' : 'text-brand-dark/50 font-normal hover:text-brand-dark'}`}
            >
              ENGLISH
            </Link>
            <span className="text-brand-dark/20">|</span>
            <Link 
              to="/es" 
              onClick={() => setIsMenuOpen(false)}
              className={`text-sm transition-colors ${lang === 'es' ? 'text-brand-dark font-semibold' : 'text-brand-dark/50 font-normal hover:text-brand-dark'}`}
            >
              ESPAÑOL
            </Link>
          </div>
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-brand-dark text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="w-full bg-brand-dark text-white py-4 mt-2 text-center font-bold uppercase tracking-widest rounded-sm"
            onClick={(e) => {
              e.preventDefault();
              setIsMenuOpen(false);
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {t('nav.quote')}
          </a>
        </div>
      )}
    </nav>
  );
}
