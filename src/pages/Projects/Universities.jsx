import { ProjectImage } from "../../assets";
import BreadCrumps from "../../components/BreadCrumps/BreadCrumps";
import UniversitiesStatistics from "../../components/Projects/UniversitiesStatistics";
import UzbekistanMap from "../../components/Projects/UzbekistanMap";
import univerImg from "../../assets/univer.png";
import inhaimg from "../../assets/inha.png";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import universitiesData from "../../data/universities.json";

function Universities() {
  const [universities, setUniversities] = useState([]);
  const [filteredUniversities, setFilteredUniversities] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("Barchasi");
  const [selectedSpecialization, setSelectedSpecialization] = useState("Barchasi");
  const [searchTerm, setSearchTerm] = useState("");

  const breadCrumps = [
    {
      link: "/projects",
      title: "Loyihalar",
    },
    {
      link: "/projects/universities",
      title: "Universitetlar",
    },
  ];

  console.log(universitiesData);

  // Очищаем данные от пустых записей и форматируем
  useEffect(() => {
    const cleanData = universitiesData
      .filter(uni => uni["OTM (Oliy ta'lim muassasasi nomi)"] && uni["OTM (Oliy ta'lim muassasasi nomi)"].trim() !== "")
      .map(uni => ({
        id: uni["T/r"] || Math.random().toString(),
        name: uni["OTM (Oliy ta'lim muassasasi nomi)"],
        region: uni["OTM joylashgan hudud"],
        website: uni["Veb-sayti"],
        telegram: uni["Telegram kanallar"],
        email: uni["Elektron pochta/exat manzili"],
        phone: uni["Bog'lanish uchun tel. raqam"],
        responsible: uni["OTMdan mas'ul ma'lumotlari"],
        specialization: uni["IT ga ixtisoslashgan\n/ixtisoslashmagan"],
        directions: uni["IT yo'nalish nomi"],
        admission: uni["Qabul 2024"]
      }));
    
    setUniversities(cleanData);
    setFilteredUniversities(cleanData);
  }, []);

  // Получаем уникальные регионы для фильтра
  const regions = ["Barchasi", ...new Set(universities.map(uni => uni.region).filter(Boolean))];
  const specializations = ["Barchasi", ...new Set(universities.map(uni => uni.specialization).filter(Boolean))];

  // Фильтрация
  useEffect(() => {
    let filtered = universities;

    console.log(filtered);

    // Фильтр по региону
    if (selectedRegion !== "Barchasi") {
      filtered = filtered.filter(uni => uni.region === selectedRegion);
    }

    // Фильтр по специализации
    if (selectedSpecialization !== "Barchasi") {
      filtered = filtered.filter(uni => uni.specialization === selectedSpecialization);
    }

    // Поиск по названию
    if (searchTerm) {
      filtered = filtered.filter(uni => 
        uni.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredUniversities(filtered);
  }, [universities, selectedRegion, selectedSpecialization, searchTerm]);

  const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
      <div className="border rounded-lg mb-4 overflow-hidden">
        <div
          className="flex justify-between items-center p-4 cursor-pointer"
          onClick={onClick}
        >
          <h3 className="font-medium text-gray-900">{question}</h3>
          <div
            className={`w-6 h-6 flex items-center justify-center rounded-full border ${
              isOpen ? "bg-gray-100" : ""
            }`}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            )}
          </div>
        </div>
        {isOpen && <div className="p-4 pt-0 text-gray-600">{answer}</div>}
      </div>
    );
  };

  FAQItem.propTypes = {
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  const FAQ = () => {
    const [openItems, setOpenItems] = useState({});

    const faqData = [
      {
        id: 1,
        question:
          "ITga ixtisoslashtirilgan universitetlar qanday afzalliklarga ega?",
        answer:
          "IT-sohasidagi eng yaxshi o'quv markazlari markaz haqidagi ma'lumotlar va ko'rsatiladigan xizmatlarni ijtimoiy tarmoqlarda keng yoritib boradilar",
      },
      {
        id: 2,
        question:
          "ITga ixtisoslashgan universitetlarda qanday yo'nalishlar mavjud?",
        answer: "Markazning saytlasidan olsangiz bo'ladi",
      },
      {
        id: 3,
        question:
          "IT-sohasidagi kasblarni professional darajada egallash uchun o'quv markazida offline mashg'ulitlarga qatnashish afzalmi yoki online o'qisa ham bo'ladimi?",
        answer:
          "Albatta bize xalijimizda yaxshi bir gap bor ya'ni \"Har bir sohada ustoz tutgan afzaldir\" shunung uchun o'quv markazida offline mashg'ulitlarga qatnashib kasb egallash maqsadga muvofiq",
      },
    ];

    const toggleItem = (id) => {
      setOpenItems((prev) => ({
        ...prev,
        [id]: !prev[id],
      }));
    };

    return (
      <div className="max-w-[800px] mt-[50px] mx-auto px-4">
        <h1 className="text-[32px] font-bold text-left mb-8">FAQ</h1>
        <div className="space-y-4">
          {faqData.map((item) => (
            <FAQItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={openItems[item.id] || false}
              onClick={() => toggleItem(item.id)}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="max-w-[1250px] w-full mx-auto">
        <BreadCrumps breadCrumps={breadCrumps} />

        <h1 className="text-[56px] text-center font-bold text-[#222222] mb-8 mt-[80px]">
          Oliy Ta'lim Muassasalari
        </h1>

        <div className="max-w-[792px] w-full mx-auto">
          <img className="w-full rounded-[20px]" src={ProjectImage} alt="" />
        </div>

        <div className="pt-[100px] max-w-3xl mx-auto w-full mb-[100px]">
          <div className="px-[50px] rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-400 p-10 text-center text-white">
            <h1 className="text-3xl font-bold mb-4">
              Tizim universitetlarida ta'lim oluvchilar bo'yicha ma'lumot
            </h1>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-full transition duration-300 mt-[30px]">
              Jadvalni ko'rish
            </button>
          </div>
        </div>

        <UniversitiesStatistics />
      </div>

      <div className="mt-[50px]">
        <UzbekistanMap title="Hudud bo'yicha OTM lar" />
      </div>

      <div className="max-w-[1250px] mx-auto my-[80px]">
        <h1 className="text-[56px] text-center font-bold text-[#222222] mb-8 mt-[80px]">
          Universitetlar
        </h1>

        {/* Фильтры */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-4xl">
            {/* Поиск */}
            <input
              type="text"
              placeholder="Universitet nomini qidirish..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1"
            />
            
            {/* Фильтр по региону */}
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {regions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>

            {/* Фильтр по специализации */}
            <select
              value={selectedSpecialization}
              onChange={(e) => setSelectedSpecialization(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {specializations.map((spec) => (
                <option key={spec} value={spec}>
                  {spec}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Статистика */}
        <div className="mb-6 text-center">
          <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">
            Topildi: <span className="font-semibold text-blue-600 dark:text-blue-400 transition-colors duration-200">{filteredUniversities.length}</span> ta universitet
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredUniversities.map((university) => (
            <div
              key={university.id}
              className="overflow-hidden max-w-[400px] w-full bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative">
                <img src={univerImg} alt={university.name} className="w-full h-48 object-cover" />
                <div className="absolute bottom-2 left-2">
                  <span className="px-2 py-1 text-xs text-black bg-white/90 rounded-full">
                    {university.region}
                  </span>
                </div>
                <div className="absolute bottom-2 left-24">
                  <span className={`px-2 py-1 text-xs text-white rounded-full ${
                    university.specialization === "Ixtisoslashgan" 
                      ? "bg-gradient-to-r from-green-500 to-blue-500" 
                      : "bg-gradient-to-r from-gray-500 to-gray-600"
                  }`}>
                    {university.specialization}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
                    <img
                      src={inhaimg}
                      alt={university.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm line-clamp-2">{university.name}</h3>
                    <p className="text-xs text-gray-500">
                      {university.region}
                    </p>
                  </div>
                </div>
                
                {/* Контактная информация */}
                <div className="space-y-2 text-xs text-gray-600">
                  {university.website && (
                    <div className="flex items-center space-x-1">
                      <span className="font-medium">🌐</span>
                      <a href={`https://${university.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        {university.website}
                      </a>
                    </div>
                  )}
                  {university.telegram && (
                    <div className="flex items-center space-x-1">
                      <span className="font-medium">📱</span>
                      <a href={`https://${university.telegram}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                        Telegram
                      </a>
                    </div>
                  )}
                  {university.phone && (
                    <div className="flex items-center space-x-1">
                      <span className="font-medium">📞</span>
                      <a href={`tel:${university.phone}`} className="text-blue-500 hover:underline">
                        {university.phone}
                      </a>
                    </div>
                  )}
                </div>

                {/* IT направления */}
                {university.directions && (
                  <div className="mt-3">
                    <p className="text-xs font-medium text-gray-700 mb-1">IT yo'nalishlari:</p>
                    <div className="text-xs text-gray-600 line-clamp-3">
                      {university.directions}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredUniversities.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Hech qanday universitet topilmadi</p>
            <button 
              onClick={() => {
                setSelectedRegion("Barchasi");
                setSelectedSpecialization("Barchasi");
                setSearchTerm("");
              }}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Filtrlarni tozalash
            </button>
          </div>
        )}

        <FAQ />
      </div>
    </>
  );
}

export default Universities;
