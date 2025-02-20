import { useTranslation } from "react-i18next";
import AboutPageHeader from "../../components/AboutComponents/AboutPageHeader";
import { eyeIcon } from "../../assets/icons/icon";

function AntiCorruption() {
  const { t } = useTranslation("global");

  const breadCrumps = [
    {
      link: "/about",
      name: t("menu.center"),
    },
    {
      link: "/anti-corruption",
      name: t("menu.antiCorruption"),
    },
  ];

  return (
    <div className="max-w-[1230px] mx-auto mb-8">
      <AboutPageHeader
        title={t("menu.antiCorruption")}
        breadCrumps={breadCrumps}
      />

      <p className="anti-corruption mt-[40px]">
        O‘zbekiston Respublikasi Raqamli texnologiyalar vazirligining korrupsiya
        faktlariga doir murojaatlarni koʻrib chiqish natijalari haqidagi yillik
        hisoboti yuzasidan{" "}
        <a
          href="https://api-portal.gov.uz/uploads/1366e33f-84e0-d07f-c73d-0d3c6dbc0bd3_media_.pdf"
          target="_blank"
        >
          MA’LUMOT
        </a>{" "}
        <br />
        O‘zbekiston Respublikasi Raqamli texnologiyalar vazirligida 2024-yil
        davomida ishga qabul qilingan (rotatsiya qilingan) rahbar kadrlar
        to‘g‘risidagi{" "}
        <a
          href="https://api-portal.gov.uz/uploads/299f2746-e95e-f51c-113b-2d6998489774_media_.pdf"
          target="_blank"
        >
          MA’LUMOT
        </a>{" "}
        <br /> Raqamli texnologiyalar vazirligida Korrupsiyaga qarshi kurashish
        davlat dasturida nazarda tutilgan chora-tadbirlarning ijrosi haqida{" "}
        <a
          href="https://www.figma.com/exit?url=https%3A%2F%2Fapi-portal.gov.uz%2Fuploads%2F32610edd-a266-6c7f-d95f-a1c110986f3d_media_.pdf"
          target="_blank"
        >
          H I S O B O T
        </a>
        <br /> <br />
        Raqamli texnologiyalar vazirligida 2024-yil uchun korrupsiyaga qarshi
        kurashish tizimining amal qilishi haqida UMUMIY HISOBOT
        <br /> <br />
        Manfaatlar to‘qnashuvi holatlariga nisbatan ichki idoraviy tekshiruv{" "}
        <a
          href="https://api-portal.gov.uz/uploads/1d9f1f1c-76ba-6f15-1041-2be81b46b292_media_.pdf"
          target="_blank"
        >
          natijalari
        </a>{" "}
        <br /> Korrupsiyaga qarshi kurashish bo‘yicha umumiy va{" "}
        <a
          href="https://api-portal.gov.uz/uploads/95b33d77-ee91-f227-a104-412ce01e3ad1_media_.pdf"
          target="_blank"
        >
          maxsus o‘qitishlar
        </a>{" "}
        <br />
        Korrupsiyaga qarshi kurashish mavzularida tashkil etilgan{" "}
        <a
          href="https://api-portal.gov.uz/uploads/eca97d6d-9b6a-d575-74e5-a3076b38e607_media_.pdf"
          target="_blank"
        >
          targ‘ibot tadbirlari
        </a>
      </p>

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

export default AntiCorruption;
