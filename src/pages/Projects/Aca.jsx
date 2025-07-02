import "../../index.css";
import PropTypes from "prop-types";
// import CarouselImage from "../../assets/carousel.jpg";
import { rightIcon } from "../../assets/icons/icon";
import CarouselImage from "../../assets/images/projects/8.jpg";
import { useTranslation } from "react-i18next";

import {
  Document,
  MoneyBag,
  StickerAdd,
  UserDelete,
  UserLoad,
  UsersGroup,
  UserVerify,
} from "../../assets/it-talents-images";

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

const LearningCard = ({ title, description, icon, benefits }) => (
  <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-green-200 dark:border-green-700/30">
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-green-600 dark:bg-green-500 rounded-lg flex items-center justify-center">
          <span className="text-white text-xl font-bold">{icon}</span>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 transition-colors duration-200">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 transition-colors duration-200">{description}</p>
        <div className="bg-green-100 dark:bg-green-900/30 rounded-lg p-3">
          <p className="text-green-800 dark:text-green-200 text-sm font-medium transition-colors duration-200">{benefits}</p>
        </div>
      </div>
    </div>
  </div>
);

LearningCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  benefits: PropTypes.string.isRequired,
};

export default function Aca() {
  const { t } = useTranslation("global");
  
  const metrics = [
    {
      icon: UsersGroup,
      value: 200,
      label: t("aca.metrics.students"),
    },
    {
      icon: StickerAdd,
      value: 1,
      label: t("aca.metrics.partner"),
    },
    {
      icon: UserLoad,
      value: 3,
      label: t("aca.metrics.months"),
    },
    {
      icon: UserVerify,
      value: 100,
      label: t("aca.metrics.pythonBasics"),
    },
    {
      icon: UserDelete,
      value: 0,
      label: t("aca.metrics.graduates"),
    },
    {
      icon: MoneyBag,
      value: 50,
      label: t("aca.metrics.lessons"),
    },
    {
      icon: Document,
      value: 10,
      label: t("aca.metrics.projects"),
    },
  ];

  const learningModules = t("aca.learningModules", { returnObjects: true });

  return (
    <div className="">
      <div className="max-w-[1230px] w-full my-0 mx-auto px-4 py-8 sm:px-6 lg:px-8">

        <h1 className="text-[32px] font-bold text-gray-900 dark:text-gray-100 mb-8 mt-[3em] transition-colors duration-200">
          {t("aca.title")}
        </h1>

        <div className="relative mb-12">
          <img
            src={CarouselImage}
            alt="ACA Navigator"
            className="w-full h-[600px] object-cover rounded-lg"
          />
        </div>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 leading-relaxed transition-colors duration-200">
          {t("aca.description")}
        </p>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-200">
            {t("aca.sections.about")}
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <DocumentCard>
              {t("aca.cards.about1")}
            </DocumentCard>
            <DocumentCard>
              {t("aca.cards.about2")}
            </DocumentCard>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-200">
            {t("aca.sections.learningModules")}
          </h2>

          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
            {learningModules.map((module, index) => (
              <LearningCard
                key={index}
                title={module.title}
                description={module.description}
                icon={module.icon}
                benefits={module.benefits}
              />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-200">
            {t("aca.sections.partnership")}
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <DocumentCard>
              {t("aca.cards.partnership1")}
            </DocumentCard>
            <DocumentCard>
              {t("aca.cards.partnership2")}
            </DocumentCard>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-200">
            {t("aca.sections.careerOpportunities")}
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <DocumentCard>
              {t("aca.cards.career1")}
            </DocumentCard>
            <DocumentCard>
              {t("aca.cards.career2")}
            </DocumentCard>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-[32px] font-bold text-gray-900 dark:text-gray-100 mb-8 mt-[80px] transition-colors duration-200">
              {t("aca.sections.statistics")}
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
