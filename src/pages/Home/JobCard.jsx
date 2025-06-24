import Cookies from "js-cookie";
import { useState } from "react";
import PropTypes from "prop-types";

function JobCard({ rank, title, salary, icon }) {
  const [lang, setLang] = useState(Cookies.get("lang") || "uz");

  setInterval(() => {
    setLang(Cookies.get("lang"));
  }, 100);

  return (
    <div className="flex items-center justify-between rounded-lg bg-white dark:bg-gray-900 p-4 shadow-sm border border-transparent dark:border-gray-800 transition-colors duration-200">
      <div>
        <div className="mb-1 text-orange-400">{rank}</div>
        <h3 className="font-medium text-gray-900 dark:text-white transition-colors duration-200">{title}</h3>
        <div className="mt-1 text-sm text-gray-500 dark:text-gray-300 transition-colors duration-200">
          {lang === "uz"
            ? "O'rtacha oylik"
            : lang === "en"
            ? "Average salary"
            : "Средняя зарплата"}
        </div>
        <div className="font-medium text-blue-500 dark:text-blue-400 transition-colors duration-200">{salary}</div>
      </div>
      <img src={icon} alt="" />
    </div>
  );
}

JobCard.propTypes = {
  rank: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default JobCard;
