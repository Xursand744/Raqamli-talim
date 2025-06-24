import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import PropTypes from "prop-types";
import axios from "axios";

const API_BASE_URL = "https://center.it-istedod.uz";

// Extract Card and Button components for better organization
const Button = ({ children, className, ...props }) => (
  <button
    className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 ${className}`}
    {...props}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const Card = ({ children, className, onClick, ...props }) => (
  <div
    onClick={onClick}
    className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/50 overflow-hidden hover:shadow-2xl dark:hover:shadow-gray-900/70 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ${className}`}
    {...props}
  >
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default function EventsSection() {
  const { t, i18n } = useTranslation("global");
  const [lang, setLang] = useState(Cookies.get("lang") || "uz");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Handle language change properly using useEffect
  useEffect(() => {
    const savedLang = Cookies.get("lang") || "uz";
    i18n.changeLanguage(savedLang);
    setLang(savedLang);
  }, [i18n]);

  // Fetch events from API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await axios.get(`${API_BASE_URL}/api/v1/events/client`);
        
        if (response.data.success) {
          // Events are fetched but not used in current implementation
          console.log('Events fetched successfully');
        }
      } catch (error) {
        console.error('Error fetching events:', error);
        setError(error.response?.data?.message || "Xatolik yuz berdi. Iltimos, qaytadan urinib ko'ring.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, [lang]); // Refetch when language changes

  if (isLoading) {
    return (
      <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 my-[50px] md:my-[90px] lg:my-[120px] transition-colors duration-200">
        <section className="py-16 px-4 md:px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((n) => (
                <div key={n} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/50 overflow-hidden animate-pulse">
                  <div className="h-56 bg-gray-200 dark:bg-gray-700" />
                  <div className="p-6">
                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4" />
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-3" />
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 my-[50px] md:my-[90px] lg:my-[120px] transition-colors duration-200">
        <section className="py-16 px-4 md:px-6">
          <div className="container mx-auto max-w-7xl text-center">
            <p className="text-red-600 dark:text-red-400 mb-4">{error}</p>
            <Button 
              onClick={() => window.location.reload()} 
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              {t("common.retry")}
            </Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 my-[50px] md:my-[90px] lg:my-[120px] transition-colors duration-200">
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white transition-colors duration-200">
            {t("events.title")}
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl dark:shadow-gray-900/50 p-6 md:p-8 mb-16 transition-colors duration-200">
            <div className="relative w-full overflow-hidden rounded-xl" style={{ paddingTop: "56.25%" }}>
              <iframe
                src="https://calendar.google.com/calendar/embed?src=digitaldeveducation%40gmail.com&ctz=Asia%2FSamarkand"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                }}
                frameBorder="0"
                scrolling="no"
                title="Events Calendar"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
