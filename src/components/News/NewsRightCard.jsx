import "./News.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

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
      className="cursor-pointer w-full flex flex-col sm:flex-row bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300"
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
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-sm font-medium text-gray-700">{date}</span>
        </div>
      </div>

      <div className="p-4 sm:p-5 sm:w-1/2">
        <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-2">
          {title}
        </h2>
        <p className="text-sm sm:text-base text-gray-600 line-clamp-2 mb-3 sm:mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs sm:text-sm font-medium text-blue-600 bg-blue-50 px-2 sm:px-3 py-1 rounded-full hover:bg-blue-100 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
