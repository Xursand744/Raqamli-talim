import React, { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import univerImg from "../../assets/univer.png";
import inhaimg from "../../assets/inha.png";

const universities = [
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
  {
    id: 4,
    name: "Turin Polytechnic University",
    location: "in Tashkent",
    programs: ["ICE", "CSE", "Business", "Logistics"],
    phone: "+998 71 246 95 00",
    type: "Engineering",
    status: "Offline",
    specialty: "Frontend",
    studyDuration: "4Years",
    studyFormat: "Offline",
  },
  {
    id: 5,
    name: "Turin Polytechnic University",
    location: "in Tashkent",
    programs: ["ICE", "CSE", "Business", "Logistics"],
    phone: "+998 71 246 95 00",
    type: "Engineering",
    status: "Offline",
    specialty: "Backend",
    studyDuration: "4Years",
    studyFormat: "Hybrid",
  },
  {
    id: 6,
    name: "Turin Polytechnic University",
    location: "in Tashkent",
    programs: ["ICE", "CSE", "Business", "Logistics"],
    phone: "+998 71 246 95 00",
    type: "Engineering",
    status: "Offline",
    specialty: "Design",
    studyDuration: "3Years",
    studyFormat: "Online",
  },
  {
    id: 7,
    name: "Turin Polytechnic University",
    location: "in Tashkent",
    programs: ["ICE", "CSE", "Business", "Logistics"],
    phone: "+998 71 246 95 00",
    type: "Engineering",
    status: "Offline",
    specialty: "Backend",
    studyDuration: "4Years",
    studyFormat: "Offline",
  },
  {
    id: 8,
    name: "Turin Polytechnic University",
    location: "in Tashkent",
    programs: ["ICE", "CSE", "Business", "Logistics"],
    phone: "+998 71 246 95 00",
    type: "Engineering",
    status: "Offline",
    specialty: "Backend",
    studyDuration: "4Years",
    studyFormat: "Hybrid",
  },
  {
    id: 9,
    name: "Turin Polytechnic University",
    location: "in Tashkent",
    programs: ["ICE", "CSE", "Business", "Logistics"],
    phone: "+998 71 246 95 00",
    type: "Engineering",
    status: "Offline",
    specialty: "Backend",
    studyDuration: "3Years",
    studyFormat: "Online",
  },
  {
    id: 10,
    name: "Turin Polytechnic University",
    location: "in Tashkent",
    programs: ["ICE", "CSE", "Business", "Logistics"],
    phone: "+998 71 246 95 00",
    type: "Engineering",
    status: "Offline",
    specialty: "Backend",
    studyDuration: "4Years",
    studyFormat: "Offline",
  },
  {
    id: 11,
    name: "Turin Polytechnic University",
    location: "in Tashkent",
    programs: ["ICE", "CSE", "Business", "Logistics"],
    phone: "+998 71 246 95 00",
    type: "Engineering",
    status: "Offline",
    specialty: "ProjectManagement",
    studyDuration: "4Years",
    studyFormat: "Hybrid",
  },
  {
    id: 12,
    name: "Turin Polytechnic University",
    location: "in Tashkent",
    programs: ["ICE", "CSE", "Business", "Logistics"],
    phone: "+998 71 246 95 00",
    type: "Engineering",
    status: "Offline",
    specialty: "ProjectManagement",
    studyDuration: "3Years",
    studyFormat: "Online",
  },
];

const filters = [
  {
    name: "ITSpecialty",
    items: [
      { name: "Design", count: 1, key: "Design" },
      { name: "Frontend", count: 4, key: "Frontend" },
      { name: "Backend", count: 5, key: "Backend" },
      { name: "ProjectManagement", count: 2, key: "ProjectManagement" },
    ],
  },
  {
    name: "StudyDuration",
    items: [
      { name: "3Years", count: 1, key: "3Years" },
      { name: "4Years", count: 2, key: "4Years" },
      { name: "MoreThan4Years", count: 0, key: "MoreThan4Years" },
    ],
  },
  {
    name: "StudyFormat",
    items: [
      { name: "Online", count: 1, key: "Online" },
      { name: "Offline", count: 2, key: "Offline" },
      { name: "Hybrid", count: 0, key: "Hybrid" },
    ],
  },
];

export default function UniversityList() {
  const { t } = useTranslation("global");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    ITSpecialty: [],
    StudyDuration: [],
    StudyFormat: [],
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const filteredUniversities = useMemo(() => {
    return universities.filter((university) => {
      const matchesSearch = university.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      const matchesSpecialty =
        selectedFilters.ITSpecialty.length === 0 ||
        selectedFilters.ITSpecialty.includes(university.specialty);
      const matchesDuration =
        selectedFilters.StudyDuration.length === 0 ||
        selectedFilters.StudyDuration.includes(university.studyDuration);
      const matchesFormat =
        selectedFilters.StudyFormat.length === 0 ||
        selectedFilters.StudyFormat.includes(university.studyFormat);

      return (
        matchesSearch && matchesSpecialty && matchesDuration && matchesFormat
      );
    });
  }, [searchQuery, selectedFilters]);

  const handleFilterClick = (filterType, value) => {
    setSelectedFilters((prev) => {
      const currentFilters = prev[filterType];
      const newFilters = currentFilters.includes(value)
        ? currentFilters.filter((item) => item !== value)
        : [...currentFilters, value];

      return {
        ...prev,
        [filterType]: newFilters,
      };
    });
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-gray-50 pt-[20px]">
      <div className="flex mt-[100px] max-w-[1230px] mx-auto ">
        <div
          className={`fixed inset-y-25 left-0 z-30 w-64 bg-white transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 rounded-[12px]`}
        >
          <div className="p-4">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-xl font-medium">{t("Sort")}</h1>
              <button
                className="text-blue-500 hover:text-blue-700"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedFilters({
                    ITSpecialty: [],
                    StudyDuration: [],
                    StudyFormat: [],
                  });
                }}
              >
                <p>{t("Clear")}</p>
              </button>
              <button
                className="text-blue-500 md:hidden"
                onClick={toggleSidebar}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Filters */}
            <div className="space-y-6">
              {filters.map((section) => (
                <div key={section.name} className="space-y-2">
                  <h2 className="font-medium">{t(section.name)}</h2>
                  {section.items.map((item) => (
                    <label
                      key={item.name}
                      className="flex items-center space-x-2"
                    >
                      <input
                        type="checkbox"
                        className="rounded border-gray-300"
                        checked={selectedFilters[section.name].includes(
                          item.key
                        )}
                        onChange={() =>
                          handleFilterClick(section.name, item.key)
                        }
                      />
                      <span className="text-sm">{t(item.name)}</span>
                      <span className="text-sm text-gray-500">
                        ({item.count})
                      </span>
                    </label>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 px-4 md:px-6">
          <h2 className="mb-4 text-lg font-semibold">
            {t("UniversityCount", { count: filteredUniversities.length })}
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredUniversities.map((university) => (
              <div
                key={university.id}
                className="overflow-hidden max-w-[282px] w-full bg-white border rounded-lg shadow-sm"
              >
                <div className="relative">
                  <img
                    src={univerImg}
                    alt={university.name}
                    className="w-full"
                  />
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
        </div>
      </div>
    </div>
  );
}
