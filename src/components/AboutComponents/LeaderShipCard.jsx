import { clockIcon, emailIcon, phnoeIcon } from "../../assets/icons/icon";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

function LeaderShipCard({ image, fullname, desc, email, number, time }) {
  const { t } = useTranslation();

  return (
    <article 
      className="border-[1px] border-[#E0E0E0] rounded-[8px] max-w-[30%] w-full"
      aria-labelledby={`leadership-name-${fullname.replace(/\s+/g, '-').toLowerCase()}`}
    >
      <div className="w-full h-[200px] overflow-hidden rounded-lg">
        <img
          src={image}
          alt={t('about.leadership.imageAlt', { name: fullname })}
          className="w-full object-cover aspect-[1/1] bg-right-top"
        />
      </div>

      <div className="p-[10px]">
        <h2 
          id={`leadership-name-${fullname.replace(/\s+/g, '-').toLowerCase()}`}
          className="text-[#222] text-[20px] font-bold"
        >
          {fullname}
        </h2>
        <p className="pt-[10px] pb-[20px]">{desc}</p>

        <ul className="space-y-2" role="list">
          <li className="flex gap-[5px] items-center">
            <img 
              src={emailIcon} 
              alt="" 
              aria-hidden="true"
            />
            <a 
              href={`mailto:${email}`}
              className="underline text-blue-400 hover:text-blue-600 transition-colors"
              aria-label={t('about.leadership.emailAriaLabel', { name: fullname })}
            >
              {email}
            </a>
          </li>
          <li className="flex gap-[5px] items-center">
            <img 
              src={phnoeIcon} 
              alt="" 
              aria-hidden="true"
            />
            <a 
              href={`tel:${number}`}
              className="underline text-blue-400 hover:text-blue-600 transition-colors"
              aria-label={t('about.leadership.phoneAriaLabel', { name: fullname })}
            >
              {number}
            </a>
          </li>
          <li className="flex gap-[5px] items-center">
            <img 
              src={clockIcon} 
              alt="" 
              aria-hidden="true"
            />
            <span aria-label={t('about.leadership.timeAriaLabel', { time })}>
              {time}
            </span>
          </li>
        </ul>
      </div>
    </article>
  );
}

LeaderShipCard.propTypes = {
  image: PropTypes.string.isRequired,
  fullname: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired
};

export default LeaderShipCard;
