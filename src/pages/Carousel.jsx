import React, { useState } from "react";
import CarouselItem from "../components/CarouselItem";
import CarouselNavigation from "../components/CarouselNavigation";
import CarouselPagination from "../components/CarouselPagination";
import CarouselImage from "../assets/carousel.jpg";

const defaultItems = [
  {
    title: "Al-Xorazmiy",
    description:
      "IT sohasiga qiziqadigan iqtidorli\n7-11-sinf maktab o'quvchilariga BEPUL o’quv kurslari",
    image: CarouselImage,
  },
  {
    title: "Al-Xorazmiy",
    description:
      "IT sohasiga qiziqadigan iqtidorli\n7-11-sinf maktab o'quvchilariga BEPUL o’quv kurslari",
    image: CarouselImage,
  },
  {
    title: "Al-Xorazmiy",
    description:
      "IT sohasiga qiziqadigan iqtidorli\n7-11-sinf maktab o'quvchilariga BEPUL o’quv kurslari",
    image: CarouselImage,
  },
];

function Carousel({ items = defaultItems }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const carouselItems = Array.isArray(items) ? items : defaultItems;

  return (
    <div className="w-full max-w-[1500px] mt-[100px] mx-auto px-4">
      <h1 className="text-3xl font-bold text-center mb-8 mt-8">
        Raqamli ta'lim loyihalari
      </h1>

      <div className="relative">
        <div className="overflow-hidden rounded-lg">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {carouselItems.map((item, index) => (
              <CarouselItem key={index} {...item} />
            ))}
          </div>
        </div>

        <CarouselNavigation onPrev={prevSlide} onNext={nextSlide} />
        <CarouselPagination
          totalSlides={carouselItems.length}
          currentSlide={currentSlide}
          onSlideChange={goToSlide}
        />
      </div>
    </div>
  );
}

export default Carousel;
