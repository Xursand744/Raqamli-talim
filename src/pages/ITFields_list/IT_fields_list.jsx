// import { useState } from "react";
// import {
//   MicroscopeIcon as MagnifyingGlassIcon,
//   ChevronDownIcon,
// } from "lucide-react";
// import img1 from "../../assets/It_Maslahatlar/4.png";
// import img2 from "../../assets/It_Maslahatlar/3.png";
// import img3 from "../../assets/It_Maslahatlar/5.png";
// import img4 from "../../assets/It_Maslahatlar/6.png";
// import { useNavigate, useRoutes } from "react-router-dom";
// // Updated sample data with different job categories
// const jobs = [
//   {
//     id: 1,
//     title: "Frontend Development",
//     price: "123 ta kurs",
//     avgTime: "14.5 min",
//     maxTime: "36.2 min",
//     subtitle: "Oylik ma'lumotlari",
//     image: img1,
//     description: "HTML, CSS, JavaScript, React",
//   },
//   {
//     id: 2,
//     title: "Web Design",
//     price: "98 ta kurs",
//     avgTime: "12.5 min",
//     maxTime: "32.8 min",
//     subtitle: "Oylik ma'lumotlari",
//     image: img2,
//     description: "UI/UX, Figma, Adobe XD",
//   },
//   {
//     id: 3,
//     title: "Backend Development",
//     price: "145 ta kurs",
//     avgTime: "16.2 min",
//     maxTime: "38.5 min",
//     subtitle: "Oylik ma'lumotlari",
//     image: img3,
//     description: "Node.js, Python, Databases",
//   },
//   {
//     id: 4,
//     title: "Graphic Design",
//     price: "87 ta kurs",
//     avgTime: "13.8 min",
//     maxTime: "34.6 min",
//     subtitle: "Oylik ma'lumotlari",
//     image: img4,
//     description: "Photoshop, Illustrator, InDesign",
//   },
//   {
//     id: 5,
//     title: "Graphic Design",
//     price: "87 ta kurs",
//     avgTime: "13.8 min",
//     maxTime: "34.6 min",
//     subtitle: "Oylik ma'lumotlari",
//     image: img4,
//     description: "Photoshop, Illustrator, InDesign",
//   },
//   {
//     id: 6,
//     title: "Web Design",
//     price: "98 ta kurs",
//     avgTime: "12.5 min",
//     maxTime: "32.8 min",
//     subtitle: "Oylik ma'lumotlari",
//     image: img2,
//     description: "UI/UX, Figma, Adobe XD",
//   },
//   {
//     id: 7,
//     title: "Frontend Development",
//     price: "123 ta kurs",
//     avgTime: "14.5 min",
//     maxTime: "36.2 min",
//     subtitle: "Oylik ma'lumotlari",
//     image: img1,
//     description: "HTML, CSS, JavaScript, React",
//   },
//   {
//     id: 8,
//     title: "Graphic Design",
//     price: "87 ta kurs",
//     avgTime: "13.8 min",
//     maxTime: "34.6 min",
//     subtitle: "Oylik ma'lumotlari",
//     image: img4,
//     description: "Photoshop, Illustrator, InDesign",
//   },
// ];

// export default function JobSearch() {
//   const [searchQuery, setSearchQuery] = useState("");

//   const filteredJobs = jobs.filter((job) =>
//     job.title.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const navigate = useNavigate();

//   return (
//     <div className="container mt-[100px] p-4">
//       <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 space-y-4 sm:space-y-0">
//         <h1 className="text-xl font-semibold">
//           Yo'nalishlar soni: {jobs.length}
//         </h1>
//         <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
//           <div className="relative w-full sm:w-64">
//             <input
//               type="text"
//               placeholder="Yo'nalish nomi"
//               className="w-full pl-10 pr-4 py-2 border rounded-lg"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//           </div>
//           <button className="flex items-center justify-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50 w-full sm:w-auto">
//             Reyting bo'yicha
//             <ChevronDownIcon className="w-4 h-4" />
//           </button>
//         </div>
//       </div>

      // <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      //   {filteredJobs.map((job) => (
      //     <div
      //       key={job.id}
      //       className="bg-[#F8F9FF] rounded-xl p-4 hover:shadow-lg transition-shadow cursor-pointer"
      //       onClick={() => {
      //         navigate(`${job.id}`);
      //       }}
      //     >
      //       <div className="relative mb-4">
      //         <img
      //           src={job.image}
      //           alt={job.title}
      //           className="w-full h-32 object-cover rounded-lg bg-white"
      //         />
      //         <div className="absolute bottom-1 left-2 bg-white px-2 py-1 rounded-full text-sm font-medium flex items-center gap-1">
      //           <span className="text-orange-500">👑</span>
      //           {job.id}
      //         </div>
      //         <div className="absolute bottom-2 left-16 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs">
      //           {job.price}
      //         </div>
      //       </div>

      //       <h3 className="font-semibold text-lg mb-1">{job.title}</h3>
      //       <p className="text-gray-600 text-sm mb-2">{job.description}</p>
      //       <p className="text-gray-500 text-sm mb-4">{job.subtitle}</p>

      //       <div className="flex justify-between items-center">
      //         <div className="bg-blue-500 text-white px-3 py-1 rounded-lg">
      //           <div className="text-xs">O'rtacha</div>
      //           <div className="font-medium">{job.avgTime}</div>
      //         </div>
      //         <div className="bg-white border px-3 py-1 rounded-lg">
      //           <div className="text-xs">Eng kop</div>
      //           <div className="font-medium">{job.maxTime}</div>
      //         </div>
      //       </div>
      //     </div>
      //   ))}
      // </div>
//     </div>
//   );
// }


import React, { useState } from "react";
import {
  MicroscopeIcon as MagnifyingGlassIcon,
  ChevronDownIcon,
} from "lucide-react";
import img1 from "../../assets/It_Maslahatlar/4.png";
import img2 from "../../assets/It_Maslahatlar/3.png";
import img3 from "../../assets/It_Maslahatlar/5.png";
import img4 from "../../assets/It_Maslahatlar/6.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const jobs = [
  {
    id: 1,
    titleKey: "frontend_dev",
    price: "123 ta kurs",
    avgTime: "14.5 min",
    maxTime: "36.2 min",
    subtitleKey: "monthly_info",
    image: img1,
    descriptionKey: "frontend_description",
  },
  {
    id: 2,
    titleKey: "web_design",
    price: "98 ta kurs",
    avgTime: "12.5 min",
    maxTime: "32.8 min",
    subtitleKey: "monthly_info",
    image: img2,
    descriptionKey: "web_design_description",
  },
  {
    id: 3,
    titleKey: "backend_dev",
    price: "145 ta kurs",
    avgTime: "16.2 min",
    maxTime: "38.5 min",
    subtitleKey: "monthly_info",
    image: img3,
    descriptionKey: "backend_description",
  },
  {
    id: 4,
    titleKey: "graphic_design",
    price: "87 ta kurs",
    avgTime: "13.8 min",
    maxTime: "34.6 min",
    subtitleKey: "monthly_info",
    image: img4,
    descriptionKey: "graphic_design_description",
  },
  {
    id: 5,
    titleKey: "backend_dev",
    price: "145 ta kurs",
    avgTime: "16.2 min",
    maxTime: "38.5 min",
    subtitleKey: "monthly_info",
    image: img3,
    descriptionKey: "backend_description",
  },
  {
    id: 6,
    titleKey: "web_design",
    price: "98 ta kurs",
    avgTime: "12.5 min",
    maxTime: "32.8 min",
    subtitleKey: "monthly_info",
    image: img2,
    descriptionKey: "web_design_description",
  },
  {
    id: 7,
    titleKey: "frontend_dev",
    price: "123 ta kurs",
    avgTime: "14.5 min",
    maxTime: "36.2 min",
    subtitleKey: "monthly_info",
    image: img1,
    descriptionKey: "frontend_description",
  },
  {
    id: 8,
    titleKey: "graphic_design",
    price: "87 ta kurs",
    avgTime: "13.8 min",
    maxTime: "34.6 min",
    subtitleKey: "monthly_info",
    image: img4,
    descriptionKey: "graphic_design_description",
  },
];

export default function JobSearch() {
  const { t } = useTranslation("global");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredJobs = jobs.filter((job) =>
    t(job.titleKey).toLowerCase().includes(searchQuery.toLowerCase())
  );

  const navigate = useNavigate();

  return (
    <div className="container mt-[100px] p-4">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 space-y-4 sm:space-y-0">
        <h1 className="text-xl font-semibold">
          {t("job_count")}: {jobs.length}
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder={t("search_placeholder")}
              className="w-full pl-10 pr-4 py-2 border rounded-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <button className="flex items-center justify-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50 w-full sm:w-auto">
            {t("sort_by_rating")}
            <ChevronDownIcon className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="bg-[#F8F9FF] rounded-xl p-4 hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => {
              navigate(`${job.id}`);
            }}
          >
            <div className="relative mb-4">
              <img
                src={job.image}
                alt={t(job.titleKey)}
                className="w-full h-32 object-cover rounded-lg bg-white"
              />
              <div className="absolute bottom-1 left-2 bg-white px-2 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                <span className="text-orange-500">👑</span>
                {job.id}
              </div>
              <div className="absolute bottom-2 left-16 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs">
                {job.price}
              </div>
            </div>

            <h3 className="font-semibold text-lg mb-1">{t(job.titleKey)}</h3>
            <p className="text-gray-600 text-sm mb-2">{t(job.descriptionKey)}</p>
            <p className="text-gray-500 text-sm mb-4">{t(job.subtitleKey)}</p>

            <div className="flex justify-between items-center">
              <div className="bg-blue-500 text-white px-3 py-1 rounded-lg">
                <div className="text-xs">{t("average")}</div>
                <div className="font-medium">{job.avgTime}</div>
              </div>
              <div className="bg-white border px-3 py-1 rounded-lg">
                <div className="text-xs">{t("highest")}</div>
                <div className="font-medium">{job.maxTime}</div>
              </div>
            </div>
          </div>
        ))}
      </div> */}

{/* +++++++++++++++++++++++++++++++++++++++++++++++++ */}

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="bg-[#F8F9FF] rounded-xl p-4 hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => {
              navigate(`${job.id}`);
            }}
          >
            <div className="relative mb-4">
              <img
                src={job.image}
                alt={t(job.titleKey)}
                className="w-full h-32 object-cover rounded-lg bg-white"
              />
              <div className="absolute bottom-1 left-2 bg-white px-2 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                <span className="text-orange-500">👑</span>
                {job.id}
              </div>
              <div className="absolute bottom-2 left-16 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs">
                {job.price}
              </div>
            </div>

            <h3 className="font-semibold text-lg mb-1">{t(job.titleKey)}</h3>
            <p className="text-gray-600 text-sm mb-2">{t(job.descriptionKey)}</p>
            <p className="text-gray-500 text-sm mb-4">{t(job.subtitleKey)}</p>

            <div className="flex justify-between items-center">
              <div className="bg-blue-500 text-white px-3 py-1 rounded-lg">
                <div className="text-xs">{t("average")}</div>
                <div className="font-medium">{job.avgTime}</div>
              </div>
              <div className="bg-white border px-3 py-1 rounded-lg">
                <div className="text-xs">{t("highest")}</div>
                <div className="font-medium">{job.maxTime}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
