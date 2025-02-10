import React from "react";
import { useTranslation } from "react-i18next";
import { mainLogo } from "../assets/logos/logos";

function Join() {
  const { t } = useTranslation("global");

  return (
    <section className="my-[50px] md:my-[100px] rounded-[27px]">
      <div className="max-w-[1300px] mx-auto p-10 rounded-[27px] join-section">
        <div className="flex flex-col-reverse md:flex-row gap-5 md:gap-0 items-center justify-between">
          <div className="text-white text-center md:text-start">
            <h2 className="text-[40px] font-semibold">{t("join.title")}</h2>
            <h4 className="text-[24px] mt-5 mb-[60px]">{t("join.subtitle")}</h4>
            <button className="py-3 px-6 text-[#2675EB] rounded-[27px] bg-white hover:bg-[#2675EB] hover:text-white transition">
              {t("join.button")}
            </button>
          </div>
          <div>
            <img src={mainLogo} alt={t("join.logoAlt")} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Join;
