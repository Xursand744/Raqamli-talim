import { Menus } from "../utils";
import React from 'react';
import DesktopMenu from "../components/DesktopMenu";
import MobMenu from "../components/MobMenu";
import { Earth } from "lucide-react";
import { Eye } from "lucide-react";
import { blueLogo } from "../assets/logos/logos";
import { NavLink } from "react-router-dom";

export default function Navbar() {
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
          <div className="flex-center gap-x-5">
            <Eye className="text-black" />
            <div className="flex items-center gap-1">
              <p className="text-black font-bold">UZ</p>
              <Earth for="cars" className="text-black" />
            </div>
            <div className="lg:hidden">
              <MobMenu Menus={Menus} />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
