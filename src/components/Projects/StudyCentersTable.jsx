"use client";

import { useState } from "react";
// import pdpLogo from "../../assets/pdp-logo.png";
import amonLogo from "../../assets/amon-logo.png";

function StudyCentersTable() {
  // Mock data for the table
  const totalItems = 100;
  const itemsPerPage = 10;

  const generateData = () => {
    const data = [];
    for (let i = 1; i <= totalItems; i++) {
      const isPDP = i !== 2; // Only the second item is AmoniLami
      data.push({
        id: i,
        logo: isPDP ? "https://s3-alpha-sig.figma.com/img/5625/5fa5/33c80e354890a70607b34daf84ddfc70?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FKrkq24VEfKlPkoW8w2VkbBjZwClLAest8lpKSSi0KTxIL2iB4DtNBRg7jU7WQ~huux1S7Jgl24kH-LZF65EdZKLBpOKt~fvVqknfyESQ9r0ynp4EwcCw6SqiWfH09DZoNkk2AlbOvZEYOvvJcrLAldl21629MXX2wXmVZKSTVx67gS~yw6iGzLZDBuy4lELMzvd5ZadMlbG4UTfepgdtv2S9hRMJRv7dCPvdLTqai483ivsYZCD8XlNYu1kCrqXpLiIbpqBcnXzOqZtZiINcIYlfTVpHP9DOYSFNEA3PQrA7Imno8wGfkHmFWPKlPTfQpwnsmZNW6lDci6g7M280w__" : amonLogo,
        name: isPDP ? "PDP Academy" : "AmoniLami EDU",
        type: "MCHJ",
        region:
          i === 1 || i === 8 || i === 9 || i === 10
            ? "Toshkent"
            : i === 2 || i === 7
            ? "Samarqand"
            : i === 3
            ? "Farg'ona"
            : i === 4
            ? "Namangan"
            : i === 5
            ? "Qashqadaryo"
            : "Xorazm",
        graduates: i <= 3 ? 76 : i <= 7 ? 73 : 72,
        placements: i <= 7 ? 32 : 21,
        placementPercent: 50,
        totalScore: i === 1 ? 2526 : i === 2 ? 91 : i === 3 ? 90 : 87,
      });
    }
    return data;
  };

  const allData = generateData();

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allData.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Next and previous page handlers
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Generate page numbers for pagination
  const pageNumbers = [];
  const maxPageNumbersToShow = 5;

  let startPage = Math.max(
    1,
    currentPage - Math.floor(maxPageNumbersToShow / 2)
  );
  const endPage = Math.min(totalPages, startPage + maxPageNumbersToShow - 1);

  if (endPage - startPage + 1 < maxPageNumbersToShow) {
    startPage = Math.max(1, endPage - maxPageNumbersToShow + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="py-3 px-4 text-left">#</th>
              <th className="py-3 px-4 text-left">O'quv markaz</th>
              <th className="py-3 px-4 text-left">Hudud</th>
              <th className="py-3 px-4 text-left">Bitiruvchilar</th>
              <th className="py-3 px-4 text-left">Ishga joylashganlar</th>
              <th className="py-3 px-4 text-left">Ishga joylashganlar</th>
              <th className="py-3 px-4 text-left">Umumiy ballari</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr
                key={item.id}
                className={index % 2 === 0 ? "bg-blue-50" : "bg-white"}
              >
                <td className="py-3 px-4">{item.id}</td>
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 mr-3 bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
                      <img
                        src={item.logo || "/placeholder.svg"}
                        alt={item.name}
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                    <div>
                      <div>{item.name}</div>
                      <div className="text-xs text-gray-600">{item.type}</div>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4">{item.region}</td>
                <td className="py-3 px-4">{item.graduates}</td>
                <td className="py-3 px-4">{item.placements}</td>
                <td className="py-3 px-4">{item.placementPercent}</td>
                <td className="py-3 px-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                    {item.totalScore} Ball
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-gray-700">
          100 tadan, {indexOfFirstItem + 1}-
          {Math.min(indexOfLastItem, totalItems)}-gacha ko'rsatilmoqda
        </div>
        <div className="flex space-x-1">
          <button
            onClick={goToPrevPage}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-md ${
              currentPage === 1
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-white border hover:bg-gray-100"
            }`}
          >
            &lt;
          </button>

          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`px-3 py-1 rounded-md ${
                currentPage === number
                  ? "bg-blue-500 text-white"
                  : "bg-white border hover:bg-gray-100"
              }`}
            >
              {number}
            </button>
          ))}

          {endPage < totalPages - 1 && <span className="px-3 py-1">...</span>}

          {endPage < totalPages && (
            <button
              onClick={() => paginate(totalPages)}
              className="px-3 py-1 rounded-md bg-white border hover:bg-gray-100"
            >
              {totalPages}
            </button>
          )}

          <button
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded-md ${
              currentPage === totalPages
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-white border hover:bg-gray-100"
            }`}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudyCentersTable;
