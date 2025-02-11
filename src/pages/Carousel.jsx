import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import CarouselItem from "./CarouselItem";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

export default function App() {
  return (
    <>
      <h1 className="font-bold text-[56px] text-center roboto-font text-['#222222'] mt-[100px]">
        Raqamli ta’lim loyihalari
      </h1>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={1.5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper max-w-[1900px] pl-[200px] w-full"
      >
        <SwiperSlide className="bg-[#F8F8F8]">
          <CarouselItem />
        </SwiperSlide>
        <SwiperSlide className="bg-[#F8F8F8]">
          <CarouselItem />
        </SwiperSlide>
        <SwiperSlide className="bg-[#F8F8F8]">
          <CarouselItem />
        </SwiperSlide>
        <SwiperSlide className="bg-[#F8F8F8]">
          <CarouselItem />
        </SwiperSlide>
        <SwiperSlide className="bg-[#F8F8F8]">
          <CarouselItem />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
