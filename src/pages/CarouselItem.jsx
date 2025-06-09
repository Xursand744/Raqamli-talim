import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

const CarouselItem = ({ 
  title, 
  description, 
  buttonText = "More Details", 
  image, 
  imageAlt = "Carousel image",
  link
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link?.startsWith('http')) {
      window.open(link, '_blank');
    } else {
      navigate(`/projects/${link}`);
    }
  };

  return (
    <div className="px-2 md:px-0 rounded-lg h-[651px] md:pl-5 flex items-center justify-between overflow-hidden">
      <div className="flex flex-col-reverse w-full rounded-lg xl:flex-row gap-8 md:gap-16">
        {/* Text Section */}
        <div className="flex-1 text-white py-5 z-10 flex flex-col items-start justify-between flex-col gap-14">
          <div className="mt-auto">
            <h1 
              onClick={handleClick}
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent cursor-pointer hover:from-blue-600 hover:to-cyan-500 transition-all duration-300"
            >
              {title}
            </h1>

            <p 
              onClick={handleClick}
              className="font-medium text-lg md:text-xl text-black leading-relaxed cursor-pointer hover:text-blue-600 transition-colors duration-300"
            >
              {description}
            </p>
          </div>
          <button
            className="px-5 sm:px-8 py-2 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full
            text-lg font-semibold tracking-wide transition-all duration-300
            transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/50"
            onClick={handleClick}
          >
            {buttonText}
          </button>
          {/* <div className="flex justify-between items-end w-full">
            <img
              className="max-w-[200px] w-full"
              src={png}
              alt="Carousel icon"
            />
          </div> */}
        </div>

        {/* Image Section */}
        <div 
          className="relative flex-1 cursor-pointer group"
          onClick={handleClick}
        >
          <div className="absolute inset-0 bg-blue-500/20 rounded-xl z-10 group-hover:bg-blue-500/30 transition-all duration-300" />
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full relative z-[1] rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(0,100,255,0.3)_0%,rgba(0,0,0,0)_70%)] pointer-events-none group-hover:bg-[radial-gradient(circle,rgba(0,100,255,0.4)_0%,rgba(0,0,0,0)_70%)] transition-all duration-300" />
        </div>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  link: PropTypes.string,
};

export default CarouselItem;
