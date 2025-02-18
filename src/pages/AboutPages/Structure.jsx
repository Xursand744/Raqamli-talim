import { useTranslation } from "react-i18next";
import AboutPageHeader from "../../components/AboutComponents/AboutPageHeader";
import "./about.css";
import { useState, useEffect, useRef } from "react";

export default function Structure() {
  const { t } = useTranslation("global");
  const [showModal, setShowModal] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef(null);

  const [modalContent, setModalContent] = useState({
    title: "",
    image: "https://placehold.co/600x400",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-2xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">{modalContent.title}</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <img
              src={modalContent.image}
              alt={modalContent.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-600">{modalContent.description}</p>
          </div>
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
