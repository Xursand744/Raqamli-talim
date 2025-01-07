// import React, { useState, useMemo } from "react";
// import univerImg from "../../assets/univer.png";
// import inhaimg from "../../assets/inha.png";

// const universities = [
//   {
//     id: 1,
//     name: "Inha University",
//     location: "in Tashkent",
//     programs: ["ICE", "CSE", "Business", "Logistics"],
//     phone: "+998 70 200 00 00",
//     type: "EduTech",
//     status: "Offline",
//     specialty: "Frontend",
//   },
//   {
//     id: 2,
//     name: "Webster University",
//     location: "in Tashkent",
//     programs: ["ICE", "CSE", "Business", "Logistics"],
//     phone: "+998 71 238 58 21",
//     type: "Liberal Arts",
//     status: "Offline",
//     specialty: "Frontend",
//   },
//   {
//     id: 3,
//     name: "Turin Polytechnic University",
//     location: "in Tashkent",
//     programs: ["ICE", "CSE", "Business", "Logistics"],
//     phone: "+998 71 246 95 00",
//     type: "Engineering",
//     status: "Offline",
//     specialty: "Frontend",
//   },
//   {
//     id: 4,
//     name: "Turin Polytechnic University",
//     location: "in Tashkent",
//     programs: ["ICE", "CSE", "Business", "Logistics"],
//     phone: "+998 71 246 95 00",
//     type: "Engineering",
//     status: "Offline",
//     specialty: "Frontend",
//   },
//   {
//     id: 5,
//     name: "Turin Polytechnic University",
//     location: "in Tashkent",
//     programs: ["ICE", "CSE", "Business", "Logistics"],
//     phone: "+998 71 246 95 00",
//     type: "Engineering",
//     status: "Offline",
//     specialty: "Backend",
//   },
//   {
//     id: 6,
//     name: "Turin Polytechnic University",
//     location: "in Tashkent",
//     programs: ["ICE", "CSE", "Business", "Logistics"],
//     phone: "+998 71 246 95 00",
//     type: "Engineering",
//     status: "Offline",
//     specialty: "Design",
//   },
//   {
//     id: 7,
//     name: "Turin Polytechnic University",
//     location: "in Tashkent",
//     programs: ["ICE", "CSE", "Business", "Logistics"],
//     phone: "+998 71 246 95 00",
//     type: "Engineering",
//     status: "Offline",
//     specialty: "Backend",
//   },
//   {
//     id: 8,
//     name: "Turin Polytechnic University",
//     location: "in Tashkent",
//     programs: ["ICE", "CSE", "Business", "Logistics"],
//     phone: "+998 71 246 95 00",
//     type: "Engineering",
//     status: "Offline",
//     specialty: "Backend",
//   },
//   {
//     id: 9,
//     name: "Turin Polytechnic University",
//     location: "in Tashkent",
//     programs: ["ICE", "CSE", "Business", "Logistics"],
//     phone: "+998 71 246 95 00",
//     type: "Engineering",
//     status: "Offline",
//     specialty: "Backend",
//   },
//   {
//     id: 10,
//     name: "Turin Polytechnic University",
//     location: "in Tashkent",
//     programs: ["ICE", "CSE", "Business", "Logistics"],
//     phone: "+998 71 246 95 00",
//     type: "Engineering",
//     status: "Offline",
//     specialty: "Backend",
//   },
//   {
//     id: 11,
//     name: "Turin Polytechnic University",
//     location: "in Tashkent",
//     programs: ["ICE", "CSE", "Business", "Logistics"],
//     phone: "+998 71 246 95 00",
//     type: "Engineering",
//     status: "Offline",
//     specialty: "ProjectManagement",
//   },
//   {
//     id: 12,
//     name: "Turin Polytechnic University",
//     location: "in Tashkent",
//     programs: ["ICE", "CSE", "Business", "Logistics"],
//     phone: "+998 71 246 95 00",
//     type: "Engineering",
//     status: "Offline",
//     specialty: "ProjectManagement",
//   },

//   // Add more universities as needed
// ];

// const filters = [
//   {
//     name: "IT yo'nalishi",
//     items: [
//       { name: "Dizayn", count: 1, key: "Design" },
//       { name: "Frontend", count: 4, key: "Frontend" },
//       { name: "Backend", count: 5, key: "Backend" },
//       { name: "Project management", count: 2, key: "ProjectManagement" },
//     ],
//   },
//   {
//     name: "O'qish davomiyligi",
//     items: [
//       { name: "3 yil", count: 1 },
//       { name: "4 yil", count: 2 },
//       { name: "4 yildan ko'p", count: 0 },
//     ],
//   },
//   {
//     name: "O'qish formati",
//     items: [
//       { name: "Onlayn", count: 1 },
//       { name: "Oflayn", count: 2 },
//       { name: "Gibrid", count: 0 },
//     ],
//   },
// ];

// export default function UniversityList() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedSpecialty, setSelectedSpecialty] = useState("");
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const filteredUniversities = useMemo(() => {
//     return universities.filter((university) => {
//       const matchesSearch = university.name
//         .toLowerCase()
//         .includes(searchQuery.toLowerCase());
//       const matchesSpecialty =
//         selectedSpecialty === "" || university.specialty === selectedSpecialty;
//       return matchesSearch && matchesSpecialty;
//     });
//   }, [searchQuery, selectedSpecialty]);

//   const handleSpecialtyClick = (specialty) => {
//     setSelectedSpecialty((prevSpecialty) =>
//       prevSpecialty === specialty ? "" : specialty
//     );
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="flex mt-[100px] container bg-gray-50">
//       {/* Sidebar */}
//       <div
//         className={`fixed  inset-y-25 left-0 z-30 w-64 bg-white transform ${
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}
//       >
//         <div className="p-4">
//           <div className="flex items-center justify-between mb-6">
//             <h1 className="text-xl font-medium">Saralash</h1>
//             <button
//               className="text-blue-500 hover:text-blue-700"
//               onClick={() => {
//                 setSearchQuery("");
//                 setSelectedSpecialty("");
//               }}
//             >
//               <p>Tozalash</p>
//             </button>
//             <button className="text-blue-500 md:hidden" onClick={toggleSidebar}>
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//           </div>

//           {/* Search in sidebar */}
//           <div className="relative mb-6">
//             <input
//               type="search"
//               placeholder="Yo'nalish"
//               className="w-full px-4 py-2 border rounded-lg"
//             />
//             <span className="absolute inset-y-0 right-0 flex items-center pr-3">
//               <svg
//                 className="w-5 h-5 text-gray-400"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                 />
//               </svg>
//             </span>
//           </div>

//           {/* Filters */}
//           <div className="space-y-6">
//             {filters.map((section) => (
//               <div key={section.name} className="space-y-2">
//                 <h2 className="font-medium">{section.name}</h2>
//                 {section.items.map((item) => (
//                   <label
//                     key={item.name}
//                     className="flex items-center space-x-2"
//                   >
//                     <input
//                       type="checkbox"
//                       className="rounded border-gray-300"
//                       checked={selectedSpecialty === item.key}
//                       onChange={() => handleSpecialtyClick(item.key)}
//                     />
//                     <span className="text-sm">{item.name}</span>
//                     <span className="text-sm text-gray-500">
//                       ({item.count})
//                     </span>
//                   </label>
//                 ))}
//               </div>
//             ))}
//           </div>

//           <button className="w-full py-2 mt-6 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
//             {filteredUniversities.length} ta Universitetni ko'rish
//           </button>
//         </div>
//       </div>

//       {/* Main content */}
//       <div className="flex-1 p-4 md:p-6">
//         {/* Mobile sidebar toggle */}
//         <button
//           className="mb-4 p-2 bg-blue-500 text-white rounded-lg md:hidden"
//           onClick={toggleSidebar}
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4 6h16M4 12h16M4 18h16"
//             />
//           </svg>
//         </button>

//         {/* Top search bar */}
//         <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 space-y-4 sm:space-y-0">
//           <div className="relative flex-1 w-full sm:max-w-xs">
//             <input
//               type="search"
//               placeholder="Universitet nomi"
//               className="w-full px-4 py-2 border rounded-lg"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <span className="absolute inset-y-0 right-0 flex items-center pr-3">
//               <svg
//                 className="w-5 h-5 text-gray-400"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                 />
//               </svg>
//             </span>
//           </div>
//           <select className="w-full sm:w-auto px-4 py-2 border rounded-lg">
//             <option>Hudud</option>
//           </select>
//         </div>

//         <h2 className="mb-4 text-lg font-semibold">
//           Universitetlar soni: {filteredUniversities.length}
//         </h2>

//         {/* University grid */}
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
//           {filteredUniversities.map((university) => (
//             <div
//               key={university.id}
//               className="overflow-hidden max-w-[282px] w-full bg-white border rounded-lg shadow-sm"
//             >
//               <img src={univerImg} alt="" />
//               <div className="relative ">
//                 <div className="absolute bottom-2 left-2 ">
//                   <span className="px-2 py-1 text-xs text-black bg-white/90 rounded-full">
//                     {university.location}
//                   </span>
//                 </div>
//                 <div className="absolute bottom-2 left-24">
//                   <span className="px-2 py-1 text-xs text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">
//                     {university.status}
//                   </span>
//                 </div>
//               </div>
//               <div className="p-4">
//                 <div className="flex items-center space-x-2 mb-2">
//                   <div className="w-8 h-8 bg-gray-200 rounded-full">
//                     <img src={inhaimg} alt="" />
//                   </div>
//                   <div>
//                     <h3 className="font-medium text-sm">{university.name}</h3>
//                     <p className="text-xs text-gray-500">
//                       {university.location}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex flex-wrap gap-1 mb-2">
//                   {university.programs.map((program) => (
//                     <span
//                       key={program}
//                       className="px-2 py-1 text-xs bg-gray-100 rounded"
//                     >
//                       {program}
//                     </span>
//                   ))}
//                 </div>
//                 <div className="text-xs text-gray-500">{university.type}</div>
//                 <div className="mt-2 text-sm text-blue-500">
//                   {university.phone}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

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
      { name: "3Years", count: 1 },
      { name: "4Years", count: 2 },
      { name: "MoreThan4Years", count: 0 },
    ],
  },
  {
    name: "StudyFormat",
    items: [
      { name: "Online", count: 1 },
      { name: "Offline", count: 2 },
      { name: "Hybrid", count: 0 },
    ],
  },
];

export default function UniversityList() {
  const { t } = useTranslation("global");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const filteredUniversities = useMemo(() => {
    return universities.filter((university) => {
      const matchesSearch = university.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesSpecialty =
        selectedSpecialty === "" || university.specialty === selectedSpecialty;
      return matchesSearch && matchesSpecialty;
    });
  }, [searchQuery, selectedSpecialty]);

  const handleSpecialtyClick = (specialty) => {
    setSelectedSpecialty((prevSpecialty) =>
      prevSpecialty === specialty ? "" : specialty
    );
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex mt-[100px] container bg-gray-50">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-25 left-0 z-30 w-64 bg-white transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:relative md:translate-x-0`}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-xl font-medium">{t("Sort")}</h1>
            <button
              className="text-blue-500 hover:text-blue-700"
              onClick={() => {
                setSearchQuery("");
                setSelectedSpecialty("");
              }}
            >
              <p>{t("Clear")}</p>
            </button>
            <button className="text-blue-500 md:hidden" onClick={toggleSidebar}>
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
                      checked={selectedSpecialty === item.key}
                      onChange={() => handleSpecialtyClick(item.key)}
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
      <div className="flex-1 p-4 md:p-6">
        <h2 className="mb-4 text-lg font-semibold">
          {t("UniversityCount", { count: filteredUniversities.length })}
        </h2>
        {/* University grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredUniversities.map((university) => (
            <div
              key={university.id}
              className="overflow-hidden max-w-[282px] w-full bg-white border rounded-lg shadow-sm"
            >
              <img src={univerImg} alt="" />
              <div className="relative ">
                <div className="absolute bottom-2 left-2 ">
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
                  <div className="w-8 h-8 bg-gray-200 rounded-full">
                    <img src={inhaimg} alt="" />
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
          {/* {filteredUniversities.map((university) => (
            <div
              key={university.id}
              className="overflow-hidden max-w-[282px] w-full bg-white border rounded-lg shadow-sm"
            >
              <img src={univerImg} alt="" />
              <div className="p-4">
                <h3 className="font-medium text-sm">{university.name}</h3>
                <p className="text-xs text-gray-500">{university.location}</p>
                <p>{t(university.specialty)}</p>
              </div>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  );
}
