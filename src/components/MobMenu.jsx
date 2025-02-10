import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function MobMenu({ Menus }) {
  const { t } = useTranslation("global");

  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
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
      <button className="lg:hidden z-[999] relative" onClick={toggleDrawer}>
        {isOpen ? <X /> : <Menu />}
      </button>

      <motion.div
        className="fixed left-0 right-0 top-16 overflow-y-auto h-full bg-[#18181A] backdrop-blur text-white p-6 pb-20"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
      >
        <ul>
          {Menus.map(({ name, link, subMenu }, i) => {
            const isClicked = clicked === i;
            const hasSubMenu = subMenu?.length;
            return (
              <li key={name}>
                <a
                  href={link} // Asosiy menyu linki
                  className="flex-center-between p-4 hover:bg-white/5 rounded-md cursor-pointer relative"
                  onClick={() => setClicked(hasSubMenu && isClicked ? null : i)}
                >
                  {t(name)}
                  {hasSubMenu && (
                    <ChevronDown
                      className={`ml-auto ${isClicked && "rotate-180"}`}
                    />
                  )}
                </a>
                {hasSubMenu && (
                  <motion.ul
                    initial="exit"
                    animate={isClicked ? "enter" : "exit"}
                    variants={subMenuDrawer}
                    className="ml-5"
                  >
                    {subMenu.map(({ name, link, icon: Icon }) => (
                      <li key={name}>
                        <a
                          href={link}
                          className="p-2 flex-center hover:bg-white/5 rounded-md gap-x-2 cursor-pointer font-medium"
                        >
                          {Icon && <Icon size={17} />} {t(name)}
                        </a>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
}
