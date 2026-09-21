import { useLanguage } from '../../context/LanguageContext';

function LanguageSwitcher({ className = '' }) {
  const { lang, setLang } = useLanguage();

  const flagClass = (code) =>
    `text-lg leading-none rounded p-1 transition-opacity ${
      lang === code ? 'opacity-100' : 'opacity-40 hover:opacity-70'
    }`;

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <button
        type="button"
        onClick={() => setLang('fr')}
        aria-label="Passer en français"
        aria-pressed={lang === 'fr'}
        className={flagClass('fr')}
      >
        🇫🇷
      </button>
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-label="Switch to English"
        aria-pressed={lang === 'en'}
        className={flagClass('en')}
      >
        🇬🇧
      </button>
    </div>
  );
}

export default LanguageSwitcher;
