// import React, { useState, useRef, useEffect } from "react";
// import DesktopMenu from "../components/DesktopMenu";
// import MobMenu from "../components/MobMenu";
// import { Earth } from "lucide-react";
// import { Eye } from "lucide-react";
// import { blueLogo } from "../assets/logos/logos";
// import { NavLink } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import Cookies from "js-cookie";

// const languages = ["uz", "ru", "en"]; // Language keys used in i18n setup

// export default function LanguageSelector({ onLanguageSelect }) {
//   useEffect(() => {
//     const savedLanguage = Cookies.get("lang") || "uz";
//     i18n.changeLanguage(savedLanguage);
//     setSelectedLanguage(savedLanguage.toUpperCase());
//   }, []);

//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedLanguage, setSelectedLanguage] = useState("UZ");
//   const dropdownRef = useRef(null);
//   const { t, i18n } = useTranslation("global");

//   console.log(Cookies.get("lang"));

//   // useEffect(() => {
//   //   i18n.changeLanguage(Cookies.get("lang") || "uz");
//   // }, []);

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const handleLanguageSelect = (lang) => {
//     setSelectedLanguage(lang.toUpperCase());
//     i18n.changeLanguage(lang); // Change the language in i18n
//     Cookies.set("lang", lang, { expires: 30 }); // Save the language in a cookie
//     onLanguageSelect?.(lang); // Optional: notify parent component
//     setIsOpen(false);
//   };

//   return (
//     <div>
//       <header className="h-16 z-[9999] text-[15px] fixed top-0 inset-0 flex-center bg-[#fff]">
//         <nav className="px-3.5 flex-center-between w-full max-w-7xl mx-auto">
//           <NavLink to={"/"} className={"cursor-pointer"}>
//             <div className="flex-center gap-x-3 z-[999] relative">
//               <img
//                 src={blueLogo}
//                 alt={t("logoAlt")} // Use translations
//                 className="size-8 w-[200px] h-[50px]"
//               />
//             </div>
//           </NavLink>

//           <ul className="gap-x-1 lg:flex-center hidden text-black">
//             {Menus.map((menu) => (
//               <DesktopMenu
//                 menu={{
//                   ...menu,
//                   name: t(menu.name), // Translate menu names
//                 }}
//                 key={menu.name}
//               />
//             ))}
//           </ul>
//           <div className="relative inline-block text-left" ref={dropdownRef}>
//             <div
//               className="flex items-center space-x-2 cursor-pointer"
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               <Eye className="text-black" />
//               <span className="text-lg font-medium">{selectedLanguage}</span>
//               <Earth className="text-black" />
//             </div>

//             {isOpen && (
//               <div className="absolute z-10 mt-2 w-24 rounded-md bg-white shadow-lg animate-fade-in">
//                 <div className="py-1">
//                   {languages.map((lang) => (
//                     <div
//                       key={lang}
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
//                       onClick={() => handleLanguageSelect(lang)}
//                     >
//                       {t(`language.${lang}`)} {/* Translate language names */}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </nav>
//       </header>
//     </div>
//   );
// }

import React, { useState, useRef, useEffect } from "react";
import DesktopMenu from "../components/DesktopMenu";
import MobMenu from "../components/MobMenu";
import { Earth } from "lucide-react";
import { Eye } from "lucide-react";
import { blueLogo } from "../assets/logos/logos";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import { Menus } from "../utils";

const languages = ["uz", "ru", "en"]; // Language keys used in i18n setup

export default function LanguageSelector({ onLanguageSelect }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("UZ");
  const dropdownRef = useRef(null);
  const { t, i18n } = useTranslation("global");

  setInterval(() => {
    const savedLanguage = Cookies.get("lang") || "uz";
    console.log(savedLanguage);
    i18n.changeLanguage(savedLanguage);
    setSelectedLanguage(savedLanguage.toUpperCase());
  }, 100);

  useEffect(() => {
    // Initialize language from cookies
    const savedLanguage = Cookies.get("lang") || "uz";
    console.log(savedLanguage);
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
    i18n.changeLanguage(lang); // Change the language in i18n
    Cookies.set("lang", lang, { expires: 30 }); // Save the language in a cookie
    onLanguageSelect?.(lang); // Optional: notify parent component
    setIsOpen(false);
  };

  return (
    <div>
      <header className="h-16 z-[9999] text-[15px] fixed top-0 inset-0 flex-center bg-[#fff]">
        <nav className="px-3.5 flex-center-between w-full max-w-7xl mx-auto">
          <NavLink to={"/"} className={"cursor-pointer"}>
            <div className="flex-center gap-x-3 z-[999] relative">
              <img
                src={blueLogo}
                alt={t("logoAlt")} // Use translations
                className="size-8 w-[200px] h-[50px]"
              />
            </div>
          </NavLink>

          <ul className="gap-x-1 lg:flex-center hidden text-black">
            {Menus.map((menu) => (
              <DesktopMenu
                menu={{
                  ...menu,
                  name: t(`${menu.name}`), // Translate menu names
                }}
                key={menu.name}
              />
            ))}
          </ul>
          <div
            className="relative inline-flex gap-4 text-left"
            ref={dropdownRef}
          >
            <div
              className="flex items-center gap-2 space-x-2 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="flex items-center">
                <Eye className="text-black mr-3" />
                <span className="text-lg font-medium mr-1">
                  {selectedLanguage}
                </span>
                <Earth className="text-black" />
              </div>
            </div>
            <div className="lg:hidden">
              <MobMenu Menus={Menus} />
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
                      {t(`language.${lang}`)} {/* Translate language names */}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          {/* <div className="relative inline-block text-left" ref={dropdownRef}>
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Eye className="text-black" />
              <span className="text-lg font-medium">{selectedLanguage}</span>
              <Earth className="text-black" />
            </div>

            {isOpen && (
              <div className="absolute z-10 mt-2 w-24 rounded-md bg-white shadow-lg animate-fade-in">
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
          </div> */}
        </nav>
      </header>
    </div>
  );
}
