import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";
import { uz, ru, enUS } from "date-fns/locale";
import { EyeIcon } from "lucide-react";

import BreadCrumps from "../../components/BreadCrumps/BreadCrumps";
import LastNews from "../../components/News/LastNews";
import { useLanguage } from "../../context/LanguageContext";
import { getImageUrl } from "../../utils/imageHelper";
import "./News.css";

const API_BASE_URL = "https://center.it-istedod.uz";
const dateLocales = {
  uz,
  ru,
  en: enUS
};

function NewsSinglePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [news, setNews] = useState(null);
  const [lastNews, setLastNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return format(date, "d MMMM yyyy", { locale: dateLocales[language] });
    } catch (error) {
      console.error("Error formatting date:", error);
      return dateString;
    }
  };

  const convertTextToLinks = (text) => {
    // URL regex pattern
    const urlPattern = /(https?:\/\/[^\s]+)/g;
    
    // Split text by URLs
    const parts = text.split(urlPattern);
    
    const getDisplayText = (url) => {
      try {
        const urlObj = new URL(url);
        // Handle different types of URLs
        if (urlObj.hostname.includes('t.me')) {
          return `@${urlObj.pathname.slice(1)}`;
        } else if (urlObj.hostname.includes('instagram.com')) {
          return `@${urlObj.pathname.slice(1)}`;
        } else if (urlObj.hostname.includes('facebook.com')) {
          return `Facebook`;
        } else if (urlObj.hostname.includes('linkedin.com')) {
          return `LinkedIn`;
        } else if (urlObj.hostname.includes('youtube.com')) {
          return `YouTube`;
        } else if (urlObj.hostname.includes('uzbekcoders.uz')) {
          return 'UzbekCoders';
        } else {
          // For other URLs, show domain name without www and protocol
          return urlObj.hostname.replace('www.', '');
        }
      } catch {
        // If URL parsing fails, return the original URL
        return url.replace(/^https?:\/\//, '');
      }
    };
    
    return parts.map((part, index) => {
      // Check if this part is a URL
      if (part.match(urlPattern)) {
        const displayText = getDisplayText(part);
        return (
          <a
            key={index}
            href={part}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
          >
            {displayText}
          </a>
        );
      }
      return part;
    });
  };

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Fetch single news
        const newsResponse = await axios.get(`${API_BASE_URL}/api/v1/news/${id}`);
        if (!newsResponse.data.success) {
          throw new Error("Failed to fetch news");
        }

        // Fetch last 3 news
        const lastNewsResponse = await axios.get(`${API_BASE_URL}/api/v1/news/client?limit=5`);
        if (!lastNewsResponse.data.success) {
          throw new Error("Failed to fetch last news");
        }

        setNews(newsResponse.data.data);
        setLastNews(lastNewsResponse.data.data.items);
      } catch (error) {
        console.error("Error fetching news:", error);
        setError(error.response?.data?.message || "Xatolik yuz berdi. Iltimos, qaytadan urinib ko&apos;ring.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, [id, language]);

  const breadCrumps = [
    {
      title: language === "uz" ? "Yangiliklar" : language === "ru" ? "Новости" : "News",
      link: "/news",
    },
    {
      title: news?.title?.[language] || "...",
      link: `/news/${id}`,
    },
  ];

  if (isLoading) {
    return (
      <div className="max-w-[1250px] mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="h-12 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-64 bg-gray-200 rounded mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-[1250px] mx-auto px-4 py-8 text-center">
        <p className="text-red-600 mb-4">{error}</p>
        <button
          onClick={() => navigate("/news")}
          className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
        >
          {language === "uz" ? "Orqaga qaytish" : language === "ru" ? "Вернуться назад" : "Go back"}
        </button>
      </div>
    );
  }

  if (!news) {
    return null;
  }

  return (
    <div className="max-w-[1250px] mx-auto flex flex-col lg:flex-row justify-between mb-[72px] gap-[20px] single-news-page px-4">
      <div className="max-w-[792px] w-full">
        <BreadCrumps breadCrumps={breadCrumps} />

        <h1 className="text-[#222] text-[32px] lg:text-[44px] font-medium mt-[40px] roboto-font">
          {news.title[language]}
        </h1>
        <div className="flex items-center gap-[12px] mt-[10px]">
          <p className="text-[14px] font-medium text-[#2675EB]">
            {formatDate(news.createdAt)}
          </p>
          <p className="flex items-center gap-[6.5px]">
            <EyeIcon width={"15px"} />
            {/* TODO: Add view count when API provides it */}
            0
          </p>
        </div>
        <p className="text-[20px] font-medium text-black mt-[24px]">
          {convertTextToLinks(news.body[language])}
        </p>

        <div className="max-w-full min-h-[380px] mt-[24px]">
          <img 
            src={getImageUrl(news.images[language])} 
            alt={news.title[language]} 
            className="w-full rounded-[8px] object-cover"
          />
        </div>

        <div className="mt-[24px] prose prose-lg max-w-none">
          {news.body2[language].split("\r\n\r\n").map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph.split("\r\n").map((line, lineIndex) => (
                <React.Fragment key={lineIndex}>
                  {convertTextToLinks(line)}
                  {lineIndex < paragraph.split("\r\n").length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          ))}
        </div>
      </div>

      <div className="max-w-[384px] w-full mt-[40px] lg:mt-[100px]">
        <h2 className="font-bold text-[20px]">
          {language === "uz" ? "So'nggi yangiliklar" : language === "ru" ? "Последние новости" : "Latest news"}
        </h2>
        <div className="mt-[20px]">
          {lastNews.map((item, index) => (
            <LastNews
              key={item._id}
              id={item._id}
              title={item.title[language]}
              date={formatDate(item.createdAt)}
              description={item.body[language]}
              isLast={index === lastNews.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewsSinglePage;
