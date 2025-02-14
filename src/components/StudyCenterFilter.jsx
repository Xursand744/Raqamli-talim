import React, { useState, useEffect } from "react";
import { Menu, X, Search, ChevronDown, ArrowUpDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import res from "../assets/res.png";

function Study() {
  const { t } = useTranslation("global");

  const [initialCourses, setInitialCourses] = useState([]);

  useEffect(() => {
    const initialCourses = [
      ...Array(30)
        .fill(null)
        .map((_, index) => ({
          id: index + 1,
          title: t("pdp_academy"),
          price: t("price_from", { amount: "1,500,000" }),
          tags: [
            t("frontend"),
            t("backend"),
            t("data_analytic"),
            t("design"),
            t("project_management"),
          ]
            .sort(() => 0.5 - Math.random())
            .slice(0, 2),
          location: t("tashkent"),
          status:
            Math.random() > 0.5 ? [t("offline"), t("online")] : [t("offline")],
          design: "+5",
        })),
    ];

    setInitialCourses(initialCourses);
  }, []);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [courses, setCourses] = useState(initialCourses);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    design: false,
    frontend: false,
    backend: false,
    projectManagement: false,
    duration1: false,
    duration2: false,
    duration3: false,
    duration4: false,
    online: false,
    offline: false,
    hybrid: false,
  });
  const [sortAscending, setSortAscending] = useState(true);

  useEffect(() => {
    let filteredCourses = [...initialCourses];

    // Apply search filter
    if (searchQuery.trim()) {
      filteredCourses = filteredCourses.filter(
        (course) =>
          course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.tags.some((tag) =>
            tag.toLowerCase().includes(searchQuery.toLowerCase())
          )
      );
    }

    // Apply tag filters
    const activeTagFilters = Object.entries(filters).filter(
      ([key, value]) =>
        value &&
        ["frontend", "design", "backend", "projectManagement"].includes(key)
    );

    if (activeTagFilters.length > 0) {
      filteredCourses = filteredCourses.filter((course) =>
        activeTagFilters.some(([filter]) => {
          const filterTag =
            filter === "projectManagement"
              ? t("project_management")
              : t(filter);
          return course.tags.includes(filterTag);
        })
      );
    }

    // Apply format filters
    const activeFormatFilters = ["online", "offline", "hybrid"].filter(
      (format) => filters[format]
    );

    if (activeFormatFilters.length > 0) {
      filteredCourses = filteredCourses.filter((course) =>
        activeFormatFilters.some((format) => course.status.includes(t(format)))
      );
    }

    // Apply duration filters
    const activeDurationFilters = Object.entries(filters).filter(
      ([key, value]) => value && key.startsWith("duration")
    );

    if (activeDurationFilters.length > 0) {
      // Here you would filter based on actual course duration data
      // For now just reducing results as example
      filteredCourses = filteredCourses.slice(
        0,
        Math.floor(filteredCourses.length / 2)
      );
    }

    // Apply sorting
    filteredCourses.sort((a, b) => {
      const comparison = a.title.localeCompare(b.title);
      return sortAscending ? comparison : -comparison;
    });

    setCourses(filteredCourses);
  }, [filters, sortAscending, searchQuery, t]);

  const handleFilterChange = (filter) => {
    setFilters((prev) => ({ ...prev, [filter]: !prev[filter] }));
  };

  const clearFilters = () => {
    setFilters({
      design: false,
      frontend: false,
      backend: false,
      projectManagement: false,
      duration1: false,
      duration2: false,
      duration3: false,
      duration4: false,
      online: false,
      offline: false,
      hybrid: false,
    });
    setSearchQuery("");
    setSortAscending(true);
  };

  return (
    <div className="">
      <header className="bg-white sticky top-0 z-50">
        <div className="container px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="sm:hidden"
              >
                {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            <div className="flex items-center gap-4">
              <div className="relative hidden sm:block">
                <input
                  type="text"
                  placeholder={t("search_placeholder")}
                  className="w-[300px] md:w-[400px] pl-10 pr-4 py-2 border rounded-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>
              <button
                onClick={() => setSortAscending(!sortAscending)}
                className="flex items-center gap-2 px-4 py-2 border rounded-lg"
              >
                {t("sort_by_name")}
                <ArrowUpDown size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-4 py-6">
        <div className="flex gap-6">
          <aside
            className={`border fixed sm:relative top-0 lg:-top-[77px] left-0 h-[calc(100vh-64px)] sm:h-auto w-64 bg-white p-4 border-r transform transition-transform duration-200 ease-in-out z-40  ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            } sm:translate-x-0  overflow-y-auto`}
          >
            <div className="space-y-6 sticky">
              <div className="justify-between border-b pb-5 items-center mb-4 block">
                <h3 className="text-[20px] font-medium">{t("sorting")}</h3>
                <button
                  onClick={clearFilters}
                  className="px-3 py-1 text-blue-400 rounded-full text-sm"
                >
                  {t("clear")}
                </button>
              </div>

              <div>
                <h2 className="font-medium mb-3">{t("course_type")}</h2>
                <div className="space-y-2">
                  {["design", "frontend", "backend", "projectManagement"].map(
                    (key) => (
                      <label className="flex items-center gap-2" key={key}>
                        <input
                          type="checkbox"
                          className="rounded"
                          checked={filters[key]}
                          onChange={() => handleFilterChange(key)}
                        />
                        <span>
                          {t(
                            key === "projectManagement"
                              ? "project_management"
                              : key
                          )}
                        </span>
                      </label>
                    )
                  )}
                </div>
              </div>

              <div>
                <h2 className="font-medium mb-3">{t("course_duration")}</h2>
                <div className="space-y-2">
                  {["duration1", "duration2", "duration3", "duration4"].map(
                    (key) => (
                      <label className="flex items-center gap-2" key={key}>
                        <input
                          type="checkbox"
                          className="rounded"
                          checked={filters[key]}
                          onChange={() => handleFilterChange(key)}
                        />
                        <span>{t(key)}</span>
                      </label>
                    )
                  )}
                </div>
              </div>

              <div>
                <h2 className="font-medium mb-3">{t("course_format")}</h2>
                <div className="space-y-2">
                  {["online", "offline", "hybrid"].map((key) => (
                    <label className="flex items-center gap-2" key={key}>
                      <input
                        type="checkbox"
                        className="rounded"
                        checked={filters[key]}
                        onChange={() => handleFilterChange(key)}
                      />
                      <span>{t(key)}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                onClick={clearFilters}
                className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {t("view_courses", { count: courses.length })}
              </button>
            </div>
          </aside>

          <main className="flex-1 min-w-0">
            <h2 className="text-lg font-medium mb-4">
              {t("center_count", { count: courses.length })}
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-lg overflow-hidden border hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48 bg-gradient-to-r from-blue-400 to-purple-500">
                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center gap-2">
                      <img className="w-[80px] h-[80%]" src={res} alt="" />
                    </div>
                    <div className="absolute bottom-2 left-4 flex flex-wrap gap-2">
                      <span className="px-2 py-1 text-xs text-black bg-white/90 rounded-full">
                        {course.location}
                      </span>
                      {course.status.map((status, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 text-xs text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                        >
                          {status}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">{course.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      <span className="text-blue-700">{t("courses")}:</span>{" "}
                      {course.price}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {course.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-[#F0F3FF] rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 sm:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
}

export default Study;
