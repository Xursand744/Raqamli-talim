import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Card from "./schul";
import Cookies from "js-cookie";

const formatLocation = (address) => {
  if (!address) {
    return "";
  }
  const parts = address.split(/, |,/);
  return parts[0];
};

function School() {
  const { t, i18n } = useTranslation("global");
  const [centers, setCenters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const savedLanguage = Cookies.get("lang") || "uz";
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

  useEffect(() => {
    const fetchCenters = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://api.crm.digital.uz/v1/external/centers?include=rating_score%2Cplaces.region&sort=-rating_score&per_page=4"
        );
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setCenters(data.data || []);
      } catch (err) {
        console.error("Error fetching centers:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCenters();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto mt-[30px] md:mt-[50px] px-4 py-8 mb-[50px]">
        <h1 className="text-3xl font-bold text-center mb-8">
          {t("school.title")}
        </h1>
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto mt-[30px] md:mt-[50px] px-4 py-8 mb-[50px]">
        <h1 className="text-3xl font-bold text-center mb-8">
          {t("school.title")}
        </h1>
        <div className="text-center text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-[30px] md:mt-[50px] px-4 py-8 mb-[50px]">
      <h1 className="text-3xl font-bold text-center mb-8">
        {t("school.title")}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {centers.map((center, index) => (
          <Card 
            key={center.id} 
            rank={`#${index + 1}`}
            name={center.name}
            location={
              formatLocation(center.actual_address || center.legal_address) ||
              "Manzil ko'rsatilmagan"
            }
            studying={Math.round(center.students_count_score || 0)}
            graduated={Math.round(center.graduates_count_score || 0)}
            employed={Math.round(center.hired_graduates_count_score || 0)}
            exporters={Math.round(center.exporter_graduates_count_score || 0)}
          />
        ))}
      </div>
    </div>
  );
}

export default School;
