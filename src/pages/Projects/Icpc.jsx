import "../../index.css";
import { ChevronRight } from "react-feather";
import PropTypes from "prop-types";
// import CarouselImage from "../../assets/carousel.jpg";
import { rightIcon } from "../../assets/icons/icon";
import HomeIcon from "../../assets/home-icon.svg";
import CarouselImage from "../../assets/images/projects/10.jpg";
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
      <span className="text-gray-900">ICPC - Xalqaro talabalar dasturlash musobaqasi</span>
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

const StageCard = ({ title, description, icon, location, participants }) => (
  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-blue-200">
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white text-xl font-bold">{icon}</span>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <div className="bg-blue-100 rounded-lg p-3">
          <p className="text-blue-800 text-sm font-medium">{location}</p>
          <p className="text-blue-700 text-xs mt-1">{participants}</p>
        </div>
      </div>
    </div>
  </div>
);

StageCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  participants: PropTypes.string.isRequired,
};

export default function Icpc() {

  const metrics = [
    {
      icon: UsersGroup,
      value: 50000,
      label: "Qatnashuvchilar",
    },
    {
      icon: StickerAdd,
      value: 100,
      label: "Mamlakatlar",
    },
    {
      icon: UserLoad,
      value: 1970,
      label: "Boshlangan yili",
    },
    {
      icon: UserVerify,
      value: 4,
      label: "Bosqichlar",
    },
    {
      icon: UserDelete,
      value: 0,
      label: "G`oliblar",
    },
    {
      icon: MoneyBag,
      value: 5,
      label: "Soat",
    },
    {
      icon: Document,
      value: 10,
      label: "Masalalar",
    },
  ];

  const stages = [
    {
      title: "Hududiy bosqich",
      description: "Har bir hududda o`tkazilib, mahalliy iqtidorlar aniqlanadi. Ushbu bosqichda jamoalar Respublika bosqichiga yo`llanma uchun kurashadi.",
      icon: "🏆",
      location: "Mahalliy hududlar",
      participants: "Barcha jamoalar"
    },
    {
      title: "Respublika bosqichi",
      description: "Hududiy bosqich g`oliblari mamlakat miqyosidagi eng kuchli jamoalarni aniqlash uchun bellashadi. Ushbu bosqichda yuqori o`rinlarni egallagan jamoalar keyingi bosqichga yo`llanma oladi.",
      icon: "👑",
      location: "Toshkent",
      participants: "Hududiy g`oliblar"
    },
    {
      title: "Yarim final",
      description: "Yarim final musobaqasi Qozog`istonning Astana shahrida o`tkaziladi. O`zbekistondan 15-20 ta jamoa qatnashish uchun taklif etiladi.",
      icon: "🌍",
      location: "Astana, Qozog`iston",
      participants: "15-20 jamoa"
    },
    {
      title: "Final",
      description: "Yarim finalda yuqori natija ko`rsatgan jamoalar dunyoning eng kuchli dasturchi jamoalari bilan bellashish uchun jahon finaliga yo`llanma oladi.",
      icon: "🏅",
      location: "Jahon finali",
      participants: "Eng kuchli jamoalar"
    },
  ];

  const goals = [
    {
      title: "Jamoaviy ishlash",
      description: "Jamoaviy ishlash ko`nikmalarini rivojlantirish",
      icon: "🤝"
    },
    {
      title: "Qiziqishni oshirish",
      description: "Talabalar orasida algoritmlar va dasturlashga qiziqishni oshirish",
      icon: "📈"
    },
    {
      title: "Tayyorgarlik",
      description: "Real muhandislik muammolarini hal qilish uchun talabalarga tayyorgarlik ko`rish imkoniyati",
      icon: "⚙️"
    },
  ];

  return (
    <div className="">
      <div className="max-w-[1230px] w-full my-0 mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumb />

        <h1 className="text-[32px] font-bold text-gray-900 mb-8 mt-[80px]">
          ICPC - Xalqaro talabalar dasturlash musobaqasi
        </h1>

        <div className="relative mb-12">
          <img
            src={CarouselImage}
            alt="ICPC Contest"
            className="w-full h-[600px] object-cover rounded-lg"
          />
        </div>

        <p className="text-lg text-gray-700 mb-12 leading-relaxed">
          ICPC (International Collegiate Programming Contest) — bu har yili talabalar o`rtasida tashkil etiladigan dunyodagi eng yirik va nufuzli sport dasturlash bo`yicha xalqaro olimpiada bo`lib, 1970-yildan beri o`tkazib kelinmoqda. Mazkur olimpiada butun dunyo bo`ylab minglab jamoalarni birlashtiradi.
        </p>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Olimpiada maqsadlari
          </h2>

          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
            {goals.map((goal, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-purple-200">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xl font-bold">{goal.icon}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{goal.title}</h3>
                    <p className="text-gray-600 text-sm">{goal.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Musobaqa formati
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <DocumentCard>
              Jamoa tarkibi: 3 nafar talaba va bir nafar murabbiy. Jamoalar bir kompyuterda 5 soat ichida bir necha algoritmik masalalarni yechishlari kerak bo`ladi.
            </DocumentCard>
            <DocumentCard>
              Masalalar muvaffaqiyatli yechish uchun qatnashchilardan chuqur matematik bilim, algoritmik tafakkur va dasturlash ko`nikmalari talab etiladi.
            </DocumentCard>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Musobaqa bosqichlari
          </h2>

          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
            {stages.map((stage, index) => (
              <StageCard
                key={index}
                title={stage.title}
                description={stage.description}
                icon={stage.icon}
                location={stage.location}
                participants={stage.participants}
              />
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Olimpiadaning ahamiyati
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <DocumentCard>
              ICPC Google, IBM, Microsoft kabi yirik IT-kompaniyalar tomonidan qo`llab-quvvatlanadi. Bu olimpiada dunyodagi eng nufuzli dasturlash musobaqalaridan biri hisoblanadi.
            </DocumentCard>
            <DocumentCard>
              ICPC olimpiadasida qatnashish nufuzli yutuq hisoblanadi va kelajakdagi karyera uchun keng imkoniyatlar ochadi. Bu talabalar uchun xalqaro darajada o`z qobiliyatlarini ko`rsatish imkoniyati.
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
