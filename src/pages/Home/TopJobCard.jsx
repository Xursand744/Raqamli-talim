import Cookies from "js-cookie";
import { useState } from "react";

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
      className={`rounded-lg bg-white p-6 shadow-sm h-full flex flex-col ${
        span === 2 ? "md:col-span-2" : ""
      }`}
    >
      <div className="mb-4 flex items-center justify-between">
        <span className="text-orange-400">{rank}</span>
        {courses && <span className="text-sm text-gray-500">{courses}</span>}
      </div>

      <h3 className="mb-4 text-xl font-semibold text-gray-900">{title}</h3>

      <div className="text-sm text-gray-600 mb-2">{avgSalaryText}</div>

      <div
        className={`mt-auto grid ${
          showMaxSalary ? "grid-cols-3" : "grid-cols-2"
        } gap-4`}
      >
        <div className="bg-slate-100 p-2 rounded-lg">
          <div className="text-sm text-gray-500">
            {lang === "uz" ? "Eng kam" : lang === "en" ? "Minimum" : "Минимум"}
          </div>
          <div className="font-medium">{minSalary}</div>
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
          <div className="text-center bg-slate-100 p-2 rounded-lg">
            <div className="text-sm text-gray-500">
              {lang === "uz"
                ? "Eng ko'p"
                : lang === "en"
                ? "Maximum"
                : "Максимум"}
            </div>
            <div className="font-medium">{maxSalary}</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TopJobCard;
