import "../../index.css";
import PropTypes from "prop-types";
// import CarouselImage from "../../assets/carousel.jpg";
import { rightIcon } from "../../assets/icons/icon";
import CarouselImage from "../../assets/images/projects/10.jpg";
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

const StageCard = ({ title, description, icon, location, participants }) => (
  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-blue-200 dark:border-blue-700/30">
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center">
          <span className="text-white text-xl font-bold">{icon}</span>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 transition-colors duration-200">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 transition-colors duration-200">{description}</p>
        <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg p-3">
          <p className="text-blue-800 dark:text-blue-200 text-sm font-medium transition-colors duration-200">{location}</p>
          <p className="text-blue-700 dark:text-blue-300 text-xs mt-1 transition-colors duration-200">{participants}</p>
        </div>
      </div>
    </div>
  </div>
);

StageCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  participants: PropTypes.string.isRequired,
};

export default function Icpc() {
  const { t } = useTranslation("global");

  const metrics = [
    {
      icon: UsersGroup,
      value: 50000,
      label: t('icpc.metrics.participants'),
    },
    {
      icon: StickerAdd,
      value: 100,
      label: t('icpc.metrics.countries'),
    },
    {
      icon: UserLoad,
      value: 1970,
      label: t('icpc.metrics.startYear'),
    },
    {
      icon: UserVerify,
      value: 4,
      label: t('icpc.metrics.stages'),
    },
    {
      icon: UserDelete,
      value: 0,
      label: t('icpc.metrics.winners'),
    },
    {
      icon: MoneyBag,
      value: 5,
      label: t('icpc.metrics.hours'),
    },
    {
      icon: Document,
      value: 10,
      label: t('icpc.metrics.problems'),
    },
  ];

  const goals = t('icpc.goals', { returnObjects: true });
  const format = t('icpc.format', { returnObjects: true });
  const stages = t('icpc.stages', { returnObjects: true });
  const importance = t('icpc.importance', { returnObjects: true });

  // Ensure all arrays are actually arrays
  const safeGoals = Array.isArray(goals) ? goals : [];
  const safeFormat = Array.isArray(format) ? format : [];
  const safeStages = Array.isArray(stages) ? stages : [];
  const safeImportance = Array.isArray(importance) ? importance : [];

  return (
    <div className="">
      <div className="max-w-[1230px] w-full my-0 mx-auto px-4 py-8 sm:px-6 lg:px-8">

        <h1 className="text-[32px] font-bold text-gray-900 dark:text-gray-100 mb-8 mt-[80px] transition-colors duration-200">
          {t('icpc.title')}
        </h1>

        <div className="relative mb-12">
          <img
            src={CarouselImage}
            alt="ICPC Contest"
            className="w-full h-[600px] object-cover rounded-lg"
          />
        </div>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 leading-relaxed transition-colors duration-200">
          {t('icpc.description')}
        </p>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-200">
            {t('icpc.sections.goals')}
          </h2>

          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
            {safeGoals.map((goal, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-purple-200 dark:border-purple-700/30">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-600 dark:bg-purple-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xl font-bold">{goal.icon}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 transition-colors duration-200">{goal.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm transition-colors duration-200">{goal.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-200">
            {t('icpc.sections.format')}
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {safeFormat.map((text, index) => (
              <DocumentCard key={index}>
                {text}
              </DocumentCard>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-200">
            {t('icpc.sections.stages')}
          </h2>

          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
            {safeStages.map((stage, index) => (
              <StageCard
                key={index}
                title={stage.title}
                description={stage.description}
                icon={stage.icon}
                location={stage.location}
                participants={stage.participants}
              />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-200">
            {t('icpc.sections.importance')}
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {safeImportance.map((text, index) => (
              <DocumentCard key={index}>
                {text}
              </DocumentCard>
            ))}
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-[32px] font-bold text-gray-900 dark:text-gray-100 mb-8 mt-[80px] transition-colors duration-200">
              {t('icpc.sections.statistics')}
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
