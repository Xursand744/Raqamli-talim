import { Fragment } from 'react'
import JobCard from './JobCard'
import TopJobCard from './TopJobCard'
import icon1 from"../assets/icon.png"
import icon2 from"../assets/icon1.png"
import icon3 from"../assets/icon2.png"
import icon4 from"../assets/icon3.png"

const topJobs = [
  {
    id: 1,
    rank: "#1",
    title: "Backend",
    courses: "123ta kurs",
    minSalary: "5.3 mln",
    avgSalary: "14.5 mln",
    maxSalary: "36.2 mln",
    span: 2,
    showMaxSalary: true
  },
  {
    id: 2,
    rank: "#2",
    title: "Frontend",
    courses: "Oylik ma'lumotlari",
    minSalary: "3.8 mln",
    avgSalary: "12.7 mln",
  },
  {
    id: 3,
    rank: "#3",
    title: "Project manager",
    courses: "Oylik ma'lumotlari",
    minSalary: "3.3 mln",
    avgSalary: "11.6 mln",
  },
]

const regularJobs = [
  {
    id: 4,
    rank: "#4",
    title: "Mobile",
    salary: "7.8 mln",
    icon: icon1
  },
  {
    id: 5,
    rank: "#5",
    title: "Design",
    salary: "6.7 mln",
    icon: icon2
  },
  {
    id: 6,
    rank: "#6",
    title: "SMM",
    salary: "5.6 mln",
    icon: icon3
  },
  {
    id: 7,
    rank: "#7",
    title: "3D animatsiya",
    salary: "4.5 mln",
    icon: icon4
  },
]

function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-center text-3xl font-bold text-gray-900">
          Top yo'nalishlar reytingi
        </h1>
        
        <div className="space-y-6">
          {/* Top 3 jobs */}
          <div className="grid gap-6 md:grid-cols-4">
            {topJobs.map((job) => (
              <div key={job.id} className={job.span === 2 ? "md:col-span-2" : ""}>
                <TopJobCard {...job} />
              </div>
            ))}
          </div>

          {/* Regular jobs */}
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {regularJobs.map((job) => (
              <JobCard key={job.id} {...job} />
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <button className="rounded-full bg-blue-500 px-8 py-3 text-white hover:bg-blue-600 transition-colors">
              Barchasini ko'rish
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

