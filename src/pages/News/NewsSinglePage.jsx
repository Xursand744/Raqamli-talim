import React from "react";
import BreadCrumps from "../../components/BreadCrumps/BreadCrumps";
import { EyeIcon } from "lucide-react";
import { singleNewsImage } from "../../assets";

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

  return (
    <div className="max-w-[1250px] mx-auto">
      <BreadCrumps breadCrumps={breadCrumps} />

      <h1 className="text-[#222] text-[44px] font-medium mt-[40px] roboto-font">
        IT xizmatlarni online rasmiylashtirin
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
        <img src={singleNewsImage} alt="" className="w-full" />
      </div>
    </div>
  );
}

export default NewsSinglePage;
