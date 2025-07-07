import { useTranslation } from "react-i18next";
import walletImage from "../../assets/chance-1.png";
import robotImage from "../../assets/chance-2.png";
import chance1 from "../../assets/chance-11.png";
import chance3 from "../../assets/chance-3.png";
import chance5 from "../../assets/chance-5.png";
import pdfFile from "../../assets/docs/it-markaz.pdf";
import CompensationBannerItem from "../../components/CompensationItem";
import { useState, useEffect } from "react";
import "../../assets/css/swiper.css";

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import Cookies from "js-cookie";

function Compensation() {
  const { t, i18n } = useTranslation("global");

  useEffect(() => {
    const savedLang = Cookies.get("lang") || "uz";
    i18n.changeLanguage(savedLang);
  }, [i18n]);

  const [data, setData] = useState([]);

  useEffect(() => {
    setData([
      {
        span: "",
        title: t("compensation.title-1"),
        more: t("moreDetails"),
        desc: t("compensation.desc-1"),
        link: 'https://edu.digital.uz/education',
        image: chance1,
      },
      {
        span: "",
        title: t("compensation.title-2"),
        more: t("moreDetails"),
        desc: t("compensation.desc-2"),
        link: 'https://it-istedod.uz',
        image: walletImage,
      },
      {
        span: "",
        title: t("compensation.title-3"),
        more: t("moreDetails"),
        desc: t("compensation.desc-3"),
        link: 'https://bilgi.uz',
        image: chance3,
      },
      {
        span: "",
        title: t("compensation.title-4"),
        more: t("moreDetails"),
        desc: t("compensation.desc-4"),
        link: 'https://edu.digital.uz/src/assets/docs/it-markaz.pdf',
        image: robotImage,
      },
      {
        span: "",
        title: t("compensation.title-5"),
        more: t("moreDetails"),
        desc: t("compensation.desc-5"),
        link: 'https://edu.digital.uz/projects/it-talents-dasturi',
        image: chance5,
      },
      {
        span: "",
        title: t("compensation.title-6"),
        more: t("moreDetails"),
        desc: t("compensation.desc-6"),
        link: 'https://uzbekcoders.uz',
        image: robotImage,
      },
      // {
      //   span: t("compensation.walletTitle"),
      //   title: t("compensation.walletQuestion"),
      //   desc: t("compensation.walletDesc"),
      //   more: t("moreDetails"),
      //   link: "https://www.it-istedod.uz/",
      //   image: walletImage,
      // },
      // {
      //   span: t("compensation.centerTitle"),
      //   title: t("compensation.centerQuestion"),
      //   more: t("moreDetails"),
      //   desc: t("compensation.centerDesc"),
      //   link: pdfFile,
      //   image: robotImage,
      // },
    ]);
  }, [t]);

  return (
    <div className="max-w-[1400px] w-full my-0 mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={1.5}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={() => {}}
        onSlideChange={() => {}}
      >
        {data &&
          data.map((item, index) => {
            return (
              <SwiperSlide key={index} className="bg-[#F8F8F8] dark:bg-gray-800 transition-colors duration-200">
                <CompensationBannerItem
                  data={item}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}

export default Compensation;
