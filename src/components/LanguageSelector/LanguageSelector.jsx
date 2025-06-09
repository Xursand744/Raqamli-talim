import { useLanguage, languages } from '../../context/LanguageContext';
import { useTranslation } from "react-i18next";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation("global");

  return (
    <div className="flex items-center gap-2">
      {Object.values(languages).map((lang) => (
        <button
          key={lang}
          onClick={() => setLanguage(lang)}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
            language === lang
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          {t(`language.${lang}`)}
        </button>
      ))}
    </div>
  );
} 