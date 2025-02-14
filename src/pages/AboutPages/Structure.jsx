import { useTranslation } from "react-i18next";
import AboutPageHeader from "../../components/AboutComponents/AboutPageHeader";
import "./about.css";
import { useState } from "react";

export default function Structure() {
  const { t } = useTranslation("global");
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    image: "https://placehold.co/600x400",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  });

  const handleDivClick = (title) => {
    setModalContent({
      ...modalContent,
      title,
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

  return (
    <div className="max-w-[1230px] mx-auto">
      <div className="container">
        <AboutPageHeader
          title={t("menu.structure")}
          breadCrumps={breadCrumps}
        />
      </div>

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

      <div className="w-full min-h-screen bg-white  overflow-auto mt-[60px]">
        <div className="min-w-[1400px] mx-[20px] relative ">
          <div className="absolute top-[36px] left-1/2 w-[360px] h-[2px] bg-blue-500 -translate-x-1/2" />

          <div className="flex justify-center gap-[130px] mb-16 relative top-[15px]">
            <div
              onClick={() => handleDivClick("Direktor")}
              className="px-6 py-2 rounded-md border border-blue-500 bg-white text-center z-10 cursor-pointer hover:bg-blue-50"
            >
              Direktor
            </div>
            <div
              onClick={() => handleDivClick("Maslahatchi")}
              className="px-6 py-2 rounded-md border border-blue-500 bg-white text-center z-10 cursor-pointer hover:bg-blue-50"
            >
              Maslahatchi
            </div>
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
              <div
                onClick={() =>
                  handleDivClick(
                    '"Muhammad al-Xorazmiy vorislari" tizimini joriy etishni muvofiqlashtirish bo\'limi'
                  )
                }
                className="p-4 bg-blue-500 text-white rounded-md text-center text-sm min-h-[80px] flex items-center justify-center cursor-pointer hover:bg-blue-600"
              >
                "Muhammad al-Xorazmiy vorislari" tizimini joriy etishni
                muvofiqlashtirish bo'limi
              </div>
              <div
                onClick={() =>
                  handleDivClick("Raqamli ko'nikmalarni shakllantirish bo'limi")
                }
                className="p-4 border border-blue-500 rounded-md text-center text-sm min-h-[80px] flex items-center justify-center cursor-pointer hover:bg-blue-50"
              >
                Raqamli ko'nikmalarni shakllantirish bo'limi
              </div>
              <div
                onClick={() => handleDivClick("Kadrlar bo'lim")}
                className="p-4 border border-blue-500 rounded-md text-center text-sm min-h-[80px] flex items-center justify-center cursor-pointer hover:bg-blue-50"
              >
                Kadrlar bo'lim
              </div>
              <div
                onClick={() => handleDivClick("Bosh yuristkonsult")}
                className="p-4 border border-blue-500 rounded-md text-center text-sm min-h-[80px] flex items-center justify-center cursor-pointer hover:bg-blue-50"
              >
                Bosh yuristkonsult
              </div>
              <div
                onClick={() =>
                  handleDivClick(
                    "Ijro intizomi va murojatlar bo'yicha bosh mutaxassis"
                  )
                }
                className="p-4 border border-blue-500 rounded-md text-center text-sm min-h-[80px] flex items-center justify-center cursor-pointer hover:bg-blue-50"
              >
                Ijro intizomi va murojatlar bo'yicha bosh mutaxassis
              </div>
              <div
                onClick={() => handleDivClick("Marketing va PR bo'limi")}
                className="p-4 border border-blue-500 rounded-md text-center text-sm min-h-[80px] flex items-center justify-center cursor-pointer hover:bg-blue-50"
              >
                Marketing va PR bo'limi
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div
                onClick={() =>
                  handleDivClick("Direktorning birinchi o'rinbosari")
                }
                className="p-4 bg-blue-500 text-white rounded-md text-center text-sm min-h-[80px] flex items-center justify-center cursor-pointer hover:bg-blue-600"
              >
                Direktorning birinchi o'rinbosari
              </div>
              <div
                onClick={() =>
                  handleDivClick(
                    "Iqtidorli yoshlarni IT sohasiga jalb qilish bo'limi"
                  )
                }
                className="p-4 border border-blue-500 rounded-md text-center text-sm min-h-[80px] flex items-center justify-center cursor-pointer hover:bg-blue-50"
              >
                Iqtidorli yoshlarni IT sohasiga jalb qilish bo'limi
              </div>
              <div
                onClick={() =>
                  handleDivClick("Ta'lim tashkilotlari bilan ishlash bo'limi")
                }
                className="p-4 border border-blue-500 rounded-md text-center text-sm min-h-[80px] flex items-center justify-center cursor-pointer hover:bg-blue-50"
              >
                Ta'lim tashkilotlari bilan ishlash bo'limi
              </div>
              <div
                onClick={() =>
                  handleDivClick(
                    "Xalqaro sertifikatlar va masofaviy ta'limni rivojlantirish bo'limi"
                  )
                }
                className="p-4 border border-blue-500 rounded-md text-center text-sm min-h-[80px] flex items-center justify-center cursor-pointer hover:bg-blue-50"
              >
                Xalqaro sertifikatlar va masofaviy ta'limni rivojlantirish
                bo'limi
              </div>
              <div
                onClick={() => handleDivClick("Raqamli texnologiyalar bo'limi")}
                className="p-4 border border-blue-500 rounded-md text-center text-sm min-h-[80px] flex items-center justify-center cursor-pointer hover:bg-blue-50"
              >
                Raqamli texnologiyalar bo'limi
              </div>
              <div
                onClick={() =>
                  handleDivClick(
                    '"IT shaharcha"lar faoliyatini tashkil etish boshqarmasi'
                  )
                }
                className="p-4 border border-blue-500 rounded-md text-center text-sm min-h-[80px] flex items-center justify-center cursor-pointer hover:bg-blue-50"
              >
                "IT shaharcha"lar faoliyatini tashkil etish boshqarmasi
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div
                onClick={() => handleDivClick("Direktor o'rinbosari")}
                className="p-4 bg-blue-500 text-white rounded-md text-center text-sm min-h-[80px] flex items-center justify-center cursor-pointer hover:bg-blue-600"
              >
                Direktor o'rinbosari
              </div>
              <div
                onClick={() => handleDivClick("Iqtisodiyot va moliya bo'limi")}
                className="p-4 border border-blue-500 rounded-md text-center text-sm min-h-[80px] flex items-center justify-center cursor-pointer hover:bg-blue-50"
              >
                Iqtisodiyot va moliya bo'limi
              </div>
              <div
                onClick={() => handleDivClick("Buxgalteriya bo'limi")}
                className="p-4 border border-blue-500 rounded-md text-center text-sm min-h-[80px] flex items-center justify-center cursor-pointer hover:bg-blue-50"
              >
                Buxgalteriya bo'limi
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div
                onClick={() => handleDivClick("Direktor o'rinbosari")}
                className="p-4 bg-blue-500 text-white rounded-md text-center text-sm min-h-[80px] flex items-center justify-center cursor-pointer hover:bg-blue-600"
              >
                Direktor o'rinbosari
              </div>
              <div
                onClick={() => handleDivClick("Investitsiya loyiha ofisi")}
                className="p-4 border border-blue-500 rounded-md text-center text-sm min-h-[80px] flex items-center justify-center cursor-pointer hover:bg-blue-50"
              >
                Investitsiya loyiha ofisi
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
