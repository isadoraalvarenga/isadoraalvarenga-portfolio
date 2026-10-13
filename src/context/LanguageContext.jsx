import { createContext, useContext, useEffect, useState } from 'react';
import { translations } from '../data/translations.js';

const LanguageContext = createContext(null);

function getInitialLang() {
  try {
    const saved = localStorage.getItem('lang');
    if (saved === 'pt' || saved === 'en') return saved;
  } catch {
    /* localStorage indisponível: usa o padrão */
  }
  return 'pt';
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    try {
      localStorage.setItem('lang', lang);
    } catch {
      /* ignora */
    }
  }, [lang]);

  const value = { lang, setLang, t: translations[lang] };
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage deve ser usado dentro de <LanguageProvider>');
  return ctx;
}
