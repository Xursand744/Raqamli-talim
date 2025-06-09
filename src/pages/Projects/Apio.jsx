import "../../index.css";
import { ChevronRight } from "react-feather";
import PropTypes from "prop-types";
// import CarouselImage from "../../assets/carousel.jpg";
import { rightIcon } from "../../assets/icons/icon";
import HomeIcon from "../../assets/home-icon.svg";
import CarouselImage from "../../assets/images/projects/9.png";
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
      <span className="text-gray-900">APIO - Osiyo-Tinch okeani informatika olimpiadasi</span>
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

const SkillCard = ({ title, description, icon, level }) => (
  <div className="bg-gradient-to-br from-orange-50 to-red-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-orange-200">
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
          <span className="text-white text-xl font-bold">{icon}</span>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <div className="bg-orange-100 rounded-lg p-3">
          <p className="text-orange-800 text-sm font-medium">{level}</p>
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
  const navigate = useNavigate();

  const metrics = [
    {
      icon: UsersGroup,
      value: 300,
      label: "Qatnashuvchilar",
    },
    {
      icon: StickerAdd,
      value: 25,
      label: "Mamlakatlar",
    },
    {
      icon: UserLoad,
      value: 20,
      label: "Yosh chegarasi",
    },
    {
      icon: UserVerify,
      value: 1,
      label: "Bosqich",
    },
    {
      icon: UserDelete,
      value: 0,
      label: "G&apos;oliblar",
    },
    {
      icon: MoneyBag,
      value: 100,
      label: "Masalalar",
    },
    {
      icon: Document,
      value: 5,
      label: "Soat",
    },
  ];

  const skills = [
    {
      title: "Algoritmik fikrlash",
      description: "Murakkab muammolarni hal qilish uchun algoritmik yondashuvlar ishlab chiqish va optimallashtirish.",
      icon: "🧠",
      level: "Yuqori daraja"
    },
    {
      title: "Mantiqiy fikrlash",
      description: "Muammolarni tahlil qilish, mantiqiy xulosa chiqarish va samarali yechimlar topish.",
      icon: "⚡",
      level: "Kritik ko&apos;nikma"
    },
    {
      title: "Ijodiy yondashuv",
      description: "Muammolarni yangi va innovatsion usullar bilan hal qilish, ijodiy fikrlashni rivojlantirish.",
      icon: "💡",
      level: "Ixtirochilik"
    },
  ];

  return (
    <div className="">
      <div className="max-w-[1230px] w-full my-0 mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumb />

        <h1 className="text-[32px] font-bold text-gray-900 mb-8 mt-[80px]">
          APIO - Osiyo-Tinch okeani informatika olimpiadasi
        </h1>

        <div className="relative mb-12">
          <img
            src={CarouselImage}
            alt="APIO Olympiad"
            className="w-full h-[600px] object-cover rounded-lg"
          />
        </div>

        <p className="text-lg text-gray-700 mb-12 leading-relaxed">
          APIO – bu yuqori algoritmik bilimlarga ega yoshlar uchun mo&apos;ljallangan onlayn olimpiada bo&apos;lib, u ko&apos;plab davlatlar uchun sport dasturlash olamidagi eng nufuzli xalqaro musobaqa – Xalqaro informatika olimpiadasi (International Olympiad in Informatics, IOI) uchun tayyorgarlikning muhim bosqichi hisoblanadi.
        </p>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Olimpiada haqida
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <DocumentCard>
              APIO Osiyo-Tinch okeani mintaqasidagi eng nufuzli informatika olimpiadalaridan biri hisoblanadi. U yuqori darajadagi algoritmik bilimlarga ega yoshlar uchun mo&apos;ljallangan.
            </DocumentCard>
            <DocumentCard>
              Bu turdagi musobaqalar yosh avlodga mantiqiy va algoritmik fikrlash, ijodiy yondashuv va murakkab muammolarni hal qilish bo&apos;yicha ko&apos;nikmalarini rivojlantirishga yordam beradi.
            </DocumentCard>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Rivojlanadigan ko&apos;nikmalar
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
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            IOI tayyorgarligi
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <DocumentCard>
              APIO Xalqaro informatika olimpiadasi (IOI) uchun tayyorgarlikning muhim bosqichi hisoblanadi. Bu olimpiada orqali talabalar xalqaro darajadagi musobaqalarga tayyorgarlik ko&apos;rishadi.
            </DocumentCard>
            <DocumentCard>
              IOI - bu sport dasturlash olamidagi eng nufuzli xalqaro musobaqa bo&apos;lib, unda dunyoning eng yaxshi yosh dasturchilari ishtirok etadi.
            </DocumentCard>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Qatnashish shartlari
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <DocumentCard>
              Olimpiadada faqat yuqori algoritmik bilimlarga ega yoshlar ishtirok etishi mumkin. Qatnashuvchilar murakkab dasturlash muammolarini hal qilish qobiliyatiga ega bo&apos;lishlari kerak.
            </DocumentCard>
            <DocumentCard>
              Musobaqa onlayn formatda o&apos;tkaziladi va 5 soat davom etadi. Qatnashuvchilar berilgan masalalarga yechim ishlab chiqishadi.
            </DocumentCard>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-[32px] font-bold text-gray-900 mb-8 mt-[80px]">
              Olimpiada statistikasi
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
