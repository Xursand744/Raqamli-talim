import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function SuccessHistoryItem({ studyCenter, fullname, desc, tags, image, id, clickable = true }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (clickable) {
      navigate(`/success-story/${id}`);
    }
  };

  return (
    <div 
      className={`max-w-[384px] rounded-lg overflow-hidden shadow-lg transition-shadow duration-300 ${
        clickable ? 'cursor-pointer hover:shadow-xl' : 'cursor-default'
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

      <div className="border-t border-gray-200 p-4 bg-white">
        {/* <p className="text-[14px]">{studyCenter}</p> */}
        <h2 className="text-[#222] text-[20px] font-medium mt-2 mb-3">
          {fullname}
        </h2>
        <p className="mb-4 text-gray-700">{desc}</p>
        <div className="flex gap-3">
          {/* {tags.map((tag) => {
            return (
              <span
                key={tag}
                className="bg-[#F0F3FF] rounded-full py-1 px-4 text-sm"
              >
                <span className="text-[#2675EB]">#</span> {tag}
              </span>
            );
          })} */}
        </div>
      </div>
    </div>
  );
}

SuccessHistoryItem.propTypes = {
  studyCenter: PropTypes.string.isRequired,
  fullname: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  clickable: PropTypes.bool,
};

export default SuccessHistoryItem;
