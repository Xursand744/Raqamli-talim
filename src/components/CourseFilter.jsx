import { useState } from "react";
import { SearchIcon } from "lucide-react";
import PriceRange from "./PriceRange";

export default function CourseFilter() {
  const [priceRange, setPriceRange] = useState([2500000, 5000000]);
  const [selectedCenter, setSelectedCenter] = useState("PDP Adademy");

  const centers = [
    { name: "PDP Adademy", count: 77 },
    { name: "Techno World", count: 89 },
    { name: "Najot talim", count: 42 },
    { name: "Mohir dev", count: 34 },
  ];

  const courses = [
    { name: "Dizayn", count: 23 },
    { name: "Frontend", count: 14 },
    { name: "Backend", count: 17 },
    { name: "Project managment", count: 8 },
  ];

  const durations = [
    { name: "1 oygacha", count: 12 },
    { name: "1-3 oy", count: 23 },
    { name: "3-6 oy", count: 16 },
    { name: "6 oydan ko'p", count: 8 },
  ];

  const formats = [
    { name: "Onlayn", count: 12 },
    { name: "Oflayn", count: 23 },
    { name: "Gibrid", count: 16 },
  ];

  const handleRangeChange = (e) => {
    setPriceRange([e.target.value, priceRange[1]]);
  };

  return (
    <div className="max-w-sm mx-auto p-4 bg-white rounded-lg shadow">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Saralash</h2>
        <button className="text-blue-500">Tozzalash</button>
      </div>

      <div className="mb-6">
        <h3 className="text-lg mb-2">Kurslar narx oralig'i</h3>
        <PriceRange />
        {/* <div className="flex gap-4 items-center mb-2">
          <input
            type="number"
            value={priceRange[0]}
            className="w-32 p-2 border rounded"
            onChange={handleRangeChange}
          />
          <input
            type="number"
            value={priceRange[1]}
            className="w-32 p-2 border rounded"
          />
        </div>
        <input
          type="range"
          min="0"
          max="10000000"
          value={priceRange[0]}
          onChange={handleRangeChange}
          className="w-full"
        /> */}
      </div>

      <div className="mb-6">
        <h3 className="text-lg mb-2">O'quv markaz bo'yicha</h3>
        <div className="relative mb-4">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="O'quv markaz nomi"
            className="w-full pl-10 p-2 border rounded"
          />
        </div>
        {centers.map((center) => (
          <label
            key={center.name}
            className="flex items-center justify-between py-2"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 mr-2"
                checked={selectedCenter === center.name}
                onChange={() => setSelectedCenter(center.name)}
              />
              <span>{center.name}</span>
            </div>
            <span className="text-gray-500">{center.count}</span>
          </label>
        ))}
      </div>

      <div className="mb-6">
        <h3 className="text-lg mb-2">O'quv kurs yo'nalishi</h3>
        <div className="relative mb-4">
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="O'quv kurs"
            className="w-full pl-10 p-2 border rounded"
          />
        </div>
        {courses.map((course) => (
          <label
            key={course.name}
            className="flex items-center justify-between py-2"
          >
            <div className="flex items-center">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <span>{course.name}</span>
            </div>
            <span className="text-gray-500">{course.count}</span>
          </label>
        ))}
      </div>

      <div className="mb-6">
        <h3 className="text-lg mb-2">Kurslar davomiyligi</h3>
        {durations.map((duration) => (
          <label
            key={duration.name}
            className="flex items-center justify-between py-2"
          >
            <div className="flex items-center">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <span>{duration.name}</span>
            </div>
            <span className="text-gray-500">{duration.count}</span>
          </label>
        ))}
      </div>

      <div className="mb-6">
        <h3 className="text-lg mb-2">Kurslar formati</h3>
        {formats.map((format) => (
          <label
            key={format.name}
            className="flex items-center justify-between py-2"
          >
            <div className="flex items-center">
              <input type="checkbox" className="w-4 h-4 mr-2" />
              <span>{format.name}</span>
            </div>
            <span className="text-gray-500">{format.count}</span>
          </label>
        ))}
      </div>

      <button className="w-full bg-blue-500 text-white py-3 rounded-lg">
        77 ta kursni ko'rish
      </button>
    </div>
  );
}
