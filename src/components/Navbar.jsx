import { useState, useRef, useEffect } from "react";
import DesktopMenu from "./DesktopMenu";
import MobMenu from "./MobMenu";
import { Globe, Sun, Moon, ZoomIn, ZoomOut, Volume2, VolumeX } from "lucide-react";
import { blueLogo } from "../assets/logos/logos";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { Menus } from "../utils";

const languages = ["uz", "ru", "en"];

// Accessibility Controls Component
function AccessibilityControls() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(() => {
    const savedSize = localStorage.getItem('fontSize');
    return savedSize ? parseInt(savedSize) : 100;
  });
  const [isSpeaking, setIsSpeaking] = useState(false);
  const dropdownRef = useRef(null);
  const { t } = useTranslation("global");

  // Theme state with light theme as default
  const [theme, setTheme] = useState(() => {
    // Remove any existing theme from localStorage to ensure light theme default
    localStorage.removeItem('theme');
    // Remove dark class if it exists
    document.documentElement.classList.remove('dark');
    return 'light';
  });

  useEffect(() => {
    // Ensure light theme is applied on mount
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }, []);

  useEffect(() => {
    // Handle clicks outside the dropdown
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Theme toggle handler
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  // Font size handlers
  const increaseFontSize = () => {
    if (fontSize < 200) {
      const newSize = fontSize + 10;
      setFontSize(newSize);
      document.documentElement.style.fontSize = `${newSize}%`;
      localStorage.setItem('fontSize', newSize);
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 70) {
      const newSize = fontSize - 10;
      setFontSize(newSize);
      document.documentElement.style.fontSize = `${newSize}%`;
      localStorage.setItem('fontSize', newSize);
    }
  };

  // Text-to-speech handler
  const toggleSpeech = () => {
    if (!isSpeaking) {
      const text = document.body.innerText;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = document.documentElement.lang;
      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    } else {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  return (
    <div className="relative inline-flex gap-4 text-left" ref={dropdownRef}>
      <div className="flex items-center gap-2">
        <div className="text-sm font-semibold">Maxsus imkoniyatlar</div>
      </div>
      <button
        className="flex items-center gap-2 p-2 rounded-full hover:bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={t("accessibility.menu")}
      >
        <span className="sr-only">{t("accessibility.menu")}</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-8 right-0 w-48 rounded-md bg-white dark:bg-gray-800 shadow-lg animate-fade-in">
          <div className="py-1">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {theme === 'light' ? (
                <>
                  <Moon className="w-4 h-4 mr-2" />
                  {t("accessibility.darkMode")}
                </>
              ) : (
                <>
                  <Sun className="w-4 h-4 mr-2" />
                  {t("accessibility.lightMode")}
                </>
              )}
            </button>

            {/* Font Size Controls */}
            <div className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 dark:text-gray-200">
              <button
                onClick={decreaseFontSize}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                aria-label={t("accessibility.decreaseFont")}
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span>{fontSize}%</span>
              <button
                onClick={increaseFontSize}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                aria-label={t("accessibility.increaseFont")}
              >
                <ZoomIn className="w-4 h-4" />
              </button>
            </div>

            {/* Text-to-Speech Toggle */}
            <button
              onClick={toggleSpeech}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {isSpeaking ? (
                <>
                  <VolumeX className="w-4 h-4 mr-2" />
                  {t("accessibility.stopSpeech")}
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 mr-2" />
                  {t("accessibility.startSpeech")}
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function LanguageSelector({ onLanguageSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("UZ");
  const dropdownRef = useRef(null);
  const { t, i18n } = useTranslation("global");

  useEffect(() => {
    // Initialize language from cookies
    const savedLanguage = Cookies.get("lang") || "uz";
    i18n.changeLanguage(savedLanguage);
    setSelectedLanguage(savedLanguage.toUpperCase());
  }, [i18n]);

  useEffect(() => {
    // Handle clicks outside the dropdown
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang.toUpperCase());
    i18n.changeLanguage(lang);
    Cookies.set("lang", lang, { expires: 30 });
    if (onLanguageSelect) onLanguageSelect(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-flex gap-4 text-left" ref={dropdownRef}>
      <div
        className="flex items-center gap-2 space-x-2 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-x-2">
          <span className="text-md font-semibold">{selectedLanguage}</span>
          <Globe className="text-black" />
        </div>
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-8 w-24 rounded-md bg-white shadow-lg animate-fade-in">
          <div className="py-1">
            {languages.map((lang) => (
              <div
                key={lang}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleLanguageSelect(lang)}
              >
                {t(`language.${lang}`)}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const { t } = useTranslation("global");
  const { i18n } = useTranslation("global");

  const messages = {
    ru: "⚠️ Внимание! Сайт работает в тестовом режиме. Информация может быть неактуальной.",
    uz: "⚠️ Diqqat! Sayt sinov rejimida ishlamoqda. Ma'lumotlar o'zgarishi mumkin.",
    en: "⚠️ Attention! This website is running in test mode. Information may be outdated.",
  };
  
  return (
    <div>
      <div className="w-full bg-blue-500/80 text-white text-sm text-center py-2 px-4 font-medium z-[99999] fixed top-0 left-0">
        {messages[i18n.language]}
      </div>
      <header className="py-[18px] z-[9999] text-[15px] fixed top-[36px] w-full justify-between items-center flex-center bg-white  transition-colors duration-200">
        <nav className="px-3.5 flex-center-between w-full max-w-7xl mx-auto">
          <NavLink to="/" className="cursor-pointer">
            <div className="flex-center gap-x-3 z-[999] relative">
              <img
                src={blueLogo}
                alt={t("logoAlt")}
                className="size-8 w-[130px]"
              />
            </div>
          </NavLink>

          <ul className="gap-x-1 lg:flex-center hidden text-black">
            {Menus.map((menu) => (
              <DesktopMenu
                menu={{
                  ...menu,
                  name: t(`${menu.name}`),
                }}
                key={menu.name}
              />
            ))}
          </ul>
          
          <div className="flex items-center gap-4">
            <AccessibilityControls />
            <LanguageSelector />
            <div className="lg:hidden">
              <MobMenu Menus={Menus} />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
