import { Menus } from "../utils";
import React, { useState, useRef, useEffect } from 'react'
import DesktopMenu from "../components/DesktopMenu";
import MobMenu from "../components/MobMenu";
import { Earth } from "lucide-react";
import { Eye } from "lucide-react";
import { blueLogo } from "../assets/logos/logos";
import { NavLink } from "react-router-dom";


const languages = ['UZ', 'RU', 'ENG']

export default function LanguageSelector({ onLanguageSelect }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState('UZ')
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleLanguageSelect = (lang) => {
    setSelectedLanguage(lang)
    onLanguageSelect(lang)
    setIsOpen(false)
  }

  return (
    <div>
      <header className="h-16 z-[9999] text-[15px] fixed top-0  inset-0 flex-center bg-[#fff] ">
        <nav className=" px-3.5 flex-center-between w-full max-w-7xl mx-auto">
          <NavLink to={"/"} className={"cursor-pointer"}>
            <div className="flex-center gap-x-3 z-[999] relative">
              <img
                src={blueLogo}
                alt=""
                className="size-8 w-[200px] h-[50px]"
              />
            </div>
          </NavLink>

          <ul className="gap-x-1 lg:flex-center hidden text-black">
            {Menus.map((menu) => (
              <DesktopMenu menu={menu} key={menu.name} />
            ))}
          </ul>
          <div className="relative inline-block text-left" ref={dropdownRef}>
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Eye className="text-black" />
              <span className="text-lg font-medium">{selectedLanguage}</span>
              <Earth for="cars" className="text-black" />
            </div>

            {isOpen && (
              <div
                className="absolute z-10 mt-2 w-24 rounded-md bg-white shadow-lg animate-fade-in"
              >
                <div className="py-1">
                  {languages.map((lang) => (
                    <div
                      key={lang}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleLanguageSelect(lang)}
                    >
                      {lang}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
}
