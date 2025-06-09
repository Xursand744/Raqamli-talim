import "../../index.css";
import { ChevronRight } from "react-feather";
import PropTypes from "prop-types";
import CarouselImage from "../../assets/images/projects/6.jpg";
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
      <span className="text-gray-900">Job&Edu Fest - IT mehnat va ta'lim yarmarkasi</span>
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

const PresentationCard = ({ title, speakers }) => (
  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-blue-200">
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white text-xl font-bold">📊</span>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{speakers}</p>
      </div>
    </div>
  </div>
);

PresentationCard.propTypes = {
  title: PropTypes.string.isRequired,
  speakers: PropTypes.string.isRequired,
};

export default function JobEdu() {
  const navigate = useNavigate();

  const metrics = [
    {
      icon: UsersGroup,
      value: 1200,
      label: "Ro'yxatdan o'tganlar",
    },
    {
      icon: StickerAdd,
      value: 100,
      label: "Kompaniyalar",
    },
    {
      icon: UserLoad,
      value: 1000,
      label: "Bo'sh ish o'rinlari",
    },
    {
      icon: UserVerify,
      value: 800,
      label: "Amaliyot o'rinlari",
    },
    {
      icon: UserDelete,
      value: 700,
      label: "Maktab bitiruvchilari",
    },
    {
      icon: MoneyBag,
      value: 14,
      label: "May oyi",
    },
    {
      icon: Document,
      value: 6,
      label: "Taqdimotlar",
    },
  ];

  const presentations = [
    {
      title: "School 21 raqamli texnologiyalar maktabida yaratilayotgan imkoniyatlar va shart-sharoitlar",
      speakers: "Temur Jalilov va Adelye Abdullina, School 21 xodimlari",
    },
    {
      title: "Startaplar uchun foydali grantlar, akseleratorlar va inkubatorlar",
      speakers: "Muhammadsaid Mamasaidov, Tahrirchi loyihasi asoschisi",
    },
    {
      title: "Click kompaniyasida qanday ko'nikma va fazilatlarga ega kadrlar qadrlanadi?",
      speakers: "Elina Umanova va Nikolay Zadorojniy, Click kompaniyasida HR mutaxassislar",
    },
    {
      title: "Dasturlashdan biznesgacha: AI yordamida tezkor MVP ishlab chiqish",
      speakers: "Munira Begmuratova, Toptal kompaniyasida Senior dasturchi",
    },
    {
      title: "Tech meets talents",
      speakers: "Komiljon Ganiyev, School 21 xodimi",
    },
    {
      title: "Xalqaro sertifikatlarning IT karyeradagi o'rni",
      speakers: "Mirabbos Anvarov, Raqamli ta'limni rivojlantirish markazi, bo'lim boshlig'i",
    },
    {
      title: "Startaplarni boshlash jarayonida eng keng tarqalgan xatolar",
      speakers: "Ilhom Aliyev, UEnter innovatsion markazida direktor o'rinbosari",
    },
  ];

  return (
    <div className="">
      <div className="max-w-[1230px] w-full my-0 mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumb />

        <h1 className="text-[32px] font-bold text-gray-900 mb-8 mt-[80px]">
          Job&Edu Fest - IT mehnat va ta'lim yarmarkasi
        </h1>

        <div className="relative mb-12">
          <img
            src={CarouselImage}
            alt="Job&Edu Fest"
            className="w-full h-[600px] object-cover rounded-lg"
          />
        </div>

        <p className="text-lg text-gray-700 mb-12 leading-relaxed">
          Yarmarkaning asosiy maqsadi — yoshlarni IT bozoridagi real imkoniyatlar bilan tanishtirish hamda ta'lim va mehnat o'rtasida samarali integratsiyani yo'lga qo'yishdir.
        </p>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Yarmarka haqida
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <DocumentCard>
              Job&Edu Fest - IT sohasidagi eng yirik mehnat va ta'lim yarmarkasi joriy yilning 14-may kuni Toshkent shahridagi Inha universiteti va School 21 majmuasida tashkil etildi.
            </DocumentCard>
            <DocumentCard>
              Ko'rgazmani Raqamli texnologiyalar vaziri o'rinbosari Rustam Karimjonov ochib berib, IT bozoridagi dolzarb talablar, ish topish imkoniyatlari va rezyume tayyorlashda nimalarga e'tibor qaratish kerakligi haqida so'z yuritdi.
            </DocumentCard>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Ishtirokchilar va imkoniyatlar
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <DocumentCard>
              Tashkil etilgan ushbu mehnat va ta'lim yarmarkasida 100 ga yaqin IT sohasida faoliyat olib boruvchi kompaniya va ta'lim tashkilotlari o'zlarining bo'sh ish o'rinlari va ta'lim sohasidagi imkoniyatlari bilan ishtirok etdi.
            </DocumentCard>
            <DocumentCard>
              Mahalliy va xalqaro tashkilotlar jami 1000 dan ziyod bo'sh ish o'rinlari bilan tashrif buyurdi. Shuningdek, tadbirda ishtirok etgan tashkilotlar tomonidan amaliyot izlab kelgan yoshlar uchun ham qariyb 800 ta amaliyot o'rni ham taklif etildi.
            </DocumentCard>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Qatnashuvchilar
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <DocumentCard>
              Ko'rgazmada ishtirok etish uchun ariza bergan va ro'yxatdan o'tgan yoshlar soni 1200 nafarga yetdi. Ular orasida oliy ta'lim muassasalari talabalari va birituvchilar, shuningdek, IT sohasiga qiziqadigan va ushbu sohada faoliyat yuritmoqchi bo'lgan yoshlar mavjud.
            </DocumentCard>
            <DocumentCard>
              Bundan tashqari, IT'ga qiziqqan 700 nafar maktab bitiruvchi sinf o'quvchilari ham yarmarkaga tashrif buyurib, ta'lim tashkilotlari taqdim etayotgan imkoniyatlar hamda IT mehnat bozoridagi talablar haqida ma'lumotga ega bo'ldi.
            </DocumentCard>
          </div>
        </section>

        <section className="py-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Taqdimotlar
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {presentations.map((presentation, index) => (
              <PresentationCard
                key={index}
                title={presentation.title}
                speakers={presentation.speakers}
              />
            ))}
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-[32px] font-bold text-gray-900 mb-8 mt-[80px]">
              Yarmarka statistikasi
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
