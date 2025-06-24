import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const NewsCard = ({ id, date, title, description, image }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      onClick={() => navigate(`/news/${id}`)}
      className="cursor-pointer flex flex-col sm:flex-row bg-white dark:bg-gray-800 rounded-xl shadow-sm dark:shadow-gray-900/40 overflow-hidden hover:shadow-xl dark:hover:shadow-gray-900/60 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative overflow-hidden w-full sm:w-2/5 h-48 sm:h-[200px]">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm px-3 rounded-full transition-colors duration-200">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200 transition-colors duration-200">{date}</span>
        </div>
      </div>

      <div className="p-4 sm:p-5 w-full sm:w-3/5">
        <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
          {title}
        </h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 line-clamp-2 mb-3 sm:mb-4 transition-colors duration-200">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

NewsCard.propTypes = {
  id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default NewsCard;
