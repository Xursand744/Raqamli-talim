import ItVillageImage from "../../assets/images/projects/LOGO_D.png";
import "swiper/css";
import PropTypes from "prop-types";
import { rightIcon } from "../../assets/icons/icon";
import { useTranslation } from "react-i18next";
import { BackgroundIcon } from "../../assets/icons/icon";
import Video from "../../assets/videos/Uzbekcoders.Uz.mp4";

// Courses data
const courses = [
    { id: 1, title: "Axborot texnologiyalari (IT)" },
    { id: 2, title: "Chet tillari" },
    { id: 3, title: "Shaxsiy rivojlanish va biznes ko‘nikmalari" },
    { id: 4, title: "Zamonaviy amaliy kasblar" },
    { id: 5, title: "Davlat xizmatlaridan foydalanish" },
  ];

// Reusable Button Component
const Button = ({ children, className = "", ...props }) => (
  <button 
    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg ${className}`} 
    {...props}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

// Course Card Component
const CourseCard = ({ title }) => (
  <div className="group p-6 rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-lg cursor-pointer transition-all duration-300 bg-white">
    <div className="w-4 h-4 rounded-full bg-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300"></div>
    <h3 className="font-medium text-lg text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
      {title}
    </h3>
  </div>
);

CourseCard.propTypes = {
  title: PropTypes.string.isRequired,
};

// Courses Section Component
const CoursesSection = () => (
  <div className="max-w-[1300px] mx-auto px-4 py-20 bg-gradient-to-b from-gray-50 to-white">
    <div className="max-w-3xl mx-auto text-center mb-16">
      <h2 className="text-4xl font-bold mb-6 text-gray-900">
        Yo&apos;nalishlar
      </h2>
      <p className="text-gray-600 text-lg leading-relaxed">
        Loyihada yosh chegarasi mavjud emas barcha o&apos;qish istagida bo&apos;lganlar
        uchun. Loyiha doirasida yoshlar 5 ta yo&apos;nalish bo&apos;yicha dunyoning
        yetakchi mentorlaridan bilim olishlari mumkin bo&apos;ladi.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {courses.map((course) => (
        <CourseCard key={course.id} title={course.title} />
      ))}
    </div>
  </div>
);

// Decision Card Component
const DecisionCard = ({ text }) => (
  <div className="group flex-1 p-8 rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300 bg-white">
    <p className="text-gray-800 text-lg leading-relaxed group-hover:text-blue-600 transition-colors duration-300">
      {text}
    </p>
    <div className="flex justify-end mt-6">
      <button className="p-3 rounded-full hover:bg-blue-50 transition-colors duration-300">
        <img src={rightIcon} width="24" height="24" alt="View more" className="group-hover:scale-110 transition-transform duration-300" />
      </button>
    </div>
  </div>
);

DecisionCard.propTypes = {
  text: PropTypes.string.isRequired,
};

// Hero Section Component
const HeroSection = () => (
  <div className="max-w-[1230px] mx-auto px-4">
    <div className="flex justify-center mt-24 mb-16">
      <h1 className="font-bold text-5xl md:text-6xl text-gray-900 max-w-3xl text-center leading-tight bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
        It Village
      </h1>
    </div>

    <div className="flex flex-col items-center">
      <img
        src={ItVillageImage}
        className="rounded-2xl w-full shadow-xl hover:shadow-2xl transition-shadow duration-300"
        alt="IT Village Project"
      />
      <h2 className="pt-10 pb-10 font-semibold text-xl text-gray-700 text-center max-w-3xl">
        &quot;IT shaharcha&quot; – bu nafaqat ta&apos;lim, balki raqamli ekotizim yaratishga yo&apos;naltirilgan yirik tashabbusdir
      </h2>
    </div>
  </div>
);

// Description Section Component
const DescriptionSection = () => (
  <div className="max-w-[1230px] mx-auto px-4 py-20 bg-gradient-to-b from-white to-gray-50">
    <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
      &quot;IT shaharcha&quot; dasturi O&apos;zbekistonning 14 ta chekka tumani va 1 ta shahrida tashkil etiladigan loyiha bo&apos;lib, yoshlarni raqamli texnologiyalar, xorijiy tillar va zamonaviy kasblarga bepul o&apos;qitish uchun yaratilgan muhim tashabbusdir. Ushbu loyiha O&apos;zbekiston Respublikasi Prezidenti tomonidan 2024-yil 15-maydagi PQ-178-son qaror asosida tasdiqlangan bo&apos;lib, hududlarda innovatsion ta&apos;lim muhitini shakllantirishga yo&apos;naltirilgan.
      Davlat tomonidan dastur doirasida o&apos;quvchilarni doimiy rag&apos;batlantirish hamda yuqori malakali mutaxassis va mentorlarni jalb qilish rejalashtirilgan. &quot;IT shaharcha&quot;lar yoshlarga zamonaviy kasblarni o&apos;rganish va global IT-bozorda o&apos;z o&apos;rnini topish uchun keng imkoniyatlar taqdim etadi.
      Zamonaviy infratuzilmaga ega &quot;IT-shaharcha&quot;lar yoshlarni xalqaro mehnat bozoriga tayyorlash, ish bilan ta&apos;minlash va IT-xizmatlar eksportini rivojlantirishga xizmat qiladi. Loyiha doirasida yaratilayotgan sharoitlar tufayli hududlarda texnologik innovatsiyalar tezkor rivojlanib, yoshlar uchun yangi imkoniyatlar ochiladi.
    </p>
  </div>
);

// Video Section Component
const VideoSection = () => (
  <div className="max-w-[1230px] mx-auto px-4 py-20">
    <div className="flex justify-center">
      <div className="w-full max-w-3xl rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <video className="w-full" controls>
          <source src={Video} type="video/mp4" />
          <source src={Video} type="video/ogg" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </div>
);

// Decisions Section Component
const DecisionsSection = () => (
  <div className="max-w-[1230px] mx-auto px-4 py-20 bg-gradient-to-b from-gray-50 to-white">
    <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
      Dasturga oid qarorlar
    </h2>

    <div className="grid md:grid-cols-2 gap-8">
      <DecisionCard 
        text="Ma&apos;muriy islohotlar doirasida raqamli texnologiyalar sohasida davlat boshqaruvini samarali tashkil etish chora-tadbirlari to&apos;g&apos;risida&apos;gi PF-75-son farmoni"
      />
      <DecisionCard 
        text="Raqamli xizmatlar qamrovi va sifatini oshirish hamda soha, tarmoq va hududlarda raqamli transformatsiya qilish chora-tadbirlari to&apos;g&apos;risida&apos;gi PQ-182-son qarori"
      />
    </div>
  </div>
);

// Bottom Section Component
const BottomSection = () => {
  const { t } = useTranslation("global");
  
  return (
    <div className="bg-gradient-to-b from-[#F8F8F8] to-white w-full py-20">
      <div className="max-w-[1230px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-2/3">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              <div dangerouslySetInnerHTML={{ __html: t("one_million_uzbek_coders_title") }} />
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              <div dangerouslySetInnerHTML={{ __html: t("one_million_uzbek_coders_description") }} />
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <div dangerouslySetInnerHTML={{ __html: t("one_million_uzbek_coders_events") }} />
            </Button>
          </div>
          <div className="lg:w-1/3">
            <img src={BackgroundIcon} alt="Background Icon" className="w-full hover:scale-105 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Component
const ItVillage = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <DescriptionSection />
      <CoursesSection />
    </div>
  );
};

export default ItVillage;
