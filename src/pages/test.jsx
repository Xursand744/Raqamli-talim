import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Tessting from"./tesssting"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1.5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mt-[100px]"
      >
        <SwiperSlide className='bg-[#F8F8F8]'><Tessting /></SwiperSlide>
        <SwiperSlide className='bg-[#F8F8F8]'><Tessting /></SwiperSlide>
        <SwiperSlide className='bg-[#F8F8F8]'><Tessting /></SwiperSlide>
        <SwiperSlide className='bg-[#F8F8F8]'><Tessting /></SwiperSlide>
        <SwiperSlide className='bg-[#F8F8F8]'><Tessting /></SwiperSlide>
        <SwiperSlide className='bg-[#F8F8F8]'><Tessting /></SwiperSlide>
      
      </Swiper>
    </>
  );
}
