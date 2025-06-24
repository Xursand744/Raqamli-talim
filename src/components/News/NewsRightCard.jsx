import "./News.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export default function NewsRightCard({
  id,
  date,
  title,
  description,
  image,
  tags,
}) {
  const navigate = useNavigate();

  return (
    <motion.div
      onClick={() => navigate(`/news/${id}`)}
      className="cursor-pointer w-full flex flex-col sm:flex-row bg-white dark:bg-gray-800 rounded-xl shadow-sm dark:shadow-gray-900/40 overflow-hidden hover:shadow-xl dark:hover:shadow-gray-900/60 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative w-full sm:w-1/2 h-48 sm:h-auto overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-900/80 backdrop-blur-sm px-3 py-1 rounded-full transition-colors duration-200">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200 transition-colors duration-200">{date}</span>
        </div>
      </div>

      <div className="p-4 sm:p-5 sm:w-1/2">
        <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
          {title}
        </h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 line-clamp-2 mb-3 sm:mb-4 transition-colors duration-200">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/40 px-2 sm:px-3 py-1 rounded-full hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

NewsRightCard.propTypes = {
  id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};
