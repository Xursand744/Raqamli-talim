import CarouselBg from "../assets/carousel-bg.svg";

function CarouselItem({ title, description, image }) {
  return (
    <div className="w-full flex-shrink-0 relative">
      <img
        src={CarouselBg}
        alt=""
        className="absolute bottom-[60px] right-[30px] z-[2]"
      />

      <div className="relative overflow-hidden  text-white rounded-lg ">
        <div className="relative p-6 flex flex-col md:flex-row gap-6 items-center">
          <div className="w-full md:w-1/2 h-[480px]">
            <img
              src={image}
              alt={title}
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4 bg-[#F8F8F8] h-[480px] p-[40px] rounded-[16px] flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[#2675EB] text-[44px]">
                {title}
              </h2>
              <p className="text-[#222222] text-[24px] font-medium pt-[36px]">
                {description}
              </p>
            </div>
            <div>
              <button className="bg-[#2675EB] hover:bg-blue-700 text-white font-bold py-[8px] px-[32px] rounded-[27px]">
                Batafsil
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselItem;
