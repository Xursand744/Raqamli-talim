import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { aboutFilters } from "../../utils";
import PropTypes from "prop-types";

function AboutPageHeader({ title }) {
  const { t } = useTranslation("global");

  return (
    <div className="mt-[7em]" role="banner">
      {/* <nav 
        className="breadcrumbs" 
        aria-label={t("breadcrumbs.ariaLabel")}
      >
        <div className="container flex gap-[10px] items-center">
          <NavLink 
            className="flex gap-[10px] items-center" 
            to="/"
            aria-label={t("breadcrumbs.home")}
          >
            <img 
              src={HomeIcon} 
              alt={t("breadcrumbs.homeIconAlt")} 
              aria-hidden="true"
            />
            <span>{t("breadcrumbs.home")}</span>
          </NavLink>
          {breadCrumps.map((item, index) => (
            <div key={item.link} className="flex items-center gap-[10px]">
              <span 
                className="text-gray-500" 
                aria-hidden="true"
              >
                &gt;
              </span>
              <NavLink 
                to={item.link}
                aria-current={index === breadCrumps.length - 1 ? "page" : undefined}
              >
                {t(item.name)}
              </NavLink>
            </div>
          ))}
        </div>
      </nav> */}

      {aboutFilters && (
        <div 
          className="flex gap-[20px] flex-wrap mt-[20px]"
          role="navigation"
          aria-label={t("about.filters.ariaLabel")}
        >
          {aboutFilters.map((item, index) => (
            <NavLink
              key={index}
              to={`${item.link}`}
              className="py-[8px] px-[32px] rounded-[27px] border-[1px] border-[#B7B7B7] dark:border-gray-600 bg-[#F8F8F8] dark:bg-gray-800 about-filter-link hover:bg-blue-50 dark:hover:bg-blue-700 hover:border-blue-500 dark:hover:border-blue-400 text-gray-700 dark:text-white transition-colors duration-200"
              aria-label={t("about.filters.item", { name: t(`about.filters.${index}`) })}
            >
              {t(`about.filters.${index}`)}
            </NavLink>
          ))}
        </div>
      )}

      <div className="mt-[80px]">
        <h1 className="about-title" id="page-title">{title}</h1>
      </div>
    </div>
  );
}

AboutPageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default AboutPageHeader;
