import React, { useState } from "react";
import "../../index.css";
import { useTranslation } from "react-i18next";
import { ChevronRight } from "react-feather";
import { ItTalentsIcon, ItTalentsImage, ProjectBanner } from "../../assets";
import { BackgroundIcon, rightIcon } from "../../assets/icons/icon";
import HomeIcon from "../../assets/home-icon.svg";
import { ChevronLeft } from "lucide-react";
import { studyCentersStandings } from "../../utils";
import Sl from "../../assets/s_left.png";
import Sr from "../../assets/s-right.png";

const Breadcrumb = () => {
  const { t } = useTranslation("global");

  return (
    <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
      <a href="/" className="hover:text-gray-900 flex items-center gap-[10px]">
        <img src={HomeIcon} alt="" />
        {t("itTalentBreadcrump.home")}
      </a>
      <ChevronRight size={16} />
      <a href="/projects" className="hover:text-gray-900">
        {t("itTalentBreadcrump.projects")}
      </a>
      <ChevronRight size={16} />
      <span className="text-gray-900">{t("itTalentBreadcrump.itTalents")}</span>
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

const MetricsCard = ({ icon, value, label }) => (
  <div className="bg-white rounded-lg  p-6 shadow-sm hover:shadow-md transition-shadow">
    <img src={icon || "/placeholder.svg"} alt="" className="w-[48px] mb-4" />
    <div className="text-[#2563EB] text-[40px] font-bold mb-2">
      {value.toLocaleString()}
    </div>
    <div className="text-gray-600 text-sm">{label}</div>
  </div>
);

const StatCard = ({ number, children, className }) => (
  <div className={`bg-white rounded-lg p-6 shadow-sm ${className}`}>
    <div className="flex items-start gap-2">
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white font-medium">
        {number}
      </div>
      <div className="flex-1">{children}</div>
    </div>
  </div>
);

export default function ItTalents() {
  const { t } = useTranslation("global");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = 34;

  const metrics = [
    {
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Building%20office-c3251fjQtstWTldgTSCUivRq8Yjxsl.png",
      value: 522,
      label: t("itTalentsMetrics.residents"),
    },
    {
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Graduated-QTTPCSOzdwQIU89wJfiTcmwYksVbfl.png",
      value: 9042,
      label: t("itTalentsMetrics.students"),
    },
    {
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Graduated-QTTPCSOzdwQIU89wJfiTcmwYksVbfl.png",
      value: 34584,
      label: t("itTalentsMetrics.graduates"),
    },
    {
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Brain-CPrF6k4SUcHVaIQd7rxvsKfWVLPHGF.png",
      value: 13570,
      label: t("itTalentsMetrics.employed"),
    },
    {
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Building%20office-c3251fjQtstWTldgTSCUivRq8Yjxsl.png",
      value: 1426,
      label: t("itTalentsMetrics.courses"),
    },
  ];

  const renderPaginationNumbers = () => {
    const pages = [];
    pages.push(
      <button
        key="prev"
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        className="px-3 py-1 rounded-md hover:bg-blue-50"
        disabled={currentPage === 1}
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
    );

    pages.push(
      <button
        key={1}
        onClick={() => setCurrentPage(1)}
        className={`px-3 py-1 rounded-md ${
          currentPage === 1 ? "bg-blue-500 text-white" : "hover:bg-blue-50"
        }`}
      >
        1
      </button>
    );

    if (currentPage > 3) {
      pages.push(
        <span key="dots1" className="px-2">
          ...
        </span>
      );
    }

    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      pages.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`px-3 py-1 rounded-md ${
            currentPage === i ? "bg-blue-500 text-white" : "hover:bg-blue-50"
          }`}
        >
          {i}
        </button>
      );
    }

    if (currentPage < totalPages - 2) {
      pages.push(
        <span key="dots2" className="px-2">
          ...
        </span>
      );
    }

    pages.push(
      <button
        key={totalPages}
        onClick={() => setCurrentPage(totalPages)}
        className={`px-3 py-1 rounded-md ${
          currentPage === totalPages
            ? "bg-blue-500 text-white"
            : "hover:bg-blue-50"
        }`}
      >
        {totalPages}
      </button>
    );

    pages.push(
      <button
        key="next"
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        className="px-3 py-1 rounded-md hover:bg-blue-50"
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    );

    return pages;
  };

  const Button = ({ children, className, ...props }) => (
    <button
      className={`px-4 py-2 rounded font-semibold ${className}`}
      {...props}
    >
      {children}
    </button>
  );

  return (
    <div className="">
      <div className="max-w-[1230px] w-full my-0 mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumb />

        <h1 className="text-[32px] font-bold text-gray-900 mb-8 mt-[80px]">
          {t("hero.title")}
        </h1>

        <div className="relative mb-12">
          <img
            src={ProjectBanner}
            alt="IT Talents"
            className="w-full h-[400px] object-cover rounded-lg"
          />
        </div>

        <p className="text-lg text-gray-700 mb-12">{t("hero.description")}</p>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {t("decisions.title")}
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            <DocumentCard>{t("decisions.document1")}</DocumentCard>
            <DocumentCard>{t("decisions.document2")}</DocumentCard>
          </div>
        </section>

        <div className="w-full flex justify-center items-center pt-[100px]">
          <div className="max-w-[792px] w-full h-[420px] relative">
            <img
              src={ItTalentsImage}
              alt="it-talents-image"
              className="w-full rounded-[30px] h-full object-cover"
            />

            <div className="bg-[#222] opacity-[.6] rounded-[30px] w-full h-full absolute left-0 top-0"></div>

            <div className="absolute inset-0 flex items-center justify-center">
              <img src={ItTalentsIcon} alt="" className="w-[160px] h-[160px]" />
            </div>
          </div>
        </div>

        <section className="pt-[100px] px-4 max-w-[1230px] mx-auto">
          <div
            className="bg max-w-[1230px] mx-auto relative flex flex-col justify-center items-center rounded-[20px] bg-[#F8F8F8] 
    w-full h-[300px] max-sm:h-auto py-8"
          >
            <img
              className="absolute left-0 bottom-0 w-[150px] md:w-[120px] sm:w-[100px] max-sm:hidden"
              src={Sl}
              alt=""
            />
            <img
              className="absolute right-0 bottom-0 w-[150px] md:w-[120px] sm:w-[100px] max-sm:hidden"
              src={Sr}
              alt=""
            />

            <h1 className="font-semibold text-[40px] md:text-[36px] sm:text-[28px] max-sm:text-[22px] text-[#222222] pb-[16px] text-center">
              O‘quv yo‘nalishlar ro‘yxati
            </h1>

            <p className="font-medium w-[80%] max-w-[500px] sm:max-w-[90%] max-sm:max-w-[95%] text-center pb-[16px] text-[18px] md:text-[16px] sm:text-[14px] max-sm:text-[12px]">
              Raqamli texnologiyalar vazirligi tomonidan tasdiqlangan
            </p>

            <button
              className="px-[50px] py-[14px] border border-[#222222] font-medium text-[18px] rounded-[27px] 
      md:px-[40px] md:py-[12px] sm:px-[30px] sm:py-[10px] sm:text-[14px] max-sm:px-[24px] max-sm:py-[8px] max-sm:text-[12px]"
            >
              Yuklab olish
            </button>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-[32px] font-bold text-gray-900 mb-8 mt-[80px]">
              {t("itTalentsMetrics.title")}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {metrics.map((metric, index) => {
                if (index < 3) {
                  return (
                    <MetricsCard
                      key={index}
                      icon={metric.icon}
                      value={metric.value}
                      label={metric.label}
                    />
                  );
                }
              })}
            </div>
            <div className="w-full flex gap-[20px] mt-[20px]">
              {metrics.map((metric, index) => {
                if (index > 2) {
                  return (
                    <div className="w-1/2">
                      <MetricsCard
                        key={index}
                        icon={metric.icon}
                        value={metric.value}
                        label={metric.label}
                      />
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </section>

        {/* <section>
          <h1 className="text-[32px] font-bold text-gray-900 mb-8 mt-[80px]">
            {t("itTalentsStudyCenters.title2")}
          </h1>

          <div className="container mx-auto p-4">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-blue-500 text-white">
                    <th className="px-4 py-3 text-left">#</th>
                    <th className="px-4 py-3 text-left">O'quv markaz</th>
                    <th className="px-4 py-3 text-left">Hudud</th>
                    <th className="px-4 py-3 text-center">Bitruvchilar</th>
                    <th className="px-4 py-3 text-center">
                      IT-Eksportga jalb qilinganlar
                    </th>
                    <th className="px-4 py-3 text-center">
                      Ishga joylashganlar
                    </th>
                    <th className="px-4 py-3 text-right">Umumiy ballari</th>
                  </tr>
                </thead>
                <tbody>
                  {studyCentersStandings &&
                    studyCentersStandings.map((item, index) => (
                      <tr
                        key={item.id}
                        className={index % 2 === 0 ? "bg-white" : "bg-blue-50"}
                      >
                        <td className="px-4 py-3">{item.id}</td>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                item.logo === "green"
                                  ? "bg-green-600"
                                  : "bg-blue-600"
                              } text-white`}
                            >
                              {item.name[0]}
                            </div>
                            <div>
                              <div className="font-medium">{item.name}</div>
                              <div className="text-sm text-gray-600">
                                {item.type}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-3">{item.location}</td>
                        <td className="px-4 py-3 text-center">{item.col1}</td>
                        <td className="px-4 py-3 text-center">{item.col2}</td>
                        <td className="px-4 py-3 text-center">{item.col3}</td>
                        <td className="px-4 py-3 text-right">
                          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                            {item.score}
                          </span>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex justify-center items-center gap-1">
              <div className="text-sm text-gray-600 mr-4">
                100 tadan, 1-10-gacha ko'rsatilmoqda
              </div>
              {renderPaginationNumbers()}
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
}
