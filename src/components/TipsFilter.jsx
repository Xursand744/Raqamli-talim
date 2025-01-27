
import React, { useState, useMemo } from "react";
import { Search, Menu, X } from "lucide-react";
import PriceRange from "./PriceRange";
import CourseItem from "./CourseItem";
import CourseItemImage from "../assets/course-item.jpg";
import { useTranslation } from "react-i18next";

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

  const { t } = useTranslation("global");

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
                    setCenterSearch("");
                    setCourseSearch("");
                    setSelectedCenters([]);
                    setSelectedCourses([]);
                    setSelectedDurations([]);
                    setSelectedFormats([]);
                    setPriceRange({ min: 0, max: 5000000 });
                  }}
                >
                  {t("filters.clean")}
                </p>
              </div>
              <hr />
              <PriceRange
                priceRange={priceRange}
                setPriceRange={setPriceRange}
              />
              <div>
                <h3 className="font-medium mb-2">
                  {t("filters.educationalCenters")}
                </h3>
                <div className="relative mb-2">
                  <input
                    type="text"
                    value={centerSearch}
                    onChange={(e) => setCenterSearch(e.target.value)}
                    placeholder={t("filters.centerName")}
                    className="w-full p-2 pl-8 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                  />
                  <Search className="w-4 h-4 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                <ul className="space-y-1">
                  {centers
                    .filter((center) =>
                      center.name
                        .toLowerCase()
                        .includes(centerSearch.toLowerCase())
                    )
                    .map((center) => (
                      <li key={center.id}>
                        <label className="inline-flex items-center space-x-2">
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
                          <span className="text-sm text-gray-500">
                            {center.count}
                          </span>
                        </label>
                      </li>
                    ))}
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">
                  {t("filters.courseDirection")}
                </h3>
                <div className="relative mb-2">
                  <input
                    type="text"
                    value={courseSearch}
                    onChange={(e) => setCourseSearch(e.target.value)}
                    placeholder={t("filters.courseName")}
                    className="w-full p-2 pl-8 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
                  />
                  <Search className="w-4 h-4 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                <ul className="space-y-1">
                  {courses
                    .filter((course) =>
                      course.name
                        .toLowerCase()
                        .includes(courseSearch.toLowerCase())
                    )
                    .map((course) => (
                      <li key={course.id}>
                        <label className="inline-flex items-center space-x-2">
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
                          <span className="text-sm text-gray-500">
                            {course.count}
                          </span>
                         
                        </label>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

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





// -------------------------------------------------------








// import { useState, useEffect } from "react"
// import { Search, MapPin, ChevronDown, ChevronUp } from "lucide-react"
// import CourseItemImage from "../assets/course-item.jpg";
// import Log from"../assets/res.png" 

// const courses = [
//   {
//     id: 1,
//     title: "Create beautiful websites from the scratch",
//     price: 90000,
//     duration: "2 oy",
//     location: "Tashkent",
//     category: "Frontend",
//     institution: "PDP Academy",
//     rating: 4.8,
//     format: "Online",
//   },
//   {
//     id: 2,
//     title: "Data Analytics fundamentals",
//     price: 5000000,
//     duration: "2 oy",
//     location: "Samarkand",
//     category: "Data Analytics",
//     institution: "PDP Academy",
//     rating: 4.7,
//     format: "Offline",
//   },
//   {
//     id: 3,
//     title: "Backend development with Node.js",
//     price: 90000,
//     duration: "2 oy",
//     location: "Fergana",
//     category: "Backend",
//     institution: "Techno World",
//     rating: 4.9,
//     format: "Gibrid",
//   },
//   {
//     id: 4,
//     title: "Mobile App Development",
//     price: 5000000,
//     duration: "3 oy",
//     location: "Tashkent",
//     category: "Mobile",
//     institution: "Najot ta'lim",
//     rating: 4.6,
//     format: "Online",
//   },
//   {
//     id: 5,
//     title: "UI/UX Design Masterclass",
//     price: 90000,
//     duration: "2 oy",
//     location: "Samarkand",
//     category: "Design",
//     institution: "PDP Academy",
//     rating: 4.8,
//     format: "Offline",
//   },
//   {
//     id: 6,
//     title: "Python for Data Science",
//     price: 5000000,
//     duration: "2 oy",
//     location: "Fergana",
//     category: "Data Science",
//     institution: "Mohir dev",
//     rating: 4.7,
//     format: "Online",
//   },
//   {
//     id: 7,
//     title: "Advanced JavaScript Course",
//     price: 900000,
//     duration: "2 oy",
//     location: "Tashkent",
//     category: "Frontend",
//     institution: "PDP Academy",
//     rating: 4.9,
//     format: "Gibrid",
//   },
//   {
//     id: 8,
//     title: "DevOps Engineering",
//     price: 5000000,
//     duration: "3 oy",
//     location: "Samarkand",
//     category: "DevOps",
//     institution: "Techno World",
//     rating: 4.8,
//     format: "Offline",
//   },
//   {
//     id: 9,
//     title: "Full Stack Web Development",
//     price: 5000000,
//     duration: "6 oy",
//     location: "Tashkent",
//     category: "Fullstack",
//     institution: "PDP Academy",
//     rating: 4.9,
//     format: "Gibrid",
//   },
// ]



// export default function CourseListing() {
//   const [searchQuery, setSearchQuery] = useState("")
//   const [priceRange, setPriceRange] = useState([2500000, 5000000])
//   const [selectedInstitutions, setSelectedInstitutions] = useState([])
//   const [selectedDurations, setSelectedDurations] = useState([])
//   const [selectedFormats, setSelectedFormats] = useState([])
//   const [selectedCategories, setSelectedCategories] = useState([])
//   const [selectedLocations, setSelectedLocations] = useState([])
//   const [selectedRatings, setSelectedRatings] = useState([])
//   const [filteredCourses, setFilteredCourses] = useState(courses)
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false)

//   useEffect(() => {
//     const filtered = courses.filter((course) => {
//       const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase())
//       const matchesPrice = course.price >= priceRange[0] && course.price <= priceRange[1]
//       const matchesInstitution = selectedInstitutions.length === 0 || selectedInstitutions.includes(course.institution)
//       const matchesDuration = selectedDurations.length === 0 || selectedDurations.includes(course.duration)
//       const matchesFormat = selectedFormats.length === 0 || selectedFormats.includes(course.format)
//       const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(course.category)
//       const matchesLocation = selectedLocations.length === 0 || selectedLocations.includes(course.location)
//       const matchesRating =
//         selectedRatings.length === 0 || selectedRatings.some((rating) => course.rating >= Number.parseFloat(rating))

//       return (
//         matchesSearch &&
//         matchesPrice &&
//         matchesInstitution &&
//         matchesDuration &&
//         matchesFormat &&
//         matchesCategory &&
//         matchesLocation &&
//         matchesRating
//       )
//     })
//     setFilteredCourses(filtered)
//   }, [
//     searchQuery,
//     priceRange,
//     selectedInstitutions,
//     selectedDurations,
//     selectedFormats,
//     selectedCategories,
//     selectedLocations,
//     selectedRatings,
//   ])

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen)
//   }

//   const handleCategoryChange = (category) => {
//     setSelectedCategories((prev) =>
//       prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
//     )
//   }

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
//       {/* Sidebar Toggle Button (visible on mobile) */}
//       <button
//         className="md:hidden  w-10 h-10 mt-4 z-50 bg-blue-600 text-white p-2 rounded-full shadow-lg"
//         onClick={toggleSidebar}
//       >
//         {isSidebarOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
//       </button>

//       {/* Enhanced Sidebar */}
//       <div
//         className={`w-full md:w-72 bg-white border-r overflow-y-auto transition-all duration-300 ease-in-out ${isSidebarOpen ? "h-screen fixed z-40" : "h-0 md:h-auto"} md:relative md:h-auto`}
//       >
//         <div className="p-6 mt-20 md:mt-0 space-y-6">
//           {/* Price Range */}
//           <div className="border-b pb-6">
//             <h3 className="font-medium mb-3">Kurslar narx oralig'i</h3>
//             <div className="space-y-4">
//               <input
//                 type="range"
//                 min="2500000"
//                 max="5000000"
//                 value={priceRange[1]}
//                 onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
//                 className="w-full accent-blue-600"
//               />
//               <div className="flex justify-between text-sm">
//                 <input
//                   type="text"
//                   value={priceRange[0].toLocaleString()}
//                   className="w-24 p-2 border rounded"
//                   readOnly
//                 />
//                 <input
//                   type="text"
//                   value={priceRange[1].toLocaleString()}
//                   className="w-24 p-2 border rounded"
//                   readOnly
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Institutions */}
//           <div className="border-b pb-6">
//             <h3 className="font-medium mb-3">O'quv markazi bo'yicha</h3>
//             <div className="space-y-2">
//               <div className="relative">
//                 <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
//                 <input type="text" placeholder="O'quv markazi nomi" className="pl-9 w-full p-2 border rounded" />
//               </div>
//               {["PDP Academy", "Techno World", "Najot ta'lim", "Mohir dev"].map((institution) => (
//                 <label key={institution} className="flex items-center space-x-2">
//                   <input
//                     type="checkbox"
//                     className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//                     onChange={(e) => {
//                       setSelectedInstitutions((prev) =>
//                         e.target.checked ? [...prev, institution] : prev.filter((i) => i !== institution),
//                       )
//                     }}
//                     checked={selectedInstitutions.includes(institution)}
//                   />
//                   <span>{institution}</span>
//                 </label>
//               ))}
//             </div>
//           </div>

        
//           {/* Course Category */}
//           <div className="border-b pb-6">
//             <h3 className="font-medium mb-3">Kurs yo'nalishi</h3>
//             <div className="space-y-2">
//               {["Frontend", "Backend", "Mobile", "Design", "Project managment" ].map(
//                 (category) => (
//                   <label key={category} className="flex items-center space-x-2">
//                     <input
//                       type="checkbox"
//                       className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//                       onChange={() => handleCategoryChange(category)}
//                       checked={selectedCategories.includes(category)}
//                     />
//                     <span>{category}</span>
//                   </label>
//                 ),
//               )}
//             </div>
//           </div>

//             {/* Course Duration */}
//             <div className="border-b pb-6">
//             <h3 className="font-medium mb-3">Kurslar davomiyligi</h3>
//             <div className="space-y-2">
//               {["1 oygacha", "1-3 oy", "3-6 oy", "6 oydan ko'p"].map((duration) => (
//                 <label key={duration} className="flex items-center space-x-2">
//                   <input
//                     type="checkbox"
//                     className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//                     onChange={(e) => {
//                       setSelectedDurations((prev) =>
//                         e.target.checked ? [...prev, duration] : prev.filter((d) => d !== duration),
//                       )
//                     }}
//                     checked={selectedDurations.includes(duration)}
//                   />
//                   <span>{duration}</span>
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Course Format */}
//           <div className="border-b pb-6">
//             <h3 className="font-medium mb-3">Kurslar formati</h3>
//             <div className="space-y-2">
//               {["Online", "Offline", "Gibrid"].map((format) => (
//                 <label key={format} className="flex items-center space-x-2">
//                   <input
//                     type="checkbox"
//                     className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
//                     onChange={(e) => {
//                       setSelectedFormats((prev) =>
//                         e.target.checked ? [...prev, format] : prev.filter((f) => f !== format),
//                       )
//                     }}
//                     checked={selectedFormats.includes(format)}
//                   />
//                   <span>{format}</span>
//                 </label>
//               ))}
//             </div>
//           </div>

         
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6">
//         <div className="mb-6">
//           <div className="relative">
//             <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//             <input
//               type="text"
//               placeholder="O'quv kurs nomi"
//               className="w-full pl-10 p-2.5 bg-white border rounded-lg"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </div>
//         </div>

//         {/* Number of filtered courses */}
//         <div className="mb-4 text-lg font-semibold">Kurslar soni: {filteredCourses.length}</div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredCourses.map((course) => (
//             <div
//               key={course.id}
//               className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
//             >
//               <div className="relative h-48 bg-gradient-to-r from-blue-500 to-blue-600">
//                 <img src={CourseItemImage} alt="" />
//                 <span className="absolute bottom-3 left-3 bg-white/90 px-2 py-1 rounded text-sm">⌚ {course.duration}</span>
             
//               </div>
//               <div className="p-4">
//                 <div className="flex items-center space-x-2 mb-2">
//                   <div className="w-6 h-6 bg-gray-200 rounded-full"><img src={Log} alt="" /></div>
//                   <span className="text-sm font-medium">{course.institution}</span>
//                 </div>
//                 <h3 className="font-medium mb-2 line-clamp-2">{course.title}</h3>
//                 <p className="text-blue-600 font-medium mb-2">
//                   {course.price.toLocaleString()} Uzs{course.price === 900000 ? "/oyiga" : ""}
//                 </p>
//                 <div className="flex items-center text-sm text-gray-600">
//                   <MapPin className="h-4 w-4 mr-1" />
//                   <span>{course.location}</span>
//                   <span className="mx-2">•</span>
//                   <span>{course.category}</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

