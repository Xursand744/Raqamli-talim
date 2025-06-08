import { useState } from "react";
import { SearchIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import PriceRange from "./PriceRange";

export default function CourseFilter({ onFilterChange }) {
  const { t } = useTranslation();
  const [priceRange, setPriceRange] = useState([2500000, 5000000]);
  const [selectedCenter, setSelectedCenter] = useState("");

  const centers = [
    { name: "PDP Adademy", count: 77 },
    { name: "Techno World", count: 89 },
    { name: "Najot talim", count: 42 },
    { name: "Mohir dev", count: 34 },
  ];

  const courses = [
    { name: "Dizayn", count: 23 },
    { name: "Frontend", count: 14 },
    { name: "Backend", count: 17 },
    { name: "Project managment", count: 8 },
    { name: "Web Dasturlash", count: 8 },
  ];

  const durations = [
    { name: "1 oygacha", count: 12 },
    { name: "1-3 oy", count: 23 },
    { name: "3-6 oy", count: 16 },
    { name: "6 oydan ko'p", count: 8 },
  ];

  const formats = [
    { name: "Onlayn", count: 12 },
    { name: "Oflayn", count: 23 },
    { name: "Gibrid", count: 16 },
  ];

  const handleRangeChange = (newRange) => {
    setPriceRange(newRange);
    if (onFilterChange) {
      onFilterChange({ priceRange: newRange });
    }
  };

  const handleCenterChange = (centerName) => {
    setSelectedCenter(centerName);
    if (onFilterChange) {
      onFilterChange({ center: centerName });
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <div className="mb-6">
        <h3 className="text-lg mb-2">{t("filters.centers.title")}</h3>
        <div className="relative mb-4">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder={t("filters.centers.placeholder")}
            className="w-full pl-10 p-2 border rounded"
          />
        </div>
        {centers.map((center) => (
          <label
            key={center.name}
            className="flex items-center justify-between py-2"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 mr-2"
                checked={selectedCenter === center.name}
                onChange={() => handleCenterChange(center.name)}
              />
              <span>{t(`centers.${center.name}`)}</span>
            </div>
            <span className="text-gray-500">{center.count}</span>
          </label>
        ))}
      </div>

      <div className="mb-6">
        <h3 className="text-lg mb-2">{t("filters.courses.title")}</h3>
        <div className="relative mb-4">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder={t("filters.courses.placeholder")}
            className="w-full pl-10 p-2 border rounded"
          />
        </div>
        {courses.map((course) => (
          <label
            key={course.name}
            className="flex items-center justify-between py-2"
          >
            <div className="flex items-center">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <span>{t(`courses.${course.name}`)}</span>
            </div>
            <span className="text-gray-500">{course.count}</span>
          </label>
        ))}
      </div>

      <div className="mb-6">
        <h3 className="text-lg mb-2">{t("filters.duration.title")}</h3>
        {durations.map((duration) => (
          <label
            key={duration.name}
            className="flex items-center justify-between py-2"
          >
            <div className="flex items-center">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <span>{t(`duration.${duration.name}`)}</span>
            </div>
            <span className="text-gray-500">{duration.count}</span>
          </label>
        ))}
      </div>

      <div className="mb-6">
        <h3 className="text-lg mb-2">{t("filters.format.title")}</h3>
        {formats.map((format) => (
          <label
            key={format.name}
            className="flex items-center justify-between py-2"
          >
            <div className="flex items-center">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <span>{t(`format.${format.name}`)}</span>
            </div>
            <span className="text-gray-500">{format.count}</span>
          </label>
        ))}
      </div>

      <PriceRange priceRange={{ min: priceRange[0], max: priceRange[1] }} setPriceRange={handleRangeChange} />

      <button className="w-full bg-blue-500 text-white py-3 rounded-lg mt-6">
        {t("filters.showCourses", { count: 77 })}
      </button>
    </div>
  );
}

CourseFilter.propTypes = {
  onFilterChange: PropTypes.func
};
