import React from "react";
import { useTranslation } from "react-i18next";
import { aboutCounts, aboutFilters } from "../../utils";
import aboutfirst from "../../assets/about-1.png";
import aboutImage from "../../assets/about-image.jpg";
import startVideo from "../../assets/startVideoIcon.svg";
import { about1, about2, about3, about4, about5 } from "../../assets";
import Join from "../Home/Join";
import AboutPageHeader from "../../components/AboutComponents/AboutPageHeader";

function About() {
  const { t } = useTranslation("global");

  const breadCrumps = [
    {
      link: "/about",
      name: t("menu.center"),
    },
    {
      link: "/anti-corruption",
      name: t("menu.aboutUs"),
    },
  ];

  return (
    <section className="about mt-[40px]">
      <div className="max-w-[1230px] mx-auto">
        <AboutPageHeader breadCrumps={breadCrumps} title={t("about.title")} />

        <div>
          <div className="flex justify-between gap-[20px] about-main">
            <div className="w-1/2 min-h-[356px]">
              <img src={aboutfirst} alt="" className="w-full h-full" />
            </div>
            <div className="w-1/2">
              <p className="desc">{t("about.description")}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-[100px] about-counts">
          <h1
            className="title w-1/2"
            style={{ textAlign: "left", verticalAlign: "start", marginTop: 0 }}
          >
            {t("about.goal")}
          </h1>

          <div className="w-1/2 flex justify-between flex-wrap gap-[20px]">
            {aboutCounts &&
              aboutCounts.map((count, index) => {
                return (
                  <div
                    key={index}
                    className="w-[282px] h-[192px] border-[#E0E0E0] border-[1px] rounded-[16px] pl-[40px] pt-[40px]"
                  >
                    <h1 className="about-count-value text-[44px] font-bold">
                      {count.value}
                    </h1>
                    <p>{t(`about.counts.${index}`)}</p>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="mt-[100px] relative">
          <img
            className="rounded-[24px] w-full h-full"
            src={aboutImage}
            alt=""
          />

          <img
            src={startVideo}
            alt=""
            className="absolute left-[45%] cursor-pointer top-[40%] z-[10] start-video-icon"
          />

          <div className="bg-[#222] rounded-[24px] opacity-[0.6] h-full w-full absolute left-0 top-0"></div>
        </div>
        <div className="flex justify-center mt-[27px]">
          <p className="max-w-[790px] desc">{t("about.finalMessage")}</p>
        </div>

        <div className="flex justify-between items-center mt-[100px] about-images-section">
          <div className="flex flex-col justify-between gap-[24px]">
            <img src={about1} alt="" />
            <img src={about3} alt="" />
          </div>
          <div>
            <img src={about2} alt="" />
          </div>
          <div className="flex flex-col justify-between gap-[24px]">
            <img src={about4} alt="" />
            <img src={about5} alt="" />
          </div>
        </div>

        <Join />
      </div>
    </section>
  );
}

export default About;
