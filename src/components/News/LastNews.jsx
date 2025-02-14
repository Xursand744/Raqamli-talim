import { useNavigate } from "react-router-dom";

function LastNews({ id, title, date, description, isLast }) {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/news/${id}`)}>
      <h2 className="text-[18px] font-semibold">{title}</h2>
      <p className="text-[14px] text-[#2675EB] font-semibold">{date}</p>
      <p>{description}</p>

      {!isLast && <div className="h-[1px] w-full my-[12px] bg-[#E0E0E0]"></div>}
    </div>
  );
}

export default LastNews;
