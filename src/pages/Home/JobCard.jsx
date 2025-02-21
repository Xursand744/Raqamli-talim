import Cookies from "js-cookie";
import { useState } from "react";

function JobCard({ rank, title, salary, icon }) {
  const [lang, setLang] = useState(Cookies.get("lang") || "uz");

  setInterval(() => {
    setLang(Cookies.get("lang"));
  }, 100);

  return (
    <div className="flex items-center justify-between rounded-lg bg-white p-4 shadow-sm">
      <div>
        <div className="mb-1 text-orange-400">{rank}</div>
        <h3 className="font-medium text-gray-900">{title}</h3>
        <div className="mt-1 text-sm text-gray-500">
          {lang === "uz"
            ? "O'rtacha oylik"
            : lang === "en"
            ? "Average salary"
            : "Средняя зарплата"}
        </div>
        <div className="font-medium text-blue-500">{salary}</div>
      </div>
      <img src={icon} alt="" />
    </div>
  );
}

export default JobCard;
