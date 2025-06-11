import { useState, useMemo, useEffect } from "react";
import universitiesData from "../../data/universities.json";
import University1 from "../../assets/universities/1.png";
import University2 from "../../assets/universities/2.png";
import University3 from "../../assets/universities/3.png";
import University4 from "../../assets/universities/4.png";
import University5 from "../../assets/universities/5.png";
import University6 from "../../assets/universities/6.png";

export default function UniversityList() {
  const [universities, setUniversities] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    region: [],
    specialization: [],
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Загружаем и форматируем данные
  useEffect(() => {
    const cleanData = universitiesData
      .filter(uni => uni["OTM (Oliy ta'lim muassasasi nomi)"] && uni["OTM (Oliy ta'lim muassasasi nomi)"].trim() !== "")
      .map((uni, index) => {
        // Add university photos for the first 6 universities
        const universityPhotos = [University1, University2, University3, University4, University5, University6];
        const image = index < 6 ? universityPhotos[index] : null;
        
        // Debug: log image information
        if (index < 6) {
          console.log(`University ${index + 1}: ${uni["OTM (Oliy ta'lim muassasasi nomi)"]} - Image:`, image);
        }
        
        return {
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
          admission: uni["Qabul 2024"],
          image: image
        };
      });
    
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

  // Пагинация
  const totalPages = Math.ceil(filteredUniversities.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentUniversities = filteredUniversities.slice(startIndex, endIndex);

  // Сброс страницы при изменении фильтров
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedFilters]);

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
            {currentUniversities.map((university) => (
              <div
                key={university.id}
                className="overflow-hidden max-w-[400px] w-full bg-white border rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative">
                  {university.image ? (
                    <div className="w-full h-48 bg-cover bg-center bg-auto bg-no-repeat" style={{ backgroundImage: `url(${university.image})`, backgroundPosition: 'center', backgroundSize: 'auto 60%', backgroundRepeat: 'no-repeat' }}>
                    </div>
                  ) : (
                    <div className="w-full h-48 bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <span className="text-white text-2xl font-bold">
                        {university.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-2 left-2">
                    <span className="px-2 py-1 text-xs text-black bg-white/90 rounded-full">
                      {university.region}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="mb-2">
                    <h3 className="font-medium text-sm line-clamp-2">{university.name}</h3>
                    <p className="text-xs text-gray-500">
                      {university.region}
                    </p>
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
                      <p className="text-xs font-medium text-gray-700 mb-1">IT yo'nalishlari:</p>
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

          {/* Пагинация */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center my-8 space-x-2">
              <button
                className="px-4 py-2 bg-white text-blue-600 rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors duration-200 disabled:opacity-50 disabled:hover:bg-white flex items-center space-x-1"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                <i className="bx bx-chevron-left text-xl"></i>
                <span>Oldingi</span>
              </button>
              
              <div className="flex items-center space-x-2">
                {currentPage > 3 && (
                  <>
                    <button
                      className="w-8 h-8 flex items-center justify-center rounded-lg bg-white text-gray-600 hover:bg-blue-50 border border-blue-200 transition-colors duration-200"
                      onClick={() => setCurrentPage(1)}
                    >
                      1
                    </button>
                    {currentPage > 4 && <span className="text-gray-400">...</span>}
                  </>
                )}

                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let page;
                  if (totalPages <= 5) {
                    page = i + 1;
                  } else if (currentPage <= 3) {
                    page = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    page = totalPages - 4 + i;
                  } else {
                    page = currentPage - 2 + i;
                  }
                  
                  return (
                    <button
                      key={page}
                      className={`w-8 h-8 flex items-center justify-center rounded-lg transition-colors duration-200 ${
                        currentPage === page
                          ? "bg-blue-600 text-white"
                          : "bg-white text-gray-600 hover:bg-blue-50 border border-blue-200"
                      }`}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </button>
                  );
                })}

                {currentPage < totalPages - 2 && (
                  <>
                    {currentPage < totalPages - 3 && <span className="text-gray-400">...</span>}
                    <button
                      className="w-8 h-8 flex items-center justify-center rounded-lg bg-white text-gray-600 hover:bg-blue-50 border border-blue-200 transition-colors duration-200"
                      onClick={() => setCurrentPage(totalPages)}
                    >
                      {totalPages}
                    </button>
                  </>
                )}
              </div>

              <button
                className="px-4 py-2 bg-white text-blue-600 rounded-lg border border-blue-200 hover:bg-blue-50 transition-colors duration-200 disabled:opacity-50 disabled:hover:bg-white flex items-center space-x-1"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                <span>Keyingi</span>
                <i className="bx bx-chevron-right text-xl"></i>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 