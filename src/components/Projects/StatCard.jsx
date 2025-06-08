import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

function StatCard({ number, title, count, description, total }) {
  const { t } = useTranslation("global");

  return (
    <div className="bg-white rounded-lg border-[1px] border-[#E0E0E0] p-6 flex flex-col h-full">
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg">
          {number}
        </div>
      </div>
      <p className="text-gray-700 mt-[10px]">
        <span className="text-[#2F2F2F] font-semibold">{t(title)}</span>
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
