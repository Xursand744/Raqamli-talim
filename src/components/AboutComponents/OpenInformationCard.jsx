import { useNavigate } from "react-router-dom";
import "../../pages/AboutPages/about.css";

function OpenInformationCard({ index, desc, id }) {
  const navigate = useNavigate();

  return (
    <div
      className="open-information-card cursor-pointer hover:-scale-[10px] w-[45%] border-[1px] border-[#B7B7B7] pl-[16px] pt-[16px] pb-[53px] pr-[50px] rounded-[8px]"
      onClick={() => navigate(`/open-informations/${id}`)}
    >
      <span>
        {index}. {desc}
      </span>
    </div>
  );
}

export default OpenInformationCard;
