import walletImage from "../assets/chance-1.png";
import robotImage from "../assets/chance-2.png";
import CompensationBannerItem from "../components/CompensationItem";
import React, { useState, useRef } from "react";
import "../assets/css/swiper.css";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Compensation() {
  const data = [
    {
      span: "Kompensatsiya",
      title: "olmoqchimisiz?",
      desc: "IT sertifikat pullaringizni 100% gacha qaytaring",
      image: walletImage,
    },
    {
      span: "O’quv markaz",
      title: "ochmoqchimisiz?",
      desc: "O’z qobilyatlaringni ta’lim kelajak uchun sarfla",
      image: robotImage,
    },
    {
      span: "O’quv markaz",
      title: "ochmoqchimisiz?",
      desc: "O’z qobilyatlaringni ta’lim kelajak uchun sarfla",
      image: robotImage,
    },
    {
      span: "O’quv markaz",
      title: "ochmoqchimisiz?",
      desc: "O’z qobilyatlaringni ta’lim kelajak uchun sarfla",
      image: robotImage,
    },
  ];

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

  {
    /* <div className="swiper-wrapper flex gap-[50px] w-full" ref={containerRef}>
        {data &&
          data.map((item) => {
            return (
              <CompensationBannerItem
                key={item.title}
                title={item.title}
                span={item.span}
                desc={item.desc}
                image={item.image}
              />
            );
          })}
      </div> */
  }

  return (
    <div className="max-w-[1300px] w-full my-0 mx-auto">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1.5}
        // navigation
        // pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {data &&
          data.map((item) => {
            return (
              <SwiperSlide style={{ backgroundColor: "#F8F8F8" }}>
                <CompensationBannerItem
                  key={item.title}
                  title={item.title}
                  span={item.span}
                  desc={item.desc}
                  image={item.image}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
    // <Swiper>
    //   <SwiperSlide>Slide 1</SwiperSlide>
    //   <SwiperSlide>Slide 2</SwiperSlide>
    //   <SwiperSlide>Slide 2</SwiperSlide>
    //   <SwiperSlide>Slide 2</SwiperSlide>
    //   <SwiperSlide>Slide 2</SwiperSlide>
    // </Swiper>
  );
}

export default Compensation;
