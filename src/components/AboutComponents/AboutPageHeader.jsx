import { NavLink } from "react-router-dom";
import HomeIcon from "../../assets/home-icon.svg";
import { useTranslation } from "react-i18next";
import { aboutFilters } from "../../utils";

function AboutPageHeader({ title, breadCrumps }) {
  const { t } = useTranslation("global");

  return (
    <div className="mt-[100px]">
      <div className="breadcrumbs">
        <div className="container flex gap-[10px] items-center">
          <NavLink className={`flex gap-[10px] items-center`} to={"/"}>
            <img src={HomeIcon} alt="" />
            {t("breadcrumbs.home")}
          </NavLink>
          {breadCrumps &&
            breadCrumps.map((item, index) => {
              return (
                <div key={index} className="flex items-center gap-[10px]">
                  <span className="text-gray-500">{">"}</span>
                  <NavLink to={item.link}>{item.name}</NavLink>
                </div>
              );
            })}
        </div>
      </div>

      <div className="flex gap-[20px] flex-wrap mt-[20px]">
        {aboutFilters &&
          aboutFilters.map((item, index) => {
            return (
              <NavLink
                key={index}
                to={`${item.link}`}
                className="py-[8px] px-[32px] rounded-[27px] border-[1px] border-[#B7B7B7] bg-[#F8F8F8] about-filter-link"
              >
                {t(`about.filters.${index}`)}
              </NavLink>
            );
          })}
      </div>

      <div className="mt-[80px]">
        <h1 className="about-title">{title}</h1>
      </div>
    </div>
  );
}

export default AboutPageHeader;
