import { useState, useEffect, useRef } from "react";
import University1 from "../../assets/universities/1.png";
import University2 from "../../assets/universities/2.png";
import University3 from "../../assets/universities/3.png";
import University4 from "../../assets/universities/4.png";
import University5 from "../../assets/universities/5.png";
import University6 from "../../assets/universities/6.png";

function UniversitiesStatistics() {
  const [currentPage, setCurrentPage] = useState(1);
  const [institutions, setInstitutions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(14);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedITField, setSelectedITField] = useState("");

  const itemsPerPage = 10;

  useEffect(() => {
    // In a real application, you would fetch data from an API
    // For this example, we'll use mock data
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setInstitutions(generateMockData());
      setLoading(false);
    }, 500);
  }, [currentPage, selectedRegion, selectedITField]);

  const generateMockData = () => {
    const mockData = [
      {
        id: 1,
        name: '"YANGI O\'ZBEKISTON" UNIVERSITETI',
        region: "Toshkent shahar",
        website: "newuz.uz/en",
        itDepartment: "Ixtisoslashgan",
        image: University1,
      },
      {
        id: 2,
        name: "AJINIYOZ NOMIDAGI NUKUS DAVLAT PEDAGOGIKA INSTITUTI",
        region: "Qoraqalpog'iston Respublikasi",
        website: "ndpi.uz",
        itDepartment: "Ixtisoslashgan",
        image: University2,
      },
      {
        id: 3,
        name: "ALFRAGANUS UNIVERSITY",
        region: "Toshkent shahar",
        website: "afu.uz",
        itDepartment: "Ixtisoslashmagan",
        image: University3,
      },
      {
        id: 4,
        name: "ANDIJON DAVLAT UNIVERSITETI",
        region: "Andijon viloyati",
        website: "adu.uz",
        itDepartment: "Ixtisoslashmagan",
        image: University4,
      },
      {
        id: 5,
        name: "ANDIJON DAVLAT UNIVERSITETINING PEDAGOGIKA INSTITUTI",
        region: "Andijon viloyati",
        website: "adpi.uz",
        itDepartment: "Ixtisoslashmagan",
        image: University5,
      },
      {
        id: 6,
        name: "ANDIJON MASHINASOZLIK INSTITUTI",
        region: "Andijon viloyati",
        website: "web.andmiedu.uz/uz",
        itDepartment: "Ixtisoslashmagan",
        image: University6,
      },
      {
        id: 7,
        name: "ANDIJON QISHLOQ XO'JALIGI VA AGROTEXNOLOGIYALAR INSTITUTI",
        region: "Andijon viloyati",
        website: "andqxai.uz",
        itDepartment: "Ixtisoslashmagan",
      },
      {
        id: 8,
        name: "BUXORO DAVLAT UNIVERSITETI",
        region: "Buxoro viloyati",
        website: "buxdu.uz",
        itDepartment: "Ixtisoslashmagan",
      },
      {
        id: 9,
        name: "BUXORO DAVLAT UNIVERSITETINING PEDAGOGIKA INSTITUTI",
        region: "Buxoro viloyati",
        website: "bspi.uz",
        itDepartment: "Ixtisoslashmagan",
      },
      {
        id: 10,
        name: "BUXORO INNOVATSIYALAR UNIVERSITETI",
        region: "Buxoro viloyati",
        website: "buxi.uz",
        itDepartment: "Ixtisoslashmagan",
      },
    ];

    // Filter by region if selected
    let filteredData = mockData;
    if (selectedRegion) {
      filteredData = filteredData.filter(
        (item) => item.region === selectedRegion
      );
    }

    // Filter by IT field if selected
    if (selectedITField) {
      filteredData = filteredData.filter(
        (item) => item.itDepartment === selectedITField
      );
    }

    return filteredData;
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const regionOptions = [
    { value: "", label: "Barcha hududlar" },
    { value: "Toshkent shahar", label: "Toshkent shahar" },
    {
      value: "Qoraqalpog'iston Respublikasi",
      label: "Qoraqalpog'iston Respublikasi",
    },
    { value: "Andijon viloyati", label: "Andijon viloyati" },
    { value: "Buxoro viloyati", label: "Buxoro viloyati" },
  ];

  const itFieldOptions = [
    { value: "", label: "IT ga bog'liqligi" },
    { value: "Ixtisoslashgan", label: "Ixtisoslashgan" },
    { value: "Ixtisoslashmagan", label: "Ixtisoslashmagan" },
  ];

  const handleRegionChange = (value) => {
    setSelectedRegion(value);
    setCurrentPage(1);
  };

  const handleITFieldChange = (value) => {
    setSelectedITField(value);
    setCurrentPage(1);
  };

  // FilterDropdown Component
  function FilterDropdown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const selectedOption =
      options.find((option) => option.value === value) || options[0];

    useEffect(() => {
      function handleClickOutside(event) {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target)
        ) {
          setIsOpen(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    return (
      <div className="relative" ref={dropdownRef}>
        <button
          type="button"
          className="inline-flex justify-between items-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOption.label}
          <svg
            className="w-5 h-5 ml-2 -mr-1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute right-0 z-10 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div className="py-1" role="menu" aria-orientation="vertical">
              {options.map((option) => (
                <button
                  key={option.value}
                  className={`block w-full text-left px-4 py-2 text-sm ${
                    option.value === value
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                  role="menuitem"
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Table Component
  function Table({ institutions, loading }) {
    if (loading) {
      return (
        <div className="w-full bg-white rounded-lg shadow overflow-hidden">
          <div className="p-4 text-center">Loading...</div>
        </div>
      );
    }

    return (
      <div className="w-full bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium">#</th>
                <th className="px-4 py-3 text-left text-sm font-medium">
                  Rasm
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium">
                  OTM (Oliy ta'lim muassasasi nomi)
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium">
                  OTM joylashgan hudud
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium">
                  Veb-sayti
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium">
                  IT ga ixtisoslashgan fakultet/kafedralar
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {institutions.map((institution) => (
                <tr key={institution.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900">
                    {institution.id}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    {institution.image ? (
                      <img
                        src={institution.image}
                        alt={institution.name}
                        className="w-12 h-12 object-cover rounded-lg"
                      />
                    ) : (
                      <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                        <span className="text-gray-500 text-xs">No image</span>
                      </div>
                    )}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900 font-medium">
                    {institution.name}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    {institution.region}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    {institution.website}
                  </td>
                  <td
                    className={`px-4 py-3 text-sm ${
                      institution.itDepartment === "Ixtisoslashgan"
                        ? "text-blue-600"
                        : "text-red-500"
                    }`}
                  >
                    {institution.itDepartment}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  // Pagination Component
  function Pagination({ currentPage, totalPages, onPageChange }) {
    const renderPageNumbers = () => {
      const pageNumbers = [];

      // Always show first page
      pageNumbers.push(
        <button
          key={1}
          onClick={() => onPageChange(1)}
          className={`w-8 h-8 flex items-center justify-center rounded-md ${
            currentPage === 1
              ? "bg-blue-500 text-white"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }`}
        >
          1
        </button>
      );

      // Show ellipsis if needed
      if (currentPage > 3) {
        pageNumbers.push(
          <span
            key="ellipsis1"
            className="w-8 h-8 flex items-center justify-center"
          >
            ...
          </span>
        );
      }

      // Show current page and surrounding pages
      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 1);
        i++
      ) {
        if (i === 1 || i === totalPages) continue; // Skip first and last page as they're always shown

        pageNumbers.push(
          <button
            key={i}
            onClick={() => onPageChange(i)}
            className={`w-8 h-8 flex items-center justify-center rounded-md ${
              currentPage === i
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {i}
          </button>
        );
      }

      // Show ellipsis if needed
      if (currentPage < totalPages - 2) {
        pageNumbers.push(
          <span
            key="ellipsis2"
            className="w-8 h-8 flex items-center justify-center"
          >
            ...
          </span>
        );
      }

      // Always show last page
      if (totalPages > 1) {
        pageNumbers.push(
          <button
            key={totalPages}
            onClick={() => onPageChange(totalPages)}
            className={`w-8 h-8 flex items-center justify-center rounded-md ${
              currentPage === totalPages
                ? "bg-blue-500 text-white"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {totalPages}
          </button>
        );
      }

      return pageNumbers;
    };

    return (
      <div className="flex items-center space-x-1">
        <button
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          className="w-8 h-8 flex items-center justify-center rounded-md bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50"
        >
          &laquo;
        </button>

        {renderPageNumbers()}

        <button
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          className="w-8 h-8 flex items-center justify-center rounded-md bg-white text-gray-700 hover:bg-gray-100 disabled:opacity-50"
        >
          &raquo;
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-2xl font-bold mb-6 text-center">
        IT yo'nalishi mavjud oliy ta'lim muassasa (OTM)larning ro'yxati
      </h1>

      <div className="flex flex-col md:flex-row justify-end gap-4 mb-4">
        <FilterDropdown
          options={regionOptions}
          value={selectedRegion}
          onChange={handleRegionChange}
        />
        <FilterDropdown
          options={itFieldOptions}
          value={selectedITField}
          onChange={handleITFieldChange}
        />
      </div>

      <Table institutions={institutions} loading={loading} />

      <div className="mt-4 flex items-center justify-between">
        <div className="text-sm text-gray-600">
          100 ta/dan, {(currentPage - 1) * itemsPerPage + 1}-
          {Math.min(currentPage * itemsPerPage, 100)} qacha ko'rsatilmoqda
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default UniversitiesStatistics;
