import png from "../assets/carouselpng.png";
import { useTranslation } from "react-i18next";
import PropTypes from 'prop-types';

export default function VRLanding({ landingIndex = 1, image }) {
  VRLanding.propTypes = {
    landingIndex: PropTypes.number,
    image: PropTypes.string,
  };

  const { t } = useTranslation("global");

  return (
    <div className="px-2 md:px-0 rounded-lg md:pl-5 flex items-center justify-between overflow-hidden">
      <div className="flex flex-col-reverse w-full rounded-lg xl:flex-row gap-8 md:gap-16">
        {/* Text Section */}
        <div className="flex-1 text-white py-5 z-10 flex flex-col items-start justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              {t(`landing-${landingIndex}.title`)}
            </h1>

            <p className="max-w-[365px] font-medium text-lg md:text-xl text-black mb-8 leading-relaxed">
              {t(`landing-${landingIndex}.description`)}
            </p>
          </div>
          <div className="flex justify-between items-end w-full">
            <button
              className="px-5 sm:px-8 py-2 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full
              text-lg font-semibold uppercase tracking-wide transition-all duration-300
              transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/50"
            >
              {t(`landing-${landingIndex}.moreDetails`)}
            </button>
            <img
              className="max-w-[200px] w-full"
              src={png}
              alt={t(`landing.imageAlt`)}
            />
          </div>
        </div>

        {/* Image Section */}
        <div className="relative flex-1">
          <div className="absolute inset-0 bg-blue-500/20 rounded-xl z-10" />
          <img
            src={image}
            alt={t(`landing.carouselAlt`)}
            className="w-full h-full relative z-[1] rounded-xl"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(0,100,255,0.3)_0%,rgba(0,0,0,0)_70%)] pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
