// import { Line } from "react-chartjs-2";
// import imgIcon from "../../assets/3.png";
// import { Crown } from "lucide-react";
// import TipsFilter from "../../pages/Tips";

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   Filler,
// } from "chart.js";
// import { ChevronRight, Laptop } from "lucide-react";

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   Filler
// );

// const MetricCard = ({ title, value, isActive, data }) => {
//   const miniChartData = {
//     labels: Array(12).fill(""),
//     datasets: [
//       {
//         data: data,
//         borderColor: isActive ? "white" : "#3B82F6",
//         borderWidth: 1.5,
//         tension: 0.4,
//         pointRadius: 0,
//       },
//     ],
//   };

//   const miniChartOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: { legend: { display: false } },
//     scales: {
//       x: { display: false },
//       y: {
//         display: false,
//         min: Math.min(...data) - 5,
//         max: Math.max(...data) + 5,
//       },
//     },
//     elements: {
//       line: {
//         tension: 0.4,
//       },
//     },
//   };

//   return (
//     <div
//       className={`
//         ${isActive ? "bg-blue-600 text-white" : "bg-gray-50"}
//         p-3 sm:p-4
//         rounded-lg sm:rounded-xl
//         relative
//         h-[100px] sm:h-[120px]
//         flex
//         flex-col
//         justify-between
//         overflow-hidden
//       `}
//     >
//       <div className="relative z-10">
//         <h3
//           className={`${
//             isActive ? "text-blue-100" : "text-gray-500"
//           } text-xs sm:text-sm mb-1`}
//         >
//           {title}
//         </h3>
//         <p className="text-lg sm:text-2xl font-bold">{value}</p>
//       </div>
//       <div className="absolute bottom-0 left-0 right-0 h-[30px] sm:h-[40px] w-full">
//         <Line data={miniChartData} options={miniChartOptions} height={30} />
//       </div>
//     </div>
//   );
// };

// export default function Dashboard() {
//   const months = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ];

//   // Metrics data with wave patterns
//   const metricsData = {
//     min: {
//       value: "7.3 mln",
//       chart: Array(12)
//         .fill()
//         .map(() => Math.random() * 30 + 50),
//     },
//     avg: {
//       value: "14.6 mln",
//       chart: Array(12)
//         .fill()
//         .map(() => Math.random() * 30 + 60),
//     },
//     max: {
//       value: "24.5 mln",
//       chart: Array(12)
//         .fill()
//         .map(() => Math.random() * 30 + 70),
//     },
//   };

//   const chartData = {
//     labels: months,
//     datasets: [
//       {
//         data: Array(12)
//           .fill()
//           .map(() => Math.random() * 40 + 40),
//         borderColor: "rgb(59, 130, 246)",
//         backgroundColor: (context) => {
//           const ctx = context.chart.ctx;
//           const gradient = ctx.createLinearGradient(0, 0, 0, 200);
//           gradient.addColorStop(0, "rgba(59, 130, 246, 0.2)");
//           gradient.addColorStop(1, "rgba(59, 130, 246, 0)");
//           return gradient;
//         },
//         tension: 0.4,
//         fill: true,
//         pointRadius: 0,
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     maintainAspectRatio: false,
//     plugins: {
//       legend: {
//         display: false,
//       },
//       tooltip: {
//         mode: "index",
//         intersect: false,
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         grid: {
//           color: "rgba(0, 0, 0, 0.05)",
//           drawBorder: false,
//         },
//         border: {
//           display: false,
//         },
//         ticks: {
//           display: false,
//         },
//       },
//       x: {
//         grid: {
//           display: false,
//         },
//         border: {
//           display: false,
//         },
//         ticks: {
//           color: "#6B7280",
//           font: {
//             size: 12,
//           },
//         },
//       },
//     },
//     interaction: {
//       intersect: false,
//       mode: "index",
//     },
//   };

//   return (
//     <div className="max-w-[1280px] w-full mx-auto p-2 sm:p-4 mt-[100px]">
//       {/* Breadcrumb */}
//       <nav className="flex flex-wrap items-center gap-1 text-xs sm:text-sm text-gray-600 mb-4 sm:mb-8">
//         <a href="#" className="hover:text-blue-600">
//           Bosh sahifa
//         </a>
//         <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
//         <a href="#" className="hover:text-blue-600">
//           IT-maslahatlar
//         </a>
//         <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
//         <a href="#" className="hover:text-blue-600">
//           IT yo'nalishlar
//         </a>
//         <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
//         <span className="text-gray-400">Backend</span>
//       </nav>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
//         {/* Left Column */}
//         <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border">
//           <div className="grid sm:grid-cols-2 grid-cols-1 flex-col sm:flex-row items-start ">
//             <div className="relative">
//               <img className="" src={imgIcon} alt="" />
//               <div className="flex absolute bottom-3 left-2 flex-wrap gap-2">
//                 <span className="flex items-center gap-2  bg-white text-blue-600 px-2 py-1 rounded-full text-xs sm:text-sm font-medium">
//                   <Crown /> #1
//                 </span>
//                 <span className=" bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs sm:text-sm font-medium">
//                   123 ta kurs
//                 </span>
//               </div>
//             </div>
//             <div className="space-y-2 sm:space-y-4 p-3">
//               <h1 className="text-xl sm:text-2xl font-bold">Backend</h1>
//               <p className="text-sm  sm:text-base text-gray-600 leading-relaxed">
//                 bu dasturiy ta'minotning yashirin qismi bo'lib, foydalanuvchilar
//                 ko'ra olmaydigan, lekin dastur yoki veb-saytning ishlashini
//                 ta'minlaydigan mexanizmilarni o'z ichiga oladi. Backend
//                 ma'lumotlar bazasi bilan ishlaydi, biznes mantiqlarni amalga
//                 oshiradi va foydalanuvchi interfeysi (frontend) bilan o'zaro
//                 aloqa qiladi.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Right Column */}
//         <div className="space-y-8">
//           {/* Metrics */}
//           <div className="grid grid-cols-3 gap-2 sm:gap-3">
//             <MetricCard
//               title="Eng kam oylik"
//               value="7.3 mln"
//               data={Array(12)
//                 .fill()
//                 .map(() => Math.random() * 30 + 50)}
//             />
//             <MetricCard
//               title="O'rtacha oylik"
//               value="14.6 mln"
//               isActive={true}
//               data={Array(12)
//                 .fill()
//                 .map(() => Math.random() * 30 + 60)}
//             />
//             <MetricCard
//               title="Eng ko'p oylik"
//               value="24.5 mln"
//               data={Array(12)
//                 .fill()
//                 .map(() => Math.random() * 30 + 70)}
//             />
//           </div>

//           {/* Chart */}
//           <div className="rounded-xl bg-gray-50 p-4 sm:rounded-2xl shadow-sm">
//             <h3 className="text-gray-700 text-sm sm:text-base font-medium mb-4 sm:mb-6">
//               Talablar grafigi
//             </h3>
//             <div className="h-[200px] sm:h-[150px] w-full">
//               <Line data={chartData} options={chartOptions} />
//             </div>
//           </div>
//         </div>
//       </div>

//       <TipsFilter />
//     </div>
//   );
// }

import { Line } from "react-chartjs-2";
import imgIcon from "../../assets/3.png";
import { Crown } from "lucide-react";
import TipsFilter from "../../pages/Tips";
import { useTranslation } from "react-i18next";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { ChevronRight, Laptop } from "lucide-react";
import { useEffect } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const MetricCard = ({ title, value, isActive, data }) => {
  const miniChartData = {
    labels: Array(12).fill(""),
    datasets: [
      {
        data: data,
        borderColor: isActive ? "white" : "#3B82F6",
        borderWidth: 1.5,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const miniChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { display: false },
      y: {
        display: false,
        min: Math.min(...data) - 5,
        max: Math.max(...data) + 5,
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
    },
  };

  return (
    <div
      className={`
        ${isActive ? "bg-blue-600 text-white" : "bg-gray-50"}
        p-3 sm:p-4
        rounded-lg sm:rounded-xl
        relative
        h-[100px] sm:h-[120px]
        flex
        flex-col
        justify-between
        overflow-hidden
      `}
    >
      <div className="relative z-10">
        <h3
          className={`${
            isActive ? "text-blue-100" : "text-gray-500"
          } text-xs sm:text-sm mb-1`}
        >
          {title}
        </h3>
        <p className="text-lg sm:text-2xl font-bold">{value}</p>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[30px] sm:h-[40px] w-full">
        <Line data={miniChartData} options={miniChartOptions} height={30} />
      </div>
    </div>
  );
};

export default function Dashboard() {
  const { t } = useTranslation("global");

  const months = t("months", { returnObjects: true });

  const metricsData = {
    min: {
      value: "7.3 mln",
      chart: Array(12)
        .fill()
        .map(
          (_, index) =>
            361 +
            100 +
            Math.sin(index) * 10 +
            Math.sin(index * 2) * 5 +
            Math.sin(index * 50) * 5
        ),
    },
    avg: {
      value: "14.6 mln",
      chart: Array(12)
        .fill()
        .map(
          (_, index) =>
            361 +
            100 +
            Math.sin(index) * 10 +
            Math.sin(index * 2) * 5 +
            Math.sin(index * 10) * 5
        ),
    },
    max: {
      value: "24.5 mln",
      chart: Array(12)
        .fill()
        .map(
          (_, index) =>
            361 +
            100 +
            Math.sin(index) * 10 +
            Math.sin(index * 2) * 5 +
            Math.sin(index * 30) * 5
        ),
    },
  };

  const chartData = {
    labels: months,
    datasets: [
      {
        data: Array(12)
          .fill()
          .map(
            (_, index) =>
              90 +
              Math.sin(index * 5) * 10 +
              Math.sin(index * 1) * 5 +
              Math.sin(index * 50) * 50
          ),
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, "rgba(59, 130, 246, 0.2)");
          gradient.addColorStop(1, "rgba(59, 130, 246, 0)");
          return gradient;
        },
        tension: 0.4,
        fill: true,
        pointRadius: 0,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
          drawBorder: false,
        },
        border: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          color: "#6B7280",
          font: {
            size: 12,
          },
        },
      },
    },
    interaction: {
      intersect: false,
      mode: "index",
    },
  };

  return (
    <div className="max-w-[1280px] w-full mx-auto p-2 sm:p-4 mt-[100px]">
      <nav className="flex flex-wrap items-center gap-1 text-xs sm:text-sm text-gray-600 mb-4 sm:mb-8">
        <a href="#" className="hover:text-blue-600">
          {t("home")}
        </a>
        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
        <a href="#" className="hover:text-blue-600">
          {t("it_advice")}
        </a>
        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
        <a href="#" className="hover:text-blue-600">
          {t("it_directions")}
        </a>
        <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
        <span className="text-gray-400">{t("Backend")}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8">
        <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border">
          <div className="grid sm:grid-cols-2 grid-cols-1 flex-col sm:flex-row items-start ">
            <div className="relative">
              <img src={imgIcon} alt="" />
              <div className="flex absolute bottom-3 left-2 flex-wrap gap-2">
                <span className="flex items-center gap-2 bg-white text-blue-600 px-2 py-1 rounded-full text-xs sm:text-sm font-medium">
                  <Crown /> {t("backends.rank")}
                </span>
                <span className=" bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs sm:text-sm font-medium">
                  123 {t("course_count")}
                </span>
              </div>
            </div>
            <div className="space-y-2 sm:space-y-4 p-3">
              <h1 className="text-xl sm:text-2xl font-bold">{t("Backend")}</h1>
              <p className="text-sm  sm:text-base text-gray-600 leading-relaxed">
                {t("description")}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            <MetricCard
              title={t("min_salary")}
              value="7.3 mln"
              data={Array(12)
                .fill()
                .map(() => Math.random() * 30 + 50)}
            />
            <MetricCard
              title={t("avg_salary")}
              value="14.6 mln"
              isActive={true}
              data={metricsData.avg.chart}
            />
            <MetricCard
              title={t("max_salary")}
              value="24.5 mln"
              data={Array(12)
                .fill()
                .map(() => Math.random() * 30 + 70)}
            />
          </div>

          <div className="rounded-xl bg-gray-50 p-4 sm:rounded-2xl shadow-sm">
            <h3 className="text-gray-700 text-sm sm:text-base font-medium mb-4 sm:mb-6">
              {t("chart.title")}
            </h3>
            <div className="h-[200px] sm:h-[150px] w-full">
              <Line data={chartData} options={chartOptions} />
            </div>
          </div>
        </div>
      </div>

      <TipsFilter />
    </div>
  );
}
