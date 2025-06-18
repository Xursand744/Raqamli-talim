import talent from "../../assets/images/projects/talent_2.jpg";
import "swiper/css";
import PropTypes from "prop-types";
import { rightIcon } from "../../assets/icons/icon";
import { RegionsMap } from "../../components/RegionMap";
import { useState } from "react";
import { regionsPathArray } from "../../components/mapArray";
import RTRM from "../../assets/images/RTRM.svg";

// Courses data
const courses = [
    { id: 1, title: "Axborot texnologiyalari (IT)" },
    { id: 2, title: "Chet tillari" },
    // { id: 3, title: "Shaxsiy rivojlanish va biznes ko'nikmalari" },
    { id: 4, title: "Zamonaviy amaliy kasblar" },
    // { id: 5, title: "Davlat xizmatlaridan foydalanish" },
  ];

const togaraklar = [
    { id: 1, title: "Shaxmat" },
    { id: 2, title: "Kitobxonlik" },
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
  <div className="group p-6 rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-lg cursor-pointer transition-all duration-300 bg-white w-[378px]">
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
  <div className="max-w-[1230px] mx-auto px-4  bg-gradient-to-b from-gray-100 to-gray-50 my-8 p-6">
    <div className="max-w-3xl mx-auto text-center mb-16">
      <h2 className="text-4xl font-bold mb-6 text-gray-900">
        Yo'nalishlar
      </h2>
      <p className="text-gray-600 text-lg leading-relaxed">
        Loyihada yosh chegarasi mavjud emas barcha o'qish istagida bo'lganlar
        uchun. Loyiha doirasida yoshlar 5 ta yo'nalish bo'yicha dunyoning
        yetakchi mentorlaridan bilim olishlari mumkin bo'ladi.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      {courses.map((course) => (
        <CourseCard key={course.id} title={course.title} />
      ))}
    </div>

    <div className="max-w-3xl mx-auto text-center my-16">
      <h2 className="text-4xl font-bold mb-6 text-gray-900">
        To'garaklar
      </h2>
    </div>

    <div className="flex flex-wrap gap-8 justify-center items-center">
      {togaraklar.map((course) => (
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
        IT Shaharcha
      </h1>
    </div>

    <div className="flex flex-col items-center">
      <img
        src={talent}
        className="rounded-2xl w-full shadow-xl hover:shadow-2xl transition-shadow duration-300"
        alt="IT Shaharcha Project"
      />
      <h2 className="pt-10 pb-10 font-semibold text-xl text-gray-700 text-center max-w-3xl">
        &quot;IT shaharcha&quot; – bu nafaqat ta'lim, balki raqamli ekotizim yaratishga yo'naltirilgan yirik tashabbusdir
      </h2>
    </div>
  </div>
);

// Description Section Component
const DescriptionSection = () => (
  <div className="max-w-[1230px] mx-auto">
    <p className="text-lg text-gray-700 leading-relaxed mx-auto">
      &quot;IT shaharcha&quot; dasturi O'zbekistonning 13 ta chekka tumani va 1 ta shahrida tashkil etiladigan loyiha bo'lib, yoshlarni raqamli texnologiyalar, xorijiy tillar va zamonaviy kasblarga bepul o'qitish uchun yaratilgan muhim tashabbusdir. Ushbu loyiha O'zbekiston Respublikasi Prezidenti tomonidan 2024-yil 15-maydagi PQ-178-son qaror asosida tasdiqlangan bo'lib, hududlarda innovatsion ta'lim muhitini shakllantirishga yo'naltirilgan.
      Davlat tomonidan dastur doirasida o'quvchilarni doimiy rag'batlantirish hamda yuqori malakali mutaxassis va mentorlarni jalb qilish rejalashtirilgan. &quot;IT shaharcha&quot;lar yoshlarga zamonaviy kasblarni o'rganish va global IT-bozorda o'z o'rnini topish uchun keng imkoniyatlar taqdim etadi.
      Zamonaviy infratuzilmaga ega &quot;IT-shaharcha&quot;lar yoshlarni xalqaro mehnat bozoriga tayyorlash, ish bilan ta'minlash va IT-xizmatlar eksportini rivojlantirishga xizmat qiladi. Loyiha doirasida yaratilayotgan sharoitlar tufayli hududlarda texnologik innovatsiyalar tezkor rivojlanib, yoshlar uchun yangi imkoniyatlar ochiladi.
    </p>
  </div>
);

// Map Section Component
const MapSection = () => {
  const [selectedRegion, setSelectedRegion] = useState(null);

  const handleRegionClick = (regionId) => {
    if (regionId === null) {
      // Сброс выбора
      setSelectedRegion(null);
    } else {
      // Выбор нового региона
      const region = regionsPathArray.find(r => r.id === regionId);
      if (region) {
        setSelectedRegion(region);
      }
    }
  };

  return (
    <div className="max-w-[1230px] mx-auto px-4  bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">
          IT Shaharcha joylashgan hududlar
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          IT Shaharcha dasturi O'zbekistonning 13 ta chekka tumani va 1 ta shahrida tashkil etiladi. 
          Har bir hududda yoshlar uchun zamonaviy ta'lim imkoniyatlari yaratiladi.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 items-stretch relative">
        {/* SVG фон под картой */}
        {/* <img src={RTRM} alt="background" className="absolute left-0 top-0 w-2/3 h-full opacity-10 pointer-events-none z-0" /> */}
        {/* Карта */}
        <div className="flex-1 flex items-center justify-center min-h-[400px] relative z-10">
          <div className="relative w-full max-w-xl">
            <RegionsMap
              width="100%"
              height="500"
              viewBox="0 0 1000 700"
              defaultFillColor="#e5e7eb"
              selectedFillColor="#043b87"
              hoverFillColor="#7b7f94"
              handleClick={handleRegionClick}
              className="w-full h-auto"
            />
            {selectedRegion && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 px-6 py-2 rounded-full shadow text-blue-900 font-bold text-lg">
                {selectedRegion.name}
              </div>
            )}
          </div>
        </div>
        {/* Панель */}
        <div className="flex-1 flex items-center justify-center relative z-10">
          <div className="bg-white border rounded-xl shadow-lg p-8 max-w-xl w-full" style={{ color: '#043b87', position: 'relative' }}>
            <h3 className="font-bold text-lg mb-2 uppercase">Hududiy ma'lumotlar</h3>
            {selectedRegion ? (
              <>
                <h4 className="font-semibold text-xs mb-4 uppercase">{selectedRegion.name}</h4>
                <div className="mb-4 space-y-2 text-black">
                  <div><span className="font-semibold">Manzil:</span> <span className="font-normal">{selectedRegion.address || '-'}</span>
                    {selectedRegion.address && (
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(selectedRegion.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold hover:bg-blue-200 transition"
                      >
                        Xaritada ochish
                      </a>
                    )}
                  </div>
                  <div><span className="font-semibold">Maydon:</span> <span className="font-normal">{selectedRegion.area || '-'}</span></div>
                  <div><span className="font-semibold">Ta'lim yo'nalishlari:</span> <span className="font-normal">{selectedRegion.directions || '-'}</span></div>
                  <div><span className="font-semibold">Mentorlar soni:</span> <span className="font-normal">{selectedRegion.mentorsCount ?? '-'}</span></div>
                  <div><span className="font-semibold">Sinfxonalar soni:</span> <span className="font-normal">{selectedRegion.classroomsCount ?? '-'}</span></div>
                  <div><span className="font-semibold">O'quvchilar soni:</span> <span className="font-normal">{selectedRegion.studentsCount ?? '-'}</span></div>
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500 text-lg">Hududni tanlang</p>
                <p className="text-gray-400 text-sm mt-2">Ma'lumotlarni ko'rish uchun xaritadan hududni bosing</p>
              </div>
            )}
            {/* SVG фон сбоку */}
            <img src={RTRM} alt="background" className="absolute right-0 bottom-0 w-1/2 h-1/2 opacity-10 pointer-events-none" />
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
      <MapSection />
    </div>
  );
};

export default ItVillage;
