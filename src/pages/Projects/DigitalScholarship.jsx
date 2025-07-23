import "../../index.css";
import { ChevronRight } from "react-feather";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import HomeIcon from "../../assets/home-icon.svg";
import CarouselImage from "../../assets/images/projects/stipendiya.png";

const Breadcrumb = () => {
  const { t } = useTranslation("global");
  
  return (
    <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
      <a href="/" className="hover:text-gray-900 flex items-center gap-[10px]">
        <img src={HomeIcon} alt="" />
        {t('scholarshipPage.breadcrumb.home')}
      </a>
      <ChevronRight size={16} />
      <a href="/projects" className="hover:text-gray-900">
        {t('scholarshipPage.breadcrumb.projects')}
      </a>
      <ChevronRight size={16} />
      <span className="text-gray-900">{t('scholarshipPage.breadcrumb.current')}</span>
    </div>
  );
};

const UniversityCard = ({ university, index }) => (
  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-blue-200">
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white text-xl font-bold">{index + 1}</span>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{university}</h3>
      </div>
    </div>
  </div>
);

UniversityCard.propTypes = {
  university: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

const ActionButton = ({ children, isPrimary = false, onClick }) => (
  <button
    onClick={onClick}
    className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 min-w-[200px] ${
      isPrimary
        ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl"
        : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300"
    }`}
  >
    {children}
  </button>
);

ActionButton.propTypes = {
  children: PropTypes.node.isRequired,
  isPrimary: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

ActionButton.defaultProps = {
  isPrimary: false,
};

export default function DigitalScholarship() {
  const { t } = useTranslation("global");

  const universities = t('scholarshipPage.eligibleUniversities.universities', { returnObjects: true });
  const safeUniversities = Array.isArray(universities) ? universities : [];

  const handleNizomClick = () => {
    // Открыть ссылку на положение
    window.open('#', '_blank');
  };

  const handleRegisterClick = () => {
    // Открыть ссылку на регистрацию
    window.open('https://sso.egov.uz/sso/oauth/Authorization.do?response_type=one_code&client_id=it-istedod_uz&scope=it-istedod_uz&state=niAq4mNGDWVMdNj0XGh0bUl8&redirect_uri=https://edu.digital.uz/', '_blank');
  };

  return (
    <div className="">
      <div className="max-w-[1230px] w-full my-0 mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumb />

        <h1 className="text-[32px] font-bold text-gray-900 dark:text-white mb-8 mt-[80px] transition-colors duration-200 leading-tight">
          {t('scholarshipPage.title')}
        </h1>

        <div className="relative mb-12">
          <img
            src={CarouselImage}
            alt="Digital Scholarship Program"
            className="w-full h-[600px] object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
        </div>

        <div className="mb-16">
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-12 leading-relaxed transition-colors duration-200">
            {t('scholarshipPage.description')}
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 transition-colors duration-200">
            {t('scholarshipPage.eligibleUniversities.title')}
          </h2>

          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
            {safeUniversities.map((university, index) => (
              <UniversityCard
                key={index}
                university={university}
                index={index}
              />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-8 border border-green-200">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xl">📋</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {t('scholarshipPage.applicationInfo')}
                </h3>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <ActionButton isPrimary onClick={handleNizomClick}>
              {t('scholarshipPage.buttons.nizom')}
            </ActionButton>
            <ActionButton onClick={handleRegisterClick}>
              {t('scholarshipPage.buttons.register')}
            </ActionButton>
          </div>
        </section>
      </div>
    </div>
  );
} 