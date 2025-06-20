import "../../index.css";
import { ChevronRight } from "react-feather";
import PropTypes from "prop-types";
// import CarouselImage from "../../assets/carousel.jpg";
import { BackgroundIcon, rightIcon } from "../../assets/icons/icon";
import HomeIcon from "../../assets/home-icon.svg";
import CarouselImage from "../../assets/images/projects/8.jpg";

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
  return (
    <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
      <a href="/" className="hover:text-gray-900 flex items-center gap-[10px]">
        <img src={HomeIcon} alt="" />
        Bosh sahifa
      </a>
      <ChevronRight size={16} />
      <a href="/projects" className="hover:text-gray-900">
        Loyihalar
      </a>
      <ChevronRight size={16} />
      <span className="text-gray-900">ACA Navigator - Python dasturlash kursi</span>
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

const LearningCard = ({ title, description, icon, benefits }) => (
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
          <p className="text-green-800 text-sm font-medium">{benefits}</p>
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
  const navigate = useNavigate();

  const metrics = [
    {
      icon: UsersGroup,
      value: 200,
      label: "Talabalar",
    },
    {
      icon: StickerAdd,
      value: 1,
      label: "Hamkor",
    },
    {
      icon: UserLoad,
      value: 3,
      label: "Oylar",
    },
    {
      icon: UserVerify,
      value: 100,
      label: "Python asoslari",
    },
    {
      icon: UserDelete,
      value: 0,
      label: "Bitiruvchilar",
    },
    {
      icon: MoneyBag,
      value: 50,
      label: "Darslar",
    },
    {
      icon: Document,
      value: 10,
      label: "Loyihalar",
    },
  ];

  const learningModules = [
    {
      title: "Python asoslari",
      description: "Ishtirokchilar Python asoslari bilan tanishadilar va eng mashhur dasturlash tillaridan birida dasturlash!",
      icon: "🐍",
      benefits: "Birinchi kodlaringizni yozing"
    },
    {
      title: "Nazariya va amaliyot",
      description: "Birinchi kodlarini yozib, nazariyani amaliyotda mustahkamlash!",
      icon: "💻",
      benefits: "Amaliy tajriba"
    },
    {
      title: "Karyera tayyorgarligi",
      description: "Karyerada muvaffaqiyatli boshlashga yordam beradigan samarali rezyume yaratadilar va ish beruvchilarni o`ziga jalb qilishadi!",
      icon: "📈",
      benefits: "Rezyume va ish topish"
    },
  ];

  return (
    <div className="">
      <div className="max-w-[1230px] w-full my-0 mx-auto px-4 py-8 sm:px-6 lg:px-8">

        <h1 className="text-[32px] font-bold text-gray-900 mb-8 mt-[3em]">
          ACA Navigator - Python dasturlash kursi
        </h1>

        <div className="relative mb-12">
          <img
            src={CarouselImage}
            alt="ACA Navigator"
            className="w-full h-[600px] object-cover rounded-lg"
          />
        </div>

        <p className="text-lg text-gray-700 mb-12 leading-relaxed">
          &quot;ACA Navigator&quot; loyihasini Armanistonning &quot;Armenian Code Academy&quot; ta`lim markazi bilan birgalikda amalga oshiriladi.
        </p>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Loyiha haqida
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <DocumentCard>
              Loyiha ishtirokchilari quyidagi bilimlarga ega bo`ladilar o`rganadilar? Ishtirokchilarga nega Python bu qadar mashhur va u bilan bog`liq qanday talab qilinadigan kasblar mavjudligini haqida tushuncha va ma`lumotlar beriladi.
            </DocumentCard>
            <DocumentCard>
              Python asoslari bilan tanishadilar va eng mashhur dasturlash tillaridan birida dasturlash! Birinchi kodlarini yozib, nazariyani amaliyotda mustahkamlash!
            </DocumentCard>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            O`rganish modullari
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
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Hamkorlik
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <DocumentCard>
              Loyiha Armanistonning &quot;Armenian Code Academy&quot; ta`lim markazi bilan birgalikda amalga oshiriladi. Bu xalqaro hamkorlik orqali sifatli ta`lim imkoniyatlari yaratiladi.
            </DocumentCard>
            <DocumentCard>
              Hamkorlik doirasida zamonaviy dasturlash metodlari, amaliy tajriba va xalqaro standartlar asosida ta`lim beriladi.
            </DocumentCard>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Karyera imkoniyatlari
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <DocumentCard>
              Python dasturlash tili hozirgi kunda eng mashhur va talab qilinadigan dasturlash tillaridan biri hisoblanadi. Uning yordamida turli sohalarda ishlash imkoniyati mavjud.
            </DocumentCard>
            <DocumentCard>
              Kursni tugatgandan so`ng talabalar samarali rezyume yaratish va ish beruvchilarni o`ziga jalb qilish ko`nikmalariga ega bo`ladilar.
            </DocumentCard>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-[32px] font-bold text-gray-900 mb-8 mt-[80px]">
              Kurs statistikasi
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
