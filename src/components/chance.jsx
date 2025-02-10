import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

export default function Chance({ title, desc, image }) {
  const { t, i18n } = useTranslation("global"); // Translation hook from i18n

  useEffect(() => {
    const savedLang = Cookies.get("lang") || "uz";
    i18n.changeLanguage(savedLang); // Change i18n language
  }, [i18n]);

  return (
    <div className="max-w-[354px] w-full min-h-[180px] overflow-hidden flex justify-between rounded-[12px] relative border-[1px] border-[#C0C0C0] p-[20px]">
      <div className="w-[60%] flex flex-col justify-between">
        <h2 className="text-[20px] font-bold leading-[32px]">{t(title)}</h2>

        <p>{t(desc)}</p>
      </div>
      <div
        className={`w-[150px] overflow-hidden absolute bottom-[-40px] right-[4px]`}
      >
        <img src={image} className="" alt="image" />
      </div>
    </div>
  );
}
