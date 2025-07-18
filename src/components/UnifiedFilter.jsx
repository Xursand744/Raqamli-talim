import { useState, useEffect } from "react";
import { Search, ArrowUpDown, Menu, X } from "lucide-react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import PriceRange from "./PriceRange";
import CourseItem from "./CourseItem";
import CourseItemImage from "../assets/course-item.jpg";
import res from "../assets/res.png";
import TopCenters from "./TopCenters";

export default function UnifiedFilter() {
  const { t } = useTranslation("global");

  // Состояние для переключения между курсами и центрами
  const [activeTab, setActiveTab] = useState("centers"); // "centers" или "courses"

  // Общие состояния
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // Состояния для курсов
  const [coursesData, setCoursesData] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 5000000 });

  // Состояния для центров
  const [centers, setCenters] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortAscending, setSortAscending] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Функция для получения курсов
  const fetchCourses = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`https://api.crm.digital.uz/v1/courses?page=${currentPage}&per_page=12`);
      setCoursesData(res.data.data);
      setTotalPages(res.data.meta.last_page);
    } catch (error) {
      console.error(t("errors.fetchCourses"), error);
    } finally {
      setIsLoading(false);
    }
  };

  // Функция для получения центров
  const fetchCenters = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`https://api.crm.digital.uz/v1/centers?page=${currentPage}&per_page=12`);
      setCenters(res.data.data);
      setTotalPages(res.data.meta.last_page);
    } catch (error) {
      console.error(t("errors.fetchCenters"), error);
    } finally {
      setIsLoading(false);
    }
  };

  // Эффект для загрузки данных при смене вкладки или страницы
  useEffect(() => {
    setCurrentPage(1); // Сбрасываем страницу при смене вкладки
  }, [activeTab]);

  useEffect(() => {
    if (activeTab === "courses") {
      fetchCourses();
    } else {
      fetchCenters();
    }
  }, [currentPage, activeTab]);

  // Маппинг курса
  const mapCourse = (course) => ({
    id: course.id,
    title: course.category.name_uz,
    center: course.center?.name || t("common.unknown"),
    price: course.price,
    duration: `${course.duration} ${t("common.months")}`,
    format: course.type,
    name: course.name_uz || "",
    image: course.center?.logo || CourseItemImage,
    location: t("common.tashkent"),
    fullLocation: t("common.tashkent"),
    telegram: course.center?.telegram,
    number: course.center?.phone,
    website: course.center?.website,
  });

  // Фильтрация центров
  const filteredCenters = centers
    .filter((center) =>
      center.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      const comparison = a.name.localeCompare(b.name);
      return sortAscending ? comparison : -comparison;
    });

  const handlePriceRangeChange = (newRange) => {
    setPriceRange(newRange);
    // Здесь можно добавить логику фильтрации по цене
  };

  return (
    <div className="relative bg-white dark:bg-gray-900 transition-colors duration-200">
      {/* Переключатель вкладок */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-40 transition-colors duration-200">
        <div className="mx-auto pt-6">
          <div className="flex items-center justify-start h-16 w-full mb-6">
            <div className="flex gap-4 bg-transparent p-0 rounded-none transition-colors duration-200 justify-end">
              <button
                onClick={() => setActiveTab("centers")}
                className={`px-6 py-2 rounded-full text-base font-medium transition-colors duration-200 border border-gray-300
                  ${activeTab === "centers"
                    ? "bg-[#2675EB] text-white shadow"
                    : "bg-white text-gray-800 hover:bg-gray-100"}
                `}
              >
                {t("menu.studyCenters")}
              </button>
              <button
                onClick={() => setActiveTab("courses")}
                className={`px-6 py-2 rounded-full text-base font-medium transition-colors duration-200 border border-gray-300
                  ${activeTab === "courses"
                    ? "bg-[#2675EB] text-white shadow"
                    : "bg-white text-gray-800 hover:bg-gray-100"}
                `}
              >
                {t("courses.title")}
              </button>
              <button
                onClick={() => setActiveTab("top-centers")}
                className={`px-6 py-2 rounded-full text-base font-medium transition-colors duration-200 border border-gray-300
                  ${activeTab === "top-centers"
                    ? "bg-[#2675EB] text-white shadow"
                    : "bg-white text-gray-800 hover:bg-gray-100"}
                `}
              >
                {t("menu.topStudyCenters")}
              </button>
            </div>

            {/* Кнопка фильтров для мобильных устройств */}
            <button
              className="sm:hidden bg-blue-500 text-white p-2 rounded-lg"
              onClick={toggleSidebar}
              aria-label={isSidebarOpen ? t("common.closeFilters") : t("common.openFilters")}
            >
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Боковая панель с фильтрами */}
        <div
          className={`
              fixed inset-y-0 left-0 z-40 w-[60%] md:w-[50%] bg-white dark:bg-gray-800 p-4 shadow-lg transition-transform duration-300 ease-in-out transform
              ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
              md:relative md:translate-x-0 md:w-1/4 md:min-w-[250px] md:max-w-[300px] transition-colors duration-200`}
        >
          <div className="space-y-6 h-full overflow-y-auto">
            <div className="flex justify-between items-center">
              <h2 className="text-[#222] dark:text-white text-xl md:text-2xl font-medium transition-colors duration-200">
                {t("filters.title")}
              </h2>
              <button
                className="text-[#2675EB] text-sm md:text-base cursor-pointer"
                onClick={() => {
                  if (activeTab === "courses") {
                    setPriceRange({ min: 0, max: 5000000 });
                  } else {
                    setSearchQuery("");
                  }
                  // Здесь можно добавить сброс других фильтров
                }}
              >
                {t("filters.reset")}
              </button>
            </div>
            <hr className="border-gray-200 dark:border-gray-700 transition-colors duration-200" />

            {activeTab === "courses" && (
              <PriceRange 
                priceRange={priceRange} 
                setPriceRange={handlePriceRangeChange} 
              />
            )}

            {activeTab === "centers" && (
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-200 block mb-2 transition-colors duration-200">
                    {t("search.centerNameLabel")}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder={t("search.placeholder")}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg dark:bg-gray-900 dark:text-gray-100 dark:placeholder-gray-400 transition-colors duration-200"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      aria-label={t("search.placeholder")}
                    />
                    <Search
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 transition-colors duration-200"
                      size={20}
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-200 block mb-2 transition-colors duration-200">
                    {t("search.sort.label")}
                  </label>
                  <button
                    onClick={() => setSortAscending(!sortAscending)}
                    className="w-full flex items-center justify-between gap-2 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 dark:text-gray-100 transition-colors duration-200"
                    aria-label={t("search.sortByName")}
                  >
                    <span>{t("search.sortByName")}</span>
                    <ArrowUpDown size={20} aria-hidden="true" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Основной контент */}
        <div className="flex-1 p-4 md:p-6">
          {/* Заголовок */}
          <h2 className="text-2xl font-bold mb-4 dark:text-white transition-colors duration-200">
            {activeTab === "centers"
              ? t("menu.studyCenters")
              : activeTab === "courses"
              ? t("courses.title")
              : t("menu.topStudyCenters")}
          </h2>

          {/* Счетчик для центров */}
          {activeTab === "centers" && (
            <h3 className="text-lg font-medium mb-4 dark:text-gray-200 transition-colors duration-200">
              {t("center_count", { count: filteredCenters.length })}
            </h3>
          )}

          {isLoading ? (
            <div className="text-center py-10 dark:text-gray-200 transition-colors duration-200">{t("loading")}...</div>
          ) : (
            <div>
              <div
                className={
                  activeTab !== "top-centers"
                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                    : ""
                }
              >
                {activeTab === "centers" ? (
                  filteredCenters.map((center) => (
                    <div
                      key={center.id}
                      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200"
                    >
                      <div className="relative h-48">
                        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center gap-2">
                          {center.logo && <img
                            className="w-[80px] h-[95%] object-contain"
                            src={center.logo}
                            alt={center.name}
                          />}
                        </div>
                        <div className="absolute bottom-2 left-4 flex flex-wrap gap-2">
                          <span className="px-2 py-1 text-xs text-black dark:text-white bg-white/90 dark:bg-gray-900/80 rounded-full transition-colors duration-200">
                            {t("courses.title")}: {center.courses_count}
                          </span>
                        </div>
                      </div>

                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-medium text-sm md:text-base dark:text-white transition-colors duration-200">
                            {center.name}
                          </h3>
                        </div>
                        {center.phone && (
                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-1 transition-colors duration-200">
                            {t("contact.phone")}: {center.phone}
                          </p>
                        )}
                        {center.website && (
                          <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-200">
                            {t("contact.website")}: {center.website}
                          </p>
                        )}
                      </div>
                    </div>
                  ))
                ) : activeTab === "courses" ? (
                  coursesData.map((course) => (
                    <CourseItem key={course.id} course={mapCourse(course)} />
                  ))
                ) : (
                  <TopCenters />
                )}
              </div>

              {/* Pagination */}
              {activeTab !== "top-centers" && (
                <div className="flex justify-center items-center mt-8 space-x-2">
                  <button
                    className="px-4 py-2 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-lg border border-blue-200 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-200 disabled:opacity-50 disabled:hover:bg-white flex items-center space-x-1"
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    aria-label={t("pagination.previous")}
                  >
                    <i
                      className="bx bx-chevron-left text-xl"
                      aria-hidden="true"
                    ></i>
                    <span>{t("pagination.previous")}</span>
                  </button>

                  <div className="flex items-center space-x-2">
                    {currentPage > 3 && (
                      <>
                        <button
                          className="w-8 h-8 flex items-center justify-center rounded-lg bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 border border-blue-200 dark:border-blue-700 transition-colors duration-200"
                          onClick={() => setCurrentPage(1)}
                          aria-label={t("pagination.firstPage")}
                        >
                          1
                        </button>
                        {currentPage > 4 && (
                          <span className="text-gray-400 dark:text-gray-500">...</span>
                        )}
                      </>
                    )}

                    {Array.from(
                      { length: Math.min(5, totalPages) },
                      (_, i) => {
                        let page;
                        if (totalPages <= 5) {
                          page = i + 1;
                        } else if (currentPage <= 3) {
                          page = i + 1;
                        } else if (currentPage >= totalPages - 2) {
                          page = totalPages - 4 + i;
                        } else {
                          page = currentPage - 2 + i;
                        }

                        return (
                          <button
                            key={page}
                            className={`w-8 h-8 flex items-center justify-center rounded-lg transition-colors duration-200 ${
                              currentPage === page
                                ? "bg-blue-600 dark:bg-blue-500 text-white"
                                : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 border border-blue-200 dark:border-blue-700"
                            }`}
                            onClick={() => setCurrentPage(page)}
                            aria-label={t("pagination.page", { page })}
                            aria-current={
                              currentPage === page ? "page" : undefined
                            }
                          >
                            {page}
                          </button>
                        );
                      }
                    )}

                    {currentPage < totalPages - 2 && (
                      <>
                        {currentPage < totalPages - 3 && (
                          <span className="text-gray-400 dark:text-gray-500">...</span>
                        )}
                        <button
                          className="w-8 h-8 flex items-center justify-center rounded-lg bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 border border-blue-200 dark:border-blue-700 transition-colors duration-200"
                          onClick={() => setCurrentPage(totalPages)}
                          aria-label={t("pagination.lastPage")}
                        >
                          {totalPages}
                        </button>
                      </>
                    )}
                  </div>

                  <button
                    className="px-4 py-2 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-lg border border-blue-200 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-200 disabled:opacity-50 disabled:hover:bg-white flex items-center space-x-1"
                    onClick={() =>
                      setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    aria-label={t("pagination.next")}
                  >
                    <span>{t("pagination.next")}</span>
                    <i
                      className="bx bx-chevron-right text-xl"
                      aria-hidden="true"
                    ></i>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 