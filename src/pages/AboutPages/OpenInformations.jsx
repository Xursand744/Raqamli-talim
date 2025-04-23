import { NavLink } from "react-router-dom";
import HomeIcon from "../../assets/home-icon.svg";
import { useTranslation } from "react-i18next";
import { aboutFilters, openInformations } from "../../utils";
import "./about.css";
import OpenInformationCard from "../../components/AboutComponents/OpenInformationCard";
import { useState } from "react";
import Pagination from "../../components/Pagination";
import AboutPageHeader from "../../components/AboutComponents/AboutPageHeader";

function OpenInformations() {
  const { t } = useTranslation("global");

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(15);

  const breadCrumps = [
    {
      link: "/about",
      name: t("menu.center"),
    },
    {
      link: "/open-informations",
      name: t("menu.openData"),
    },
  ];

  return (
    <div className="mt-[100px]">
      <div className="max-w-[1230px] mx-auto">
        <AboutPageHeader breadCrumps={breadCrumps} title={t("menu.openData")} />

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
