import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function LastNews({ id, title, date, description, isLast }) {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/news/${id}`)}
      className="cursor-pointer group transition-all duration-300 hover:bg-gray-50 p-3 rounded-lg"
    >
      <h2 className="text-[18px] font-semibold text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
        {title}
      </h2>
      <p className="text-[14px] text-[#2675EB] font-semibold mt-1">{date}</p>
      <p className="text-gray-600 mt-2 line-clamp-2">{description}</p>

      {!isLast && <div className="h-[1px] w-full my-[12px] bg-[#E0E0E0] group-hover:bg-gray-200 transition-colors"></div>}
    </div>
  );
}

LastNews.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isLast: PropTypes.bool
};

LastNews.defaultProps = {
  isLast: false
};

export default LastNews;
