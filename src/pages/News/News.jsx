import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";
import { uz } from "date-fns/locale";

import "./News.css";
import NewsCard from "../../components/News/NewsCard";
import SkeletonCard from "../../components/News/SkeletonCard";
import { getImageUrl } from "../../utils/imageHelper";

const API_BASE_URL = "https://center.it-istedod.uz";

function News() {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const formatDate = (dateString) => {
    try {
      // Assuming the date is in ISO format from the API
      const date = new Date(dateString);
      return format(date, "d MMMM yyyy", { locale: uz });
    } catch (error) {
      console.error("Error formatting date:", error);
      return dateString;
    }
  };

  const fetchNews = async (pageNum = 1) => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await axios.get(`${API_BASE_URL}/api/v1/news/client?page=${pageNum}`);
      
      if (response.data.success) {
        const newItems = response.data.data.items.map(item => ({
          id: item._id,
          title: item.title.uz,
          description: item.body.uz,
          fullDescription: item.body2.uz,
          image: getImageUrl(item.images.uz),
          date: formatDate(item.createdAt || new Date().toISOString()),
          tags: ['Yangiliklar'], // You might want to add tags to API response
          language: 'uz'
        }));

        if (pageNum === 1) {
          setNews(newItems);
        } else {
          setNews(prev => [...prev, ...newItems]);
        }

        setHasMore(newItems.length > 0);
      }
    } catch (error) {
      console.error('Error fetching news:', error);
      setError(error.response?.data?.message || "Xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []); // Only fetch once on component mount

  const handleLoadMore = () => {
    if (!isLoading && hasMore) {
      const nextPage = page + 1;
      setPage(nextPage);
      fetchNews(nextPage);
    }
  };

  const handleRetry = () => {
    setError(null);
    fetchNews(1);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 min-h-screen transition-colors duration-200">
      <div className="mt-[90px] sm:mt-[60px] lg:mt-[130px] w-full max-w-[1200px] mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-[#222] dark:text-white text-2xl sm:text-3xl lg:text-[44px] font-bold transition-colors duration-200">
            Yangiliklar
          </h1>
        </div>

        <div className="min-h-screen">
          <div className="container mx-auto px-2 sm:px-4 py-8 sm:py-12">
            {error ? (
              <div className="text-center py-8">
                <p className="text-red-600 dark:text-red-400 mb-4 transition-colors duration-200">{error}</p>
                <button
                  onClick={handleRetry}
                  className="px-6 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-full hover:bg-blue-700 dark:hover:bg-blue-400 transition-colors duration-200"
                >
                  Qaytadan urinib ko'rish
                </button>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                  {news.map((item) => (
                    <NewsCard key={item.id} {...item} />
                  ))}
                </div>

                {/* <div className="flex flex-col items-center mt-8 sm:mt-12">
                  {isLoading ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full">
                      {[1, 2, 3].map((n) => (
                        <SkeletonCard key={n} />
                      ))}
                    </div>
                  ) : hasMore ? (
                    <button
                      onClick={handleLoadMore}
                      className="w-full sm:w-auto group relative inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 font-medium text-white bg-blue-600 rounded-full overflow-hidden transition-all duration-300 hover:bg-blue-700"
                    >
                      <span className="relative z-10">Yana yuklash</span>
                      <div className="absolute inset-0 bg-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                    </button>
                  ) : news.length > 0 ? (
                    <p className="text-gray-500">Barcha yangiliklar yuklandi</p>
                  ) : (
                    <p className="text-gray-500">Yangiliklar topilmadi</p>
                  )}
                </div> */}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
