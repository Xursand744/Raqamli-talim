import React, { useState, useMemo } from "react";
import { Search, Menu, X } from 'lucide-react';
import PriceRange from "./PriceRange";
import CourseItem from "./CourseItem";
import CourseItemImage from "../assets/course-item.jpg";

export default function TipsFilter() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [centerSearch, setCenterSearch] = useState("");
  const [courseSearch, setCourseSearch] = useState("");
  const [selectedCenters, setSelectedCenters] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [selectedDurations, setSelectedDurations] = useState([]);
  const [selectedFormats, setSelectedFormats] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 5000000 });

  const centers = [
    { id: 1, name: "PDP Academy", count: 77 },
    { id: 2, name: "Techno World", count: 89 },
    { id: 3, name: "Najot ta'lim", count: 42 },
    { id: 4, name: "Mohir dev", count: 34 },
  ];

  const courses = [
    { id: 1, name: "Dizayn", count: 23 },
    { id: 2, name: "Frontend", count: 14 },
    { id: 3, name: "Backend", count: 17 },
    { id: 4, name: "Project managment", count: 8 },
  ];

  const durations = [
    { id: 1, name: "1 oyggacha", count: 12 },
    { id: 2, name: "1-3 oy", count: 23 },
    { id: 3, name: "3-6 oy", count: 16 },
    { id: 4, name: "6 oydan ko'p", count: 8 },
  ];

  const formats = [
    { id: 1, name: "Onlayn", count: 12 },
    { id: 2, name: "Oflayn", count: 23 },
    { id: 3, name: "Gibrid", count: 16 },
  ];

  const allCourses = [
    {
      id: 1,
      title: "Web dasturlash",
      center: "PDP Academy",
      price: 2500000,
      duration: "3 oy",
      format: "Onlayn",
      name: "Create beautiful websites from the scratch",
      image: CourseItemImage,
      location: "Tashkent",
      fullLocation: "Toshkent, Mirzo-Ulugbek, Yassi 11",
      telegram: "t.me/profiedu.uz",
      number: "+998 99 999 99 99",
      website: "profiedu.uz",
    },
    {
      id: 2,
      title: "Web dasturlash",
      center: "PDP Academy",
      price: 2500000,
      duration: "3 oy",
      format: "Onlayn",
      name: "Create beautiful websites from the scratch",
      image: CourseItemImage,
      location: "Tashkent",
      fullLocation: "Toshkent, Mirzo-Ulugbek, Yassi 11",
      telegram: "t.me/profiedu.uz",
      number: "+998 99 999 99 99",
      website: "profiedu.uz",
    },
    {
      id: 3,
      title: "Web dasturlash",
      center: "PDP Academy",
      price: 2500000,
      duration: "3 oy",
      format: "Onlayn",
      name: "Create beautiful websites from the scratch",
      image: CourseItemImage,
      location: "Tashkent",
      fullLocation: "Toshkent, Mirzo-Ulugbek, Yassi 11",
      telegram: "t.me/profiedu.uz",
      number: "+998 99 999 99 99",
      website: "profiedu.uz",
    },
    {
      id: 4,
      title: "Web dasturlash",
      center: "PDP Academy",
      price: 2500000,
      duration: "3 oy",
      format: "Onlayn",
      name: "Create beautiful websites from the scratch",
      image: CourseItemImage,
      location: "Tashkent",
      fullLocation: "Toshkent, Mirzo-Ulugbek, Yassi 11",
      telegram: "t.me/profiedu.uz",
      number: "+998 99 999 99 99",
      website: "profiedu.uz",
    },
    {
      id: 5,
      title: "Web dasturlash",
      center: "PDP Academy",
      price: 2500000,
      duration: "3 oy",
      format: "Onlayn",
      name: "Create beautiful websites from the scratch",
      image: CourseItemImage,
      location: "Tashkent",
      fullLocation: "Toshkent, Mirzo-Ulugbek, Yassi 11",
      telegram: "t.me/profiedu.uz",
      number: "+998 99 999 99 99",
      website: "profiedu.uz",
    },
    {
      id: 6,
      title: "Web dasturlash",
      center: "PDP Academy",
      price: 2500000,
      duration: "3 oy",
      format: "Onlayn",
      name: "Create beautiful websites from the scratch",
      image: CourseItemImage,
      location: "Tashkent",
      fullLocation: "Toshkent, Mirzo-Ulugbek, Yassi 11",
      telegram: "t.me/profiedu.uz",
      number: "+998 99 999 99 99",
      website: "profiedu.uz",
    },
    {
      id: 7,
      title: "Web dasturlash",
      center: "PDP Academy",
      price: 2500000,
      duration: "3 oy",
      format: "Onlayn",
      name: "Create beautiful websites from the scratch",
      image: CourseItemImage,
      location: "Tashkent",
      fullLocation: "Toshkent, Mirzo-Ulugbek, Yassi 11",
      telegram: "t.me/profiedu.uz",
      number: "+998 99 999 99 99",
      website: "profiedu.uz",
    },
    {
      id: 8,
      title: "Web dasturlash",
      center: "PDP Academy",
      price: 2500000,
      duration: "3 oy",
      format: "Onlayn",
      name: "Create beautiful websites from the scratch",
      image: CourseItemImage,
      location: "Tashkent",
      fullLocation: "Toshkent, Mirzo-Ulugbek, Yassi 11",
      telegram: "t.me/profiedu.uz",
      number: "+998 99 999 99 99",
      website: "profiedu.uz",
    },
    {
      id: 9,
      title: "Web dasturlash",
      center: "PDP Academy",
      price: 2500000,
      duration: "3 oy",
      format: "Onlayn",
      name: "Create beautiful websites from the scratch",
      image: CourseItemImage,
      location: "Tashkent",
      fullLocation: "Toshkent, Mirzo-Ulugbek, Yassi 11",
      telegram: "t.me/profiedu.uz",
      number: "+998 99 999 99 99",
      website: "profiedu.uz",
    },
    {
      id: 10,
      title: "Web dasturlash",
      center: "PDP Academy",
      price: 2500000,
      duration: "3 oy",
      format: "Onlayn",
      name: "Create beautiful websites from the scratch",
      image: CourseItemImage,
      location: "Tashkent",
      fullLocation: "Toshkent, Mirzo-Ulugbek, Yassi 11",
      telegram: "t.me/profiedu.uz",
      number: "+998 99 999 99 99",
      website: "profiedu.uz",
    },
    // ... (include all other courses from the original data)
  ];

  const filteredCenters = useMemo(() => {
    return centers.filter((center) =>
      center.name.toLowerCase().includes(centerSearch.toLowerCase())
    );
  }, [centerSearch]);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) =>
      course.name.toLowerCase().includes(courseSearch.toLowerCase())
    );
  }, [courseSearch]);

  const filteredAllCourses = useMemo(() => {
    return allCourses.filter((course) => {
      const centerMatch =
        selectedCenters.length === 0 ||
        selectedCenters.includes(
          centers.find((c) => c.name === course.center)?.id
        );
      const courseMatch =
        selectedCourses.length === 0 ||
        selectedCourses.includes(
          courses.find((c) => c.name === course.title.split(" ")[0])?.id
        );
      const durationMatch =
        selectedDurations.length === 0 ||
        selectedDurations.includes(
          durations.find((d) => d.name === course.duration)?.id
        );
      const formatMatch =
        selectedFormats.length === 0 ||
        selectedFormats.includes(
          formats.find((f) => f.name === course.format)?.id
        );
      const priceMatch =
        course.price >= priceRange.min && course.price <= priceRange.max;
      return (
        centerMatch && courseMatch && durationMatch && formatMatch && priceMatch
      );
    });
  }, [
    selectedCenters,
    selectedCourses,
    selectedDurations,
    selectedFormats,
    priceRange,
    allCourses,
  ]);

  const handleCenterToggle = (centerId) => {
    setSelectedCenters((prev) =>
      prev.includes(centerId)
        ? prev.filter((id) => id !== centerId)
        : [...prev, centerId]
    );
  };

  const handleCourseToggle = (courseId) => {
    setSelectedCourses((prev) =>
      prev.includes(courseId)
        ? prev.filter((id) => id !== courseId)
        : [...prev, courseId]
    );
  };

  const handleDurationToggle = (durationId) => {
    setSelectedDurations((prev) =>
      prev.includes(durationId)
        ? prev.filter((id) => id !== durationId)
        : [...prev, durationId]
    );
  };

  const handleFormatToggle = (formatId) => {
    setSelectedFormats((prev) =>
      prev.includes(formatId)
        ? prev.filter((id) => id !== formatId)
        : [...prev, formatId]
    );
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative">
      {/* Mobile sidebar toggle */}
      <button
        className="absolute z-50 top-15 right-2 bg-blue-500 text-white p-3 rounded-full shadow-lg md:hidden"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <div
          className={`
            fixed inset-y-0 left-0 z-40 w-[60%] md:w-[50%] bg-white p-4 shadow-lg transition-transform duration-300 ease-in-out transform
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
            md:relative md:translate-x-0 md:w-1/4 md:min-w-[250px] md:max-w-[300px]
          `}
        >
          <div className="space-y-6 h-full overflow-y-auto">
            <div className="flex justify-between items-center">
              <h2 className="text-[#222] text-xl md:text-2xl font-medium">Saralash</h2>
              <p
                className="text-[#2675EB] text-sm md:text-base cursor-pointer"
                id="clean-filters"
                onClick={() => {
                  setCenterSearch("");
                  setCourseSearch("");
                  setSelectedCenters([]);
                  setSelectedCourses([]);
                  setSelectedDurations([]);
                  setSelectedFormats([]);
                  setPriceRange({ min: 0, max: 5000000 });
                }}
              >
                Tozalash
              </p>
            </div>

            <hr />

            <PriceRange priceRange={priceRange} setPriceRange={setPriceRange} />

            {/* Educational Centers */}
            <div>
              <h3 className="font-medium mb-2">O'quv markaz bo'yicha</h3>
              <div className="relative mb-2">
                <input
                  type="text"
                  value={centerSearch}
                  onChange={(e) => setCenterSearch(e.target.value)}
                  placeholder="O'quv markaz nomi"
                  className="w-full p-2 pl-8 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                />
                <Search className="w-4 h-4 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {filteredCenters.map((center) => (
                  <label
                    key={center.id}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCenters.includes(center.id)}
                      onChange={() => handleCenterToggle(center.id)}
                      className="sr-only peer"
                    />
                    <div className="w-5 h-5 flex items-center justify-center border-2 border-gray-300 rounded-lg peer-checked:border-blue-500 peer-checked:bg-blue-500 transition">
                      {selectedCenters.includes(center.id) && (
                        <svg
                          className="w-3 h-3 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </div>
                    <span className="text-sm flex-1">{center.name}</span>
                    <span className="text-sm text-gray-500">{center.count}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Course Directions */}
            <div>
              <h3 className="font-medium mb-2">O'quv kurs yo'nalishi</h3>
              <div className="relative mb-2">
                <input
                  type="text"
                  value={courseSearch}
                  onChange={(e) => setCourseSearch(e.target.value)}
                  placeholder="O'quv kurs"
                  className="w-full p-2 pl-8 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                />
                <Search className="w-4 h-4 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <div className="space-y-2 max-h-40 overflow-y-auto">
                {filteredCourses.map((course) => (
                  <label
                    key={course.id}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedCourses.includes(course.id)}
                      onChange={() => handleCourseToggle(course.id)}
                      className="sr-only peer"
                    />
                    <div className="w-5 h-5 flex items-center justify-center border-2 border-gray-300 rounded-lg peer-checked:border-blue-500 peer-checked:bg-blue-500 transition">
                      {selectedCourses.includes(course.id) && (
                        <svg
                          className="w-3 h-3 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </div>
                    <span className="text-sm flex-1">{course.name}</span>
                    <span className="text-sm text-gray-500">{course.count}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Course Durations */}
            <div>
              <h3 className="font-medium mb-2">Kurslar davomiyligi</h3>
              <div className="space-y-2">
                {durations.map((duration) => (
                  <label
                    key={duration.id}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedDurations.includes(duration.id)}
                      onChange={() => handleDurationToggle(duration.id)}
                      className="sr-only peer"
                    />
                    <div className="w-5 h-5 flex items-center justify-center border-2 border-gray-300 rounded-lg peer-checked:border-blue-500 peer-checked:bg-blue-500 transition">
                      {selectedDurations.includes(duration.id) && (
                        <svg
                          className="w-3 h-3 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </div>
                    <span className="text-sm flex-1">{duration.name}</span>
                    <span className="text-sm text-gray-500">
                      {duration.count}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Course Formats */}
            <div>
              <h3 className="font-medium mb-2">Kurslar formati</h3>
              <div className="space-y-2">
                {formats.map((format) => (
                  <label
                    key={format.id}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedFormats.includes(format.id)}
                      onChange={() => handleFormatToggle(format.id)}
                      className="sr-only peer"
                    />
                    <div className="w-5 h-5 flex items-center justify-center border-2 border-gray-300 rounded-lg peer-checked:border-blue-500 peer-checked:bg-blue-500 transition">
                      {selectedFormats.includes(format.id) && (
                        <svg
                          className="w-3 h-3 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </div>
                    <span className="text-sm flex-1">{format.name}</span>
                    <span className="text-sm text-gray-500">{format.count}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Course List */}
        <div className="flex-1 mt-12 md:mt-0 p-4 md:p-6">
          <h2 className="text-2xl font-bold mb-4">Kurslar</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredAllCourses.map((course) => (
              <CourseItem key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

