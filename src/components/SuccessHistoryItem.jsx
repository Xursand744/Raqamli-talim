import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function SuccessHistoryItem({ fullname, desc, image, id, clickable = true }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (clickable) {
      navigate(`/success-story/${id}`);
    }
  };

  return (
    <div 
      className={`max-w-[384px] rounded-lg overflow-hidden shadow-lg dark:shadow-gray-900/50 transition-shadow duration-300 dark:bg-gray-800 ${
        clickable ? 'cursor-pointer hover:shadow-xl dark:hover:shadow-gray-900/70' : 'cursor-default'
      }`}
      onClick={handleClick}
      role={clickable ? "button" : undefined}
      tabIndex={clickable ? 0 : undefined}
      onKeyDown={clickable ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      } : undefined}
    >
      <div className="h-[200px]">
        <img
          src={image}
          className="w-full h-full object-cover"
          alt={fullname}
        />
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-800 transition-colors duration-200">
        <h2 className="text-[#222] dark:text-white text-[20px] font-medium mt-2 mb-3 transition-colors duration-200">
          {fullname}
        </h2>
        <p className="mb-4 text-gray-700 dark:text-gray-300 transition-colors duration-200">{desc}</p>
      </div>
    </div>
  );
}

SuccessHistoryItem.propTypes = {
  fullname: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  clickable: PropTypes.bool,
};

export default SuccessHistoryItem;
