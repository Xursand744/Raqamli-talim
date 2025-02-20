import { useTranslation } from "react-i18next";
import AboutPageHeader from "../../components/AboutComponents/AboutPageHeader";
import "./about.css";
import { useState, useEffect, useRef } from "react";
import { Clock, Mail, Phone, X } from "lucide-react";
import { DeparmentImage15 } from "../../assets/deparment";

export default function Structure() {
  const { t } = useTranslation("global");
  const [showModal, setShowModal] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef(null);

  const [modalContent, setModalContent] = useState({
    title: "",
    image: DeparmentImage15,
    fullname: "",
    phone: "",
    email: "",
    time: "",
  });

  useEffect(() => {
    const handleWheel = (e) => {
      const container = document.querySelector(".overflow-auto");
      if (container) {
        container.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    };

    const container = document.querySelector(".overflow-auto");
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleDivClick = (title) => {
    if (!isDragging) {
      setModalContent({
        ...modalContent,
        title,
        // image,
        // fullname,
        // phone,
        // email,
        // time,
      });
      setShowModal(true);
    }
  };

  const breadCrumps = [
    {
      link: "/about",
      name: t("menu.center"),
    },
    {
      link: "/structure",
      name: t("menu.structure"),
    },
  ];

  const topManagement = [{ title: "Direktor" }, { title: "Maslahatchi" }];

  const departments = [
    {
      title:
        "Muhammad al-Xorazmiy vorislari tizimini joriy etishni muvofiqlashtirish bo'limi",
      isHeader: true,
    },
    {
      title: "Raqamli ko'nikmalarni shakllantirish bo'limi",
    },
    {
      title: "Kadrlar bo'lim",
    },
    {
      title: "Bosh yuristkonsult",
    },
    {
      title: "Ijro intizomi va murojatlar bo'yicha bosh mutaxassis",
    },
    {
      title: "Marketing va PR bo'limi",
    },
  ];

  const firstDeputyDepartments = [
    {
      title: "Direktorning birinchi o'rinbosari",
      isHeader: true,
    },
    {
      title: "Iqtidorli yoshlarni IT sohasiga jalb qilish bo'limi",
    },
    {
      title: "Ta'lim tashkilotlari bilan ishlash bo'limi",
    },
    {
      title:
        "Xalqaro sertifikatlar va masofaviy ta'limni rivojlantirish bo'limi",
    },
    {
      title: "Raqamli texnologiyalar bo'limi",
    },
    {
      title: '"IT shaharcha"lar faoliyatini tashkil etish boshqarmasi',
    },
  ];

  const deputyDepartments = [
    {
      title: "Direktor o'rinbosari",
      isHeader: true,
    },
    {
      title: "Iqtisodiyot va moliya bo'limi",
    },
    {
      title: "Buxgalteriya bo'limi",
    },
  ];

  const secondDeputyDepartments = [
    {
      title: "Direktor o'rinbosari",
      isHeader: true,
    },
    {
      title: "Investitsiya loyiha ofisi",
    },
  ];

  return (
    <div className="max-w-[1230px] mx-auto select-none">
      <AboutPageHeader title={t("menu.structure")} breadCrumps={breadCrumps} />

      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowModal(false);
            }
          }}
        >
          <div className="h-[408px] flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full overflow-hidden relative">
              <button className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 transition-colors">
                <X size={24} onClick={() => setShowModal(false)} />
              </button>

              <div className="flex flex-col md:flex-row">
                {/* Image section */}
                <div className="w-full md:w-1/3 h-64 md:h-auto relative">
                  <img
                    src={modalContent.image}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content section */}
                <div className="w-full md:w-2/3 p-6 md:p-8">
                  <div className="space-y-6">
                    <div className="mb-[100px]">
                      <h2 className="text-2xl font-bold text-gray-800">
                        Azamat Eshankulov
                      </h2>
                      <p className="text-gray-600 mt-1">{modalContent.title}</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 text-gray-700">
                        <Mail className="text-blue-400" size={20} />
                        <a
                          href="mailto:education@digital.uz"
                          className="hover:text-blue-500"
                        >
                          education@digital.uz
                        </a>
                      </div>

                      <div className="flex items-center space-x-3 text-gray-700">
                        <Phone className="text-blue-400" size={20} />
                        <a
                          href="tel:+998712030343"
                          className="hover:text-blue-500"
                        >
                          +998 71 203 03 43 (101)
                        </a>
                      </div>

                      <div className="flex items-center space-x-3 text-gray-700">
                        <Clock className="text-blue-400" size={20} />
                        <span>Juma, 9:00-11:00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="bg-white rounded-lg max-w-md w-full transition-all duration-300 transform">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-medium">{modalContent.title}</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <div className="flex p-6">
              <img
                src={modalContent.image}
                alt={modalContent.title}
                className="w-32 h-32 object-cover rounded-lg"
              />
              <div className="ml-4">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="text-sm text-gray-600">
                      {modalContent.email}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="text-sm text-gray-600">
                      {modalContent.phone}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm text-gray-600">
                      {modalContent.time}
                    </span>
                  </div>
                </div>
                <style>
                  {`
                    @keyframes modalSlide {
                      from {
                        opacity: 0;
                        transform: scale(0.95) translateY(-20px);
                      }
                      to {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                      }
                    }
                  `}
                </style>
                <div className="mt-4">
                  <p className="text-gray-600">{modalContent.description}</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      )}

      <div
        ref={containerRef}
        className="w-full min-h-screen bg-white overflow-auto mt-[60px] cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className="min-w-[1400px] mx-[20px] relative">
          <div className="absolute top-[36px] left-1/2 w-[360px] h-[2px] bg-blue-500 -translate-x-1/2" />

          <div className="flex justify-center gap-[130px] mb-16 relative top-[15px]">
            {topManagement.map((item, index) => (
              <div
                key={index}
                onClick={() => handleDivClick(item.title)}
                className="px-6 py-2 rounded-md border border-blue-500 bg-white text-center z-10 cursor-pointer hover:bg-blue-50"
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="absolute top-[36px] left-1/2 w-[2px] h-[40px] bg-blue-500 -translate-x-1/2" />
          <div className="absolute top-[75px] left-[52.1%] w-[1206px] h-[2px] bg-blue-500 -translate-x-1/2 main-line" />
          <div className="absolute top-[75px] left-[9%] w-[2px] h-[40px] bg-blue-500" />
          <div className="absolute top-[75px] left-[550px] w-[2px] h-[40px] bg-blue-500" />
          <div className="absolute top-[75px] left-[900px] w-[2px] h-[40px] bg-blue-500" />
          <div className="absolute top-[75px] left-[1333px] w-[2px] h-[40px] bg-blue-500" />

          <div
            className="grid grid-cols-4 gap-4 relative"
            style={{
              gridTemplateColumns: "300px 300px 300px 300px",
              columnGap: "100px",
            }}
          >
            <div className="flex flex-col gap-4">
              {departments.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleDivClick(item.title)}
                  className={`p-4 ${
                    item.isHeader
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "border border-blue-500 hover:bg-blue-50"
                  } rounded-md text-center text-sm min-h-[80px] flex items-center justify-center cursor-pointer`}
                >
                  {item.title}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              {firstDeputyDepartments.map((item, index) => (
                <div
                  key={index}
                  onClick={() =>
                    handleDivClick(
                      item.title,
                      DeparmentImage15,
                      item.title,
                      item.phone,
                      item.email,
                      item.time
                    )
                  }
                  className={`p-4 ${
                    item.isHeader
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "border border-blue-500 hover:bg-blue-50"
                  } rounded-md text-center text-sm min-h-[80px] flex items-center justify-center cursor-pointer`}
                >
                  {item.title}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              {deputyDepartments.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleDivClick(item.title)}
                  className={`p-4 ${
                    item.isHeader
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "border border-blue-500 hover:bg-blue-50"
                  } rounded-md text-center text-sm min-h-[80px] flex items-center justify-center cursor-pointer`}
                >
                  {item.title}
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              {secondDeputyDepartments.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleDivClick(item.title)}
                  className={`p-4 ${
                    item.isHeader
                      ? "bg-blue-500 text-white hover:bg-blue-600"
                      : "border border-blue-500 hover:bg-blue-50"
                  } rounded-md text-center text-sm min-h-[80px] flex items-center justify-center cursor-pointer`}
                >
                  {item.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
