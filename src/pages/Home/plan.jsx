import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import PropTypes from "prop-types";
import axios from "axios";
import { format } from "date-fns";
import { uz, ru, enUS } from "date-fns/locale";
import { ArrowRight } from "lucide-react";
import { getImageUrl } from "../../utils/imageHelper";

const API_BASE_URL = "https://center.it-istedod.uz";

const dateLocales = {
  uz,
  ru,
  en: enUS
};

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
    className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ${className}`}
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
  const navigate = useNavigate();
  const { t, i18n } = useTranslation("global");
  const [lang, setLang] = useState(Cookies.get("lang") || "uz");
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return format(date, "d MMMM yyyy", { locale: dateLocales[lang] });
    } catch (error) {
      console.error("Error formatting date:", error);
      return dateString;
    }
  };

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
          const formattedEvents = response.data.data.items.map(event => ({
            id: event._id,
            title: event.name[lang],
            image: getImageUrl(event.image),
            date: formatDate(new Date()) // Using current date as placeholder since API doesn't provide date
          }));
          setEvents(formattedEvents);
        }
      } catch (error) {
        console.error('Error fetching events:', error);
        setError(error.response?.data?.message || "Xatolik yuz berdi. Iltimos, qaytadan urinib ko&apos;ring.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, [lang]); // Refetch when language changes

  const handleEventClick = (eventId) => {
    navigate(`/events/${eventId}`);
  };

  if (isLoading) {
    return (
      <div className="bg-gradient-to-b from-gray-50 to-white my-[50px] md:my-[90px] lg:my-[120px]">
        <section className="py-16 px-4 md:px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((n) => (
                <div key={n} className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
                  <div className="h-56 bg-gray-200" />
                  <div className="p-6">
                    <div className="h-6 bg-gray-200 rounded w-3/4 mb-4" />
                    <div className="h-4 bg-gray-200 rounded w-1/4 mb-3" />
                    <div className="h-4 bg-gray-200 rounded w-full" />
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
      <div className="bg-gradient-to-b from-gray-50 to-white my-[50px] md:my-[90px] lg:my-[120px]">
        <section className="py-16 px-4 md:px-6">
          <div className="container mx-auto max-w-7xl text-center">
            <p className="text-red-600 mb-4">{error}</p>
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
    <div className="bg-gradient-to-b from-gray-50 to-white my-[50px] md:my-[90px] lg:my-[120px]">
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            {t("events.title")}
          </h2>

          {/* {events.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {events.map((event) => (
                <Card 
                  key={event.id} 
                  className="group flex flex-col"
                  onClick={() => handleEventClick(event.id)}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-medium text-[#2675EB]">
                        {event.date}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-bold text-xl text-gray-800 line-clamp-2 group-hover:text-blue-600 transition-colors mb-4">
                      {event.title}
                    </h3>
                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-sm text-gray-500 group-hover:text-blue-600 transition-colors">
                        {t("events.viewMore")}
                      </span>
                      <ArrowRight 
                        className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" 
                      />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 py-8">
              {t("events.noEvents")}
            </div>
          )} */}

          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-16">
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
