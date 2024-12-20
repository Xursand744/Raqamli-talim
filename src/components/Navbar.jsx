import { Menus } from "../utils";
import DesktopMenu from "../components/DesktopMenu";
import MobMenu from "../components/MobMenu";
import { Earth } from "lucide-react";
import { Eye } from "lucide-react";
import { blueLogo } from "../assets/logos/logos";

export default function Navbar() {
  return (
    <div>
      <header className="h-16 z-[9999] text-[15px] fixed top-0  inset-0 flex-center bg-[#fff] ">
        <nav className=" px-3.5 flex-center-between w-full max-w-7xl mx-auto">
          <div className="flex-center gap-x-3 z-[999] relative">
            <img src={blueLogo} alt="" className="size-8 w-[200px] h-[50px]" />
          </div>

          <ul className="gap-x-1 lg:flex-center hidden text-black">
            {Menus.map((menu) => (
              <DesktopMenu menu={menu} key={menu.name} />
            ))}
          </ul>
          <div className="flex-center gap-x-5">
            {/* <button
              aria-label="sign-in"
              className="bg-white/5 z-[999] relative px-3 py-1.5 shadow rounded-xl flex-center"
            >
              Sign In
            </button> */}
            <Eye className="text-black" />
            <p className="text-black font-bold">UZ</p>
            <Earth className="text-black" />
            <div className="lg:hidden">
              <MobMenu Menus={Menus} />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
