import "../../index.css";
import { ChevronRight } from "react-feather";
import PropTypes from "prop-types";
import { rightIcon } from "../../assets/icons/icon";
import HomeIcon from "../../assets/home-icon.svg";
import CarouselImage from "../../assets/projects/istedod2.jpg";
import {
  Document,
  MoneyBag,
  StickerAdd,
  UserDelete,
  UserLoad,
  UsersGroup,
  UserVerify,
} from "../../assets/it-talents-images";

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
      <span className="text-gray-900">IT-sertifikatlar - Xalqaro IT-sertifikatlar uchun kompensatsiya</span>
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
  const metrics = [
    {
      icon: UsersGroup,
      value: 1000,
      label: "Arizachilar",
    },
    {
      icon: StickerAdd,
      value: 60,
      label: "Kompensatsiya %",
    },
    {
      icon: UserLoad,
      value: 14,
      label: "Minimal yosh",
    },
    {
      icon: UserVerify,
      value: 30,
      label: "Maksimal yosh",
    },
    {
      icon: UserDelete,
      value: 100,
      label: "B2+ kompensatsiya %",
    },
    {
      icon: MoneyBag,
      value: 2024,
      label: "Boshlangan yili",
    },
    {
      icon: Document,
      value: 4,
      label: "Kerakli hujjatlar",
    },
  ];

  const requirements = [
    {
      title: "Yosh chegarasi",
      description: "Loyihada qatnashish uchun yosh chegarasi belgilangan. Faqat belgilangan yosh oralig'idagi fuqarolar ariza bera oladi.",
      icon: "📅",
      requirement: "14-30 yosh oralig'i"
    },
    {
      title: "Fuqarolik",
      description: "Loyiha faqat O'zbekiston Respublikasi fuqarolari uchun mo'ljallangan. Boshqa davlat fuqarolari qatnasha olmaydi.",
      icon: "🇺🇿",
      requirement: "O'zbekiston fuqarosi"
    },
    {
      title: "Ro'yxatdan o'tish",
      description: "Ariza berish uchun Yagona interaktiv davlat xizmatlari portal orqali ro'yxatdan o'tish majburiy.",
      icon: "💻",
      requirement: "my.gov.uz portalida ro'yxat"
    },
  ];

  const documents = [
    {
      title: "To'lov kvitansiyasi",
      description: "Xalqaro IT-sertifikatni olish xarajatlarini tasdiqlovchi to'lov kvitansiyasi nusxasi (PDF shaklida)",
      icon: "💰"
    },
    {
      title: "Bank ma'lumotlari",
      description: "Kompensatsiya mablag'lari yo'naltiriladigan aktiv holatdagi milliy valyutadagi bank plastik kartasiga oid ma'lumotlar",
      icon: "💳"
    },
    {
      title: "Ingliz tili sertifikati",
      description: "B2 va undan yuqori darajaga egaligini tasdiqlovchi xalqaro sertifikat nusxasi (PDF shaklida)",
      icon: "📜"
    },
    {
      title: "O'quv kursi hujjati",
      description: "IT-sertifikatni olish uchun o'quv kursini tamomlaganligini tasdiqlovchi hujjatlar nusxasi (PDF shaklida)",
      icon: "🎓"
    },
  ];

  return (
    <div className="">
      <div className="max-w-[1230px] w-full my-0 mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumb />

        <h1 className="text-[32px] font-bold text-gray-900 dark:text-white mb-8 mt-[80px] transition-colors duration-200">
          IT-sertifikatlar - Xalqaro IT-sertifikatlar uchun kompensatsiya
        </h1>

        <div className="relative mb-12">
          <img
            src={CarouselImage}
            alt="IT Certificates Project"
            className="w-full h-[600px] object-cover rounded-lg"
          />
        </div>

        <p className="text-lg text-gray-700 dark:text-gray-200 mb-12 leading-relaxed transition-colors duration-200">
          Loyiha IT sohasidagi iqtidorli yoshlar haqida ma&apos;lumotlarni birlashtirish maqsadida yaratilgan. Loyiha doirasida 2024-yil 1-mart kunidan boshlab yoshlarning xalqaro IT-sertifikatlar uchun sarf qilgan xarajatlarining 60% gacha hamda B2 va undan yuqori darajadagi sertifikatga ega yoshlarning xalqaro Professional IT-sertifikatlar uchun sarf qilgan xarajatlarini 100% qismi qoplab berilishi tartibi joriy etilgan.
        </p>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 transition-colors duration-200">
            Qatnashish shartlari
          </h2>

          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
            {requirements.map((req, index) => (
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
            Kompensatsiya turlari
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <DocumentCard>
              <strong>Oddiy kompensatsiya:</strong> Xalqaro IT-sertifikatlar uchun sarf qilgan xarajatlarining 60% gacha qoplab beriladi. Bu turdagi kompensatsiya barcha qatnashuvchilar uchun mavjud.
            </DocumentCard>
            <DocumentCard>
              <strong>To'liq kompensatsiya:</strong> B2 va undan yuqori darajadagi ingliz tili sertifikatiga ega yoshlar uchun Professional IT-sertifikatlar xarajatlarining 100% qismi qoplab beriladi.
            </DocumentCard>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Kerakli hujjatlar
          </h2>

          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
            {documents.map((doc, index) => (
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
            Ariza berish tartibi
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <DocumentCard>
              Ushbu imkoniyatga ega bo'lish istagidagi o'n to'rt yoshga to'lgan va o'ttiz yoshdan oshmagan O'zbekiston Respublikasining fuqarolari Yagona interaktiv davlat xizmatlari portal orqali ro'yxatdan o'tgan holda ariza topshirishlari mumkin.
            </DocumentCard>
            <DocumentCard>
              Ariza beruvchi xalqaro IT-sertifikatni olish uchun o'quv kursiga sarflagan xarajatlarni qoplash bo'yicha so'rovnoma to'ldirayotgan bo'lsa, xalqaro IT-sertifikatni olish uchun o'qiganligini va o'quv kursini tamomlaganligini tasdiqlovchi hujjatlar nusxasi (PDF shaklida) taqdim etilishi kerak.
            </DocumentCard>
          </div>
        </section>
      </div>
    </div>
  );
} 