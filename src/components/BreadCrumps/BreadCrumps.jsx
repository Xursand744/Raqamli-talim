import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import HomeIcon from "../../assets/home-icon.svg";

const BreadCrumbs = ({ breadCrumps }) => {
  const { t } = useTranslation("global");

  return (
    <nav className="mt-[100px] w-full" aria-label="Breadcrumb">
      <div className="breadcrumbs">
        <div className="container flex items-center gap-[10px]">
          <NavLink className="flex items-center gap-[10px]" to="/">
            <img src={HomeIcon} alt="Home" />
            <span>{t("breadcrumbs.home")}</span>
          </NavLink>

          {breadCrumps.map((item, index) => (
            <div key={item.link} className="flex items-center gap-[10px]">
              <span aria-hidden="true">&gt;</span>
              <NavLink to={item.link}>{item.title}</NavLink>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default BreadCrumbs;
