import { useState } from "react";
import { departmentsInformations } from "../../utils";
import AboutPageHeader from "../../components/AboutComponents/AboutPageHeader";
import { useTranslation } from "react-i18next";
import { rightIcon } from "../../assets/icons/icon";
import { DepartmentItemBanner } from "../../assets";
import "./about.css";

export default function Departments() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const { t } = useTranslation("global");

  const handleClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const breadCrumps = [
    {
      link: "/about",
      name: t("menu.center"),
    },
    {
      link: "/departments",
      name: t("menu.departments"),
    },
  ];

  return (
    <div className="container mb-[50px]">
      <AboutPageHeader
        breadCrumps={breadCrumps}
        title={t("menu.departments")}
      />
      <div className="w-full mx-auto space-y-2 mt-[20px]">
        {departmentsInformations.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg bg-white overflow-hidden"
          >
            <button
              onClick={() => handleClick(item.id)}
              className="w-full p-4 flex items-center justify-between text-left hover:bg-gray-50"
            >
              <span className="font-medium text-gray-900">{item.title}</span>
              <span
                className={`transform transition-transform duration-200 ${
                  expandedIndex === item.id ? "rotate-90" : ""
                }`}
              >
                <img src={rightIcon} alt="Toggle" className="w-8 h-8" />
              </span>
            </button>

            {expandedIndex === item.id && (
              <div className="p-4 border-t">
                <div className="flex items-start gap-6 relative">
                  <img
                    src={item.content.image || "/placeholder.svg"}
                    alt=""
                    className="w-[217px] h-[217px] rounded-lg object-cover"
                  />
                  <div className="flex-1 flex department-item-flex">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {item.content.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600 max-w-md">
                        {item.content.position}
                      </p>
                    </div>
                    <div className="ml-[15%]">
                      <div className="mt-4 space-y-2">
                        <a
                          href={`tel:${item.content.phone}`}
                          className="flex items-center text-blue-600 hover:underline"
                        >
                          <svg
                            className="w-4 h-4 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                          {item.content.phone}
                        </a>
                        <a
                          href={`mailto:${item.content.email}`}
                          className="flex items-center text-blue-600 hover:underline"
                        >
                          <svg
                            className="w-4 h-4 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                          </svg>
                          {item.content.email}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="absolute right-0 bottom-0">
                    <img
                      src={DepartmentItemBanner}
                      alt=""
                      className="relative bottom-[-20px] right-[-20px] w-[150px]"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
