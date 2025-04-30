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
      image: xorazmiy,
      link: "al-xorazmiy",
    },
    {
      title: t(`landing-2.title`),
      description: t(`landing-2.description`),
      buttonText: t(`landing-2.moreDetails`),
      image: talent,
      link: "it-village",
    },
    {
      title: t(`landing-3.title`),
      description: t(`landing-3.description`),
      buttonText: t(`landing-3.moreDetails`),
      image: CarouselImage,
      link: "it-talents-dasturi",
    },
    {
      title: t(`landing-4.title`),
      description: t(`landing-4.description`),
      buttonText: t(`landing-4.moreDetails`),
      image: coding,
      link: "bir-million-dasturchi-loyihasi",
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
        spaceBetween={16}
        pagination={{
          clickable: true,
        }}
        centeredSlides={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper max-w-[1900px] mx-auto w-full py-4"
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1.02,
            spaceBetween: 8,
          },
          640: {
            slidesPerView: 1.2,
            spaceBetween: 12,
          },
          1024: {
            slidesPerView: 1.5,
            spaceBetween: 30,
          },
        }}
      >
        {carouselData.map((item, index) => (
          <SwiperSlide
            key={index}
            className="bg-[#F8F8F8] carousel-slide"
            style={{ width: '600px', maxWidth: '95vw' }}
          >
            <CarouselItem 
              title={item.title}
              description={item.description}
              buttonText={item.buttonText}
              image={item.image}
              link={item.link}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <style>{`
        .carousel-slide {
          transition: transform 0.4s cubic-bezier(0.4,0,0.2,1), box-shadow 0.4s;
        }
        .swiper-slide-active.carousel-slide {
          transform: scale(1.12);
          z-index: 2;
          box-shadow: 0 8px 32px 0 rgba(0,0,0,0.12);
        }
        .swiper-slide-next.carousel-slide,
        .swiper-slide-prev.carousel-slide {
          transform: scale(0.95);
          z-index: 1;
        }
        @media (max-width: 1024px) {
          .carousel-slide {
            width: 90vw !important;
            max-width: 95vw !important;
            min-width: 0 !important;
          }
          .swiper-slide-active.carousel-slide {
            transform: scale(1.04);
          }
        }
        @media (max-width: 640px) {
          .carousel-slide {
            width: 98vw !important;
            max-width: 99vw !important;
            min-width: 0 !important;
            padding: 0.5rem 0.25rem;
          }
          .swiper-slide-active.carousel-slide {
            transform: scale(1.01);
            box-shadow: 0 2px 8px 0 rgba(0,0,0,0.10);
          }
        }
      `}</style>
    </>
  );
}
