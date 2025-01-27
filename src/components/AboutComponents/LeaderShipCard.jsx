import { clockIcon, emailIcon, phnoeIcon } from "../../assets/icons/icon";

function LeaderShipCard({ image, fullname, desc, email, number, time }) {
  return (
    <div className="border-[1px] border-[#E0E0E0] rounded-[8px] max-w-[30%] w-full">
      <div className="w-full h-[200px] overflow-hidden rounded-lg">
        <img
          src={image}
          alt="Cropped"
          className="w-full object-cover aspect-[1/1] bg-right-top"
        />
      </div>

      <div className="p-[10px]">
        <h2 className="text-[#222] text-[20px] font-bold">{fullname}</h2>
        <p className="pt-[10px] pb-[20px]">{desc}</p>

        <ul>
          <li className="flex gap-[5px] items-center">
            <img src={emailIcon} alt="email-icon" />
            <a className="underline text-blue-400" href={`mailto:${email}`}>
              {email}
            </a>
          </li>
          <li className="flex gap-[5px] items-center">
            <img src={phnoeIcon} alt="phone-icon" />
            <a className="underline text-blue-400" href={`tel:${number}`}>
              {number}
            </a>
          </li>
          <li className="flex gap-[5px] items-center">
            <img src={clockIcon} alt="clock-icon" />
            {time}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LeaderShipCard;
