import "../../index.css";
import { ChevronRight } from "react-feather";
import PropTypes from "prop-types";
import CarouselImage from "../../assets/images/projects/7.jpg";
import { BackgroundIcon, rightIcon } from "../../assets/icons/icon";
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
      <span className="text-gray-900">ICT4Girls - Sport dasturlash olimpiadasi</span>
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

const StageCard = ({ title, description, icon, participants }) => (
  <div className="bg-gradient-to-br from-pink-50 to-purple-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-pink-200">
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center">
          <span className="text-white text-xl font-bold">{icon}</span>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <div className="bg-pink-100 rounded-lg p-3">
          <p className="text-pink-800 text-sm font-medium">{participants}</p>
        </div>
      </div>
    </div>
  </div>
);

StageCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  participants: PropTypes.string.isRequired,
};

export default function Ict() {
  const navigate = useNavigate();

  const metrics = [
    {
      icon: UsersGroup,
      value: 500,
      label: "Qatnashuvchilar",
    },
    {
      icon: StickerAdd,
      value: 14,
      label: "Hududlar",
    },
    {
      icon: UserLoad,
      value: 20,
      label: "Yosh chegarasi",
    },
    {
      icon: UserVerify,
      value: 2,
      label: "Bosqichlar",
    },
    {
      icon: UserDelete,
      value: 0,
      label: "G'oliblar",
    },
    {
      icon: MoneyBag,
      value: 100,
      label: "Sovg'alar",
    },
    {
      icon: Document,
      value: 50,
      label: "Masalalar",
    },
  ];

  const stages = [
    {
      title: "Hududiy bosqich",
      description: "Barcha hududlar – 12 viloyat, Qoraqalpog'iston Respublikasi va Toshkent ishtirok etuvchi qizlar berilgan masalalarga yechim ishlab, ball to'playdi.",
      icon: "🏆",
      participants: "12 viloyat + Qoraqalpog'iston + Toshkent"
    },
    {
      title: "Respublika bosqichi",
      description: "Hududiy bosqichda eng yuqori natija ko'rsatgan qizlar Respublika bosqichiga yo'llanma qo'lga kiritadi.",
      icon: "👑",
      participants: "Eng yaxshi natijalar"
    },
    {
      title: "G'oliblar",
      description: "Respublika bosqichida eng yuqori natija ko'rsatgan qizlar ICT4Girls olimpiadasi g'olibi deb topilib, qimmatbaho sovg'alar bilan taqdirlanadi.",
      icon: "💎",
      participants: "Qimmatbaho sovg'alar"
    },
  ];

  return (
    <div className="">
      <div className="max-w-[1230px] w-full my-0 mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumb />

        <h1 className="text-[32px] font-bold text-gray-900 mb-8 mt-[80px]">
          ICT4Girls - Sport dasturlash olimpiadasi
        </h1>

        <div className="relative mb-12">
          <img
            src={CarouselImage}
            alt="ICT4Girls Olympiad"
            className="w-full h-[600px] object-cover rounded-lg"
          />
        </div>

        <p className="text-lg text-gray-700 mb-12 leading-relaxed">
          &quot;ICT4Girls&quot; - 20 yoshgacha bo'lgan qizlar orasida sport dasturlash bo'yicha hududiy va respublika bosqichlarida bo'lib o'tadigan olimpiada.
        </p>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Olimpiada haqida
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <DocumentCard>
              O'zbekistoning turli hududlarida istiqomat qiluvchi o'quvchi qizlar tomonidan &quot;ICT4Girls&quot; olimpiadasida ishtirok etish uchun hamda birlamchi saralashdan o'tish ariza yo'llanadi.
            </DocumentCard>
            <DocumentCard>
              &quot;ICT4Girls&quot; olimpiadasining hududiy bosqichi barcha hududlar – 12 viloyat, Qoraqalpog'iston Respublikasi va Toshkent ishtirok etuvchi qizlar berilgan masalalarga yechim ishlab, ball to'playi.
            </DocumentCard>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Olimpiada bosqichlari
          </h2>

          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
            {stages.map((stage, index) => (
              <StageCard
                key={index}
                title={stage.title}
                description={stage.description}
                icon={stage.icon}
                participants={stage.participants}
              />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Qatnashish shartlari
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <DocumentCard>
              Olimpiadada faqat 20 yoshgacha bo'lgan qizlar ishtirok etishi mumkin. Barcha qatnashuvchilar sport dasturlash bo'yicha bilim va ko'nikmalarini ko'rsatish imkoniyatiga ega.
            </DocumentCard>
            <DocumentCard>
              Hududiy bosqichda eng yuqori natija ko'rsatgan qizlar Respublika bosqichiga yo'llanma qo'lga kiritadi va keyingi bosqichda raqobat qilish huquqiga ega bo'ladi.
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
