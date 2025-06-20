import { useState, useEffect } from "react";
import { Search, ArrowUpDown, Menu, X } from "lucide-react";
import axios from "axios";
import { useTranslation } from "react-i18next";
import PriceRange from "./PriceRange";
import CourseItem from "./CourseItem";
import CourseItemImage from "../assets/course-item.jpg";
import res from "../assets/res.png";

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
      const res = await axios.get(`https://api.crm.digital.uz/v1/courses?page=${currentPage}`);
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
      const res = await axios.get(`https://api.crm.digital.uz/v1/centers?page=${currentPage}`);
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
    <div className="relative">
      {/* Переключатель вкладок */}
      <div className="bg-white border-b sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab("centers")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeTab === "centers"
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {t("menu.studyCenters")}
              </button>
              <button
                onClick={() => setActiveTab("courses")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  activeTab === "courses"
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {t("courses.title")}
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
              fixed inset-y-0 left-0 z-40 w-[60%] md:w-[50%] bg-white p-4 shadow-lg transition-transform duration-300 ease-in-out transform
              ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
              md:relative md:translate-x-0 md:w-1/4 md:min-w-[250px] md:max-w-[300px]`}
        >
          <div className="space-y-6 h-full overflow-y-auto">
            <div className="flex justify-between items-center">
              <h2 className="text-[#222] text-xl md:text-2xl font-medium">
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
            <hr />

            {activeTab === "courses" && (
              <PriceRange 
                priceRange={priceRange} 
                setPriceRange={handlePriceRangeChange} 
              />
            )}

            {activeTab === "centers" && (
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-2">
                    {t("search.centerNameLabel")}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder={t("search.placeholder")}
                      className="w-full pl-10 pr-4 py-2 border rounded-lg"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      aria-label={t("search.placeholder")}
                    />
                    <Search
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                      size={20}
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 block mb-2">
                    {t("search.sort.label")}
                  </label>
                  <button
                    onClick={() => setSortAscending(!sortAscending)}
                    className="w-full flex items-center justify-between gap-2 px-4 py-2 border rounded-lg bg-white"
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
          <h2 className="text-2xl font-bold mb-4">
            {activeTab === "centers" ? t("menu.studyCenters") : t("courses.title")}
          </h2>

          {/* Счетчик для центров */}
          {activeTab === "centers" && (
            <h3 className="text-lg font-medium mb-4">
              {t("center_count", { count: filteredCenters.length })}
            </h3>
          )}

          {isLoading ? (
            <p className="text-center">{t("common.loading")}</p>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {activeTab === "centers" ? (
                // Рендер центров
                filteredCenters.map((center) => (
                  <div
                    key={center.id}
                    className="bg-white rounded-lg overflow-hidden border hover:shadow-lg transition-shadow"
                  >
                    <div className="relative h-48 bg-gradient-to-r from-blue-400 to-purple-500">
                      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center gap-2">
                        <img
                          className="w-[80px] h-[80%] object-contain"
                          src={center.logo || res}
                          alt={center.name}
                        />
                      </div>
                      <div className="absolute bottom-2 left-4 flex flex-wrap gap-2">
                        <span className="px-2 py-1 text-xs text-black bg-white/90 rounded-full">
                          {t("courses.title")}: {center.courses_count}
                        </span>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-sm md:text-base">
                          {center.name}
                        </h3>
                      </div>
                      {center.phone && (
                        <p className="text-sm text-gray-600 mb-1">
                          {t("contact.phone")}: {center.phone}
                        </p>
                      )}
                      {center.website && (
                        <p className="text-sm text-gray-600">
                          {t("contact.website")}: {center.website}
                        </p>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                // Рендер курсов
                coursesData.map((course) => (
                  <CourseItem key={course.id} course={mapCourse(course)} />
                ))
              )}
            </div>
          )}

          {/* Пагинация */}
          <div className="flex justify-center items-center mt-8 space-x-2">
            <button
              className="px-4 py-2 bg-white text-blue-600 rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors duration-200 disabled:opacity-50 disabled:hover:bg-white flex items-center space-x-1"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              aria-label={t("pagination.previous")}
            >
              <i className="bx bx-chevron-left text-xl" aria-hidden="true"></i>
              <span>{t("pagination.previous")}</span>
            </button>
            
            <div className="flex items-center space-x-2">
              {currentPage > 3 && (
                <>
                  <button
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-white text-gray-600 hover:bg-blue-50 border border-blue-200 transition-colors duration-200"
                    onClick={() => setCurrentPage(1)}
                    aria-label={t("pagination.firstPage")}
                  >
                    1
                  </button>
                  {currentPage > 4 && <span className="text-gray-400">...</span>}
                </>
              )}

              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
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
                        ? "bg-blue-600 text-white"
                        : "bg-white text-gray-600 hover:bg-blue-50 border border-blue-200"
                    }`}
                    onClick={() => setCurrentPage(page)}
                    aria-label={t("pagination.page", { page })}
                    aria-current={currentPage === page ? "page" : undefined}
                  >
                    {page}
                  </button>
                );
              })}

              {currentPage < totalPages - 2 && (
                <>
                  {currentPage < totalPages - 3 && <span className="text-gray-400">...</span>}
                  <button
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-white text-gray-600 hover:bg-blue-50 border border-blue-200 transition-colors duration-200"
                    onClick={() => setCurrentPage(totalPages)}
                    aria-label={t("pagination.lastPage")}
                  >
                    {totalPages}
                  </button>
                </>
              )}
            </div>

            <button
              className="px-4 py-2 bg-white text-blue-600 rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors duration-200 disabled:opacity-50 disabled:hover:bg-white flex items-center space-x-1"
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              aria-label={t("pagination.next")}
            >
              <span>{t("pagination.next")}</span>
              <i className="bx bx-chevron-right text-xl" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 