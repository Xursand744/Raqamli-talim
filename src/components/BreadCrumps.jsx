import { Link, NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HomeIcon from "../assets/home-icon.svg";

function BreadCrumps() {
  const location = useLocation();
  const { t } = useTranslation("global"); // Import translation hook

  const currentLink = [];

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink.push(`/${crumb}`);
      if (crumb === "about") {
        return (
          <div className="crumb" key={crumb}>
            <Link to={currentLink.join("")}>
              {t("breadcrumbs.about")} {">"} {t("breadcrumbs.aboutCenter")}
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
          {t("breadcrumbs.home")}
        </NavLink>{" "}
        {">"}
        {crumbs}
      </div>
    </div>
  );
}

export default BreadCrumps;
