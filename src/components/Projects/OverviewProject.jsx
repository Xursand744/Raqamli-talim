import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function OverviewProject({ id, title, image, link }) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div
        onClick={() => navigate(`/projects/${link}`)}
        className="cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="max-w-[384px] min-h-[264px] bg-center relative">
          <img
            src={image}
            alt={title}
            className="w-full rounded-[12px] h-[264px]"
          />
          <div className="w-full flex justify-center">
            <div className="flex items-center w-[90%] p-[12px] absolute bottom-[10px] mx-auto bg-white rounded-[7px] opacity-[0.9]">
              <h2 className="max-w-[192px] w-full">{title}</h2>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default OverviewProject;
