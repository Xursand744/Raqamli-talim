import PropTypes from "prop-types";

const StudyCenterCard = ({ title, icon, number }) => {
  return (
    <div className="h-[220px] w-[248px] border-[1px] border-[#E0E0E0] dark:border-gray-700 rounded-[10px] p-[16px] bg-white dark:bg-gray-800 transition-colors duration-200">
      <div className="w-[48px]">
        <img src={icon} alt="" className="" />
      </div>
      <h2 className="text-[40px] text-[#2675EB] dark:text-blue-400 font-bold pt-[16px] transition-colors duration-200">
        {number}
      </h2>
      <p className="text-[#222222] dark:text-white transition-colors duration-200">{title}</p>
    </div>
  );
};

StudyCenterCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default StudyCenterCard;
