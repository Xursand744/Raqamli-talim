import { useState, useRef, useEffect } from "react";
import DesktopMenu from "./DesktopMenu";
import MobMenu from "./MobMenu";
import { Globe, Sun, Moon, ZoomIn, ZoomOut, Volume2, VolumeX } from "lucide-react";
import { blueLogo } from "../assets/logos/logos";
import whiteLogo from "../assets/logos/mainLogoBlueWhite.png";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { Menus } from "../utils";
import PropTypes from "prop-types";
import { useTheme } from "../context/ThemeContext";

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
  const { 
    theme, 
    toggleTheme, 
    setGrayscaleMode, 
    setHighContrastMode,
    isGrayscale,
    isHighContrast
  } = useTheme();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const increaseFontSize = () => {
    if (fontSize < 200) {
      const newSize = fontSize + 10;
      setFontSize(newSize);
      document.documentElement.style.fontSize = `${newSize}%`;
      localStorage.setItem('fontSize', newSize.toString());
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 50) {
      const newSize = fontSize - 10;
      setFontSize(newSize);
      document.documentElement.style.fontSize = `${newSize}%`;
      localStorage.setItem('fontSize', newSize.toString());
    }
  };

  const toggleSpeech = () => {
    setIsSpeaking(!isSpeaking);
    if (!isSpeaking) {
      const text = document.body.innerText;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = document.documentElement.lang;
      window.speechSynthesis.speak(utterance);
    } else {
      window.speechSynthesis.cancel();
    }
  };

  return (
    <div className="relative inline-flex gap-4 text-left" ref={dropdownRef}>
      <div className="flex items-center gap-2">
        <div className="text-sm font-semibold">{t("accessibility.title")}</div>
      </div>
      <button
        className="flex items-center gap-2 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={t("accessibility.menu")}
        aria-expanded={isOpen}
        aria-controls="accessibility-menu"
      >
        <span className="sr-only">{t("accessibility.menu")}</span>
        <svg 
          className="w-5 h-5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" 
          />
        </svg>
      </button>

      {isOpen && (
        <div 
          id="accessibility-menu"
          className="absolute z-10 mt-8 right-0 w-48 rounded-md bg-white dark:bg-gray-800 shadow-lg animate-fade-in"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="accessibility-menu-button"
        >
          <div className="py-1">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              role="menuitem"
            >
              {theme === 'light' ? (
                <>
                  <Moon className="w-4 h-4 mr-2" aria-hidden="true" />
                  {t("accessibility.darkMode")}
                </>
              ) : (
                <>
                  <Sun className="w-4 h-4 mr-2" aria-hidden="true" />
                  {t("accessibility.lightMode")}
                </>
              )}
            </button>

            {/* Font Size Controls */}
            <div 
              className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 dark:text-gray-200"
              role="group"
              aria-label={t("accessibility.fontSize")}
            >
              <button
                onClick={decreaseFontSize}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                aria-label={t("accessibility.decreaseFont")}
                role="menuitem"
              >
                <ZoomOut className="w-4 h-4" aria-hidden="true" />
              </button>
              <span aria-live="polite">{fontSize}%</span>
              <button
                onClick={increaseFontSize}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
                aria-label={t("accessibility.increaseFont")}
                role="menuitem"
              >
                <ZoomIn className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            {/* Text-to-Speech Toggle */}
            <button
              onClick={toggleSpeech}
              className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              role="menuitem"
              aria-pressed={isSpeaking}
            >
              {isSpeaking ? (
                <>
                  <VolumeX className="w-4 h-4 mr-2" aria-hidden="true" />
                  {t("accessibility.stopSpeech")}
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 mr-2" aria-hidden="true" />
                  {t("accessibility.startSpeech")}
                </>
              )}
            </button>

            {/* Grayscale Mode Toggle */}
            <button
              onClick={setGrayscaleMode}
              className={`flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${
                isGrayscale 
                  ? 'bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200' 
                  : 'text-gray-700 dark:text-gray-200'
              }`}
              role="menuitem"
              aria-pressed={isGrayscale}
            >
              <span className="w-4 h-4 mr-2 bg-gray-400 rounded" aria-hidden="true"></span>
              {t("accessibility.grayscaleMode")}
            </button>

            {/* High Contrast Mode Toggle */}
            <button
              onClick={setHighContrastMode}
              className={`flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${
                isHighContrast 
                  ? 'bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-200' 
                  : 'text-gray-700 dark:text-gray-200'
              }`}
              role="menuitem"
              aria-pressed={isHighContrast}
            >
              <span className="w-4 h-4 mr-2 bg-black border border-white rounded" aria-hidden="true"></span>
              {t("accessibility.highContrastMode")}
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
    const savedLanguage = Cookies.get("lang") || "uz";
    i18n.changeLanguage(savedLanguage);
    setSelectedLanguage(savedLanguage.toUpperCase());
  }, [i18n]);

  useEffect(() => {
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
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            setIsOpen(!isOpen);
          }
        }}
        aria-expanded={isOpen}
        aria-controls="language-menu"
        aria-label={t("language.selector")}
      >
        <div className="flex items-center gap-x-2">
          <span className="text-md font-semibold text-black dark:text-white">{selectedLanguage}</span>
          <Globe className="text-black dark:text-white" aria-hidden="true" />
        </div>
      </div>

      {isOpen && (
        <div 
          id="language-menu"
          className="absolute z-10 mt-8 w-24 rounded-md bg-white dark:bg-gray-800 shadow-lg animate-fade-in"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="language-selector-button"
        >
          <div className="py-1">
            {languages.map((lang) => (
              <button
                key={lang}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => handleLanguageSelect(lang)}
                role="menuitem"
                aria-selected={selectedLanguage === lang.toUpperCase()}
              >
                {t(`language.${lang}`)}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

LanguageSelector.propTypes = {
  onLanguageSelect: PropTypes.func
};

export default function Navbar() {
  const { t } = useTranslation("global");
  const { theme } = useTheme();
  return (
    <div>
      <div 
        className="w-full bg-blue-500/80 text-white text-sm text-center py-2 px-4 font-medium z-[99999] fixed top-0 left-0"
        role="alert"
        aria-live="polite"
      >
        {t("messages.testMode")}
      </div>
      <header 
        className="py-[18px] z-[9999] text-[15px] fixed top-[36px] w-full justify-between items-center flex-center bg-white dark:bg-gray-900 transition-colors duration-200"
        role="banner"
      >
        <nav 
          className="px-3.5 flex-center-between w-full max-w-7xl mx-auto"
          role="navigation"
          aria-label={t("navigation.main")}
        >
          <NavLink to="/" className="cursor-pointer">
            {theme === 'light' ? (
              <img
                src={blueLogo}
                alt={t("logoAlt")}
                className="h-auto w-[130px]"
              />
            ) : ( 
              <img
                src={whiteLogo}
                alt={t("logoAlt")}
                className="h-auto w-[130px]"
              />
            )}
          </NavLink>

          <ul 
            className="gap-x-1 lg:flex-center hidden text-black dark:text-white"
            role="menubar"
          >
            {Menus.map((menu) => (
              <DesktopMenu
                menu={{
                  ...menu,
                  name: t(menu.name),
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
