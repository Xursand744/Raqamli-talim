import { useTranslation } from "react-i18next";
import AboutPageHeader from "../../components/AboutComponents/AboutPageHeader";
import "./about.css";
import { useState, useEffect } from "react";
import { Clock, Mail, Phone, X } from "lucide-react";
import {
  DeparmentImage10,
  DeparmentImage11,
  DeparmentImage12,
  DeparmentImage13,
  DeparmentImage14,
  DeparmentImage15,
  DeparmentImage16,
  DeparmentImage18,
  DeparmentImage19,
  DeparmentImage2,
  DeparmentImage20,
  DeparmentImage3,
  DeparmentImage8,
  DeparmentImage22,
} from "../../assets/deparment";
import { VacancyImage } from "../../assets";
import { motion } from "framer-motion";
import {
  TransformWrapper,
  TransformComponent
} from "react-zoom-pan-pinch";

export default function Structure() {
  const { t } = useTranslation("global");
  const [showModal, setShowModal] = useState(false);
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

  const handleDivClick = (item) => {
    setModalContent({
      title: item.title,
      image: item.image || VacancyImage,
      fullname: item.fullname || "Vakant",
      phone: item.number || "",
      email: item.email || "",
      time: item.time || "",
    });
    setShowModal(true);
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
      title: "structure.director",
      fullname: "Azamat Eshankulov",
      email: "education@digital.uz",
      number: "+998 71 203 03 43 (101)",
      time: "Juma, 9:00-11:00",
      image: DeparmentImage15,
    },
  ];

  const departments = [
    {
      title: "structure.muhammadAlXorazmiy",
      image: DeparmentImage11,
      fullname: "Saidmurod Abdujabborov",
      email: "s.abdujabborov@digital.uz",
      number: "+998 71 203 03 43 (109)",
    },
    {
      title: "structure.hrDepartment",
      fullname: "Aziza Raximova",
      email: "@digital.uz",
      number: "+998 71 203 03 43 (105)",
      image: VacancyImage,
    },
    {
      title: "structure.chiefLawyer",
      fullname: "Karimov MuhammadSodiq",
      number: "+998 71 203 03 43 (110)",
      email: "",
      image: DeparmentImage18,
    },
    {
      title: "structure.disciplineSpecialist",
      fullname: "Feruza Nematxonova",
      email: "feruzamaxmudova26@gmail.com",
      number: "+998 71 203 03 43 (116)",
      image: DeparmentImage19,
    },
    {
      title: "structure.marketingPr",
      fullname: "Moxira Nurullayeva",
      email: "m.nurullayeva@digital.uz",
      number: "+998 71 203 03 43 (107)",
      image: DeparmentImage13,
    },
    {
      title: "structure.complianceSpecialist",
      fullname: "Vakant",
      email: "digital.uz",
      number: "+998 71 203 03 43",
      image: VacancyImage,
    },
  ];

  const firstDeputyDepartments = [
    {
      title: "structure.firstDeputy",
      fullname: "Vakant",
      email: "",
      number: "",
      image: VacancyImage,
    },
    {
      title: "structure.talentedYouth",
      fullname: "Muhlisa Xudayberganova",
      email: "m.xudayberganova@digital.uz",
      number: "+998 71 203 03 43 (111)",
      image: DeparmentImage14,
    },
    {
      title: "structure.distanceEducation",
      image: DeparmentImage12,
      fullname: "Alisher Rapiyev",
      email: "a.rapiyev@digital.uz",
      number: "+998 71 203 03 43 (104) ",
    },
    {
      title: "structure.digitalTech",
      image: DeparmentImage22,
      fullname: "Shaxzod Ermatov",
      email: "@digital.uz",
      number: "+998 71 203 03 43 (104) ",
    },
    {
      title: "structure.freelancers",
      image: DeparmentImage10,
      fullname: "Mirabbos Anvarov",
      email: "m.anvarov@digital.uz",
      number: "+998 71 203 03 43 (112) ",
    },
  ];

  const deputyDepartments = [
    {
      title: "structure.deputy",
      fullname: "Davronbek Adilbekov",
      email: "d.adilbekov@digital.uz",
      number: "+998 71 203 03 43 (103)",
      image: DeparmentImage3,
    },
    {
      title: "structure.economyFinance",
      fullname: "Soliyev Odiljon",
      email: "o.soliyev@digital.uz",
      number: "+998 71 203 03 43 (114)",
      image: DeparmentImage20,
    },
    {
      title: "structure.accounting",
      fullname: "Axrorjon Azamjonov",
      email: "@digital.uz",
      number: "",
      image: VacancyImage,
    },
    {
      title: "structure.regionsCoordination",
      fullname: "Anvarxonov Akbarxo'ja",
      email: "@digital.uz",
      number: "+998 71 203 03 43 (115)",
      image: DeparmentImage8,
    },
    {
      title: "structure.regionsBranches",
      fullname: "",
      email: "@digital.uz",
      number: "+998 71 203 03 43",
      image: VacancyImage,
    },
  ];

  const secondDeputyDepartments = [
    {
      title: "structure.secondDeputy",
      fullname: "Jasur Askarov",
      email: "invest@digital.uz",
      number: "+998 78 238-41-76",
      image: DeparmentImage2,
    },
    {
      title: "structure.investmentOffice",
      fullname: "Farrux Abduvohidov",
      email: "invest@digital.uz",
      number: "+998 78 238 41 76",
      image: DeparmentImage16,
    },
    {
      title: "structure.infoAnalytics",
      fullname: "Yayra Ibragimova",
      email: "digital.uz",
      number: "+998 71 203 03 43",
      image: VacancyImage,
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
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl max-w-2xl w-full overflow-hidden relative transition-colors duration-200"
            >
              <button className="absolute right-4 top-4 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white transition-colors">
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
                      <h2 className="text-2xl font-bold text-gray-800 dark:text-white transition-colors duration-200">
                        {modalContent.fullname}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 mt-1 transition-colors duration-200">{t(modalContent.title)}</p>
                    </div>

                    <div className="space-y-4">
                      {modalContent.email && (
                        <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-200 transition-colors duration-200">
                          <Mail className="text-blue-400" size={20} />
                          <a
                            href={`mailto:${modalContent.email}`}
                            className="hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
                          >
                            {modalContent.email}
                          </a>
                        </div>
                      )}

                      {modalContent.phone && (
                        <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-200 transition-colors duration-200">
                          <Phone className="text-blue-400" size={20} />
                          <a
                            href={`tel:${modalContent.phone}`}
                            className="hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
                          >
                            {modalContent.phone}
                          </a>
                        </div>
                      )}

                      {modalContent.time && (
                        <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-200 transition-colors duration-200">
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
          className="max-w-[1500px] mx-auto justify-center mb-[50px] flex bg-white dark:bg-gray-900 overflow-auto mt-[60px] cursor-grab transition-colors duration-200"
        >
          <TransformWrapper
            initialScale={1}
            initialPositionX={200}
            initialPositionY={100}
          >
            {() => (
              <>
                <TransformComponent>
                  <div className="flex justify-center w-full">
                    <div className="relative">
                      <div className="flex justify-center gap-[130px] mb-16 relative top-[15px]">
                        {topManagement.map((item, index) => (
                          <div
                            key={index}
                            onClick={() => handleDivClick(item)}
                            className={`px-6 py-2 rounded-md border border-blue-500 bg-white dark:bg-gray-900 dark:border-blue-400 text-center z-10 cursor-pointer hover:bg-blue-50 dark:hover:bg-blue-800 hover:text-white dark:hover:text-white transition-colors duration-200`}
                          >
                            {t(item.title)}
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
                                  : "border border-blue-500 dark:border-blue-400 bg-white dark:bg-gray-900 hover:bg-blue-50 dark:hover:bg-blue-800 hover:text-white dark:hover:text-white transition-colors duration-200"
                              } bg-white rounded-md text-center text-sm min-h-[80px] flex items-center justify-center cursor-pointer`}
                            >
                              {t(item.title)}
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
                                  : "border border-blue-500 dark:border-blue-400 bg-white dark:bg-gray-900 hover:bg-blue-50 dark:hover:bg-blue-800 hover:text-white dark:hover:text-white transition-colors duration-200"
                              } bg-white rounded-md text-center text-sm min-h-[80px] flex items-center justify-center cursor-pointer`}
                            >
                              {t(item.title)}
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
                                  : "border border-blue-500 dark:border-blue-400 bg-white dark:bg-gray-900 hover:bg-blue-50 dark:hover:bg-blue-800 hover:text-white dark:hover:text-white transition-colors duration-200"
                              } bg-white rounded-md text-center text-sm min-h-[80px] flex items-center justify-center cursor-pointer`}
                            >
                              {t(item.title)}
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
                                  : "border border-blue-500 dark:border-blue-400 bg-white dark:bg-gray-900 hover:bg-blue-50 dark:hover:bg-blue-800 hover:text-white dark:hover:text-white transition-colors duration-200"
                              } bg-white rounded-md text-center text-sm min-h-[80px] flex items-center justify-center cursor-pointer`}
                            >
                              {t(item.title)}
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
