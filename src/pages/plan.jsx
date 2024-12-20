import foto1 from "../assets/image1.png";
import foto2 from "../assets/image2.png";
import foto3 from "../assets/image3.png";

export default function EventsSection() {
  const events = [
    {
      id: 1,
      title: "InnoWomenWeek",
      date: "19-iyul, 2024",
      description:
        "6 ta yo'nalish bo'yicha IT loyihalarga pullik yutiqli tanlov dasturi 6 ta yo'nalish bo'yicha IT tanlov...",
      image: foto3,
    },
    {
      id: 2,
      title: "InnoWomenWeek",
      date: "19-iyul, 2024",
      description:
        "6 ta yo'nalish bo'yicha IT loyihalarga pullik yutiqli tanlov dasturi 6 ta yo'nalish bo'yicha IT tanlov...",
      image: foto2,
    },
    {
      id: 3,
      title: "InnoWomenWeek",
      date: "19-iyul, 2024",
      description:
        "6 ta yo'nalish bo'yicha IT loyihalarga pullik yutiqli tanlov dasturi 6 ta yo'nalish bo'yicha IT tanlov...",
      image: foto1,
    },
  ];

  const Button = ({ children, className, ...props }) => (
    <button
      className={`px-4 py-2 rounded font-semibold ${className}`}
      {...props}
    >
      {children}
    </button>
  );

  const Card = ({ children, className, ...props }) => (
    <div
      className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}
      {...props}
    >
      {children}
    </div>
  );
  return (
    <div className=" bg-gray-50 my-[50px] md:my-[90px] lg:my-[120px]">
      <section className="py-12 px-4 md:px-6">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Tadbirlar rejasi
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
                  <h3 className="font-semibold text-xl mb-2">{event.title}</h3>
                  <p className="text-sm text-blue-600 mb-3">{event.date}</p>
                  <p className="text-gray-600 text-sm overflow-hidden line-clamp-2">
                    {event.description}
                  </p>
                </div>
                <div className="px-6 pb-6">
                  <Button className=" border rounded-3xl border-gray-300 text-gray-700 hover:bg-gray-50">
                    Ko'proq ko'rish
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button className="bg-blue-500 rounded-3xl hover:bg-blue-600 text-white px-8">
              Barcha tadbirlar
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
