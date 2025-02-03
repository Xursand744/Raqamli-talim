import { useTranslation } from "react-i18next";
import AboutPageHeader from "../../components/AboutComponents/AboutPageHeader";
import "./about.css";

export default function Structure() {
  const { t } = useTranslation("global");

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
    <>
      <div className="container">
        <AboutPageHeader
          title={t("menu.structure")}
          breadCrumps={breadCrumps}
        />
      </div>

      <div className="w-full min-h-screen bg-white  overflow-auto mt-[60px]">
        <div className="min-w-[1400px] mx-[20px] relative ">
          <div className="absolute top-[36px] left-1/2 w-[360px] h-[2px] bg-blue-500 -translate-x-1/2" />

          <div className="flex justify-center gap-[130px] mb-16 relative top-[15px]">
            <div className="px-6 py-2 rounded-md border border-blue-500 bg-white text-center z-10">
              Direktor
            </div>
            <div className="px-6 py-2 rounded-md border border-blue-500 bg-white text-center z-10">
              Maslahatchi
            </div>
          </div>

          <div className="absolute top-[36px] left-1/2 w-[2px] h-[40px] bg-blue-500 -translate-x-1/2" />

          <div className="absolute top-[75px] left-[49.3%] w-[1200px] h-[2px] bg-blue-500 -translate-x-1/2 main-line" />

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
              <div className="p-4 bg-blue-500 text-white rounded-md text-center text-sm min-h-[80px] flex items-center justify-center">
                "Muhammad al-Xorazmiy vorislari" tizimini joriy etishni
                muvofiqlashtirish bo'limi
              </div>
              <div className="p-4 border border-blue-500 rounded-md text-center text-sm min-h-[80px] flex items-center justify-center">
                Raqamli ko'nikmalarni shakllantirish bo'limi
              </div>
              <div className="p-4 border border-blue-500 rounded-md text-center text-sm min-h-[80px] flex items-center justify-center">
                Kadrlar bo'lim
              </div>
              <div className="p-4 border border-blue-500 rounded-md text-center text-sm min-h-[80px] flex items-center justify-center">
                Bosh yuristkonsult
              </div>
              <div className="p-4 border border-blue-500 rounded-md text-center text-sm min-h-[80px] flex items-center justify-center">
                Ijro intizomi va murojatlar bo'yicha bosh mutaxassis
              </div>
              <div className="p-4 border border-blue-500 rounded-md text-center text-sm min-h-[80px] flex items-center justify-center">
                Marketing va PR bo'limi
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="p-4 bg-blue-500 text-white rounded-md text-center text-sm min-h-[80px] flex items-center justify-center">
                Direktorning birinchi o'rinbosari
              </div>
              <div className="p-4 border border-blue-500 rounded-md text-center text-sm min-h-[80px] flex items-center justify-center">
                Iqtidorli yoshlarni IT sohasiga jalb qilish bo'limi
              </div>
              <div className="p-4 border border-blue-500 rounded-md text-center text-sm min-h-[80px] flex items-center justify-center">
                Ta'lim tashkilotlari bilan ishlash bo'limi
              </div>
              <div className="p-4 border border-blue-500 rounded-md text-center text-sm min-h-[80px] flex items-center justify-center">
                Xalqaro sertifikatlar va masofaviy ta'limni rivojlantirish
                bo'limi
              </div>
              <div className="p-4 border border-blue-500 rounded-md text-center text-sm min-h-[80px] flex items-center justify-center">
                Raqamli texnologiyalar bo'limi
              </div>
              <div className="p-4 border border-blue-500 rounded-md text-center text-sm min-h-[80px] flex items-center justify-center">
                "IT shaharcha"lar faoliyatini tashkil etish boshqarmasi
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="p-4 bg-blue-500 text-white rounded-md text-center text-sm min-h-[80px] flex items-center justify-center">
                Direktor o'rinbosari
              </div>
              <div className="p-4 border border-blue-500 rounded-md text-center text-sm min-h-[80px] flex items-center justify-center">
                Iqtisodiyot va moliya bo'limi
              </div>
              <div className="p-4 border border-blue-500 rounded-md text-center text-sm min-h-[80px] flex items-center justify-center">
                Buxgalteriya bo'limi
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="p-4 bg-blue-500 text-white rounded-md text-center text-sm min-h-[80px] flex items-center justify-center">
                Direktor o'rinbosari
              </div>
              <div className="p-4 border border-blue-500 rounded-md text-center text-sm min-h-[80px] flex items-center justify-center">
                Investitsiya loyiha ofisi
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
