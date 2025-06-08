import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import PropTypes from "prop-types";

export default function Chance({ title, desc, image }) {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const savedLang = Cookies.get("lang") || "uz";
    i18n.changeLanguage(savedLang);
  }, [i18n]);

  return (
    <div className="max-w-[354px] w-full min-h-[180px] overflow-hidden flex justify-between rounded-[12px] relative border-[1px] border-[#C0C0C0] p-[20px]">
      <div className="w-[60%] flex flex-col justify-between">
        <h2 className="text-[20px] font-bold leading-[32px]">{t(title)}</h2>
        <p>{t(desc)}</p>
      </div>
      <div className="w-[150px] overflow-hidden absolute bottom-[-40px] right-[4px]">
        <img src={image} alt={t(title)} className="w-full" />
      </div>
    </div>
  );
}

Chance.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
