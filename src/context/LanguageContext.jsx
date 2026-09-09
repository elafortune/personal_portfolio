import { createContext, useContext, useState } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('FR');
  const t = (key) => translations[lang]?.[key] ?? translations['FR']?.[key] ?? key;
  const toggleLang = () => setLang(l => l === 'FR' ? 'EN' : 'FR');
  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
