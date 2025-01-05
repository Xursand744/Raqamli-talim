import { useTranslation } from "react-i18next";
import React from "react";

export default function MetricsSection() {
  const { t } = useTranslation("global");

  return (
    <div className="container mt-[50px] md:mt-[100px] p-6">
      <div className="grid grid-cols-1 justify-between md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="gridlar bg-gray-100 py-5 p-3 rounded-lg">
          <h2 className="text-2xl font-medium text-gray-900 mb-4">
            {t("metrics.centerTitle")}
          </h2>
          <p className="text-gray-600 max-w-2xl">
            {t("metrics.centerDescription")}
          </p>
        </div>

        <div className="bg-blue-50 grid rounded-lg p-6">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="text-5xl font-bold mb-2">
              7<span className="text-blue-500"></span>
            </div>
            <div className="text-gray-600">{t("metrics.activeProjects")}</div>
          </div>
        </div>
        <div className="bg-blue-50 rounded-lg p-6">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="text-5xl font-bold">5,012</div>
            <div className="text-gray-600">{t("metrics.itStudents")}</div>
          </div>
        </div>
      </div>

      {/* Percentage Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { count: "12", percent: "%" },
          { count: "4", percent: "%" },
          { count: "2", percent: "%" },
          { count: "8", percent: "%" },
        ].map((metric, index) => (
          <div key={index} className="bg-blue-50 rounded-lg p-6">
            <div className="flex flex-col items-center justify-center">
              <div className="text-5xl font-bold mb-2">
                {metric.count}{" "}
                <span className="text-blue-500 font-bold">
                  {metric.percent}
                </span>
              </div>
              <div className="text-gray-600">
                {t("metrics.metricIndicator")}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
