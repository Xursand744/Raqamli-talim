import React, { useEffect, useState } from "react";
import ChanceImage from "../assets/chance-1.png";
import ChanceImage2 from "../assets/chance-2.png";
import Chance from "../components/chance";
import ChanceRobot from "../components/chanceRobot";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

export default function Chances() {
  const { t, i18n } = useTranslation("global"); // Translation hook from i18n
  const [lang, setLang] = useState(Cookies.get("lang") || "uz");

  useEffect(() => {
    const savedLang = Cookies.get("lang") || "uz";
    i18n.changeLanguage(savedLang);
    setLang(savedLang);
  }, [i18n]);

  const [data, setData] = useState(null);

  setInterval(() => {
    setData([
      {
        title: t("chances.walletTitle"),
        desc: t("chances.walletDesc"),
        image: ChanceImage,
        type: "wallet",
      },
      {
        title: t("chances.robotTitle"),
        desc: t("chances.robotDesc"),
        type: "robot",
        image: ChanceImage2,
      },
      {
        title: t("chances.walletTitle"),
        desc: t("chances.walletDesc"),
        image: ChanceImage,
        type: "wallet",
      },
      {
        title: t("chances.robotTitle"),
        desc: t("chances.robotDesc"),
        type: "robot",
        image: ChanceImage2,
      },
      {
        title: t("chances.walletTitle"),
        desc: t("chances.walletDesc"),
        image: ChanceImage,
        type: "wallet",
      },
      {
        title: t("chances.robotTitle"),
        desc: t("chances.robotDesc"),
        type: "robot",
        image: ChanceImage2,
      },
      {
        title: t("chances.walletTitle"),
        desc: t("chances.walletDesc"),
        image: ChanceImage,
        type: "wallet",
      },
      {
        title: t("chances.robotTitle"),
        desc: t("chances.robotDesc"),
        image: ChanceImage2,
        type: "robot",
      },
      {
        title: t("chances.walletTitle"),
        desc: t("chances.walletDesc"),
        type: "wallet",
        image: ChanceImage,
      },
    ]);
  }, 1000);

  return (
    <div className="px-4 md:px-8 lg:px-16">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        {t("chances.title")}
      </h1>

      <div className="flex flex-wrap justify-center gap-4">
        {data &&
          data.map((item, index) => {
            console.log(item);

            if (item.type === "wallet") {
              return (
                <Chance
                  key={index}
                  title={t(item.title)}
                  desc={t(item.desc)}
                  image={item.image}
                />
              );
            }

            return (
              <ChanceRobot
                key={index}
                title={item.title}
                desc={item.desc}
                image={item.image}
              />
            );
          })}
      </div>
    </div>
  );
}
