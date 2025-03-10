import { ProjectImage } from "../../assets";
import BreadCrumps from "../../components/BreadCrumps/BreadCrumps";
import UniversitiesStatistics from "../../components/Projects/UniversitiesStatistics";
import UzbekistanMap from "../../components/Projects/UzbekistanMap";
import univerImg from "../../assets/univer.png";
import inhaimg from "../../assets/inha.png";
import { useState } from "react";

function Universities() {
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

  const filteredUniversities = [
    {
      id: 1,
      name: "Inha University",
      location: "in Tashkent",
      programs: ["ICE", "CSE", "Business", "Logistics"],
      phone: "+998 70 200 00 00",
      type: "EduTech",
      status: "Offline",
      specialty: "Frontend",
      studyDuration: "4Years",
      studyFormat: "Offline",
    },
    {
      id: 2,
      name: "Webster University",
      location: "in Tashkent",
      programs: ["ICE", "CSE", "Business", "Logistics"],
      phone: "+998 71 238 58 21",
      type: "Liberal Arts",
      status: "Offline",
      specialty: "Frontend",
      studyDuration: "4Years",
      studyFormat: "Hybrid",
    },
    {
      id: 3,
      name: "Turin Polytechnic University",
      location: "in Tashkent",
      programs: ["ICE", "CSE", "Business", "Logistics"],
      phone: "+998 71 246 95 00",
      type: "Engineering",
      status: "Offline",
      specialty: "Frontend",
      studyDuration: "3Years",
      studyFormat: "Online",
    },
  ];

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
          "IT-sohasidagi kasblarni profesional darajada egallash uchun o'quv markazida offline mashg'ulitlarga qatnashish afzalmi yoki online o'qisa ham bo'ladimi?",
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
          Oliy Ta’lim Muassasalari
        </h1>

        <div className="max-w-[792px] w-full mx-auto">
          <img className="w-full rounded-[20px]" src={ProjectImage} alt="" />
        </div>

        <div className="pt-[100px] max-w-3xl mx-auto w-full mb-[100px]">
          <div className="px-[50px] rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-400 p-10 text-center text-white">
            <h1 className="text-3xl font-bold mb-4">
              Tizim universitetlarida ta’lim oluvchilar bo‘yicha ma’lumot
            </h1>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-full transition duration-300 mt-[30px]">
              Jadvalni ko‘rish
            </button>
          </div>
        </div>

        <UniversitiesStatistics />
      </div>

      <div className="mt-[50px]">
        <UzbekistanMap title="Hudud bo‘yicha OTM lar" />
      </div>

      <div className="max-w-[1250px] mx-auto my-[80px]">
        <h1 className="text-[56px] text-center font-bold text-[#222222] mb-8 mt-[80px]">
          IT universitetlar
        </h1>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredUniversities.map((university) => (
            <div
              key={university.id}
              className="overflow-hidden max-w-[282px] w-full bg-white border rounded-lg shadow-sm"
            >
              <div className="relative">
                <img src={univerImg} alt={university.name} className="w-full" />
                <div className="absolute bottom-2 left-2">
                  <span className="px-2 py-1 text-xs text-black bg-white/90 rounded-full">
                    {university.location}
                  </span>
                </div>
                <div className="absolute bottom-2 left-24">
                  <span className="px-2 py-1 text-xs text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">
                    {university.status}
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
                    <h3 className="font-medium text-sm">{university.name}</h3>
                    <p className="text-xs text-gray-500">
                      {university.location}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mb-2">
                  {university.programs.map((program) => (
                    <span
                      key={program}
                      className="px-2 py-1 text-xs bg-gray-100 rounded"
                    >
                      {program}
                    </span>
                  ))}
                </div>
                <div className="text-xs text-gray-500">{university.type}</div>
                <div className="mt-2 text-sm text-blue-500">
                  {university.phone}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-[40px]">
          <button className="py-[12px] px-[40px] rounded-[27px] bg-[#2675EB] text-white transition hover:opacity-[0.8]">
            Barchasini ko’rish
          </button>
        </div>

        <FAQ />
      </div>
    </>
  );
}

export default Universities;
