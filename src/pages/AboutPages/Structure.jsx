import { useTranslation } from "react-i18next";
import AboutPageHeader from "../../components/AboutComponents/AboutPageHeader";
import "./about.css";
import { useState, useEffect, useRef } from "react";
import { Clock, Mail, Phone, X } from "lucide-react";
import {
  DeparmentImage1,
  DeparmentImage10,
  DeparmentImage11,
  DeparmentImage12,
  DeparmentImage13,
  DeparmentImage14,
  DeparmentImage15,
  DeparmentImage16,
  DeparmentImage17,
  DeparmentImage18,
  DeparmentImage19,
  DeparmentImage2,
  DeparmentImage20,
  DeparmentImage21,
  DeparmentImage3,
  DeparmentImage7,
  DeparmentImage8,
} from "../../assets/deparment";
import { LeadershipImage2, LeadershipImage3, VacancyImage } from "../../assets";
import { motion } from "framer-motion";
import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";
import { div } from "framer-motion/client";

const Controls = () => {
  const { zoomIn, zoomOut, resetTransform } = useControls();

  return (
    <div className="absolute right-0 top-0">
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-2">
          <button
            onClick={() => zoomIn()}
            className="transition hover:bg-blue-600 px-[15px] py-[8px] flex items-center justify-center bg-blue-500 text-white rounded-md"
          >
            +
          </button>
          <button
            onClick={() => zoomOut()}
            className="transition hover:bg-blue-600 px-[15px] py-[8px] flex items-center justify-center bg-blue-500 text-white rounded-md"
          >
            -
          </button>
        </div>
        <button
          onClick={() => resetTransform()}
          className="transition hover:bg-blue-600 px-[15px] py-[8px] flex items-center justify-center bg-blue-500 text-white rounded-md"
        >
          O'z holiga qaytarish
        </button>
      </div>
    </div>
  );
};

export default function Structure() {
  const { t } = useTranslation("global");
  const [showModal, setShowModal] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const containerRef = useRef(null);

  const [modalContent, setModalContent] = useState({
    title: "",
    image: "",
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

  const handleDivClick = (item) => {
    if (!isDragging) {
      setModalContent({
        title: item.title,
        image: item.image || VacancyImage,
        fullname: item.fullname || "Vakant",
        phone: item.number || "",
        email: item.email || "",
        time: item.time || "",
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

  const topManagement = [
    {
      title: "Direktor",
      fullname: "Azamat Eshankulov",
      email: "education@digital.uz",
      number: "+998 71 203 03 43 (101)",
      time: "Juma, 9:00-11:00",
      image: DeparmentImage15,
    },
    {
      title: "Maslahatchi",
      fullname: "Vakant",
      image: VacancyImage,
    },
  ];

  const departments = [
    {
      title:
        "Muhammad al-Xorazmiy vorislari tizimini joriy etishni muvofiqlashtirish bo'limi",
      image: DeparmentImage11,
      fullname: "Saidmurod Abdujabborov",
      email: "s.abdujabborov@digital.uz",
      number: "+998 71 203 03 43 (109)",
    },
    {
      title: "Raqamli ko'nikmalarni shakllantirish bo'limi",
      fullname: "Vakant",
      email: "",
      number: "",
      image: VacancyImage,
    },
    {
      title: "Kadrlar bo'lim",
      fullname: "Akmal Yoqubov",
      email: "a.yoqubov@digital.uz",
      number: "+998 71 203 03 43 (105)",
      image: DeparmentImage17,
    },
    {
      title: "Bosh yuristkonsult",
      fullname: "Karimov MuhammadSodiq",
      number: "+998 71 203 03 43 (110)",
      email: "",
      image: DeparmentImage18,
    },
    {
      title: "Ijro intizomi va murojatlar bo'yicha bosh mutaxassis",
      fullname: "Feruza Nematxonova",
      email: "feruzamaxmudova26@gmail.com",
      number: "+998 71 203 03 43 (116)",
      image: DeparmentImage19,
    },
    {
      title: "Marketing va PR bo'limi",
      fullname: "Moxira Nurullayeva",
      email: "m.nurullayeva@digital.uz",
      number: "+998 71 203 03 43 (107)",
      image: DeparmentImage13,
    },
  ];

  const firstDeputyDepartments = [
    {
      title: "Direktorning birinchi o'rinbosari",
      fullname: "Vakant",
      email: "",
      number: "",
      image: VacancyImage,
    },
    {
      title: "Iqtidorli yoshlarni IT sohasiga jalb qilish bo'limi",
      fullname: "Muhlisa Xudayberganova",
      email: "m.xudayberganova@digital.uz",
      number: "+998 71 203 03 43 (111)",
      image: DeparmentImage14,
    },
    {
      title: "Ta'lim tashkilotlari bilan ishlash bo'limi",
      image: DeparmentImage12,
      fullname: "Alisher Rapiyev",
      email: "a.rapiyev@digital.uz",
      number: "+998 71 203 03 43 (104) ",
    },
    {
      title:
        "Xalqaro sertifikatlar va masofaviy ta'limni rivojlantirish bo'limi",
      image: DeparmentImage10,
      fullname: "Mirabbos Anvarov",
      email: "m.anvarov@digital.uz",
      number: "+998 71 203 03 43 (112) ",
    },
    {
      title: "Raqamli texnologiyalar bo'limi",
      image: DeparmentImage7,
      fullname: "Farrux Boltayev",
      email: "f.boltayev@digital.uz",
      number: "+998 71 203 03 43 (888)",
    },
    {
      title: '"IT shaharcha"lar faoliyatini tashkil etish boshqarmasi',
      image: DeparmentImage8,
      fullname: "Akbarxo'ja Anvarxonov",
      email: "a.anvarxonov@digital.uz",
      number: "+998 71 203 03 43 (117) ",
    },
  ];

  const deputyDepartments = [
    {
      title: "Direktor o'rinbosari",
      fullname: "Davronbek Adilbekov",
      email: "d.adilbekov@digital.uz",
      number: "+998 71 203 03 43 (103)",
      image: DeparmentImage3,
    },
    {
      title: "Iqtisodiyot va moliya bo'limi",
      fullname: "Soliyev Odiljon",
      email: "o.soliyev@digital.uz",
      number: "+998 71 203 03 43 (114)",
      image: DeparmentImage20,
    },
    {
      title: "Buxgalteriya bo'limi",
      fullname: "Boymatov Zafar",
      email: "z.boymatov@digital.uz",
      number: "+998 71 203 03 43 (115)",
      image: DeparmentImage21,
    },
  ];

  const secondDeputyDepartments = [
    {
      title: "Direktor o'rinbosari",
      fullname: "Jasur Askarov",
      email: "invest@digital.uz",
      number: "+998 78 238-41-76",
      image: DeparmentImage2,
    },
    {
      title: "Investitsiya loyiha ofisi",
      fullname: "Farrux Abduvohidov",
      email: "invest@digital.uz",
      number: "+998 78 238 41 76",
      image: DeparmentImage16,
    },
  ];

  return (
    <div className="select-none">
      <div className="max-w-[1230px] mx-auto ">
        <AboutPageHeader
          title={t("menu.structure")}
          breadCrumps={breadCrumps}
        />
      </div>

      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowModal(false);
            }
          }}
        >
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="h-[408px] flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-xl max-w-2xl w-full overflow-hidden relative"
            >
              <button className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 transition-colors">
                <X size={24} onClick={() => setShowModal(false)} />
              </button>

              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 h-64 md:h-auto relative">
                  <img
                    src={modalContent.image}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="w-full md:w-2/3 p-6 md:p-8">
                  <div className="space-y-6">
                    <div className="mb-[100px]">
                      <h2 className="text-2xl font-bold text-gray-800">
                        {modalContent.fullname}
                      </h2>
                      <p className="text-gray-600 mt-1">{modalContent.title}</p>
                    </div>

                    <div className="space-y-4">
                      {modalContent.email && (
                        <div className="flex items-center space-x-3 text-gray-700">
                          <Mail className="text-blue-400" size={20} />
                          <a
                            href={`mailto:${modalContent.email}`}
                            className="hover:text-blue-500"
                          >
                            {modalContent.email}
                          </a>
                        </div>
                      )}

                      {modalContent.phone && (
                        <div className="flex items-center space-x-3 text-gray-700">
                          <Phone className="text-blue-400" size={20} />
                          <a
                            href={`tel:${modalContent.phone}`}
                            className="hover:text-blue-500"
                          >
                            {modalContent.phone}
                          </a>
                        </div>
                      )}

                      {modalContent.time && (
                        <div className="flex items-center space-x-3 text-gray-700">
                          <Clock className="text-blue-400" size={20} />
                          <span>{modalContent.time}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      )}

      <div className="mx-[100px]">
        <div
          // ref={containerRef}
          // active:cursor-grabbing
          className="max-w-[1400px] mx-auto justify-center mb-[50px] flex bg-white overflow-auto mt-[60px] cursor-grab "
          // onMouseDown={handleMouseDown}
          // onMouseLeave={handleMouseLeave}
          // onMouseUp={handleMouseUp}
          // onMouseMove={handleMouseMove}
        >
          <TransformWrapper
            initialScale={1}
            initialPositionX={200}
            initialPositionY={100}
          >
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
              <>
                {/* <div className="relative mx-auto">
                  <Controls />
                </div> */}
                <TransformComponent>
                  <div className="flex justify-center w-full">
                    <div className="relative">
                      <div className="min-w-[100px] absolute top-[36px] left-1/2 w-[360px] h-[2px] bg-blue-500 -translate-x-1/2" />

                      <div className="flex justify-center gap-[130px] mb-16 relative top-[15px]">
                        {topManagement.map((item, index) => (
                          <div
                            key={index}
                            onClick={() => handleDivClick(item)}
                            className="px-6 py-2 rounded-md border border-blue-500 bg-white text-center z-10 cursor-pointer hover:bg-blue-50"
                          >
                            {item.title}
                          </div>
                        ))}
                      </div>

                      <div className="absolute top-[36px] left-1/2 w-[2px] h-[40px] bg-blue-500 -translate-x-1/2" />
                      <div className="absolute top-[75px] left-[735px] w-[1197px] h-[2px] bg-blue-500 -translate-x-1/2 main-line" />
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
                              onClick={() => handleDivClick(item)}
                              className={`p-4 ${
                                item.isHeader
                                  ? "bg-blue-500 text-white hover:bg-blue-600"
                                  : "border border-blue-500 hover:bg-blue-50"
                              } bg-white rounded-md text-center text-sm min-h-[80px] flex items-center justify-center cursor-pointer`}
                            >
                              {item.title}
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-col gap-4">
                          {firstDeputyDepartments.map((item, index) => (
                            <div
                              key={index}
                              onClick={() => handleDivClick(item)}
                              className={`p-4 ${
                                item.isHeader
                                  ? "bg-blue-500 text-white hover:bg-blue-600"
                                  : "border border-blue-500 hover:bg-blue-50"
                              } bg-white rounded-md text-center text-sm min-h-[80px] flex items-center justify-center cursor-pointer`}
                            >
                              {item.title}
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-col gap-4">
                          {deputyDepartments.map((item, index) => (
                            <div
                              key={index}
                              onClick={() => handleDivClick(item)}
                              className={`p-4 ${
                                item.isHeader
                                  ? "bg-blue-500 text-white hover:bg-blue-600"
                                  : "border border-blue-500 hover:bg-blue-50"
                              } bg-white rounded-md text-center text-sm min-h-[80px] flex items-center justify-center cursor-pointer`}
                            >
                              {item.title}
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-col gap-4">
                          {secondDeputyDepartments.map((item, index) => (
                            <div
                              key={index}
                              onClick={() => handleDivClick(item)}
                              className={`p-4 ${
                                item.isHeader
                                  ? "bg-blue-500 text-white hover:bg-blue-600"
                                  : "border border-blue-500 hover:bg-blue-50"
                              } bg-white rounded-md text-center text-sm min-h-[80px] flex items-center justify-center cursor-pointer`}
                            >
                              {item.title}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </TransformComponent>
              </>
            )}
          </TransformWrapper>
        </div>
      </div>
    </div>
  );
}
