import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import axios from "axios";
import PriceRange from "./PriceRange";
import CourseItem from "./CourseItem";
import CourseItemImage from "../assets/course-item.jpg";
import { useTranslation } from "react-i18next";

export default function TipsFilter() {
  const { t } = useTranslation("global");

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [coursesData, setCoursesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const fetchCourses = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`https://api.crm.digital.uz/v1/courses?page=${currentPage}`);
      setCoursesData(res.data.data);
      setTotalPages(res.data.meta.last_page);
    } catch (error) {
      console.error("Ошибка при получении курсов:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [currentPage]);

  const mapCourse = (course) => ({
    id: course.id,
    title: course.category.name_uz,
    center: course.center?.name || "Неизвестно",
    price: course.price,
    duration: `${course.duration} oy`,
    format: course.type,
    name: course.name_uz || "",
    image: course.center?.logo || CourseItemImage,
    location: "Toshkent",
    fullLocation: "Toshkent, Uzbekistan",
    telegram: course.center?.telegram,
    number: course.center?.phone,
    website: course.center?.website,
  });

  return (
    <div className="relative">
      {/* Mobile toggle button */}
      <button
        className="absolute z-50 top-15 right-2 bg-blue-500 text-white p-3 rounded-full shadow-lg md:hidden"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="flex flex-col md:flex-row">
          <div
            className={`
              fixed inset-y-0 left-0 z-40 w-[60%] md:w-[50%] bg-white p-4 shadow-lg transition-transform duration-300 ease-in-out transform
              ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
              md:relative md:translate-x-0 md:w-1/4 md:min-w-[250px] md:max-w-[300px]`}
          >
            <div className="space-y-6 h-full overflow-y-auto">
              <div className="flex justify-between items-center">
                <h2 className="text-[#222] text-xl md:text-2xl font-medium">
                  {t("filters.sorting")}
                </h2>
                <p
                  className="text-[#2675EB] text-sm md:text-base cursor-pointer"
                  onClick={() => {
                    // В будущем можно сбросить фильтры
                  }}
                >
                  {t("filters.clean")}
                </p>
              </div>
              <hr />
              <PriceRange priceRange={{ min: 0, max: 5000000 }} setPriceRange={() => {}} />
              {/* Можно добавить фильтры позже */}
            </div>
          </div>
        </div>

        {/* Course List */}
        <div className="flex-1 mt-12 md:mt-0 p-4 md:p-6">
          <h2 className="text-2xl font-bold mb-4">Kurslar</h2>

          {isLoading ? (
            <p>Загрузка...</p>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {coursesData.map((course) => (
                <CourseItem key={course.id} course={mapCourse(course)} />
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="flex justify-center items-center mt-8 space-x-2">
            <button
              className="px-4 py-2 bg-white text-blue-600 rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors duration-200 disabled:opacity-50 disabled:hover:bg-white flex items-center space-x-1"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <i className="bx bx-chevron-left text-xl"></i>
              <span>Предыдущая</span>
            </button>
            
            <div className="flex items-center space-x-2">
              {currentPage > 3 && (
                <>
                  <button
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-white text-gray-600 hover:bg-blue-50 border border-blue-200 transition-colors duration-200"
                    onClick={() => setCurrentPage(1)}
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
            >
              <span>Следующая</span>
              <i className="bx bx-chevron-right text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
