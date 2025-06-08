import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Card from "./schul";
import Cookies from "js-cookie";

const centers = [
  {
    id: 1,
    rank: "#1",
    location: "Sirdaryo",
    studying: 1200,
    graduated: 1200,
    employed: 1200,
    exporters: 15,
  },
  {
    id: 2,
    rank: "#2",
    location: "Sirdaryo",
    studying: 1200,
    graduated: 1200,
    employed: 1200,
    exporters: 15,
  },
  {
    id: 3,
    rank: "#3",
    location: "Sirdaryo",
    studying: 1200,
    graduated: 1200,
    employed: 1200,
    exporters: 15,
  },
  {
    id: 4,
    rank: "#4",
    location: "Sirdaryo",
    studying: 1200,
    graduated: 1200,
    employed: 1200,
    exporters: 15,
  },
];

function School() {
  const { t, i18n } = useTranslation("global");

  const [selectedLanguage, setSelectedLanguage] = useState("UZ");
  useEffect(() => {
    const savedLanguage = Cookies.get("lang") || "uz";
    i18n.changeLanguage(savedLanguage);
    setSelectedLanguage(savedLanguage.toUpperCase());
  }, [i18n]);

  return (
    <div className="container mx-auto mt-[30px] md:mt-[50px] px-4 py-8 mb-[50px]">
      <h1 className="text-3xl font-bold text-center mb-8">
        {t("school.title")}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {centers.map((center) => (
          <Card key={center.id} {...center} />
        ))}
      </div>
    </div>
  );
}

export default School;
