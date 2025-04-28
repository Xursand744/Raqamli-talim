
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import CarouselItem from "./CarouselItem";
import CarouselImage from "../assets/carousel.jpg";
import xorazmiy from "../assets/images/projects/xorazmiy_1.jpg";
import talent from "../assets/images/projects/talent_1.jpg";
import coding from "../assets/images/projects/coder_1.jpg";
import { useTranslation } from "react-i18next";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

export default function App() {
  const { t } = useTranslation("global");
  const carouselData = [
    {
      title: t(`landing-1.title`),
      description: t(`landing-1.description`),
      buttonText: t(`landing-1.moreDetails`),
      image: xorazmiy
    },
    {
      title: t(`landing-2.title`),
      description: t(`landing-2.description`),
      buttonText: t(`landing-2.moreDetails`),
      image: CarouselImage
    },
    {
      title: t(`landing-3.title`),
      description: t(`landing-3.description`),
      buttonText: t(`landing-3.moreDetails`),
      image: talent
    },
    {
      title: t(`landing-4.title`),
      description: t(`landing-4.description`),
      buttonText: t(`landing-4.moreDetails`),
      image: coding
    }
  ];

  return (
    <>
      <h1 className="font-bold text-[56px] text-center roboto-font text-['#222222'] mt-[100px]">
        Raqamli ta&apos;lim loyihalari
      </h1>
      <Swiper
        autoplay={{
          delay: 2000,
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
        {carouselData.map((item, index) => (
          <SwiperSlide key={index} className="bg-[#F8F8F8]">
            <CarouselItem 
              title={item.title}
              description={item.description}
              buttonText={item.buttonText}
              image={item.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
