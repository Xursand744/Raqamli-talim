import { useState, useMemo, useEffect } from "react";
import univerImg from "../../assets/univer.png";
import inhaimg from "../../assets/inha.png";
import universitiesData from "../../data/universities.json";

export default function UniversityList() {
  const [universities, setUniversities] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    region: [],
    specialization: [],
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Загружаем и форматируем данные
  useEffect(() => {
    const cleanData = universitiesData
      .filter(uni => uni["OTM (Oliy ta'lim muassasasi nomi)"] && uni["OTM (Oliy ta'lim muassasasi nomi)"].trim() !== "")
      .map(uni => ({
        id: uni["T/r"] || Math.random().toString(),
        name: uni["OTM (Oliy ta'lim muassasasi nomi)"],
        region: uni["OTM joylashgan hudud"],
        website: uni["Veb-sayti"],
        telegram: uni["Telegram kanallar"],
        email: uni["Elektron pochta/exat manzili"],
        phone: uni["Bog'lanish uchun tel. raqam"],
        responsible: uni["OTMdan mas'ul ma'lumotlari"],
        specialization: uni["IT ga ixtisoslashgan\n/ixtisoslashmagan"],
        directions: uni["IT yo'nalish nomi"],
        admission: uni["Qabul 2024"]
      }));
    
    setUniversities(cleanData);
  }, []);

  // Получаем уникальные значения для фильтров
  const regions = useMemo(() => {
    return [...new Set(universities.map(uni => uni.region).filter(Boolean))];
  }, [universities]);

  const specializations = useMemo(() => {
    return [...new Set(universities.map(uni => uni.specialization).filter(Boolean))];
  }, [universities]);

  // Создаем фильтры на основе данных
  const filters = useMemo(() => [
    {
      name: "region",
      items: regions.map(region => ({
        name: region,
        count: universities.filter(uni => uni.region === region).length,
        key: region
      }))
    },
    {
      name: "specialization", 
      items: specializations.map(spec => ({
        name: spec,
        count: universities.filter(uni => uni.specialization === spec).length,
        key: spec
      }))
    }
  ], [regions, specializations, universities]);

  const filteredUniversities = useMemo(() => {
    return universities.filter((university) => {
      const matchesSearch = university.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      const matchesRegion =
        selectedFilters.region.length === 0 ||
        selectedFilters.region.includes(university.region);
      
      const matchesSpecialization =
        selectedFilters.specialization.length === 0 ||
        selectedFilters.specialization.includes(university.specialization);

      return matchesSearch && matchesRegion && matchesSpecialization;
    });
  }, [universities, searchQuery, selectedFilters]);

  const handleFilterClick = (filterType, value) => {
    setSelectedFilters((prev) => {
      const currentFilters = prev[filterType];
      const newFilters = currentFilters.includes(value)
        ? currentFilters.filter((item) => item !== value)
        : [...currentFilters, value];

      return {
        ...prev,
        [filterType]: newFilters,
      };
    });
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedFilters({
      region: [],
      specialization: [],
    });
  };

  return (
    <div className="bg-gray-50 pt-[20px]">
      <div className="flex mt-[100px] max-w-[1230px] mx-auto ">
        <div
          className={`fixed inset-y-25 left-0 z-30 w-64 bg-white transform ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:relative md:translate-x-0 rounded-[12px]`}
        >
          <div className="p-4">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-xl font-medium">Filtrlash</h1>
              <button
                className="text-blue-500 hover:text-blue-700"
                onClick={clearFilters}
              >
                <p>Tozalash</p>
              </button>
              <button
                className="text-blue-500 md:hidden"
                onClick={toggleSidebar}
              >
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

            {/* Search */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Universitet nomini qidirish..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Filters */}
            <div className="space-y-6">
              {filters.map((section) => (
                <div key={section.name} className="space-y-2">
                  <h2 className="font-medium">
                    {section.name === "region" ? "Hudud" : "Ixtisoslashish"}
                  </h2>
                  {section.items.map((item) => (
                    <label
                      key={item.name}
                      className="flex items-center space-x-2"
                    >
                      <input
                        type="checkbox"
                        className="rounded border-gray-300"
                        checked={selectedFilters[section.name].includes(
                          item.key
                        )}
                        onChange={() =>
                          handleFilterClick(section.name, item.key)
                        }
                      />
                      <span className="text-sm">{item.name}</span>
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
        <div className="flex-1 px-4 md:px-6">
          <h2 className="mb-4 text-lg font-semibold">
            Topildi: {filteredUniversities.length} ta universitet
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredUniversities.map((university) => (
              <div
                key={university.id}
                className="overflow-hidden max-w-[400px] w-full bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative">
                  <img
                    src={univerImg}
                    alt={university.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-2 left-2">
                    <span className="px-2 py-1 text-xs text-black bg-white/90 rounded-full">
                      {university.region}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
                      <img
                        src={inhaimg}
                        alt={university.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-sm line-clamp-2">{university.name}</h3>
                      <p className="text-xs text-gray-500">
                        {university.region}
                      </p>
                    </div>
                  </div>
                  
                  {/* Контактная информация */}
                  <div className="space-y-2 text-xs text-gray-600">
                    {university.website && (
                      <div className="flex items-center space-x-1">
                        <span className="font-medium">🌐</span>
                        <a href={`https://${university.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                          {university.website}
                        </a>
                      </div>
                    )}
                    {university.telegram && (
                      <div className="flex items-center space-x-1">
                        <span className="font-medium">📱</span>
                        <a href={`https://${university.telegram}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                          Telegram
                        </a>
                      </div>
                    )}
                    {university.phone && (
                      <div className="flex items-center space-x-1">
                        <span className="font-medium">📞</span>
                        <a href={`tel:${university.phone}`} className="text-blue-500 hover:underline">
                          {university.phone}
                        </a>
                      </div>
                    )}
                  </div>

                  {/* IT направления */}
                  {university.directions && (
                    <div className="mt-3">
                      <p className="text-xs font-medium text-gray-700 mb-1">IT yo&apos;nalishlari:</p>
                      <div className="text-xs text-gray-600 line-clamp-3">
                        {university.directions}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredUniversities.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Hech qanday universitet topilmadi</p>
              <button 
                onClick={clearFilters}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Filtrlarni tozalash
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 