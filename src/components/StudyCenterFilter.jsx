import { useState, useEffect } from "react";
import { Search, ArrowUpDown, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import res from "../assets/res.png";

function StudyCenterFilter() {
  const { t } = useTranslation("global");

  const [centers, setCenters] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortAscending, setSortAscending] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCenters = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          `https://api.crm.digital.uz/v1/centers?page=${currentPage}`
        );
        setCenters(res.data.data);
        setTotalPages(res.data.meta.last_page);
      } catch (error) {
        console.error(t("errors.fetchCenters"), error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCenters();
  }, [currentPage]);

  const filteredCenters = centers
    .filter((center) =>
      center.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      const comparison = a.name.localeCompare(b.name);
      return sortAscending ? comparison : -comparison;
    });

  return (
    <div className="">
      <header className="bg-white sticky top-0 z-50">
        <div className="container px-4">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="sm:hidden"
              aria-label={isSidebarOpen ? t("common.closeFilters") : t("common.openFilters")}
            >
              {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="flex items-center gap-4">
              <div className="relative hidden sm:block">
                <input
                  type="text"
                  placeholder={t("search.placeholder")}
                  className="w-[300px] md:w-[400px] pl-10 pr-4 py-2 border rounded-lg"
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
              <button
                onClick={() => setSortAscending(!sortAscending)}
                className="flex items-center gap-2 px-4 py-2 border rounded-lg"
                aria-label={t("search.sortByName")}
              >
                {t("search.sortByName")}
                <ArrowUpDown size={20} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-4 py-6">
        <h2 className="text-lg font-medium mb-4 text-gray-900 dark:text-white transition-colors duration-200">
          {t("center_count", { count: filteredCenters.length })}
        </h2>

        {isLoading ? (
          <p className="text-center text-gray-700 dark:text-gray-300 transition-colors duration-200">{t("common.loading")}</p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredCenters.map((center) => (
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
                      {t("contact.phoneLabel")}: {center.phone}
                    </p>
                  )}
                  {center.website && (
                    <p className="text-sm text-gray-600">
                      {t("contact.website")}: {center.website}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="flex justify-center items-center mt-8 space-x-2">
          <button
            className="px-4 py-2 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 rounded-lg border border-blue-200 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-200 disabled:opacity-50 disabled:hover:bg-white flex items-center space-x-1"
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
                  className="w-8 h-8 flex items-center justify-center rounded-lg bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 border border-blue-200 dark:border-blue-700 transition-colors duration-200"
                  onClick={() => setCurrentPage(1)}
                  aria-label={t("pagination.firstPage")}
                >
                  1
                </button>
                {currentPage > 4 && <span className="text-gray-400 dark:text-gray-500">...</span>}
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
                      : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 border border-blue-200 dark:border-blue-700"
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
                {currentPage < totalPages - 3 && <span className="text-gray-400 dark:text-gray-500">...</span>}
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
  );
}

export default StudyCenterFilter;
