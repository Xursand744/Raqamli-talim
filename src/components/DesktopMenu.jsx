import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import { div } from "framer-motion/client";
import { useTranslation } from "react-i18next";

export default function DesktopMenu({ menu }) {
  const navigate = useNavigate();
  const [isHover, toggleHover] = useState(false);
  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };
  const { t, i18n } = useTranslation("global");

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  const hasSubMenu = menu?.subMenu?.length;

  return (
    <div>
      {!hasSubMenu ? (
        <NavLink to={menu.link} className={"nav-item"}>
          <motion.li
            className="group/link "
            onHoverStart={() => {
              toggleHoverMenu();
            }}
            onHoverEnd={toggleHoverMenu}
            key={menu.name}
          >
            <span className="flex-center gap-1 hover:bg-white/5 cursor-pointer px-3 py-1 rounded-xl">
              {t(menu.name)}
              {hasSubMenu && (
                <ChevronDown className="mt-[0.6px] group-hover/link:rotate-180 duration-200" />
              )}
            </span>
            {hasSubMenu && (
              <motion.div
                className="sub-menu"
                initial="exit"
                animate={isHover ? "enter" : "exit"}
                variants={subMenuAnimate}
                style={{ background: "white" }}
              >
                <div
                  className={`grid gap-7 ${
                    menu.gridCols === 3
                      ? "grid-cols-3"
                      : menu.gridCols === 2
                      ? "grid-cols-2"
                      : "grid-cols-1"
                  }`}
                >
                  {hasSubMenu &&
                    menu.subMenu.map((submenu, i) => (
                      <NavLink key={i} to={submenu.link}>
                        <div className="relative cursor-pointer">
                          {menu.gridCols > 1 && menu?.subMenuHeading?.[i] && (
                            <p className="text-sm mb-4 text-gray-500">
                              {menu?.subMenuHeading?.[i]}
                            </p>
                          )}

                          <div className="flex-center gap-x-4 group/menubox">
                            <div className="bg-white w-fit p-2 rounded-md group-hover/menubox:bg-white group-hover/menubox:text-gray-900 duration-300">
                              {submenu.icon && <submenu.icon />}
                            </div>
                            <div>
                              <h6 className="font-semibold text-white">
                                {submenu.name}
                              </h6>
                              <p className="text-sm text-white">
                                {submenu.desc}
                              </p>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    ))}
                </div>
              </motion.div>
            )}
          </motion.li>
        </NavLink>
      ) : (
        <motion.li
          className="group/link cursor-pointer"
          onHoverStart={() => {
            toggleHoverMenu();
          }}
          onHoverEnd={toggleHoverMenu}
          key={menu.name}
          // onClick={() => navigate(menu.link)}
        >
          <span className="flex-center gap-1 hover:bg-white/5 cursor-pointer px-3 py-1 rounded-xl">
            {menu.name}
            {hasSubMenu && (
              <ChevronDown className="mt-[0.6px] group-hover/link:rotate-180 duration-200" />
            )}
          </span>
          {hasSubMenu && (
            <motion.div
              className="sub-menu"
              initial="exit"
              animate={isHover ? "enter" : "exit"}
              variants={subMenuAnimate}
              style={{ background: "white" }}
            >
              <div
                className={`grid gap-7 ${
                  menu.gridCols === 3
                    ? "grid-cols-3"
                    : menu.gridCols === 2
                    ? "grid-cols-2"
                    : "grid-cols-1"
                }`}
              >
                {hasSubMenu &&
                  menu.subMenu.map((submenu, i) => (
                    <NavLink
                      key={i}
                      to={submenu.link}
                      className={`text-[#333] hover:bg-[#333] hover:text-white transition my-[-15px] rounded-[10px] py-[10px] px-[5px] mx-[-5px]`}
                    >
                      <div className="relative cursor-pointer">
                        {menu.gridCols > 1 && menu?.subMenuHeading?.[i] && (
                          <p className="text-sm mb-4 text-gray-500">
                            {menu?.subMenuHeading?.[i]}
                          </p>
                        )}

                        <div className="flex-center gap-x-4 group/menubox">
                          <div className="bg-white w-fit p-2 rounded-md group-hover/menubox:bg-white group-hover/menubox:text-gray-900 duration-300">
                            {submenu.icon && <submenu.icon />}
                          </div>
                          <div>
                            <h6 className="font-semibold ">
                              {t(submenu.name)}
                            </h6>
                            <p className="text-sm ">{submenu.desc}</p>
                          </div>
                        </div>
                      </div>
                    </NavLink>
                  ))}
              </div>
            </motion.div>
          )}
        </motion.li>
      )}
    </div>
  );
}
