import { useState } from "react";
import { departmentsInformations } from "../../utils";
import AboutPageHeader from "../../components/AboutComponents/AboutPageHeader";
import { useTranslation } from "react-i18next";
import "./about.css";
import AboutDepartment from "../../components/AboutComponents/AboutDepartment";

export default function Departments() {
  const { t } = useTranslation("global");

  const breadCrumps = [
    {
      link: "/about",
      name: t("menu.center"),
    },
    {
      link: "/departments",
      name: t("menu.departments"),
    },
  ];

  return (
    <div className="container mb-[50px]">
      <AboutPageHeader
        breadCrumps={breadCrumps}
        title={t("menu.departments")}
      />

      <div className="flex gap-[10px] flex-wrap justify-between deparment-items">
        {departmentsInformations &&
          departmentsInformations.map((info) => {
            return <AboutDepartment {...info} />;
          })}
      </div>
    </div>
  );
}
