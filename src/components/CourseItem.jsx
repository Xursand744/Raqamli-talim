import { useState } from "react";
import pdp from "../assets/pdp.svg";
import Modal from "./Modal";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

export default function CourseItem({ course }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useTranslation("global");

  const handleClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div
        className="max-w-sm mx-auto w-full h-[400px] bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border border-transparent dark:border-gray-800"
        onClick={handleClick}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleClick();
          }
        }}
        aria-label={t("courses.viewDetails", { courseName: t(course.name) })}
      >
        <div className="relative h-[180px] flex items-center justify-center bg-white dark:bg-gray-800 transition-colors duration-200">
          <img 
            className="w-[280px] h-[170px] object-contain transition-transform duration-300 hover:scale-105" 
            src={course.image} 
            alt={t("courses.courseImage", { courseName: t(course.name) })} 
          />
          <div className="absolute bottom-4 left-4">
            <h2 className="text-sm font-bold px-4 py-1 bg-white/90 dark:bg-gray-900/90 rounded-full text-blue-600 dark:text-blue-400 shadow-sm transition-colors duration-200">
              {t(course.duration)}
            </h2>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center mb-3">
            <img 
              src={pdp} 
              alt={t("common.centerLogo", { centerName: t(course.center) })} 
              className="w-8 h-8 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors duration-200" 
            />
            <h3 className="text-md font-semibold ml-3 text-gray-700 dark:text-gray-200 transition-colors duration-200">{t(course.center)}</h3>
          </div>
          <p className="text-lg font-bold text-gray-800 dark:text-white line-clamp-2 mb-3 transition-colors duration-200">{t(course.name)}</p>
          <div className="mb-4">
            <span className="text-xl font-bold text-blue-600 dark:text-blue-400 transition-colors duration-200">
              {course.price.toLocaleString("uz-UZ")} {t("perMonthShort")}
            </span>
          </div>
          <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-300 text-sm transition-colors duration-200">
            <div className="flex items-center">
              <i className="bx bx-map text-blue-500 dark:text-blue-400 mr-1" aria-hidden="true"></i>
              <span>{t(course.location)}</span>
            </div>
            <div className="flex items-center">
              <i className="bx bx-book text-blue-500 dark:text-blue-400 mr-1" aria-hidden="true"></i>
              <span>{t(course.title)}</span>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        course={course}
      />
    </>
  );
}

CourseItem.propTypes = {
  course: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    center: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    telegram: PropTypes.string,
    fullLocation: PropTypes.string,
    number: PropTypes.string,
    website: PropTypes.string
  }).isRequired
};
