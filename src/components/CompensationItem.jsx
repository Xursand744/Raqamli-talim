import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";

const CompensationBannerItem = ({ data }) => {
  const { t } = useTranslation("global");

  return (
    <div className="inline">
      <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md lg:flex-row sm:justify-between max-w-[1300px] w-full min-h-[300px]">
        <div className="text-center sm:text-left">
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-[30px] md:text-[40px] font-semibold text-blue-600 relative">
                {t(data.span)} <span className="text-[#222]">{t(data.title)}</span>
              </h1>
              <p className="mt-2 text-gray-700 text-[24px]">{t(data.desc)}</p>
            </div>

            <div className="mt-[60px]">
              <a href={data.link} target="_blank" rel="noopener noreferrer">
                <button className="px-6 py-2 font-medium text-white transition bg-black rounded-[27px] hover:bg-gray-800">
                  {t(data.more)}
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="relative mt-4 sm:mt-0 sm:ml-6">
          <img src={data.image} alt={t(data.title)} className="w-[284px] h-[284px]" />
        </div>
      </div>
    </div>
  );
};

CompensationBannerItem.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    span: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    more: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired
};

export default CompensationBannerItem;
