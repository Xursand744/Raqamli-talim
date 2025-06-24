import { ProjectImage } from "../../assets";
import { MoneyBag, UserDelete } from "../../assets/it-talents-images";
import BreadCrumps from "../../components/BreadCrumps/BreadCrumps";
import StudyCenterCard from "../../components/Projects/StudyCenterCard";
import SummaryCard from "./SummaryCard";
import StatCard from "../../components/Projects/StatCard";
import StudyCentersTable from "../../components/Projects/StudyCentersTable";
import UzbekistanMap from "../../components/Projects/UzbekistanMap";
import res from "../../assets/res.png";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { BackgroundIcon } from "../../assets/icons/icon";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg mb-4 overflow-hidden bg-white dark:bg-gray-800 transition-colors duration-200">
      <div
        className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
        onClick={onClick}
      >
        <h3 className="font-medium text-gray-900 dark:text-white transition-colors duration-200">{question}</h3>
        <div
          className={`w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 ${
            isOpen ? "bg-gray-100 dark:bg-gray-700" : ""
          } transition-colors duration-200`}
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
              className="text-gray-600 dark:text-gray-300"
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
              className="text-gray-600 dark:text-gray-300"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          )}
        </div>
      </div>
      {isOpen && <div className="p-4 pt-0 text-gray-600 dark:text-gray-300 transition-colors duration-200">{answer}</div>}
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
        "IT-sohasidagi eng yaxshi o&apos;quv markazlari markaz haqidagi ma&apos;lumotlar va ko&apos;rsatiladigan xizmatlarni ijtimoiy tarmoqlarda keng yoritib boradilar",
    },
    {
      id: 2,
      question:
        "ITga ixtisoslashgan universitetlarda qanday yo&apos;nalishlar mavjud?",
      answer: "Markazning saytlasidan olsangiz bo&apos;ladi",
    },
    {
      id: 3,
      question:
        "IT-sohasidagi kasblarni profesional darajada egallash uchun o&apos;quv markazida offline mashg&apos;ulitlarga qatnashish afzalmi yoki online o&apos;qisa ham bo&apos;ladimi?",
      answer:
        "Albatta bize xalijimizda yaxshi bir gap bor ya&apos;ni &quot;Har bir sohada ustoz tutgan afzaldir&quot; shunung uchun o&apos;quv markazida offline mashg&apos;ulitlarga qatnashib kasb egallash maqsadga muvofiq",
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
      <h1 className="text-[32px] font-bold text-left mb-8 text-gray-900 dark:text-white transition-colors duration-200">FAQ</h1>
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

function StudyCenters() {
  const { t } = useTranslation("global");
  const navigate = useNavigate();

  const breadCrumps = [
    {
      link: "/projects",
      title: "Loyihalar",
    },
    {
      link: "/projects/study-centers",
      title: "O&apos;quv markazlar",
    },
  ];

  const studyCenterNumbers = [
    {
      icon: UserDelete,
      number: 522,
      title: "Ta&apos;lim rezidentlar soni",
    },
    {
      icon: MoneyBag,
      number: "1,426",
      title: "O&apos;quv kurslar soni",
    },
    {
      icon: MoneyBag,
      number: "9,042",
      title: "O&apos;quvchilar soni (nafar)",
    },
    {
      icon: UserDelete,
      number: "34,584",
      title: "Bitiruvchilar soni (nafar)",
    },
    {
      icon: UserDelete,
      number: "13,570",
      title: "Ishga joylashgan bitiruvchilar soni (nafar)",
    },
    {
      icon: MoneyBag,
      number: "780",
      title: "IT eksportga ishga joylashgan bitiruvchilar (nafar)",
    },
  ];

  const stats = [
    {
      id: 1,
      title: "Platformadagi kurslar soni:",
      count: "62 ta",
      description: "Har bir kurs 0.10 ball beradi.",
      total: "Kurslar uchun 6.2 ball.",
    },
    {
      id: 2,
      title: "Platformadagi talabalar soni:",
      count: "952 nafar",
      description: "Har bir talaba 0.10 ball qo&apos;shadi.",
      total: "Talabalar uchun 95.2 ball.",
    },
    {
      id: 3,
      title: "Bitiruvchilar soni:",
      count: "1671 nafar",
      description: "Har bir bitiruvchi 0.20 ball qo&apos;shadi.",
      total: "Bitiruvchilar uchun 334.2 ball.",
    },
    {
      id: 4,
      title: "Ish bilan ta&apos;minlangan bitiruvchilar:",
      count: "729 nafar",
      description: "Har bir ishga joylashish 0.20 ball qo&apos;shadi.",
      total: "Ish bilan ta&apos;minlangan bitiruvchilar uchun 145.8 ball.",
    },
    {
      id: 5,
      title: "IT eksport kompaniyalariga ishga joylashgan bitiruvchilar:",
      count: "106 nafar",
      description: "Har bir shunday bitiruvchi 0.40 ball olib keladi.",
      total: "Eksport kompaniyalariga ishga joylashganlar uchun 42.4 ball.",
    },
  ];

  const totalBalls = "6.2 + 95.2 + 334.2 + 145.8 + 42.4 = 623.8 ball";

  const courses = [
    {
      id: 1,
      title: "PDP Akademiya",
      price: "1,500,000 dan boshlab",
      tags: ["Loyiha boshqaruvi", "Dizayn"],
      location: "Toshkent",
      status: ["Oflayn"],
    },
    {
      id: 2,
      title: "PDP Akademiya",
      price: "1,500,000 dan boshlab",
      tags: ["Loyiha boshqaruvi", "Dizayn"],
      location: "Toshkent",
      status: ["Oflayn"],
    },
    {
      id: 3,
      title: "PDP Akademiya",
      price: "1,500,000 dan boshlab",
      location: "Toshkent",
      status: ["Oflayn", "Onlayn"],
      tags: ["Loyiha boshqaruvi", "Dizayn"],
      design: "+5",
    },
  ];

  return (
    <>
      <div className="max-w-[1250px] mx-auto">
        <div className="max-w-[792px] w-full mx-auto">
          <BreadCrumps breadCrumps={breadCrumps} />

          <h1 className="text-[56px] font-bold text-[#222222] dark:text-white mb-8 mt-[80px] transition-colors duration-200">
            O&apos;quv markazlar
          </h1>

          <div className="max-w-[792px] w-full">
            <img className="w-full rounded-[20px]" src={ProjectImage} alt="" />
          </div>

          <h1 className="text-[32px] font-bold text-gray-900 dark:text-white mb-8 mt-[80px] transition-colors duration-200">
            O&apos;quv markazlar sonlarda
          </h1>
          <div className="flex justify-between gap-4 flex-wrap mb-[100px]">
            {studyCenterNumbers.map((item) => {
              return <StudyCenterCard key={item.title} {...item} />;
            })}
          </div>

          <h1 className="text-[32px] font-bold text-gray-900 dark:text-white mb-8 mt-[80px] transition-colors duration-200">
            O&apos;quv markazlari reytingi qanday shakllanadi?
          </h1>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            {stats.map((stat) => (
              <StatCard
                key={stat.id}
                number={stat.id}
                title={stat.title}
                count={stat.count}
                description={stat.description}
                total={stat.total}
              />
            ))}
            <SummaryCard totalBalls={totalBalls} />
          </div>
        </div>

        <div>
          <div className="max-w-[792px] w-full mx-auto">
            <h1 className="text-[32px] font-bold text-gray-900 dark:text-white mb-8 mt-[80px] transition-colors duration-200">
              IT-Park rezidenti bo&apos;lgan nodavlat ta&apos;lim tashkilotlarining
              reytingi
            </h1>
          </div>
          <StudyCentersTable />
        </div>

        <div className="container pt-[100px] max-w-6xl mx-auto w-full">
          <div className="w-full w-3xl px-[200px] rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-400 p-10 text-center text-white">
            <h1 className="text-3xl font-bold mb-4">
              O&apos;quv markazlar ro&apos;yxati
            </h1>
            <p className="mb-8 text-lg">
              O&apos;z hududingizdagi o&apos;quv markazlarni va ularning kurslari
              to&apos;g&apos;risidagi ma&apos;lumotlarni bilish uchun quyidagi havola orqali
              o&apos;ting
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-full transition duration-300">
              Ro&apos;yxatni ko&apos;rish
            </button>
          </div>
        </div>
      </div>

      <div className=" mt-[70px]">
        <UzbekistanMap />
      </div>

      <div className="max-w-[1250px] mx-auto mt-[50px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {courses &&
            courses.map((course) => {
              return (
                <div
                  key={course.id}
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-gray-900/50 transition-shadow duration-200"
                >
                  <div className="relative h-48 bg-gradient-to-r from-blue-400 to-purple-500">
                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center gap-2">
                      <img className="w-[80px] h-[80%]" src={res} alt="" />
                    </div>
                    <div className="absolute bottom-2 left-4 flex flex-wrap gap-2">
                      <span className="px-2 py-1 text-xs text-black bg-white/90 rounded-full">
                        {course.location}
                      </span>
                      {course.status &&
                        course.status.map((status, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 text-xs text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                          >
                            {status}
                          </span>
                        ))}
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-gray-900 dark:text-white transition-colors duration-200">{course.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-200">
                      <span className="text-blue-700 dark:text-blue-400">{t("courses")}:</span>{" "}
                      {course.price}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {course.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-[#F0F3FF] dark:bg-blue-900/50 rounded-full text-sm text-gray-700 dark:text-gray-200 transition-colors duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

        <div className="flex justify-center mt-[40px]">
          <button className="py-[12px] px-[40px] rounded-[27px] bg-[#2675EB] text-white transition hover:opacity-[0.8]">
            Barchasini ko&apos;rish
          </button>
        </div>

        <FAQ />
      </div>

      <div className="bg-[#F8F8F8] dark:bg-gray-900 w-full py-[40px] project-section-bottom mt-[50px] transition-colors duration-200">
        <div className="max-w-[1230px] mx-auto">
          <div className="flex justify-between gap-[20px] ">
            <div className="w-2/3 flex flex-col gap-[20px]">
              <h1 className="text-[#222] dark:text-white font-bold text-[40px] transition-colors duration-200">
                Loyiha doirasida maxsus tizim (crm.digital.uz)dan ro&apos;yxatdan
                o&apos;tish bo&apos;yicha yo&apos;riqnoma:
              </h1>
              <p className="text-[#222] dark:text-gray-300 text-[20px] transition-colors duration-200">
                Quyidagi qo&apos;llanmamiz siz uchun
              </p>

              <div>
                <div className="flex gap-4">
                  <button
                    className="px-[50px] py-[12px] bg-[#E3EEFF] dark:bg-blue-900 hover:bg-[#E3EEF3] dark:hover:bg-blue-800 text-[#2F2F2F] dark:text-white rounded-3xl font-medium transition-colors duration-200"
                    onClick={() =>
                      navigate("https://crm.digital.uz/login?redirect_url=/")
                    }
                  >
                    O&apos;zbek tilida
                  </button>
                  <button
                    className="px-[50px] py-[12px] bg-[#E3EEFF] dark:bg-blue-900 hover:bg-[#E3EEF3] dark:hover:bg-blue-800 text-[#2F2F2F] dark:text-white rounded-3xl font-medium transition-colors duration-200"
                    onClick={() =>
                      navigate("https://crm.digital.uz/login?redirect_url=/")
                    }
                  >
                    Rus tilida
                  </button>
                </div>
              </div>
            </div>

            <div className="w-1/3 project-bottom-image">
              <img src={BackgroundIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

StudyCenters.propTypes = {
  navigate: PropTypes.func.isRequired,
};

export default StudyCenters;
