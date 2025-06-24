import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export default function MobMenu({ Menus }) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
  };

  const toggleSubmenu = (index) => {
    setClicked(clicked === index ? null : index);
  };

  const subMenuDrawer = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: {
      height: 0,
      overflow: "hidden",
    },
  };

  return (
    <div>
      <button 
        className="lg:hidden z-[999] relative text-black dark:text-white" 
        onClick={toggleDrawer}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? t("menu.close") : t("menu.open")}
      >
        {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </button>

      <motion.div
        id="mobile-menu"
        className="fixed left-0 right-0 top-16 overflow-y-auto h-full bg-[#18181A] dark:bg-gray-900 backdrop-blur text-white p-6 pb-20"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        role="navigation"
        aria-label={t("menu.mobileNavigation")}
      >
        <ul className="space-y-4">
          {Menus.map((menu, index) => (
            <li key={menu.name}>
              {menu.submenu ? (
                <div>
                  <button
                    className="flex items-center justify-between w-full text-left text-white dark:text-gray-200"
                    onClick={() => toggleSubmenu(index)}
                    aria-expanded={clicked === index}
                    aria-controls={`submenu-${index}`}
                  >
                    <span>{t(menu.name)}</span>
                    <ChevronDown
                      className={`transform transition-transform text-white dark:text-gray-300 ${
                        clicked === index ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  <motion.div
                    id={`submenu-${index}`}
                    initial="exit"
                    animate={clicked === index ? "enter" : "exit"}
                    variants={subMenuDrawer}
                    transition={{ duration: 0.2 }}
                    className="pl-4 mt-2 space-y-2"
                  >
                    {menu.submenu.map((submenu) => (
                      <NavLink
                        key={submenu.name}
                        to={submenu.link}
                        className={({ isActive }) =>
                          `block py-2 ${
                            isActive ? "text-blue-400 dark:text-blue-300" : "text-gray-300 dark:text-gray-400"
                          }`
                        }
                        onClick={() => {
                          setIsOpen(false);
                          setClicked(null);
                        }}
                      >
                        {t(submenu.name)}
                      </NavLink>
                    ))}
                  </motion.div>
                </div>
              ) : (
                <NavLink
                  to={menu.link}
                  className={({ isActive }) =>
                    `block py-2 ${isActive ? "text-blue-400 dark:text-blue-300" : "text-gray-300 dark:text-gray-400"}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {t(menu.name)}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}

MobMenu.propTypes = {
  Menus: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string,
      submenu: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          link: PropTypes.string.isRequired
        })
      )
    })
  ).isRequired
};
