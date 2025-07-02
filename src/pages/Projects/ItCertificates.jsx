import "../../index.css";
import { ChevronRight } from "react-feather";
import PropTypes from "prop-types";
import { rightIcon } from "../../assets/icons/icon";
import HomeIcon from "../../assets/home-icon.svg";
import CarouselImage from "../../assets/projects/istedod2.jpg";
import { useTranslation } from "react-i18next";

const Breadcrumb = () => {
  const { t } = useTranslation("global");
  
  return (
    <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
      <a href="/" className="hover:text-gray-900 flex items-center gap-[10px]">
        <img src={HomeIcon} alt="" />
        {t('itCertificates.breadcrumb.home')}
      </a>
      <ChevronRight size={16} />
      <a href="/projects" className="hover:text-gray-900">
        {t('itCertificates.breadcrumb.projects')}
      </a>
      <ChevronRight size={16} />
      <span className="text-gray-900">{t('itCertificates.breadcrumb.current')}</span>
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

const RequirementCard = ({ title, description, icon, requirement }) => (
  <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-green-200">
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
          <span className="text-white text-xl font-bold">{icon}</span>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <div className="bg-green-100 rounded-lg p-3">
          <p className="text-green-800 text-sm font-medium">{requirement}</p>
        </div>
      </div>
    </div>
  </div>
);

RequirementCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  requirement: PropTypes.string.isRequired,
};

export default function ItCertificates() {
  const { t } = useTranslation("global");

  const requirements = t('itCertificates.requirements', { returnObjects: true });
  const compensationTypes = t('itCertificates.compensationTypes', { returnObjects: true });
  const documents = t('itCertificates.documents', { returnObjects: true });
  const applicationProcess = t('itCertificates.applicationProcess', { returnObjects: true });

  // Ensure all arrays are actually arrays
  const safeRequirements = Array.isArray(requirements) ? requirements : [];
  const safeCompensationTypes = Array.isArray(compensationTypes) ? compensationTypes : [];
  const safeDocuments = Array.isArray(documents) ? documents : [];
  const safeApplicationProcess = Array.isArray(applicationProcess) ? applicationProcess : [];

  return (
    <div className="">
      <div className="max-w-[1230px] w-full my-0 mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumb />

        <h1 className="text-[32px] font-bold text-gray-900 dark:text-white mb-8 mt-[80px] transition-colors duration-200">
          {t('itCertificates.title')}
        </h1>

        <div className="relative mb-12">
          <img
            src={CarouselImage}
            alt="IT Certificates Project"
            className="w-full h-[600px] object-cover rounded-lg"
          />
        </div>

        <p className="text-lg text-gray-700 dark:text-gray-200 mb-12 leading-relaxed transition-colors duration-200">
          {t('itCertificates.description')}
        </p>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 transition-colors duration-200">
            {t('itCertificates.sections.requirements')}
          </h2>

          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
            {safeRequirements.map((req, index) => (
              <RequirementCard
                key={index}
                title={req.title}
                description={req.description}
                icon={req.icon}
                requirement={req.requirement}
              />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {t('itCertificates.sections.compensationTypes')}
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {safeCompensationTypes.map((type, index) => (
              <DocumentCard key={index}>
                <strong>{type.title}</strong> {type.description}
              </DocumentCard>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {t('itCertificates.sections.documents')}
          </h2>

          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
            {safeDocuments.map((doc, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-blue-200">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xl font-bold">{doc.icon}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{doc.title}</h3>
                    <p className="text-gray-600 text-sm">{doc.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {t('itCertificates.sections.applicationProcess')}
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {safeApplicationProcess.map((text, index) => (
              <DocumentCard key={index}>
                {text}
              </DocumentCard>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
} 