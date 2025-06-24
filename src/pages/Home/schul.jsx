import { useTranslation } from "react-i18next";
import rec from "../../assets/res.png";
import dicon from "../../assets/DIcon.png";
import dicon3 from "../../assets/DIcon3.png";
import dicon2 from "../../assets/DIcon2.png";
import dicon1 from "../../assets/Vector.png";
import PropTypes from "prop-types";

export default function Schul({
  rank,
  name,
  location,
  studying,
  graduated,
  employed,
  exporters,
}) {
  const { t } = useTranslation("global");

  return (
    <div className="border rounded-lg p-4 shadow-sm flex flex-col justify-between bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 transition-colors duration-200">
      <div className="flex items-center gap-3 mb-4">
        <img src={rec} alt="" />
        <div className="flex-1">
          <h3 className="font-medium text-sm leading-tight text-gray-900 dark:text-white transition-colors duration-200">{name}</h3>
          <p className="text-sm text-blue-500">{location}</p>
        </div>
        <div className="text-sm font-medium text-gray-600 dark:text-gray-300 ml-[12px] transition-colors duration-200">
          {rank}
        </div>
      </div>

      <div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-slate-100 dark:bg-gray-800 rounded-lg transition-colors duration-200">
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-1 text-center transition-colors duration-200">
            {t("school.card.studying")}
          </p>
          <div className="flex items-center gap-2 justify-between">
            <span className="text-lg font-medium ml-[12px] text-gray-900 dark:text-white transition-colors duration-200">{studying}</span>
            <img className="" src={dicon} alt="" />
          </div>
        </div>
        <div className="bg-slate-100 dark:bg-gray-800 rounded-lg transition-colors duration-200">
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-1 text-center transition-colors duration-200">
            {t("school.card.graduated")}
          </p>
          <div className="flex items-center gap-2 justify-between">
            <span className="text-lg font-medium ml-[12px] text-gray-900 dark:text-white transition-colors duration-200">{graduated}</span>
            <img className="" src={dicon3} alt="" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-slate-100 dark:bg-gray-800 rounded-lg transition-colors duration-200">
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-1 text-center transition-colors duration-200">
            {t("school.card.employed")}
          </p>
          <div className="flex items-center gap-2 justify-between">
            <span className="text-lg font-medium ml-[12px] text-gray-900 dark:text-white transition-colors duration-200">{employed}</span>
            <img className="" src={dicon2} alt="" />
          </div>
        </div>
        <div className="rounded-lg bg-[#E3EEFF] dark:bg-blue-950/60 text-center transition-colors duration-200">
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-1 text-center transition-colors duration-200">
            {t("school.card.exporters")}
          </p>
          <div className="flex items-center gap-2 justify-between">
            <span className="text-lg font-medium ml-[12px] text-gray-900 dark:text-white transition-colors duration-200">{exporters}</span>
            <img className="" src={dicon1} alt="" />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

Schul.propTypes = {
  rank: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  studying: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  graduated: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  employed: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  exporters: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
