import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import "./News.css";
import { newsBigCardRight, news as newsData } from "../../utils";
import { newsBannerImage } from "../../assets";
import NewsRightCard from "../../components/News/NewsRightCard";
import NewsCard from "../../components/News/NewsCard";
import SkeletonCard from "../../components/News/SkeletonCard";

function News() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Eng so'nglari");
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  const navigate = useNavigate();

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-[40px] sm:mt-[60px] lg:mt-[100px] w-full max-w-[1200px] mx-auto">
        <div className="w-full max-w-screen-xl mx-auto py-2 flex flex-col sm:flex-row items-center justify-between gap-4 news-header">
          <div className="relative w-full sm:max-w-[384px]">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="search"
              placeholder="Izlash"
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
            />
          </div>
          <div className="relative w-full sm:w-auto">
            <button
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors border border-gray-200"
              onClick={() => setIsOpen(!isOpen)}
            >
              {selectedItem || "Eng so'nglari"}
              {isOpen ? (
                <ChevronUp className="h-4 w-4 text-gray-400" />
              ) : (
                <ChevronDown className="h-4 w-4 text-gray-400" />
              )}
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-full sm:w-48 bg-white rounded-md shadow-lg border border-gray-200 z-10">
                <div className="py-1">
                  <button
                    className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 text-left"
                    onClick={() => {
                      setSelectedItem("Eng so'nglari");
                      setIsOpen(false);
                    }}
                  >
                    Eng so'nglari
                  </button>
                  <button
                    className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 text-left"
                    onClick={() => {
                      setSelectedItem("Eng eski");
                      setIsOpen(false);
                    }}
                  >
                    Eng eski
                  </button>
                  <button
                    className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 text-left"
                    onClick={() => {
                      setSelectedItem("A-Z");
                      setIsOpen(false);
                    }}
                  >
                    A-Z
                  </button>
                  <button
                    className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 text-left"
                    onClick={() => {
                      setSelectedItem("Z-A");
                      setIsOpen(false);
                    }}
                  >
                    Z-A
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <h1 className="text-[#222] text-2xl sm:text-3xl lg:text-[44px] font-bold mt-[30px] sm:mt-[40px]">
          Yangiliklar
        </h1>

        <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-8 news-banner mt-6">
          <motion.div
            className="w-full lg:w-1/2 cursor-pointer"
            onClick={() => navigate(`/news/1`)}
          >
            <div className="p-2 sm:p-4 w-full">
              <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="max-w-full relative h-48 sm:h-56 lg:h-64 w-full overflow-hidden">
                  <img
                    src={newsBannerImage}
                    alt="Abstract design"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4 sm:p-6">
                  <time className="text-sm text-gray-500">20-iyul, 2024</time>

                  <h2 className="mt-2 text-lg sm:text-xl font-semibold text-gray-800">
                    IT xizmatlarni online rasmiylashtirin
                  </h2>

                  <p className="mt-3 text-sm sm:text-base text-gray-600">
                    How do you create compelling presentations that wow your
                    colleagues and impress your managers?
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-600">
                      #IT
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-600">
                      #Shaharcha
                    </span>
                  </div>
                </div>
              </article>
            </div>
          </motion.div>

          <div className="flex flex-col gap-4 sm:gap-[20px] w-full lg:w-1/2 justify-evenly news-right-card">
            {newsBigCardRight &&
              newsBigCardRight.map((card) => (
                <NewsRightCard {...card} key={card.id} />
              ))}
          </div>
        </div>

        <div className="min-h-screen">
          <div className="container mx-auto px-2 sm:px-4 py-8 sm:py-12">
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {newsData.map((news, index) => (
                <NewsCard key={index} {...news} />
              ))}
            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {newsData.map((news, index) => (
                <NewsCard key={index} {...news} />
              ))}
            </div>

            <div className="flex flex-col items-center mt-8 sm:mt-12">
              {isLoading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 w-full">
                  {[1, 2, 3].map((n) => (
                    <SkeletonCard key={n} />
                  ))}
                </div>
              ) : (
                <button
                  onClick={handleLoadMore}
                  className="w-full sm:w-auto group relative inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 font-medium text-white bg-blue-600 rounded-full overflow-hidden transition-all duration-300 hover:bg-blue-700"
                >
                  <span className="relative z-10">Yana yuklash</span>
                  <div className="absolute inset-0 bg-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
