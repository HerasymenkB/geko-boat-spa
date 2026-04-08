import React, { createContext, useContext } from 'react';
import { translations } from '../i18n/translations';
import { useLocation } from 'react-router-dom';

type Language = 'en' | 'es';

type TranslationsTarget = typeof translations.en;

const LanguageContext = createContext<{
  lang: Language;
  t: (path: string) => string;
}>({
  lang: 'en',
  t: (path) => path,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isSpanish = location.pathname.startsWith('/es');
  const lang: Language = isSpanish ? 'es' : 'en';

  const t = (path: string): string => {
    const keys = path.split('.');
    let current: any = translations[lang];
    
    for (const key of keys) {
      if (current[key] === undefined) {
        console.warn(`Translation key missing: ${path}`);
        return path;
      }
      current = current[key];
    }
    
    return current;
  };

  return (
    <LanguageContext.Provider value={{ lang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
