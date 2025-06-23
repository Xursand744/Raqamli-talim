import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Schul from "../pages/Home/schul";
import Pagination from "./Pagination";

const formatLocation = (address) => {
  if (!address) {
    return "Manzil ko'rsatilmagan";
  }
  const parts = address.split(/, |,/);
  return parts[0];
};

const TopCenters = () => {
  const { t } = useTranslation("global");
  const [centers, setCenters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchTopCenters = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.crm.digital.uz/v1/external/centers?include=rating_score%2Cplaces.region&sort=-rating_score&per_page=6&page=${currentPage}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCenters(data.data || []);
        setTotalPages(data.meta.last_page || 1);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTopCenters();
  }, [currentPage]);

  if (loading) {
    return <div className="text-center py-10">{t("loading")}...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">Error: {error}</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {centers.map((center, index) => (
          <Schul
            key={center.id}
            rank={`#${(currentPage - 1) * 6 + index + 1}`}
            name={center.name}
            location={formatLocation(center.actual_address || center.legal_address)}
            studying={Math.round(center.students_count_score || 0)}
            graduated={Math.round(center.graduates_count_score || 0)}
            employed={Math.round(center.hired_graduates_count_score || 0)}
            exporters={Math.round(center.exporter_graduates_count_score || 0)}
          />
        ))}
      </div>
      <div className="mt-8">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
          className="justify-center"
          class="justify-center"
        />
      </div>
    </div>
  );
};

export default TopCenters; 