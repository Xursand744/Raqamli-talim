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
      </div>
    </div>
  );
}

export default News;
