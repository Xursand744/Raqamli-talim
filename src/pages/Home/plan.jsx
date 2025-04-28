import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import PropTypes from "prop-types";
import { Event1, Event2, Event3 } from "../../assets/home";

// Extract Card and Button components for better organization
const Button = ({ children, className, ...props }) => (
  <button
    className={`px-4 py-2 rounded font-semibold ${className}`}
    {...props}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const Card = ({ children, className, ...props }) => (
  <div
    className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition ${className}`}
    {...props}
  >
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default function EventsSection() {
  const { t, i18n } = useTranslation("global");
  const [lang, setLang] = useState(Cookies.get("lang") || "uz");
  const [events, setEvents] = useState([]);

  // Handle language change properly using useEffect
  useEffect(() => {
    const savedLang = Cookies.get("lang") || "uz";
    i18n.changeLanguage(savedLang);
    setLang(savedLang);
  }, [i18n]);

  // Initialize events data only once when component mounts or language changes
  useEffect(() => {
    setEvents([
      {
        id: 1,
        title: t("events1.title"),
        date: t("events1.date"),
        description: t("events1.description"),
        image: Event1,
      },
      {
        id: 2,
        title: t("events2.title"),
        date: t("events2.date"),
        description: t("events2.description"),
        image: Event2,
      },
      {
        id: 3,
        title: t("events3.title"),
        date: t("events3.date"),
        description: t("events3.description"),
        image: Event3,
      },
    ]);
  }, [t, lang]); // Only update when language or translations change

  return (
    <div className="bg-gray-50 my-[50px] md:my-[90px] lg:my-[120px]">
      <section className="py-12 px-4 md:px-6">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            {t("events.title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {events.map((event) => (
              <Card key={event.id}>
                <div className="relative h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-blue-600 mb-3">{event.date}</p>
                  <p className="text-gray-600 text-sm overflow-hidden line-clamp-2">
                    {event.description}
                  </p>
                </div>
                <div className="px-6 pb-6">
                  <Button className="border rounded-3xl border-gray-300 text-gray-700 hover:bg-gray-50">
                    {t("events1.viewMore")}
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* <div className="text-center">
            <Button className="bg-blue-500 rounded-3xl hover:bg-blue-600 text-white px-8">
              {t("events1.allEvents")}
            </Button>
          </div> */}
        </div>
      </section>
    </div>
  );
}
