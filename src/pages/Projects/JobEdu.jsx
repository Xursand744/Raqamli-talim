import "../../index.css";
import { ChevronRight } from "react-feather";
import PropTypes from "prop-types";
import CarouselImage from "../../assets/images/projects/6.jpg";
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
  const { t } = useTranslation();
  
  return (
    <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
      <a href="/" className="hover:text-gray-900 flex items-center gap-[10px]">
        <img src={HomeIcon} alt="" />
        {t('jobEdu.breadcrumb.home')}
      </a>
      <ChevronRight size={16} />
      <a href="/projects" className="hover:text-gray-900">
        {t('jobEdu.breadcrumb.projects')}
      </a>
      <ChevronRight size={16} />
      <span className="text-gray-900">{t('jobEdu.breadcrumb.current')}</span>
    </div>
  );
};

const DocumentCard = ({ children }) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
    <p className="text-gray-700">{children}</p>
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
      isActive ? "bg-[#2675EB]" : "bg-white"
    } rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow`}
  >
    <img src={icon || "/placeholder.svg"} alt="" className="w-[48px] mb-4" />
    <div
      className={`${
        isActive ? "text-[#fff]" : "text-[#2563EB]"
      } text-[40px] font-bold mb-2`}
    >
      {value.toLocaleString()}
    </div>
    <div className={`${isActive ? "text-[#fff]" : "text-[#2563EB]"} text-sm`}>
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

export default function JobEdu() {
  const { t } = useTranslation();

  const metrics = [
    {
      icon: UsersGroup,
      value: 1200,
      label: t('jobEdu.metrics.registered'),
    },
    {
      icon: StickerAdd,
      value: 100,
      label: t('jobEdu.metrics.companies'),
    },
    {
      icon: UserLoad,
      value: 1000,
      label: t('jobEdu.metrics.vacancies'),
    },
    {
      icon: UserVerify,
      value: 800,
      label: t('jobEdu.metrics.internships'),
    },
    {
      icon: UserDelete,
      value: 700,
      label: t('jobEdu.metrics.graduates'),
    },
    {
      icon: MoneyBag,
      value: 14,
      label: t('jobEdu.metrics.mayMonth'),
    },
    {
      icon: Document,
      value: 6,
      label: t('jobEdu.metrics.presentations'),
    },
  ];

  return (
    <div className="">
      <div className="max-w-[1230px] w-full my-0 mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumb />

        <h1 className="text-[32px] font-bold text-gray-900 dark:text-white mb-8 mt-[80px] transition-colors duration-200">
          {t('jobEdu.title')}
        </h1>

        <div className="relative mb-12">
          <img
            src={CarouselImage}
            alt="Job&Edu Fest"
            className="w-full h-[600px] object-cover rounded-lg"
          />
        </div>

        <p className="text-lg text-gray-700 dark:text-gray-200 mb-12 leading-relaxed transition-colors duration-200">
          {t('jobEdu.description')}
        </p>

        <p className="text-lg text-gray-700 dark:text-gray-200 mb-12 leading-relaxed transition-colors duration-200">
          {t('jobEdu.description2')}
        </p>

        <p className="text-lg text-gray-700 dark:text-gray-200 mb-12 leading-relaxed transition-colors duration-200">
          {t('jobEdu.description3')}
        </p>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {t('jobEdu.sections.videoMaterial')}
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
              <video 
                className="w-full aspect-video rounded-lg mb-4"
                controls
                poster=""
              >
                <source src="/src/assets/videos/Job&Edu.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="text-gray-700 text-sm text-center">{t('jobEdu.sections.videoDescription')}</p>
            </div>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-[32px] font-bold text-gray-900 mb-8 mt-[80px]">
              {t('jobEdu.sections.statistics')}
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