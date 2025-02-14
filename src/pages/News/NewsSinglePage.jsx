import React from "react";
import BreadCrumps from "../../components/BreadCrumps/BreadCrumps";
import { EyeIcon } from "lucide-react";
import { singleNewsImage } from "../../assets";
import LastNews from "../../components/News/LastNews";
import "./News.css";

function NewsSinglePage() {
  const breadCrumps = [
    {
      title: "Yangiliklar",
      link: "/news",
    },
    {
      title: "IT xizmatlarni online rasmiylashtirin",
      link: "/news/1",
    },
  ];

  const lastNews = [
    {
      id: 1,
      title: "Mentorlar bilan offline suhbat",
      date: "19-iyul, 2024",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
    },
    {
      id: 2,
      title: "Mentorlar bilan offline suhbat",
      date: "19-iyul, 2024",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
    },
    {
      id: 3,
      title: "Mentorlar bilan offline suhbat",
      date: "19-iyul, 2024",
      description:
        "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
    },
  ];

  return (
    <div className="max-w-[1250px] mx-auto flex justify-between mb-[72px] gap-[20px] single-news-page">
      <div className="max-w-[792px] w-full">
        <BreadCrumps breadCrumps={breadCrumps} />

        <h1 className="text-[#222] text-[44px] font-medium mt-[40px] roboto-font">
          IT xizmatlarni online rasmiylashtiring
        </h1>
        <div className="flex items-center gap-[12px] mt-[10px]">
          <p className="text-[14px] font-medium text-[#2675EB]">
            15-yanvar, 2024-yil
          </p>
          <p className="flex items-center gap-[6.5px]">
            <EyeIcon width={"15px"} />
            355
          </p>
        </div>
        <p className="text-[20px] font-medium text-black mt-[24px]">
          Endi siz o’z IT xizmatlaringizni to’liq qonuniyi asoslarga ko’ra
          rasmiylashtirish imkoniyatiga egasiz
        </p>

        <div className="max-w-full min-h-[380px] mt-[24px]">
          <img src={singleNewsImage} alt="" className="w-full rounded-[8px]" />
        </div>

        <p className="mt-[24px]">
          T xizmatlarini qonuniy asosda taqdim etishni istaganlar uchun yangi
          imkoniyatlar ochilmoqda. Endilikda, IT mutaxassislari va kompaniyalari
          o‘z xizmatlarini rasmiylashtirish jarayonini soddalashtirilgan
          tartibda amalga oshirishlari mumkin.
          <br />
          <br />
          Yangi tartib asosida:
          <ul className="list-disc pl-[20px]">
            <li>
              IT xizmatlarini rasmiy ro‘yxatdan o‘tkazish imkoniyati
              yaratilmoqda.
            </li>
            <li>
              Qonuniy hujjatlarni tayyorlash va yuritish jarayoni
              yengillashtirilmoqda.
            </li>
            <li>
              Soliq va litsenziyalash masalalari bo‘yicha maslahat olish
              imkoniyati mavjud.
            </li>
          </ul>{" "}
          <br />
          Ushbu yangilik IT sohasi vakillari uchun huquqiy himoyani kuchaytirish
          va mijozlar ishonchini oshirishga xizmat qiladi. Batafsil ma’lumot
          olish uchun tegishli tashkilotlarga murojaat qilishingiz mumkin.
        </p>
      </div>
      <div className="max-w-[384px] w-full mt-[100px]">
        <h2 className="font-bold text-[20px]">So’nggi yangiliklar</h2>
        <div className="mt-[20px]">
          {lastNews.map((item) => (
            <LastNews
              key={item.id}
              {...item}
              isLast={item.id === lastNews.length}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewsSinglePage;
