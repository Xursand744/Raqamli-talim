import "../../index.css";
import { ChevronRight } from "react-feather";
import PropTypes from "prop-types";
import CarouselImage from "../../assets/images/projects/7.jpg";
import { rightIcon } from "../../assets/icons/icon";
import HomeIcon from "../../assets/home-icon.svg";
import {
  Document,
  MoneyBag,
  StickerAdd,
  UserDelete,
  UserLoad,
  UsersGroup,
  UserVerify,
} from "../../assets/it-talents-images";
import { useTranslation } from "react-i18next";

const Breadcrumb = () => {
  const { t } = useTranslation("global");
  
  return (
    <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-6 transition-colors duration-200">
      <a href="/" className="hover:text-gray-900 dark:hover:text-gray-100 flex items-center gap-[10px] transition-colors duration-200">
        <img src={HomeIcon} alt="" />
        {t('ict4girls.breadcrumb.home')}
      </a>
      <ChevronRight size={16} />
      <a href="/projects" className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200">
        {t('ict4girls.breadcrumb.projects')}
      </a>
      <ChevronRight size={16} />
      <span className="text-gray-900 dark:text-gray-100 transition-colors duration-200">{t('ict4girls.breadcrumb.current')}</span>
    </div>
  );
};

const DocumentCard = ({ children }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-200 border border-gray-200 dark:border-gray-600">
    <p className="text-gray-700 dark:text-gray-300 transition-colors duration-200">{children}</p>
    <div className="flex justify-end mt-[20px]">
      <img src={rightIcon} alt="Toggle" className="w-8 h-8" />
    </div>
  </div>
);

DocumentCard.propTypes = {
  children: PropTypes.node.isRequired,
};

const MetricsCard = ({ icon, value, label, isActive }) => (
  <div
    className={`${
      isActive ? "bg-[#2675EB]" : "bg-white dark:bg-gray-800"
    } rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 dark:border-gray-600`}
  >
    <img src={icon || "/placeholder.svg"} alt="" className="w-[48px] mb-4" />
    <div
      className={`${
        isActive ? "text-[#fff]" : "text-[#2563EB] dark:text-blue-400"
      } text-[40px] font-bold mb-2 transition-colors duration-200`}
    >
      {value.toLocaleString()}
    </div>
    <div className={`${isActive ? "text-[#fff]" : "text-[#2563EB] dark:text-blue-400"} text-sm transition-colors duration-200`}>
      {label}
    </div>
  </div>
);

MetricsCard.propTypes = {
  icon: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};

MetricsCard.defaultProps = {
  isActive: false,
};

const StageCard = ({ title, description, icon, participants }) => (
  <div className="bg-gradient-to-br from-pink-50 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-pink-200 dark:border-pink-700/30">
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-pink-600 dark:bg-pink-500 rounded-lg flex items-center justify-center">
          <span className="text-white text-xl font-bold">{icon}</span>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 transition-colors duration-200">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 transition-colors duration-200">{description}</p>
        <div className="bg-pink-100 dark:bg-pink-900/30 rounded-lg p-3">
          <p className="text-pink-800 dark:text-pink-200 text-sm font-medium transition-colors duration-200">{participants}</p>
        </div>
      </div>
    </div>
  </div>
);

StageCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  participants: PropTypes.string.isRequired,
};

export default function Ict() {
  const { t } = useTranslation("global");

  const metrics = [
    {
      icon: UsersGroup,
      value: 500,
      label: t('ict4girls.metrics.participants'),
    },
    {
      icon: StickerAdd,
      value: 14,
      label: t('ict4girls.metrics.regions'),
    },
    {
      icon: UserLoad,
      value: 20,
      label: t('ict4girls.metrics.ageLimit'),
    },
    {
      icon: UserVerify,
      value: 2,
      label: t('ict4girls.metrics.stages'),
    },
    {
      icon: UserDelete,
      value: 0,
      label: t('ict4girls.metrics.winners'),
    },
    {
      icon: MoneyBag,
      value: 100,
      label: t('ict4girls.metrics.prizes'),
    },
    {
      icon: Document,
      value: 50,
      label: t('ict4girls.metrics.problems'),
    },
  ];

  const stages = t('ict4girls.stages', { returnObjects: true });
  const about = t('ict4girls.about', { returnObjects: true });
  const conditions = t('ict4girls.conditions', { returnObjects: true });

  // Ensure all arrays are actually arrays
  const safeStages = Array.isArray(stages) ? stages : [];
  const safeAbout = Array.isArray(about) ? about : [];
  const safeConditions = Array.isArray(conditions) ? conditions : [];

  return (
    <div className="">
      <div className="max-w-[1230px] w-full my-0 mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumb />

        <h1 className="text-[32px] font-bold text-gray-900 dark:text-gray-100 mb-8 mt-[80px] transition-colors duration-200">
          {t('ict4girls.title')}
        </h1>

        <div className="relative mb-12">
          <img
            src={CarouselImage}
            alt="ICT4Girls Olympiad"
            className="w-full h-[600px] object-cover rounded-lg"
          />
        </div>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 leading-relaxed transition-colors duration-200">
          {t('ict4girls.description')}
        </p>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-200">
            {t('ict4girls.sections.about')}
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {safeAbout.map((text, index) => (
              <DocumentCard key={index}>
                {text}
            </DocumentCard>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-200">
            {t('ict4girls.sections.stages')}
          </h2>

          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
            {safeStages.map((stage, index) => (
              <StageCard
                key={index}
                title={stage.title}
                description={stage.description}
                icon={stage.icon}
                participants={stage.participants}
              />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-200">
            {t('ict4girls.sections.conditions')}
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {safeConditions.map((text, index) => (
              <DocumentCard key={index}>
                {text}
            </DocumentCard>
            ))}
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-[32px] font-bold text-gray-900 dark:text-gray-100 mb-8 mt-[80px] transition-colors duration-200">
              {t('ict4girls.sections.statistics')}
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {metrics.slice(0, 4).map((metric, index) => (
                <MetricsCard
                  key={index}
                  icon={metric.icon}
                  value={metric.value}
                  label={metric.label}
                />
              ))}
            </div>
            <div className="w-full flex gap-[20px] mt-[20px]">
              {metrics.slice(4).map((metric, index) => (
                <div key={index + 4} className="w-1/2">
                  <MetricsCard
                    icon={metric.icon}
                    value={metric.value}
                    label={metric.label}
                    isActive={index + 4 === 6}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
