import "../../index.css";
import PropTypes from "prop-types";
// import CarouselImage from "../../assets/carousel.jpg";
import { rightIcon } from "../../assets/icons/icon";
import CarouselImage from "../../assets/images/projects/9.png";
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

const SkillCard = ({ title, description, icon, level }) => (
  <div className="bg-gradient-to-br from-orange-50 to-red-100 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-orange-200 dark:border-orange-700/30">
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-orange-600 dark:bg-orange-500 rounded-lg flex items-center justify-center">
          <span className="text-white text-xl font-bold">{icon}</span>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 transition-colors duration-200">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-3 transition-colors duration-200">{description}</p>
        <div className="bg-orange-100 dark:bg-orange-900/30 rounded-lg p-3">
          <p className="text-orange-800 dark:text-orange-200 text-sm font-medium transition-colors duration-200">{level}</p>
        </div>
      </div>
    </div>
  </div>
);

SkillCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
};

export default function Apio() {
  const { t } = useTranslation("global");

  const metrics = [
    {
      icon: UsersGroup,
      value: 300,
      label: t("apio.metrics.participants"),
    },
    {
      icon: StickerAdd,
      value: 25,
      label: t("apio.metrics.countries"),
    },
    {
      icon: UserLoad,
      value: 20,
      label: t("apio.metrics.ageLimit"),
    },
    {
      icon: UserVerify,
      value: 1,
      label: t("apio.metrics.stage"),
    },
    {
      icon: UserDelete,
      value: 0,
      label: t("apio.metrics.winners"),
    },
    {
      icon: MoneyBag,
      value: 100,
      label: t("apio.metrics.problems"),
    },
    {
      icon: Document,
      value: 5,
      label: t("apio.metrics.hours"),
    },
  ];

  const skills = t("apio.skills", { returnObjects: true });

  return (
    <div className="">
      <div className="max-w-[1230px] w-full my-0 mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-[32px] font-bold text-gray-900 dark:text-gray-100 mb-8 mt-[80px] transition-colors duration-200">
          {t("apio.title")}
        </h1>

        <div className="relative mb-12">
          <img
            src={CarouselImage}
            alt="APIO Olympiad"
            className="w-full h-[600px] object-cover rounded-lg"
          />
        </div>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 leading-relaxed transition-colors duration-200">
          {t("apio.description")}
        </p>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-200">
            {t("apio.sections.about")}
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <DocumentCard>
              {t("apio.cards.about1")}
            </DocumentCard>
            <DocumentCard>
              {t("apio.cards.about2")}
            </DocumentCard>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-200">
            {t("apio.sections.developingSkills")}
          </h2>

          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                title={skill.title}
                description={skill.description}
                icon={skill.icon}
                level={skill.level}
              />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-200">
            {t("apio.sections.ioiPreparation")}
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <DocumentCard>
              {t("apio.cards.ioi1")}
            </DocumentCard>
            <DocumentCard>
              {t("apio.cards.ioi2")}
            </DocumentCard>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6 transition-colors duration-200">
            {t("apio.sections.participationConditions")}
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <DocumentCard>
              {t("apio.cards.participation1")}
            </DocumentCard>
            <DocumentCard>
              {t("apio.cards.participation2")}
            </DocumentCard>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-[32px] font-bold text-gray-900 dark:text-gray-100 mb-8 mt-[80px] transition-colors duration-200">
              {t("apio.sections.statistics")}
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
