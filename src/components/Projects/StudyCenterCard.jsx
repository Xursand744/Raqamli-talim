const StudyCenterCard = ({ title, icon, number }) => {
  return (
    <div className="h-[220px] w-[248px] border-[1px] border-[#E0E0E0] rounded-[10px] p-[16px]">
      <div className="w-[48px]">
        <img src={icon} alt="" className="" />
      </div>
      <h2 className="text-[40px] text-[#2675EB] font-bold pt-[16px]">
        {number}
      </h2>
      <p className="text-[#222222]">{title}</p>
    </div>
  );
};

export default StudyCenterCard;
