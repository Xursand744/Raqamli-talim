import "../../index.css";
import { useTranslation } from "react-i18next";
import { ChevronRight } from "react-feather";
import PropTypes from "prop-types";
import talent from "../../assets/images/projects/talent_2.jpg";
import { BackgroundIcon, rightIcon } from "../../assets/icons/icon";
import HomeIcon from "../../assets/home-icon.svg";
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

const Breadcrumb = () => {
  const { t } = useTranslation("global");

  return (
    <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
      <a href="/" className="hover:text-gray-900 flex items-center gap-[10px]">
        <img src={HomeIcon} alt="" />
        {t("itTalentBreadcrump.home")}
      </a>
      <ChevronRight size={16} />
      <a href="/projects" className="hover:text-gray-900">
        {t("itTalentBreadcrump.projects")}
      </a>
      <ChevronRight size={16} />
      <span className="text-gray-900">{t("itTalentBreadcrump.itTalents")}</span>
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

export default function ItTalents() {
  const { t } = useTranslation("global");
  const navigate = useNavigate();

  const metrics = [
    {
      icon: UsersGroup,
      value: 23,
      label: "Potensial nomzodlar",
    },
    {
      icon: StickerAdd,
      value: 0,
      label: "Yangi arizalar",
    },
    {
      icon: UserLoad,
      value: 0,
      label: "Jarayonda",
    },
    {
      icon: UserVerify,
      value: 6,
      label: "Tugallanganlar",
    },
    {
      icon: UserDelete,
      value: 167,
      label: "Rad etilganlar",
    },
    {
      icon: MoneyBag,
      value: 0,
      label: "To&apos;lov jarayonida",
    },
    {
      icon: Document,
      value: 173,
      label: "Barcha arizalar",
    },
  ];

  return (
    <div className="">
      <div className="max-w-[1230px] w-full my-0 mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumb />

        <h1 className="text-[32px] font-bold text-gray-900 mb-8 mt-[80px]">
          {t("hero.title")}
        </h1>

        <div className="relative mb-12">
          <img
            src={talent}
            alt="IT Talents"
            className="w-full h-[600px] object-cover rounded-lg"
          />
        </div>

        <p className="text-lg text-gray-700 mb-12">{t("hero.description")}</p>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
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

        <div className="h-[300px] bg-gray-50 flex items-center justify-center px-4 relative mt-[100px]">
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
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900">
                  O&apos;quv yo&apos;nalishlar ro&apos;yxati
                </h1>
                <p className="text-sm md:text-base text-gray-600">
                  Raqamli texnologiyalar vazirligi tomonidan tasdiqlangan
                </p>
                <a
                  href={ItTalentsDocs}
                  download
                  className="mt-4 md:mt-6 px-6 md:px-8 py-2 bg-white border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors inline-block"
                >
                  Yuklab olish
                </a>
              </div>

              <div className="max-w-[231px] absolute bottom-0 right-0 max-[830px]:hidden">
                <div className="max-w-full h-full text-blue-600">
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
            <h1 className="text-[32px] font-bold text-gray-900 mb-8 mt-[80px]">
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
                    IT Park rezidentlari
                  </h1>
                  <p className="text-white/90 text-lg max-w-xl">
                    IT Park tomonidan taqdim etilgan yagona reyestr
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
                      Havolaga o&apos;tish
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

      <div className="bg-[#F8F8F8] w-full py-[40px] project-section-bottom">
        <div className="max-w-[1230px] mx-auto">
          <div className="flex justify-between gap-[20px] ">
            <div className="w-2/3 flex flex-col gap-[20px]">
              <h1 className="text-[#222] font-bold text-[40px]">
                Loyiha doirasida maxsus tizim (crm.digital.uz)dan ro&apos;yxatdan
                o&apos;tish bo&apos;yicha yo&apos;riqnoma:
              </h1>
              <p className="text-[#222] text-[20px]">
                Quyidagi qo&apos;llanmamiz siz uchun
              </p>

              <div>
                <div className="flex gap-4">
                  <button
                    className="px-[50px] py-[12px] bg-[#E3EEFF] hover:bg-[#E3EEF3] text-[#2F2F2F] rounded-3xl font-medium"
                    onClick={() =>
                      navigate("https://crm.digital.uz/login?redirect_url=/")
                    }
                  >
                    O&apos;zbek tilida
                  </button>
                  <button
                    className="px-[50px] py-[12px] bg-[#E3EEFF] hover:bg-[#E3EEF3] text-[#2F2F2F] rounded-3xl font-medium"
                    onClick={() =>
                      navigate("https://crm.digital.uz/login?redirect_url=/")
                    }
                  >
                    Rus tilida
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
