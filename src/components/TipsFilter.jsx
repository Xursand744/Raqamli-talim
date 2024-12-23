import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import PriceRange from "./PriceRange";
import CourseItem from "./CourseItem";
import CourseItemImage from "../assets/course-item.jpg";

export default function TipsFilter() {
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
    },
    {
      id: 2,
      title: "UI/UX dizayn",
      center: "Techno World",
      price: 3000000,
      duration: "4 oy",
      name: "Create beautiful websites from the scratch",
      format: "Oflayn",
      location: "Tashkent",
      image: CourseItemImage,
    },
    {
      id: 3,
      title: "Mobile dasturlash",
      center: "Najot ta'lim",
      price: 3500000,
      duration: "5 oy",
      format: "Gibrid",
      location: "Tashkent",
      image: CourseItemImage,
      name: "Create beautiful websites from the scratch",
    },
    {
      id: 4,
      title: "Data Science",
      center: "Mohir dev",
      price: 4000000,
      duration: "6 oy",
      location: "Fergana",
      format: "Onlayn",
      name: "Create beautiful websites from the scratch",
      image: CourseItemImage,
    },

    {
      id: 5,
      title: "Data Science",
      center: "Mohir dev",
      price: 4000000,
      duration: "6 oy",
      location: "Fergana",
      format: "Onlayn",
      name: "Create beautiful websites from the scratch",
      image: CourseItemImage,
    },

    {
      id: 6,
      title: "Data Science",
      center: "Mohir dev",
      price: 4000000,
      duration: "6 oy",
      location: "Fergana",
      format: "Onlayn",
      name: "Create beautiful websites from the scratch",
      image: CourseItemImage,
    },

    {
      id: 7,
      title: "Data Science",
      center: "Mohir dev",
      price: 4000000,
      duration: "6 oy",
      location: "Fergana",
      format: "Onlayn",
      name: "Create beautiful websites from the scratch",
      image: CourseItemImage,
    },

    {
      id: 8,
      title: "Data Science",
      center: "Mohir dev",
      price: 4000000,
      duration: "6 oy",
      location: "Fergana",
      format: "Onlayn",
      name: "Create beautiful websites from the scratch",
      image: CourseItemImage,
    },

    {
      id: 9,
      title: "Data Science",
      center: "Mohir dev",
      price: 4000000,
      duration: "6 oy",
      location: "Fergana",
      format: "Onlayn",
      name: "Create beautiful websites from the scratch",
      image: CourseItemImage,
    },

    {
      id: 10,
      title: "Backend",
      center: "Mohir dev",
      price: 4000000,
      duration: "6 oy",
      location: "Fergana",
      format: "Onlayn",
      name: "Create beautiful websites from the scratch",
      image: CourseItemImage,
    },
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

  return (
    <div className="flex gap-8">
      <div className="w-full max-w-sm bg-white p-4 rounded-lg shadow">
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-[#222] text-[28px] font-medium">Saralash</h2>

            <p
              className="text-[#2675EB] text-[18px] cursor-pointer"
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
            <div className="space-y-2">
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
            <div className="space-y-2">
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
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-4">Kurslar</h2>
        <div className="flex flex-wrap gap-[10px]">
          {filteredAllCourses.map((course) => (
            <CourseItem key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
