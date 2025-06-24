import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

function StatCard({ number, title, count, description, total }) {
  const { t } = useTranslation("global");

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border-[1px] border-[#E0E0E0] dark:border-gray-700 p-6 flex flex-col h-full transition-colors duration-200">
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg">
          {number}
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mt-[10px] transition-colors duration-200">
        <span className="text-[#2F2F2F] dark:text-white font-semibold transition-colors duration-200">{t(title)}</span>
        {count} {t(description)} {total}
      </p>
    </div>
  );
}

StatCard.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  total: PropTypes.string
};

export default StatCard;
