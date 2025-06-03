import { useEffect, useState } from "react";
import ChanceImage from "../../assets/chance-1.png";
import ChanceRobot from "../../components/chanceRobot";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

export default function Chances() {
  const { t, i18n } = useTranslation("global");
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
        image: ChanceImage,
      },
    ]);
  }, 1000);

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-3xl md:text-4xl font-bold text-center mt-10 mb-10">
        {t("chances.title")}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[15px] w-full max-w-7xl">
        {data &&
          data.map((item, index) => {
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
