import talent from "../../assets/images/talent_2.jpg";
import "swiper/css";
import PropTypes from "prop-types";
import { rightIcon } from "../../assets/icons/icon";
import { RegionsMap } from "../../components/RegionMap";
import { useState } from "react";
import { regionsPathArray } from "../../components/mapArray";
import RTRM from "../../assets/images/RTRM.svg";
import { useTranslation } from "react-i18next";

// Reusable Button Component
const Button = ({ children, className = "", ...props }) => (
  <button 
    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg ${className}`} 
    {...props}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

// Course Card Component
const CourseCard = ({ title }) => (
  <div className="group p-6 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-blue-500 hover:shadow-lg cursor-pointer transition-all duration-300 bg-white dark:bg-gray-800 w-[378px]">
    <div className="w-4 h-4 rounded-full bg-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300"></div>
    <h3 className="font-medium text-lg text-gray-800 dark:text-gray-200 group-hover:text-blue-600 transition-colors duration-300">
      {title}
    </h3>
  </div>
);

CourseCard.propTypes = {
  title: PropTypes.string.isRequired,
};

// Courses Section Component
const CoursesSection = () => {
  const { t } = useTranslation("global");
  
  const courses = t('itVillage.courses', { returnObjects: true });
  const circles = t('itVillage.circles', { returnObjects: true });

  // Ensure courses and circles are arrays
  const safeCourses = Array.isArray(courses) ? courses : [];
  const safeCircles = Array.isArray(circles) ? circles : [];

  return (
    <div className="max-w-[1230px] mx-auto px-4  bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 my-8 p-6 transition-colors duration-200">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-200">
          {t('itVillage.sections.directions')}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed transition-colors duration-200">
          {t('itVillage.sections.directionsDesc')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {safeCourses.map((course) => (
          <CourseCard key={course.id} title={course.title} />
        ))}
      </div>

      <div className="max-w-3xl mx-auto text-center my-16">
        <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-200">
          {t('itVillage.sections.circles')}
        </h2>
      </div>

      <div className="flex flex-wrap gap-8 justify-center items-center">
        {safeCircles.map((circle) => (
          <CourseCard key={circle.id} title={circle.title} />
        ))}
      </div>
    </div>
  );
};

// Decision Card Component
const DecisionCard = ({ text }) => (
  <div className="group flex-1 p-8 rounded-xl border border-gray-200 dark:border-gray-600 hover:border-blue-500 hover:shadow-lg transition-all duration-300 bg-white dark:bg-gray-800">
    <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed group-hover:text-blue-600 transition-colors duration-300">
      {text}
    </p>
    <div className="flex justify-end mt-6">
      <button className="p-3 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-300">
        <img src={rightIcon} width="24" height="24" alt="View more" className="group-hover:scale-110 transition-transform duration-300" />
      </button>
    </div>
  </div>
);

DecisionCard.propTypes = {
  text: PropTypes.string.isRequired,
};

// Hero Section Component
const HeroSection = () => {
  const { t } = useTranslation("global");
  
  return (
    <div className="max-w-[1230px] mx-auto px-4">
      <div className="flex justify-center mt-24 mb-16 mt-[10em]">
        <h1 className="font-bold text-5xl md:text-6xl text-gray-900 dark:text-white max-w-3xl text-center leading-tight bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          {t('itVillage.title')}
        </h1>
      </div>

      <div className="flex flex-col items-center">
        <img
          src={talent}
          className="rounded-2xl w-full shadow-xl hover:shadow-2xl transition-shadow duration-300"
          alt="IT Village Project"
        />
        <h2 className="pt-10 pb-10 font-semibold text-xl text-gray-700 dark:text-gray-200 text-center max-w-3xl transition-colors duration-200">
          {t('itVillage.subtitle')}
        </h2>
      </div>
    </div>
  );
};

// Description Section Component
const DescriptionSection = () => {
  const { t } = useTranslation("global");
  
  return (
    <div className="max-w-[1230px] mx-auto">
      <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mx-auto text-justify leading-relaxed transition-colors duration-200">
        {t('itVillage.description')}
      </p>
    </div>
  );
};

// Video Section Component
const VideoSection = () => (
  <div className="max-w-[1230px] mx-auto px-4 my-16">
    <div className="max-w-4xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-600 overflow-hidden">
        <div className="aspect-video w-full">
          <video 
            className="w-full h-full object-cover"
            controls
            poster=""
          >
            <source src="/src/assets/videos/4.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  </div>
);

// Map Section Component
const MapSection = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);
  const { t } = useTranslation("global");

  const handleRegionClick = (regionId) => {
    if (regionId === null) {
      // Сброс выбора
      setSelectedRegion(null);
    } else {
      // Выбор нового региона
      const region = regionsPathArray.find(r => r.id === regionId);
      if (region) {
        setSelectedRegion(region);
      }
    }
  };

  return (
    <div className="max-w-[1230px] mx-auto px-4  bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-200">
          {t('itVillage.sections.regions')}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed transition-colors duration-200">
          {t('itVillage.sections.regionsDesc')}
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 items-stretch relative">
        {/* SVG фон под картой */}
        {/* <img src={RTRM} alt="background" className="absolute left-0 top-0 w-2/3 h-full opacity-10 pointer-events-none z-0" /> */}
        {/* Карта */}
        <div className="flex-1 flex items-center justify-center min-h-[400px] relative z-10">
          <div className="relative w-full max-w-xl">
            <RegionsMap
              width="100%"
              height="500"
              viewBox="0 0 1000 700"
              defaultFillColor="#e5e7eb"
              selectedFillColor="#043b87"
              hoverFillColor="#7b7f94"
              handleClick={handleRegionClick}
              className="w-full h-auto"
            />
            {selectedRegion && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 dark:bg-gray-800/90 px-6 py-2 rounded-full shadow text-blue-900 dark:text-blue-100 font-bold text-lg transition-colors duration-200">
                {selectedRegion.name}
              </div>
            )}
          </div>
        </div>
        {/* Панель */}
        <div className="flex-1 flex items-center justify-center relative z-10 transition-colors duration-200">
          <div className="bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-xl shadow-lg p-8 max-w-xl w-full transition-colors duration-200" style={{ color: '#043b87', position: 'relative' }}>
            {selectedRegion ? (
              <>
                <h4 className="font-semibold text-xs mb-4 uppercase text-blue-900 dark:text-blue-100 transition-colors duration-200">{selectedRegion.name}</h4>
                <div className="mb-4 space-y-2 text-black dark:text-gray-200 transition-colors duration-200">
                  <div><span className="font-semibold">{t('itVillage.map.address')}:</span> <span className="font-normal">{selectedRegion.address || '-'}</span>
                    {selectedRegion.address && (
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedRegion.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-semibold hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-200"
                      >
                        {t('itVillage.map.viewOnMap')}
                      </a>
                    )}
                  </div>
                  {
                    selectedRegion.area ? (
                      <div><span className="font-semibold">{t('itVillage.map.area')}:</span> <span className="font-normal">{selectedRegion.area || '-'}</span></div>
                    ) : (
                      <div><span className="font-semibold">{t('itVillage.map.area')}</span> <span className="font-normal">{t('itVillage.map.comingSoon')}</span></div>
                    )
                  }
                  {
                    selectedRegion.directions ? (
                      <div><span className="font-semibold">{t('itVillage.map.directions')}:</span> <span className="font-normal">{selectedRegion.directions || '-'}</span></div>
                    ) : (
                      <div><span className="font-semibold">{t('itVillage.map.directions')}</span> <span className="font-normal">{t('itVillage.map.comingSoon')}</span></div>
                    )
                  }
                  {
                    selectedRegion.mentorsCount ? (
                      <div><span className="font-semibold">{t('itVillage.map.mentorsCount')}:</span> <span className="font-normal">{selectedRegion.mentorsCount ?? '-'}</span></div>
                    ) : (
                      <div><span className="font-semibold">{t('itVillage.map.mentorsCount')}</span> <span className="font-normal">{t('itVillage.map.comingSoon')}</span></div>
                    )
                  }
                  {
                    selectedRegion.classroomsCount ? (
                      <div><span className="font-semibold">{t('itVillage.map.classroomsCount')}:</span> <span className="font-normal">{selectedRegion.classroomsCount ?? '-'}</span></div>
                    ) : (
                      <div><span className="font-semibold">{t('itVillage.map.classroomsCount')}</span> <span className="font-normal">{t('itVillage.map.comingSoon')}</span></div>
                    )
                  }
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500 dark:text-gray-400 text-lg transition-colors duration-200">{t('itVillage.map.selectRegion')}</p>
                <p className="text-gray-400 dark:text-gray-500 text-sm mt-2 transition-colors duration-200">{t('itVillage.map.selectRegionDesc')}</p>
              </div>
            )}
            {/* SVG фон сбоку */}
            <img src={RTRM} alt="background" className="absolute right-0 bottom-0 w-1/2 h-1/2 opacity-10 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Component
const ItVillage = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <DescriptionSection />
      <VideoSection />
      <CoursesSection />
      <MapSection />
    </div>
  );
};

export default ItVillage;
