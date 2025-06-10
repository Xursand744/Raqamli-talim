import "../../index.css";
import { useTranslation } from "react-i18next";
import { ChevronRight } from "react-feather";
import PropTypes from "prop-types";
import CarouselImage from "../../assets/images/projects/5.jpg";
import { BackgroundIcon, rightIcon } from "../../assets/icons/icon";
import HomeIcon from "../../assets/home-icon.svg";
import Sl from "../../assets/s_left.png";
import Sr from "../../assets/s-right.png";
import Video from "../../assets/videos/2.mp4";
import {
  Document,
  MoneyBag,
  StickerAdd,
  UserDelete,
  UserLoad,
  UsersGroup,
  UserVerify,
} from "../../assets/it-talents-images";
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
      <span className="text-gray-900">TOT - O'qituvchilar uchun treninglar</span>
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

const TrainingDirectionCard = ({ title, description, icon }) => (
  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-blue-200">
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white text-xl font-bold">{icon}</span>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  </div>
);

TrainingDirectionCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default function TOT() {
  const { t } = useTranslation("global");
  const navigate = useNavigate();

  const metrics = [
    {
      icon: UsersGroup,
      value: 150,
      label: "Qatnashuvchilar",
    },
    {
      icon: StickerAdd,
      value: 25,
      label: "Trenerlar",
    },
    {
      icon: UserLoad,
      value: 3,
      label: "Oylar",
    },
    {
      icon: UserVerify,
      value: 5,
      label: "Yo'nalishlar",
    },
    {
      icon: UserDelete,
      value: 0,
      label: "Tugatganlar",
    },
    {
      icon: MoneyBag,
      value: 100,
      label: "Sertifikatlar",
    },
    {
      icon: Document,
      value: 250,
      label: "Jami darslar",
    },
  ];

  const trainingDirections = [
    {
      title: "Sun'iy intellekt va mashinaviy ta'lim",
      description: "Zamonaviy AI va ML texnologiyalarini o'rganish",
      icon: "🤖",
    },
    {
      title: "Kiberxavfsizlik",
      description: "Siber xavfsizlik va ma'lumotlarni himoya qilish",
      icon: "🔒",
    },
    {
      title: "Bulutli texnologiyalar",
      description: "Cloud computing va bulutli xizmatlar",
      icon: "☁️",
    },
    {
      title: "Kompyuter tarmoqlari",
      description: "Tarmoq arxitekturasi va protokollar",
      icon: "🌐",
    },
    {
      title: "Ma'lumotlar tahlili",
      description: "Data Analysis va statistika",
      icon: "📊",
    },
  ];

  return (
    <div className="">
      <div className="max-w-[1230px] w-full my-0 mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumb />

        <h1 className="text-[32px] font-bold text-gray-900 mb-8 mt-[80px]">
          O'qituvchilar uchun IT treninglar (TOT)
        </h1>

        <div className="relative mb-12">
          <img
            src={CarouselImage}
            alt="IT Teachers Training"
            className="w-full h-[600px] object-cover rounded-lg"
          />
        </div>

        <p className="text-lg text-gray-700 mb-12 leading-relaxed">
          Loyiha doirasida Respublikamizning xususiy IT ta'lim markazlarining
          oʻqituvchilari uchun onlayn treninglar tashkil qilinadi.
        </p>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Trening haqida
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <DocumentCard>
              3 oy davomida tashkil etiladigan treninglarda markazlarning IT
              yoʻnalishidagi oʻqituvchi-mentorlariga tajribali trenerlar tomonidan
              dars beriladi.
            </DocumentCard>
            <DocumentCard>
              Mashg'ulotlar xalqaro standartlar asosida tashkil etilib,
              o'qituvchi-mentorlar raqamli texnologiyalar bo'yicha ilg'or
              yondashuvlarni o'zlashtirish imkoniyatiga ega bo'ladilar.
            </DocumentCard>
          </div>
        </section>

        <div className="w-full flex justify-center items-center pt-[100px]">
          <video width="1038" height="584" controls>
            <source src={Video} type="video/mp4" />
            <source src={Video} type="video/ogg" />
          </video>
        </div>

        <section className="py-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Trening yo'nalishlari
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {trainingDirections.map((direction, index) => (
              <TrainingDirectionCard
                key={index}
                title={direction.title}
                description={direction.description}
                icon={direction.icon}
              />
            ))}
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-[32px] font-bold text-gray-900 mb-8 mt-[80px]">
              Trening statistikasi
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

