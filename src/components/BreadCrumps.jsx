import { Link, NavLink, useLocation } from "react-router-dom";
import HomeIcon from "../assets/home-icon.svg";

function capitalizeFirstLetter(str) {
  if (str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function BreadCrumps() {
  const location = useLocation();

  const currentLink = [];

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb != "")
    .map((crumb) => {
      currentLink.push(`/${crumb}`);
      if (crumb === "about") {
        return (
          <div className="crumb" key={crumb}>
            <Link to={currentLink.join("")}>
              {/* {capitalizeFirstLetter( */}
              Markaz haqida {">"} Raqamli Ta’lim markazi haqida
              {/* )} */}
            </Link>
          </div>
        );
      }
    });

  return (
    <div className="breadcrumbs">
      <div className="container flex gap-[10px]">
        <NavLink className={`flex gap-[10px]`} to={"/"}>
          <img src={HomeIcon} alt="" />
          Bosh sahifa
        </NavLink>{" "}
        {">"}
        {crumbs}
      </div>
    </div>
  );
}

export default BreadCrumps;