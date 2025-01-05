import { useTranslation } from "react-i18next";
import walletImage from "../assets/chance-1.png";
import robotImage from "../assets/chance-2.png";
import CompensationBannerItem from "../components/CompensationItem";
import React, { useState, useRef, useEffect } from "react";
import "../assets/css/swiper.css";

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

  // Update language when cookies change
  useEffect(() => {
    const savedLang = Cookies.get("lang") || "uz";
    i18n.changeLanguage(savedLang);
    setLang(savedLang);
  }, [i18n]);

  // Declare data state and set it inside useEffect after translations are ready
  const [data, setData] = useState([]);

  useEffect(() => {
    // Wait for translations to load before updating data
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
  }, [t]); // This effect runs when the translation context changes

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const containerRef = useRef(null);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.clientX);
    containerRef.current.style.transition = "none";
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;

    const currentX = event.clientX;
    const distance = currentX - startX;
    const newTranslate = prevTranslate + distance;

    setCurrentTranslate(newTranslate);
    containerRef.current.style.transform = `translateX(${newTranslate}px)`;
  };

  const handleMouseUp = () => {
    setIsDragging(false);

    const items = containerRef.current.children;
    const containerWidth = containerRef.current.offsetWidth;
    const itemWidth = items[0].offsetWidth;
    const maxTranslate = -(items.length - 1) * itemWidth;

    let snapTranslate = Math.round(currentTranslate / itemWidth) * itemWidth;
    snapTranslate = Math.min(0, Math.max(maxTranslate, snapTranslate));

    setPrevTranslate(snapTranslate);
    setCurrentTranslate(snapTranslate);

    containerRef.current.style.transition = "transform 0.3s ease";
    containerRef.current.style.transform = `translateX(${snapTranslate}px)`;
  };

  return (
    <div className="max-w-[1300px] w-full my-0 mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1.5}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
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
