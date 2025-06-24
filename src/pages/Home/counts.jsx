import { useTranslation } from "react-i18next";

export default function MetricsSection() {
  const { t } = useTranslation("global");

  const highlightMetrics = [
    {
      value: "+10",
      label: t("metrics.activeProjects"),
    },
    {
      value: "52 271",
      label: t("metrics.itStudents"),
    },
  ];

  const detailedMetrics = [
    {
      count: "22 267",
      percent: "39.61%",
      label: t("metrics.employedStudents"),
    },
    {
      count: "1 018",
      percent: "1.24%",
      label: t("metrics.employedStudents2ForeignCompany"),
    },
    {
      count: "33 513",
      percent: "66.51%",
      label: t("metrics.males"),
    },
    {
      count: "18 758",
      percent: "33.49%",
      label: t("metrics.females"),
    },
  ];

  return (
    <div className="container mt-[50px] md:mt-[100px] p-6 counts-section">
      {/* Intro block */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-gray-100 dark:bg-gray-800 py-5 p-4 rounded-lg lg:col-span-2 transition-colors duration-200">
          <h2 className="text-2xl font-medium text-gray-900 dark:text-white mb-4 transition-colors duration-200">
            {t("metrics.centerTitle")}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">{t("metrics.centerDescription")}</p>
        </div>

        {highlightMetrics.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#E3EEFF] dark:bg-blue-900/20 rounded-lg p-6 flex flex-col items-center justify-center transition-colors duration-200"
          >
            <div className="text-5xl font-bold mb-2 text-gray-900 dark:text-white transition-colors duration-200">{item.value}</div>
            <div className="text-gray-600 dark:text-gray-300 text-center transition-colors duration-200">{item.label}</div>
          </div>
        ))}
      </div>

      {/* Detailed stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {detailedMetrics.map((metric, index) => (
          <div
            key={index}
            className="bg-[#E3EEFF] dark:bg-blue-900/20 rounded-lg p-6 flex flex-col items-center justify-center transition-colors duration-200"
          >
            <div className="text-5xl font-bold mb-2 text-gray-900 dark:text-white transition-colors duration-200">
              {metric.count}
              <span className="text-blue-500 dark:text-blue-400 font-bold text-xl ml-2 transition-colors duration-200">
                {metric.percent}
              </span>
            </div>
            <div className="text-gray-600 dark:text-gray-300 text-center transition-colors duration-200">{metric.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
