import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import HomeIcon from "../../assets/home-icon.svg";

const BreadCrumbs = ({ breadCrumps = [] }) => {
  const { t } = useTranslation();

  return (
    <nav className="mt-[100px] w-full" aria-label={t("breadcrumbs.ariaLabel")}>
      <div className="breadcrumbs">
        <div className="container flex items-center gap-[10px] pt-[1em]">
          <NavLink 
            className="flex items-center gap-[10px]" 
            to="/"
            aria-label={t("breadcrumbs.home")}
          >
            <img src={HomeIcon} alt={t("breadcrumbs.homeIconAlt")} />
            <span>{t("breadcrumbs.home")}</span>
          </NavLink>

          {breadCrumps.map((item, index) => (
            <div key={item.link} className="flex items-center gap-[10px]">
              <span aria-hidden="true" className="text-gray-500">&gt;</span>
              <NavLink 
                to={item.link}
                aria-current={index === breadCrumps.length - 1 ? "page" : undefined}
              >
                {t(item.title)}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

BreadCrumbs.propTypes = {
  breadCrumps: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  )
};

export default BreadCrumbs;
