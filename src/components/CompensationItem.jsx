import PropTypes from 'prop-types';

const CompensationBannerItem = ({ title, span, desc, image, more }) => {
  return (
    <div className="inline">
      <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md lg:flex-row sm:justify-between max-w-[1300px] w-full min-h-[300px]">
        <div className="text-center sm:text-left">
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-[30px] md:text-[40px] font-semibold text-blue-600 relative">
                {span} <span className="text-[#222]">{title}?</span>
              </h1>
              <p className="mt-2 text-gray-700 text-[24px]">{desc}</p>
            </div>

            <div className="mt-[60px]">
              <button className="px-6 py-2 font-medium text-white transition bg-black rounded-[27px] hover:bg-gray-800">
                {more}
              </button>
            </div>
          </div>
        </div>
        <div className="relative mt-4 sm:mt-0 sm:ml-6">
          <img src={image} alt="Wallet" className="w-[284px] h-[284px]" />
        </div>
      </div>
    </div>
  );
};

CompensationBannerItem.propTypes = {
  title: PropTypes.string.isRequired,
  span: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  more: PropTypes.string.isRequired,
};

export default CompensationBannerItem;
