import { useState, useRef, useEffect } from "react";
import DesktopMenu from "./DesktopMenu";
import MobMenu from "./MobMenu";
import { Globe } from "lucide-react";
import { blueLogo } from "../assets/logos/logos";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { Menus } from "../utils";

const languages = ["uz", "ru", "en"];

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
  
  return (
    <div>
      <header className="py-[18px] z-[9999] text-[15px] fixed top-0 w-full justify-between items-center flex-center bg-[#fff]">
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
          
          <div className="flex items-center">
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
