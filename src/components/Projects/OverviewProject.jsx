import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

function OverviewProject({ title, image, link, className }) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
      }}
      transition={{ duration: 0.3 }}
      onClick={() => navigate(`/projects/${link}`)}
      className={`cursor-pointer rounded-xl overflow-hidden ${className || ""}`}
    >
      <div className="w-full min-h-[264px] relative group">
        <img
          src={image}
          alt={title}
          className="w-full rounded-xl h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
        
        <div className="absolute bottom-0 left-0 w-full p-5">
          <h2 className="text-lg font-medium text-white drop-shadow-md">{title}</h2>
          <div className="h-1 w-16 bg-blue-500 mt-2 rounded-full"></div>
        </div>
      </div>
    </motion.div>
  );
}

OverviewProject.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default OverviewProject;
