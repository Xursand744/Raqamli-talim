import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChevronRight } from "react-feather";
import { ItTalentsIcon, ItTalentsImage, ProjectBanner } from "../../assets";
import { BackgroundIcon, rightIcon } from "../../assets/icons/icon";
import HomeIcon from "../../assets/home-icon.svg";
import { ChevronLeft } from "lucide-react";
import { studyCentersStandings } from "../../utils";

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
    <div className="bg-gray-50">
      <div className=" max-w-[1200px] w-full my-0 mx-auto px-4 py-8 sm:px-6 lg:px-8">
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

        <div className="w-full flex justify-center items-center">
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

        <section>
          <h1 className="text-[32px] font-bold text-gray-900 mb-8 mt-[80px]">
            {t("itTalentsStudyCenters.title")}
          </h1>

          <div className=" p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <StatCard number="1">
                <p className="font-medium">
                  {t("stats.platformCourses.title")}:{" "}
                  {t("stats.platformCourses.count")}.
                </p>
                <p className="text-gray-600">
                  {t("stats.platformCourses.points")}.
                </p>
                <p className="text-gray-600">
                  {t("stats.platformCourses.total")}.
                </p>
              </StatCard>

              <StatCard number="4">
                <p className="font-medium">
                  {t("stats.employedGraduates.title")}:{" "}
                  {t("stats.employedGraduates.count")}.
                </p>
                <p className="text-gray-600">
                  {t("stats.employedGraduates.points")}.
                </p>
                <p className="text-gray-600">
                  {t("stats.employedGraduates.total")}.
                </p>
              </StatCard>

              <StatCard number="2">
                <p className="font-medium">
                  {t("stats.platformStudents.title")}:{" "}
                  {t("stats.platformStudents.count")}.
                </p>
                <p className="text-gray-600">
                  {t("stats.platformStudents.points")}.
                </p>
                <p className="text-gray-600">
                  {t("stats.platformStudents.total")}.
                </p>
              </StatCard>

              <StatCard number="5">
                <p className="font-medium">
                  {t("stats.itExportGraduates.title")}:{" "}
                  {t("stats.itExportGraduates.count")}.
                </p>
                <p className="text-gray-600">
                  {t("stats.itExportGraduates.points")}.
                </p>
                <p className="text-gray-600">
                  {t("stats.itExportGraduates.total")}.
                </p>
              </StatCard>

              <StatCard number="3">
                <p className="font-medium">
                  {t("stats.graduates.title")}: {t("stats.graduates.count")}.
                </p>
                <p className="text-gray-600">{t("stats.graduates.points")}.</p>
                <p className="text-gray-600">{t("stats.graduates.total")}.</p>
              </StatCard>

              <div className="bg-blue-500 text-white rounded-lg p-6">
                <div className="flex items-start gap-2">
                  <div className="mt-1">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <p>{t("stats.summary.text")}</p>
                    <p className="font-bold mt-2">
                      {t("stats.summary.calculation")}{" "}
                      {t("stats.summary.total")}.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
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
        </section>
      </div>

      <div className="bg-[#174078] w-full py-[40px] project-section-bottom">
        <div className="container">
          <div className="flex justify-between gap-[20px] ">
            <div className="w-2/3 flex flex-col gap-[20px]">
              <h1 className="text-white font-bold text-[40px]">
                {t("study_title")}
              </h1>
              <p className="text-white text-[20px]">{t("study_description")}</p>

              <div>
                <Button className="bg-blue-500 rounded-3xl hover:bg-blue-600 text-white px-8">
                  {t("all_events")}
                </Button>
              </div>
            </div>

            <div className="w-1/3 project-bottom-image">
              <img src={BackgroundIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
