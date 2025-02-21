import { useTranslation } from "react-i18next";
import walletImage from "../../assets/chance-1.png";
import robotImage from "../../assets/chance-2.png";
import CompensationBannerItem from "../../components/CompensationItem";
import React, { useState, useRef, useEffect } from "react";
import "../../assets/css/swiper.css";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Cookies from "js-cookie";

function Compensation() {
  const { t, i18n } = useTranslation("global");
  const [lang, setLang] = useState(Cookies.get("lang") || "uz");

  useEffect(() => {
    const savedLang = Cookies.get("lang") || "uz";
    i18n.changeLanguage(savedLang);
    setLang(savedLang);
  }, [i18n]);

  const [data, setData] = useState([]);

  useEffect(() => {
    setData([
      {
        span: t("compensation.walletTitle"),
        title: t("compensation.walletQuestion"),
        desc: t("compensation.walletDesc"),
        more: t("compensation.more"),
        image: walletImage,
      },
      {
        span: t("compensation.centerTitle"),
        title: t("compensation.centerQuestion"),
        more: t("compensation.more"),
        desc: t("compensation.centerDesc"),
        image: robotImage,
      },
      {
        span: t("compensation.centerTitle"),
        title: t("compensation.centerQuestion"),
        more: t("compensation.more"),
        desc: t("compensation.centerDesc"),
        image: robotImage,
      },
      {
        span: t("compensation.centerTitle"),
        more: t("compensation.more"),
        title: t("compensation.centerQuestion"),
        desc: t("compensation.centerDesc"),
        image: robotImage,
      },
    ]);
  }, [t]);

  return (
    <div className="max-w-[1400px] w-full my-0 mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1.5}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => {}}
        onSlideChange={() => {}}
      >
        {data &&
          data.map((item, index) => {
            return (
              <SwiperSlide key={index} style={{ backgroundColor: "#F8F8F8" }}>
                <CompensationBannerItem
                  key={item.title}
                  title={item.title}
                  span={item.span}
                  desc={item.desc}
                  image={item.image}
                  more={item.more}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}

export default Compensation;
