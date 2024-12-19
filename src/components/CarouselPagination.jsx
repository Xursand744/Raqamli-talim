import React from "react";

function CarouselPagination({ totalSlides, currentSlide, onSlideChange }) {
  return (
    <div className="flex justify-center gap-2 mt-4">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSlideChange(index)}
          className={`h-2 rounded-full transition-all duration-300 ${
            currentSlide === index ? "w-8 bg-blue-500" : "w-2 bg-[#222]"
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}

export default CarouselPagination;
