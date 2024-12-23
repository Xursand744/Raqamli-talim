import React, { useState, useEffect } from 'react'
import { Menu, X, Search, ChevronDown, ArrowUpDown } from 'lucide-react'
import res from "../assets/res.png"
const initialCourses = [
  ...Array(30).fill(null).map((_, index) => ({
    id: index + 1,
    title: "PDP Academy",
    price: "1,500,000 dan boshlab",
    tags: ["Frontend", "Backend", "Data Analytic", "Design", "Project Management"].sort(() => 0.5 - Math.random()).slice(0, 2),
    location: "Tashkent",
    status: Math.random() > 0.5 ? ["Offline", "Online"] : ["Offline"],
    design: "+5"
  }))
]

function Study() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [courses, setCourses] = useState(initialCourses)
  const [searchQuery, setSearchQuery] = useState('')
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
    hybrid: false
  })
  const [sortAscending, setSortAscending] = useState(true)

  useEffect(() => {
    let filteredCourses = initialCourses

    // Apply search filter
    if (searchQuery) {
      filteredCourses = filteredCourses.filter(course =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }

    // Apply checkbox filters
    const activeFilters = Object.entries(filters).filter(([key, value]) => value && ['frontend', 'design', 'backend', 'projectManagement'].includes(key))

    if (activeFilters.length > 0) {
      const filterCounts = {
        frontend: 5,
        design: 7,
        backend: 10,
        projectManagement: 8
      }

      let totalCount = activeFilters.reduce((sum, [filter]) => sum + filterCounts[filter], 0)

      filteredCourses = filteredCourses.filter(course =>
        activeFilters.some(([filter]) => {
          if (filter === 'projectManagement') {
            return course.tags.includes('Project Management')
          }
          return course.tags.includes(filter.charAt(0).toUpperCase() + filter.slice(1))
        })
      ).slice(0, totalCount)
    }

    // Apply other filters (duration, format)
    filteredCourses = filteredCourses.filter(course => {
      const formatMatch = (
        (filters.online && course.status.includes("Online")) ||
        (filters.offline && course.status.includes("Offline")) ||
        (filters.hybrid && course.status.includes("Hybrid")) ||
        (!filters.online && !filters.offline && !filters.hybrid)
      )

      return formatMatch
    })

    // Apply sorting
    filteredCourses.sort((a, b) => {
      return sortAscending
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title)
    })

    setCourses(filteredCourses)
  }, [filters, sortAscending, searchQuery])

  const handleFilterChange = (filter) => {
    setFilters(prev => ({ ...prev, [filter]: !prev[filter] }))
  }

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
      hybrid: false
    })
    setSearchQuery('')
    setSortAscending(true)
  }

  return (
    <div className=" ">
      {/* Header */}
      <header className="bg-white sticky top-0">
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
                  placeholder="O'quv markaz nomi"
                  className="w-[300px] md:w-[400px] pl-10 pr-4 py-2 border rounded-lg"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              </div>
              <button className="flex items-center gap-2 px-4 py-2 border rounded-lg">
                Hudud
                <ChevronDown size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-[1400px] mx-auto px-4 py-6">
        <div className="flex gap-6">
          {/* Sidebar */}
          <aside className={` border
fixed sm:relative top-0 lg:-top-[77px] left-0 h-[calc(100vh-64px)] sm:h-auto w-64 bg-white p-4 border-r
transform transition-transform duration-200 ease-in-out z-40
sm:transform-none ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
sm:translate-x-0 sm:block overflow-y-auto
`}>
            <div className="space-y-6 sticky top-[80px] sm:top-[10px]">
              <div className="flex justify-between border-b pb-5 items-center mb-4">
                <h3 className='text-[20px] font-medium'>Saralash</h3>
                <button
                  onClick={clearFilters}
                  className="px-3 py-1 text-blue-400 rounded-full text-sm"
                >
                  Tozalash
                </button>
              </div>

              {/* Course Type Filters */}
              <div>
                <h2 className="font-medium mb-3">O'quv kurs yo'nalishi</h2>
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="rounded"
                      checked={filters.design}
                      onChange={() => handleFilterChange('design')}
                    />
                    <span>Dizayn</span>
                    <span className="text-gray-500 text-sm">23</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="rounded"
                      checked={filters.frontend}
                      onChange={() => handleFilterChange('frontend')}
                    />
                    <span>Frontend</span>
                    <span className="text-gray-500 text-sm">14</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="rounded"
                      checked={filters.backend}
                      onChange={() => handleFilterChange('backend')}
                    />
                    <span>Backend</span>
                    <span className="text-gray-500 text-sm">17</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="rounded"
                      checked={filters.projectManagement}
                      onChange={() => handleFilterChange('projectManagement')}
                    />
                    <span>Project management</span>
                    <span className="text-gray-500 text-sm">8</span>
                  </label>
                </div>
              </div>

              {/* Duration Filters */}
              <div>
                <h2 className="font-medium mb-3">Kurslar davomiyligi</h2>
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="rounded"
                      checked={filters.duration1}
                      onChange={() => handleFilterChange('duration1')}
                    />
                    <span>1 oygacha</span>
                    <span className="text-gray-500 text-sm">12</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="rounded"
                      checked={filters.duration2}
                      onChange={() => handleFilterChange('duration2')}
                    />
                    <span>1-3 oy</span>
                    <span className="text-gray-500 text-sm">23</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="rounded"
                      checked={filters.duration3}
                      onChange={() => handleFilterChange('duration3')}
                    />
                    <span>3-6 oy</span>
                    <span className="text-gray-500 text-sm">16</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="rounded"
                      checked={filters.duration4}
                      onChange={() => handleFilterChange('duration4')}
                    />
                    <span>6 oydan ko'p</span>
                    <span className="text-gray-500 text-sm">8</span>
                  </label>
                </div>
              </div>

              {/* Format Filters */}
              <div>
                <h2 className="font-medium mb-3">Kurslar formati</h2>
                <div className="space-y-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="rounded"
                      checked={filters.online}
                      onChange={() => handleFilterChange('online')}
                    />
                    <span>Onlayn</span>
                    <span className="text-gray-500 text-sm">12</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="rounded"
                      checked={filters.offline}
                      onChange={() => handleFilterChange('offline')}
                    />
                    <span>Oflayn</span>
                    <span className="text-gray-500 text-sm">23</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="rounded"
                      checked={filters.hybrid}
                      onChange={() => handleFilterChange('hybrid')}
                    />
                    <span>Gibrid</span>
                    <span className="text-gray-500 text-sm">18</span>
                  </label>
                </div>
              </div>

              {/* View All Courses Button */}
              <button
                onClick={clearFilters}
                className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                64 ta kursni ko'rish
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <h2 className="text-lg font-medium mb-4">Markazlar soni: {courses.length}</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
              {courses.map(course => (
                <div key={course.id} className="bg-white rounded-lg overflow-hidden border hover:shadow-lg transition-shadow">
                  <div className="relative h-48 bg-gradient-to-r from-blue-400 to-purple-500">
                    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center gap-2">
                      <img className='w-[80px] h-[80%]' src={res} alt="" />
                    </div>
                    <div className="absolute bottom-2 left-4 flex flex-wrap gap-2">

                      <div className="absolute bottom-2 left-2 ">
                        <span className="px-2 py-1 text-xs text-black bg-white/90 rounded-full">
                          Toshkent
                        </span>
                      </div>
                      <div className="absolute bottom-2 left-20">
                        <span className="px-2 py-1 text-xs text-white bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">
                          Offline
                        </span>
                      </div>

                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium">{course.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-4"><span className='text-blue-700'>Kurslar:</span> {course.price}</p>
                    <div className="flex flex-wrap gap-2">
                      {course.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-[#F0F3FF] rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                      <span className="px-3 py-1 bg-[#F0F3FF] rounded-full text-sm">
                        Design {course.design}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 sm:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  )
}

export default Study