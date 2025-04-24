import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function DesktopMenu({ menu }) {
  const [isHover, setIsHover] = useState(false);
  const { t } = useTranslation("global");

  const hasSubMenu = menu?.subMenu?.length > 0;

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: { duration: 0.5 },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: { duration: 0.5 },
      transitionEnd: { display: "none" },
    },
  };

  const handleHoverStart = () => setIsHover(true);
  const handleHoverEnd = () => setIsHover(false);

  const getGridColumnsClass = (gridCols) => {
    switch (gridCols) {
      case 3: return "grid-cols-3";
      case 2: return "grid-cols-2";
      default: return "grid-cols-1";
    }
  };

  const renderSubMenu = () => (
    <motion.div
      className="sub-menu"
      initial="exit"
      animate={isHover ? "enter" : "exit"}
      variants={subMenuAnimate}
      style={{ background: "white" }}
    >
      <div className={`grid gap-7 ${getGridColumnsClass(menu.gridCols)}`}>
        {menu.subMenu.map((submenu, i) => (
          <NavLink
            key={i}
            to={submenu.link}
            className="text-[#333] hover:bg-[#2675EB] hover:text-white transition my-[-5px] rounded-[10px] py-[10px] px-[15px] mx-[-5px]"
          >
            <div className="relative cursor-pointer">
              {menu.gridCols > 1 && menu?.subMenuHeading?.[i] && (
                <p className="text-sm mb-4 text-gray-500">
                  {menu.subMenuHeading[i]}
                </p>
              )}

              <div className="flex-center gap-x-4 group/menubox">
                <div>
                  <h6 className="font-semibold">{t(submenu.name)}</h6>
                  <p className="text-sm">{submenu.desc}</p>
                </div>
              </div>
            </div>
          </NavLink>
        ))}
      </div>
    </motion.div>
  );

  const menuContent = (
    <span className="flex-center gap-1 hover:bg-white/5 cursor-pointer px-3 py-1 rounded-xl">
      {t(menu.name)}
      {hasSubMenu && (
        <ChevronDown className="mt-[0.6px] group-hover/link:rotate-180 duration-200" />
      )}
    </span>
  );

  return (
    <div>
      {!hasSubMenu ? (
        <NavLink to={menu.link} className="nav-item">
          <motion.li
            className="group/link"
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
            key={menu.name}
          >
            {menuContent}
          </motion.li>
        </NavLink>
      ) : (
        <motion.li
          className="group/link cursor-pointer"
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
          key={menu.name}
        >
          {menuContent}
          {hasSubMenu && renderSubMenu()}
        </motion.li>
      )}
    </div>
  );
}
