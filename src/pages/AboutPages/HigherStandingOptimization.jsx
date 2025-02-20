import React from "react";
import { useTranslation } from "react-i18next";
import AboutPageHeader from "../../components/AboutComponents/AboutPageHeader";
import { eyeIcon } from "../../assets/icons/icon";

function HigherStandingOptimization() {
  const { t } = useTranslation("global");

  const breadCrumps = [
    {
      link: "/about",
      name: t("menu.center"),
    },
    {
      link: "/higher-standing-organization",
      name: t("menu.higherOrganization"),
    },
  ];

  return (
    <div className="max-w-[1230px] mx-auto mb-8">
      <AboutPageHeader
        title={t("menu.higherOrganization")}
        breadCrumps={breadCrumps}
      />

      <div className="higher-standing-optimization corruption mt-[20px]">
        <p>
          O‘zbekiston Respublikasi Prezidentining “Yangi O‘zbekiston ma’muriy
          islohotlarini amalga oshirish chora-tadbirlari to‘g‘risida” gi
          2022-yil 24-dekabrdagi{" "}
          <a href="https://lex.uz/uz/docs/-6324756" target="_blank">
            PF-269-son
          </a>{" "}
          Farmoni bilan Axborot texnologiyalari va kommunikatsiyalarini
          rivojlantirish vazirligi negizida Raqamli texnologiyalar vazirligi
          tashkil etilgan. Vazirlik faoliyatining asosiy vazifalari va
          yo'nalishlari quyidagilardan iborat: axborot texnologiyalari va
          kommunikatsiyalar sohasida, “elektron hukumat”ni joriy etishda yagona
          davlat siyosati amalga oshirilishini ta’minlash, axborot
          texnologiyalarini rivojlantirishning jahon darajasidan kelib chiqqan
          holda milliy axborot-kommunikatsiya tizimini tatbiq etish va
          rivojlantirish yuzasidan kompleks dasturlarni ishlab chiqish va amalga
          oshirish; telekommunikatsiya infratuzilmasini yanada rivojlantirish va
          modernizatsiya qilish, shu jumladan, Internet tarmog‘iga keng polosali
          ulanishni kengaytirish, telefon aloqasi, televideniye va
          radioeshittirishning raqamli tizimlariga to‘liq o‘tishni ta’minlash,
          aloqa va telekommunikatsiyalar sohasidagi faoliyatni, shuningdek,
          radiochastotali spektrdan foydalanishni davlat yo‘li bilan boshqarish,
          litsenziyalash va nazorat qilish borasidagi funksiyalarni amalga
          oshirish; “elektron hukumat”ni tatbiq etish, vazirliklar, idoralar,
          kompaniyalar va uyushmalarning, mahalliy davlat hokimiyati
          organlarining axborotlashtirish va interaktiv davlat xizmatlarini
          takomillashtirish borasidagi faoliyatini idoralararo
          muvofiqlashtirish, monitoring qilish, baholash va nazorat qilish
          bo‘yicha davlat dasturlarining amalga oshirilishini ta’minlash,
          shuningdek, davlat axborot resurslari hamda ma’lumot bazalarini
          shakllantirish, saqlash va foydalanishning yagona tizimini vujudga
          keltirish, idoralararo axborot tizimlarini yaratish va boshqarish;
          Internet tarmog‘ining milliy segmenti yanada shakllantirilishini
          ta’minlash, mamlakatimizning turli yo‘nalishlardagi zamonaviy
          veb-resurslarini, shu jumladan, aholining, xususan, yosh avlodning
          axborotga bo‘lgan va intellektual talab-ehtiyojlarini qondirish
          maqsadida tarmoq resurslarini rivojlantirish uchun zarur texnik va
          qulay shart-sharoitlarni yaratish; raqobatdosh dasturiy
          mahsulotlarning mamlakatimizda ishlab chiqarilishini va ichki bozorini
          hamda ularga ko‘rsatiladigan xizmatlarni rivojlantirishga
          ko‘maklashish va uning muvofiqlashtirilishini ta’minlash,
          iqtisodiyotning real sektori tarmoqlarida va iste’molchilarda
          zamonaviy dasturiy mahsulotlar, axborot tizimlari va axborot
          resurslarini joriy etish; axborot xavfsizligini ta’minlash va
          kommunikatsiya tarmoqlari, dasturiy mahsulotlar, axborot tizimlari va
          resurslarini himoya qilishning zamonaviy texnologiyalarini tatbiq
          etish chora-tadbirlarini amalga oshirish, axborot resurslarini himoya
          qilish bo‘yicha texnik infratuzilmani yanada rivojlantirish; zamonaviy
          kommunikatsiya vositalari sohasida ilmiy tadqiqotlar va ishlanmalarni,
          kadrlarni tayyorlash, qayta tayyorlash va malakasini oshirishni
          tashkil qilish, dasturiy mahsulotlar, axborot tizimlari va ma’lumotlar
          bazalarini ishlab chiqish va tatbiq etish, axborot xavfsizligini
          ta’minlash va axborot-kommunikatsiya texnologiyalarining boshqa
          sohalarida shunday ishlarni tashkil etish; aloqa, axborot
          texnologiyalari va kommunikatsiyalar sohasida xalqaro hamkorlikni
          yo‘lga qo‘yish, ustuvor loyihalarni amalga oshirish, radiochastotalik
          spektrdan samarali foydalanish uchun hamda vazirlik faoliyati
          doirasiga kiruvchi boshqa yo‘nalishlar bo‘yicha xorijiy
          investitsiyalarni jalb etish.
        </p>
      </div>

      <div className="mt-[40px] flex flex-col items-end mb-[40px]">
        <div className="flex gap-[10px] items-center mb-[10px]">
          <img src={eyeIcon} alt="" />
          4248
        </div>
        <div>Oxirgi yangilanish: 2023-05-22 16:30:07</div>
      </div>
    </div>
  );
}

export default HigherStandingOptimization;
