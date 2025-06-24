import Cookies from "js-cookie";
import { useState } from "react";
import PropTypes from "prop-types";

function TopJobCard({
  rank,
  title,
  courses,
  minSalary,
  avgSalary,
  maxSalary,
  avgSalaryText,
  span,
  showMaxSalary,
}) {
  const [lang, setLang] = useState(Cookies.get("lang") || "uz");

  setInterval(() => {
    setLang(Cookies.get("lang"));
  }, 100);

  return (
    <div
      className={`rounded-lg bg-white dark:bg-gray-900 p-6 shadow-sm h-full flex flex-col border border-transparent dark:border-gray-800 transition-colors duration-200 ${
        span === 2 ? "md:col-span-2" : ""
      }`}
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="text-orange-400">{rank}</span>
        {courses && <span className="text-sm text-gray-500 dark:text-gray-300 transition-colors duration-200">{courses}</span>}
      </div>

      <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white transition-colors duration-200">{title}</h3>

      <div className="text-sm text-gray-600 dark:text-gray-300 mb-2 transition-colors duration-200">{avgSalaryText}</div>

      <div
        className={`mt-auto grid ${
          showMaxSalary ? "grid-cols-3" : "grid-cols-2"
        } gap-4`}
      >
        <div className="bg-slate-100 dark:bg-gray-800 p-2 rounded-lg transition-colors duration-200">
          <div className="text-sm text-gray-500 dark:text-gray-300 transition-colors duration-200">
            {lang === "uz" ? "Eng kam" : lang === "en" ? "Minimum" : "Минимум"}
          </div>
          <div className="font-medium text-gray-900 dark:text-white transition-colors duration-200">{minSalary}</div>
        </div>

        <div
          className={
            showMaxSalary
              ? "text-center bg-blue-400 pt-2 rounded-lg"
              : "text-center bg-blue-400 pt-2 rounded-lg"
          }
        >
          <div className="text-sm text-white">
            {lang === "uz" ? "O'rtacha" : lang === "en" ? "Average" : "Средний"}
          </div>
          <div className="font-medium text-white">{avgSalary}</div>
        </div>

        {showMaxSalary && (
          <div className="text-center bg-slate-100 dark:bg-gray-800 p-2 rounded-lg transition-colors duration-200">
            <div className="text-sm text-gray-500 dark:text-gray-300 transition-colors duration-200">
              {lang === "uz"
                ? "Eng ko'p"
                : lang === "en"
                ? "Maximum"
                : "Максимум"}
            </div>
            <div className="font-medium text-gray-900 dark:text-white transition-colors duration-200">{maxSalary}</div>
          </div>
        )}
      </div>
    </div>
  );
}

TopJobCard.propTypes = {
  rank: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  courses: PropTypes.string,
  minSalary: PropTypes.string.isRequired,
  avgSalary: PropTypes.string.isRequired,
  maxSalary: PropTypes.string,
  avgSalaryText: PropTypes.string,
  span: PropTypes.number,
  showMaxSalary: PropTypes.bool,
};

export default TopJobCard;
