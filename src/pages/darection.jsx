import { useTranslation } from "react-i18next";
import { Fragment } from "react";
import JobCard from "./JobCard";
import TopJobCard from "./TopJobCard";
import icon1 from "../assets/icon.png";
import icon2 from "../assets/icon1.png";
import icon3 from "../assets/icon2.png";
import icon4 from "../assets/icon3.png";

const topJobs = [
  {
    id: 1,
    rank: "#1",
    titleKey: "jobTitles.backend",
    coursesKey: "jobCourses.backendCourses", // Added translation key for courses
    minSalary: "5.3 mln",
    avgSalary: "14.5 mln",
    maxSalary: "36.2 mln",
    avgSalaryText: "jobCourses.avgSalaryText",
    span: 2,
    showMaxSalary: true,
  },
  {
    id: 2,
    rank: "#2",
    titleKey: "jobTitles.frontend",
    coursesKey: "jobCourses.frontendCourses", // Added translation key for courses
    minSalary: "3.8 mln",
    avgSalary: "12.7 mln",
  },
  {
    id: 3,
    rank: "#3",
    titleKey: "jobTitles.projectManager",
    coursesKey: "jobCourses.projectManagerCourses", // Added translation key for courses
    minSalary: "3.3 mln",
    avgSalary: "11.6 mln",
  },
];

const regularJobs = [
  {
    id: 4,
    rank: "#4",
    titleKey: "jobTitles.mobile",
    salary: "7.8 mln",
    icon: icon1,
  },
  {
    id: 5,
    rank: "#5",
    titleKey: "jobTitles.design",
    salary: "6.7 mln",
    icon: icon2,
  },
  {
    id: 6,
    rank: "#6",
    titleKey: "jobTitles.smm",
    salary: "5.6 mln",
    icon: icon3,
  },
  {
    id: 7,
    rank: "#7",
    titleKey: "jobTitles.animation3d",
    salary: "4.5 mln",
    icon: icon4,
  },
];

function App() {
  const { t } = useTranslation("global");

  return (
    <div className="p-8 mt-[50px] md:mt-[100px]">
      <div className="container">
        <h1 className="mb-8 text-center text-3xl font-bold text-gray-900">
          {t("topJobs.title")}
        </h1>

        <div className="space-y-6">
          <div className="grid gap-6 md:grid-cols-4">
            {topJobs.map((job) => {
              return (
                <div
                  key={job.id}
                  className={job.span === 2 ? "md:col-span-2" : ""}
                >
                  <TopJobCard
                    {...job}
                    title={t(job.titleKey)} // Translate the job title dynamically
                    courses={t(job.coursesKey)} // Translate the courses field dynamically
                    avgSalaryText={t(job.avgSalaryText)}
                  />
                </div>
              );
            })}
          </div>

          {/* Regular jobs */}
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {regularJobs.map((job) => (
              <JobCard
                key={job.id}
                {...job}
                title={t(job.titleKey)} // Translate the job title dynamically
              />
            ))}
          </div>

          <div className="text-center">
            <button className="rounded-full bg-blue-500 px-8 py-3 text-white hover:bg-blue-600 transition-colors">
              {t("topJobs.viewAllButton")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
