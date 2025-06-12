import { useState, useMemo, useEffect } from "react";
import universitiesData from "../../data/universities.json";
import University1 from "../../assets/universities/1.png";
import University2 from "../../assets/universities/2.png";
import University3 from "../../assets/universities/3.png";
import University4 from "../../assets/universities/4.png";
import University5 from "../../assets/universities/5.png";
import University6 from "../../assets/universities/6.png";
import University7 from "../../assets/universities/7.png";
import University8 from "../../assets/universities/8.png";
import University9 from "../../assets/universities/9.png";
import University10 from "../../assets/universities/10.png";
import University11 from "../../assets/universities/11.png";
import University12 from "../../assets/universities/12.png";
import University13 from "../../assets/universities/13.png";
import University14 from "../../assets/universities/14.png";
import University15 from "../../assets/universities/15.png";
import University16 from "../../assets/universities/16.png";
import University17 from "../../assets/universities/17.png";
import University18 from "../../assets/universities/18.png";
import University19 from "../../assets/universities/19.png";
import University20 from "../../assets/universities/20.png";
import University21 from "../../assets/universities/21.png";
import University22 from "../../assets/universities/22.png";
import University23 from "../../assets/universities/23.png";
import University24 from "../../assets/universities/24.png";
import University25 from "../../assets/universities/25.png";
import University26 from "../../assets/universities/26.png";
import University27 from "../../assets/universities/27.png";
import University28 from "../../assets/universities/28.png";
import University29 from "../../assets/universities/29.png";
import University30 from "../../assets/universities/30.png";
import University31 from "../../assets/universities/31.png";
import University32 from "../../assets/universities/32.png";
import University33 from "../../assets/universities/33.png";
import University34 from "../../assets/universities/34.png";
import University35 from "../../assets/universities/35.png";
import University36 from "../../assets/universities/36.png";
import University37 from "../../assets/universities/37.png";
import University38 from "../../assets/universities/38.png";
import University39 from "../../assets/universities/39.png";
import University40 from "../../assets/universities/40.png";
import University41 from "../../assets/universities/41.png";
import University42 from "../../assets/universities/42.png";
import University43 from "../../assets/universities/43.png";
import University44 from "../../assets/universities/44.png";
import University45 from "../../assets/universities/45.png";
import University46 from "../../assets/universities/46.png";
import University47 from "../../assets/universities/47.png";
import University48 from "../../assets/universities/48.png";
import University49 from "../../assets/universities/49.png";
import University50 from "../../assets/universities/50.png";
import University51 from "../../assets/universities/51.png";
import University52 from "../../assets/universities/52.png";
import University53 from "../../assets/universities/53.png";
import University54 from "../../assets/universities/54.png";
import University55 from "../../assets/universities/55.png";
import University56 from "../../assets/universities/56.png";
import University57 from "../../assets/universities/57.png";
import University58 from "../../assets/universities/58.png";
import University59 from "../../assets/universities/59.png";
import University60 from "../../assets/universities/60.png";
import University61 from "../../assets/universities/61.png";
import University62 from "../../assets/universities/62.png";
import University63 from "../../assets/universities/63.png";
import University64 from "../../assets/universities/64.png";
import University65 from "../../assets/universities/65.png";
import University66 from "../../assets/universities/66.png";
import University67 from "../../assets/universities/67.png";
import University68 from "../../assets/universities/68.png";
import University69 from "../../assets/universities/69.png";
import University70 from "../../assets/universities/70.png";
import University71 from "../../assets/universities/71.png";
import University72 from "../../assets/universities/72.png";
import University73 from "../../assets/universities/73.png";
import University74 from "../../assets/universities/74.png";
import University75 from "../../assets/universities/75.png";
import University76 from "../../assets/universities/76.png";
import University77 from "../../assets/universities/77.png";
import University78 from "../../assets/universities/78.png";
import University79 from "../../assets/universities/79.png";
import University80 from "../../assets/universities/80.png";
import University81 from "../../assets/universities/81.png";
import University82 from "../../assets/universities/82.png";
import University83 from "../../assets/universities/83.png";
import University84 from "../../assets/universities/84.png";
import University85 from "../../assets/universities/85.png";
import University86 from "../../assets/universities/86.png";
import University87 from "../../assets/universities/87.png";
import University88 from "../../assets/universities/88.png";
import University89 from "../../assets/universities/89.png";
import University90 from "../../assets/universities/90.png";
import University91 from "../../assets/universities/91.png";
import University92 from "../../assets/universities/92.png";
import University93 from "../../assets/universities/93.png";
import University94 from "../../assets/universities/94.png";
import University95 from "../../assets/universities/95.png";
import University96 from "../../assets/universities/96.png";
import University97 from "../../assets/universities/97.png";
import University98 from "../../assets/universities/98.png";
import University99 from "../../assets/universities/99.png";
import University100 from "../../assets/universities/100.png";
import University101 from "../../assets/universities/101.png";
import University102 from "../../assets/universities/102.png";
import University103 from "../../assets/universities/107.webp";
import University104 from "../../assets/universities/104.png";
import University105 from "../../assets/universities/105.png";
import University106 from "../../assets/universities/106.png";

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
        const universityPhotos = [University1, University2, University3, University4, University5, University6, University7, University8, University9, University10, University11, University12, University13, University14, University15, University16, University17, University18, University19, University20, University21, University22, University23, University24, University25, University26, University27, University28, University29, University30, University31, University32, University33, University34, University35, University36, University37, University38, University39, University40, University41, University42, University43, University44, University45, University46, University47, University48, University49, University50, University51, University52, University53, University54, University55, University56, University57, University58, University59, University60, University61, University62, University63, University64, University65, University66, University67, University68, University69, University70, University71, University72, University73, University74, University75, University76, University77, University78, University79, University80, University81, University82, University83, University84, University85, University86, University87, University88, University89, University90, University91, University92, University93, University94, University95, University96, University97, University98, University99, University100, University101, University102, University103, University104, University105, University106];
        const image = index < 106 ? universityPhotos[index] : null;
        
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