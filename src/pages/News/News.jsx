import { ChevronDown, ChevronUp, Search } from "lucide-react";
import { useState } from "react";
import "./News.css";
import { newsBigCardRight, news as newsData } from "../../utils";
import { motion } from "framer-motion";
import { newsBannerImage, newsImage } from "../../assets";

const SkeletonCard = () => (
  <div className="bg-white rounded-xl shadow-sm overflow-hidden animate-pulse">
    <div className="h-48 bg-gray-200" />
    <div className="p-5">
      <div className="h-4 bg-gray-200 rounded w-1/4 mb-4" />
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-3" />
      <div className="h-4 bg-gray-200 rounded w-full mb-4" />
      <div className="flex gap-2">
        <div className="h-6 bg-gray-200 rounded w-16" />
        <div className="h-6 bg-gray-200 rounded w-16" />
      </div>
    </div>
  </div>
);

const NewsCard = ({ date, title, description, image, tags }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
    className="flex flex-col md:flex-row bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300"
  >
    <div className="relative overflow-hidden w-full md:w-2/3 h-48 md:h-auto">
      <img
        src={image || "/placeholder.svg"}
        alt={title}
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 rounded-full">
        <span className="text-sm font-medium text-gray-700">{date}</span>
      </div>
    </div>

    <div className="p-5 w-full md:w-2/3">
      <h2 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
        {title}
      </h2>
      <p className="text-gray-600 line-clamp-2 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const NewsRightCard = ({ date, title, description, image, tags }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5 }}
    transition={{ duration: 0.3 }}
    className="flex flex-col md:flex-row bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 w-full md:max-w-[588px] mx-auto md:ml-[15px]"
  >
    <div className="relative overflow-hidden w-full md:w-2/3 h-48 md:h-auto">
      <img
        src={image || "/placeholder.svg"}
        alt={title}
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 rounded-full">
        <span className="text-sm font-medium text-gray-700">{date}</span>
      </div>
    </div>

    <div className="p-5 w-full md:w-2/3">
      <h2 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
        {title}
      </h2>
      <p className="text-gray-600 line-clamp-2 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

function News() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Eng so'nglari");
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="px-4 md:px-0">
      <div className="mt-[60px] md:mt-[100px] w-full max-w-[1200px] mx-auto">
        <div className="w-full max-w-screen-xl mx-auto py-2 flex flex-col md:flex-row items-center justify-between gap-4 news-header">
          <div className="relative w-full max-w-[384px]">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="search"
              placeholder="Izlash"
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent"
            />
          </div>
          <div className="relative w-full md:w-auto">
            <button
              className="w-full md:w-auto flex items-center justify-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors border border-gray-200"
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
              <div className="absolute right-0 mt-2 w-full md:w-48 bg-white rounded-md shadow-lg border border-gray-200 z-10">
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

        <h1 className="text-[#222] text-3xl md:text-[44px] font-bold mt-[40px]">
          Yangiliklar
        </h1>

        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-0">
          <motion.div className="w-full md:w-1/2">
            <div className="p-4 w-full">
              <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="max-w-full relative h-48 md:h-64 w-full overflow-hidden">
                  <img
                    src={newsBannerImage}
                    alt="Abstract design"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <time className="text-sm text-gray-500">20-iyul, 2024</time>

                  <h2 className="mt-2 text-xl font-semibold text-gray-800">
                    IT xizmatlarni online rasmiylashtirin
                  </h2>

                  <p className="mt-3 text-gray-600">
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

          <div className="flex flex-col gap-[20px] w-full md:w-1/2 justify-evenly">
            {newsBigCardRight &&
              newsBigCardRight.map((card) => (
                <NewsRightCard {...card} key={card.id} />
              ))}
          </div>
        </div>

        <div className="min-h-screen">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {newsData.map((news, index) => (
                <NewsCard key={index} {...news} />
              ))}
            </div>

            <div className="flex flex-col items-center mt-12">
              {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                  {[1, 2, 3].map((n) => (
                    <SkeletonCard key={n} />
                  ))}
                </div>
              ) : (
                <button
                  onClick={handleLoadMore}
                  className="w-full md:w-auto group relative inline-flex items-center justify-center px-8 py-3 font-medium text-white bg-blue-600 rounded-full overflow-hidden transition-all duration-300 hover:bg-blue-700"
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
