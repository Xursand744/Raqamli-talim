import "../../index.css";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import CarouselImage from "../../assets/carousel.jpg";
import { BackgroundIcon, rightIcon } from "../../assets/icons/icon";
import Sl from "../../assets/s_left.png";
import Sr from "../../assets/s-right.png";
import Video from "../../assets/videos/it-talents.mp4";
import {
  Document,
  MoneyBag,
  StickerAdd,
  UserDelete,
  UserLoad,
  UsersGroup,
  UserVerify,
} from "../../assets/it-talents-images";
import ItTalentsDocs from "../../assets/it-talents-docs";
import { useNavigate } from "react-router-dom";

const DocumentCard = ({ children }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md dark:shadow-gray-900/50 p-6 hover:shadow-lg dark:hover:shadow-gray-900/70 transition-shadow duration-200">
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
    } rounded-lg p-6 shadow-sm dark:shadow-gray-900/50 hover:shadow-md dark:hover:shadow-gray-900/70 transition-shadow duration-200`}
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

export default function ItTalents() {
  const { t } = useTranslation("global");
  const navigate = useNavigate();

  const metrics = [
    {
      icon: UsersGroup,
      value: 23,
      label: t("itTalents.metrics.potentialCandidates"),
    },
    {
      icon: StickerAdd,
      value: 0,
      label: t("itTalents.metrics.newApplications"),
    },
    {
      icon: UserLoad,
      value: 0,
      label: t("itTalents.metrics.inProcess"),
    },
    {
      icon: UserVerify,
      value: 6,
      label: t("itTalents.metrics.completed"),
    },
    {
      icon: UserDelete,
      value: 167,
      label: t("itTalents.metrics.rejected"),
    },
    {
      icon: MoneyBag,
      value: 0,
      label: t("itTalents.metrics.paymentInProcess"),
    },
    {
      icon: Document,
      value: 173,
      label: t("itTalents.metrics.allApplications"),
    },
  ];

  return (
    <div className="">
      <div className="max-w-[1230px] w-full my-0 mx-auto px-4 py-8 sm:px-6 lg:px-8">

        <h1 className="text-[32px] font-bold text-gray-900 dark:text-white mb-8 mt-[3em] transition-colors duration-200">
          {t("itTalents.title")}
        </h1>

        <div className="relative mb-12">
          <img
            src={CarouselImage}
            alt="IT Talents"
            className="w-full h-[600px] object-cover rounded-lg"
          />
        </div>

        <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 transition-colors duration-200">{t("itTalents.description")}</p>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 transition-colors duration-200">
            {t("decisions.title")}
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <DocumentCard>{t("decisions.document1")}</DocumentCard>
            <DocumentCard>{t("decisions.document2")}</DocumentCard>
          </div>
        </section>

        <div className="w-full flex justify-center items-center pt-[100px]">
          <video width="1038" height="584" controls>
            <source src={Video} type="video/mp4" />
            <source src={Video} type="video/ogg" />
          </video>
        </div>

        <div className="h-[300px] bg-gray-50 dark:bg-gray-800 flex items-center justify-center px-4 relative mt-[100px] transition-colors duration-200">
          <div className="max-w-[1230px] w-full mx-auto">
            <div className="flex items-center justify-center max-md:flex-col max-md:gap-8">
              <div className="max-w-[231px] bottom-0 left-0 absolute max-[830px]:hidden">
                <img
                  src={Sl}
                  alt="Geometric logo"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="text-center space-y-3 md:space-y-4">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 dark:text-white transition-colors duration-200">
                  {t("itTalents.sections.studyDirections")}
                </h1>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 transition-colors duration-200">
                  {t("itTalents.sections.studyDirectionsSubtitle")}
                </p>
                <a
                  href={ItTalentsDocs}
                  download
                  className="mt-4 md:mt-6 px-6 md:px-8 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-full text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors inline-block"
                >
                  {t("itTalents.sections.download")}
                </a>
              </div>

              <div className="max-w-[231px] absolute bottom-0 right-0 max-[830px]:hidden">
                <div className="max-w-full h-full text-blue-600 dark:text-blue-400">
                  <img
                    src={Sr}
                    alt="Ministry icon"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-[32px] font-bold text-gray-900 dark:text-white mb-8 mt-[80px] transition-colors duration-200">
              {t("itTalentsMetrics.title")}
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

        <section>
          <div className="h-[300px] rounded-[20px] bg-blue-600">
            <div
              className="w-full h-[300px] relative px-8 rounded-[20px] flex items-center justify-between"
              style={{
                backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-1i4hToIoEkM3OsNLgPMud7QYKFgZsz.png')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="w-full flex justify-between items-center">
                <div className="flex flex-col gap-4">
                  <h1 className="text-white text-3xl font-bold">
                    {t("itTalents.sections.itParkResidents")}
                  </h1>
                  <p className="text-white/90 text-lg max-w-xl">
                    {t("itTalents.sections.itParkDescription")}
                  </p>
                  <div>
                    <button
                      onClick={() =>
                        window.open(
                          "https://it-park.uz/ru/itpark/residents/itpark-residents",
                          "_blank"
                        )
                      }
                      className="mt-4 px-6 py-2 bg-white text-blue-600 hover:bg-blue-50 transition-colors rounded-[27px]"
                    >
                      {t("itTalents.sections.goToLink")}
                    </button>
                  </div>
                </div>

                <div className="max-w-[181px]">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Layer_1-Y9qV3PrGlI0RRT2VdAbkoEb8lB6ZBt.png"
                    alt="IT Park Logo"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="bg-[#F8F8F8] dark:bg-gray-900 w-full py-[40px] project-section-bottom transition-colors duration-200">
        <div className="max-w-[1230px] mx-auto">
          <div className="flex justify-between gap-[20px] ">
            <div className="w-2/3 flex flex-col gap-[20px]">
              <h1 className="text-[#222] dark:text-white font-bold text-[40px] transition-colors duration-200">
                {t("itTalents.sections.crmGuide")}
              </h1>
              <p className="text-[#222] dark:text-gray-300 text-[20px] transition-colors duration-200">
                {t("itTalents.sections.crmGuideSubtitle")}
              </p>

              <div>
                <div className="flex gap-4">
                  <button
                    className="px-[50px] py-[12px] bg-[#E3EEFF] dark:bg-blue-900 hover:bg-[#E3EEF3] dark:hover:bg-blue-800 text-[#2F2F2F] dark:text-white rounded-3xl font-medium transition-colors duration-200"
                    onClick={() =>
                      navigate("https://crm.digital.uz/login?redirect_url=/")
                    }
                  >
                    {t("itTalents.sections.uzbekLanguage")}
                  </button>
                  <button
                    className="px-[50px] py-[12px] bg-[#E3EEFF] dark:bg-blue-900 hover:bg-[#E3EEF3] dark:hover:bg-blue-800 text-[#2F2F2F] dark:text-white rounded-3xl font-medium transition-colors duration-200"
                    onClick={() =>
                      navigate("https://crm.digital.uz/login?redirect_url=/")
                    }
                  >
                    {t("itTalents.sections.russianLanguage")}
                  </button>
                </div>
              </div>
            </div>

            <div className="w-1/3 project-bottom-image">
              <img src={BackgroundIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
