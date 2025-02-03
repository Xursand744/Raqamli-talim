import { NavLink } from "react-router-dom";
import HomeIcon from "../../assets/home-icon.svg";
import { useTranslation } from "react-i18next";
import { aboutFilters, openInformations } from "../../utils";
import "./about.css";
import OpenInformationCard from "../../components/AboutComponents/OpenInformationCard";
import { useState } from "react";
import Pagination from "../../components/Pagination";

function OpenInformations() {
  const { t } = useTranslation("global");

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(15);

  return (
    <div className="mt-[100px]">
      <div className="container">
        <div className="breadcrumbs">
          <div className="container flex gap-[10px]">
            <NavLink className={`flex gap-[10px]`} to={"/"}>
              <img src={HomeIcon} alt="" />
              {t("breadcrumbs.home")}
            </NavLink>{" "}
            {">"}
            <NavLink to={"/about"}>{t("breadcrumbs.about")}</NavLink>
            {">"}
            <NavLink to={"/open-informations"}>{t("menu.openData")}</NavLink>
          </div>
        </div>

        <div className="flex gap-[20px] flex-wrap mt-[40px]">
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
          <h1 className="about-title">{t("menu.openData")}</h1>
        </div>

        <div className="mt-[40px] flex justify-between flex-wrap gap-[20px]">
          {openInformations &&
            openInformations.map((item) => {
              return <OpenInformationCard {...item} key={item.id} />;
            })}
        </div>

        <div className="mt-[30px] flex justify-end items-center mb-[40px]">
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        </div>
      </div>
    </div>
  );
}

export default OpenInformations;
