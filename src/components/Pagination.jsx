import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({
  currentPage,
  setCurrentPage,
  totalPages,
}) {
  //   const [currentPage, setCurrentPage] = useState(1)
  //   const totalPages = 15

  const getVisiblePages = () => {
    let pages = [];
    if (currentPage <= 2) {
      pages = [1, 2, 3];
    } else if (currentPage >= totalPages - 1) {
      pages = [totalPages - 2, totalPages - 1, totalPages];
    } else {
      pages = [currentPage - 1, currentPage, currentPage + 1];
    }
    return pages;
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handlePrevClick}
        disabled={currentPage === 1}
        className="p-2 rounded-md border hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {visiblePages[0] > 1 && (
        <>
          <button
            onClick={() => handlePageClick(1)}
            className="w-10 h-10 rounded-md border flex items-center justify-center hover:bg-gray-50"
          >
            1
          </button>
          <span className="px-2">...</span>
        </>
      )}

      {visiblePages.map((page) => (
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={`w-10 h-10 rounded-md border flex items-center justify-center ${
            currentPage === page ? "bg-blue-500 text-white" : "hover:bg-gray-50"
          }`}
        >
          {page}
        </button>
      ))}

      {visiblePages[visiblePages.length - 1] < totalPages && (
        <>
          <span className="px-2">...</span>
          <button
            onClick={() => handlePageClick(totalPages)}
            className="w-10 h-10 rounded-md border flex items-center justify-center hover:bg-gray-50"
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
        className="p-2 rounded-md border hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}
