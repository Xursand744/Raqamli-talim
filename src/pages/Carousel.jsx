import CarouselImage from "../assets/carousel.jpg";
import CarouselImage2 from "../assets/landing/carousel/carousel-2.png";
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
        Raqamli ta&apos;lim loyihalari
      </h1>
      <Swiper
        autoplay={{
          delay: 1000, // Changed from 3000 to 1000 for 1 second delay
          disableOnInteraction: false,
        }}
        slidesPerView={1.5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper max-w-[1900px] pl-[200px] w-full"
        loop={true}
      >
        <SwiperSlide className="bg-[#F8F8F8]">
          <CarouselItem landingIndex={1} image={CarouselImage} />
        </SwiperSlide>
          <SwiperSlide className="bg-[#F8F8F8]">
            <CarouselItem landingIndex={2} image={CarouselImage} />
          </SwiperSlide>
        <SwiperSlide className="bg-[#F8F8F8]">
          <CarouselItem landingIndex={3} image={CarouselImage} />
        </SwiperSlide>
        {/* <SwiperSlide className="bg-[#F8F8F8]">
          <CarouselItem />
        </SwiperSlide>
        <SwiperSlide className="bg-[#F8F8F8]">
          <CarouselItem />
        </SwiperSlide>
        <SwiperSlide className="bg-[#F8F8F8]">
          <CarouselItem />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
}
