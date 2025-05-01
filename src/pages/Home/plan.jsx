import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import PropTypes from "prop-types";
import { Event1, Event2, Event3 } from "../../assets/home";

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

const Card = ({ children, className, ...props }) => (
  <div
    className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 ${className}`}
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
    <div className="bg-gradient-to-b from-gray-50 to-white my-[50px] md:my-[90px] lg:my-[120px]">
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            {t("events.title")}
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            {t("events.subtitle")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {events.map((event) => (
              <Card key={event.id} className="group">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 text-gray-800">
                    {event.title}
                  </h3>
                  <p className="text-sm text-blue-600 font-medium mb-3">
                    {event.date}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>
                <div className="px-6 pb-6">
                  <Button className="w-full border-2 border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300">
                    {t("events1.viewMore")}
                  </Button>
                </div>
              </Card>
            ))}
          </div>

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
              ></iframe>
            </div>
          </div>

          {/* <div className="text-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 shadow-lg hover:shadow-xl">
              {t("events1.allEvents")}
            </Button>
          </div> */}
        </div>
      </section>
    </div>
  );
}
