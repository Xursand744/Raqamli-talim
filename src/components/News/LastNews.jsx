import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

function LastNews({ id, title, date, description, isLast }) {
  const navigate = useNavigate();

  return (
    <div 
      onClick={() => navigate(`/news/${id}`)}
      className="cursor-pointer group transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800 p-3 rounded-lg"
    >
      <h2 className="text-[18px] font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
        {title}
      </h2>
      <p className="text-[14px] text-[#2675EB] dark:text-blue-400 font-semibold mt-1 transition-colors duration-200">{date}</p>
      <p className="text-gray-600 dark:text-gray-300 mt-2 line-clamp-2 transition-colors duration-200">{description}</p>

      {!isLast && <div className="h-[1px] w-full my-[12px] bg-[#E0E0E0] dark:bg-gray-700 group-hover:bg-gray-200 dark:group-hover:bg-gray-600 transition-colors"></div>}
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
