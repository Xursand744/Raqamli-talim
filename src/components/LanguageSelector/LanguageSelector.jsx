import { useLanguage, languages } from '../../context/LanguageContext';

const languageLabels = {
  [languages.uz]: "O'zbekcha",
  [languages.ru]: 'Русский',
  [languages.en]: 'English'
};

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      {Object.entries(languageLabels).map(([lang, label]) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang)}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
            language === lang
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
} 