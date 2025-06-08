import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

export default function ChanceRobot({ title, desc, image, imgWidth }) {
  const { t } = useTranslation();

  return (
    <div className="max-w-[100%] w-full min-h-[180px] overflow-hidden flex justify-between rounded-[12px] relative border-[1px] border-[#C0C0C0] p-[20px]">
      <div className="w-[60%] flex flex-col justify-between">
        <h2 className="text-[20px] font-bold leading-[32px]">{t(title)}</h2>
        <p>{t(desc)}</p>
      </div>
      <div className={`w-[${imgWidth || 150}px] overflow-hidden absolute bottom-[-40px] right-[0px]`}>
        <img src={image} className="w-full" alt={t(title)} />
      </div>
    </div>
  );
}

ChanceRobot.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imgWidth: PropTypes.number
};
