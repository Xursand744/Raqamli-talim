import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

function AboutDepartment({ image, fullname, position, email, number, idx }) {
  const { t } = useTranslation("global");

  return (
    <article 
      className="max-w-[382px] w-full mb-[20px] rounded-[12px] border-[1px] border-[#E0E0E0] dark:border-gray-700 transition-colors duration-200"
      aria-labelledby={`department-name-${idx}`}
    >
      <div>
        <img
          src={image}
          alt={t('about.department.imageAlt', { name: fullname })}
          className="rounded-t-[12px] max-h-[280px] w-full object-cover object-top"
        />
      </div>

      <div className="p-[16px] flex flex-col gap-[12px]">
        <h2 
          id={`department-name-${idx}`}
          className="text-[#222222] dark:text-white text-[24px] font-bold transition-colors duration-200"
        >
          {t(`${fullname}`)}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 transition-colors duration-200">{t(`${position}`)}</p>
        <div>
          <p className="flex gap-[8px] items-center">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              color="#2675EB"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <a 
              href={`mailto:${email}`}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              aria-label={t('about.department.emailAriaLabel', { name: fullname })}
            >
              {email}
            </a>
          </p>
          <p className="flex gap-[8px] items-center">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              color="#2675EB"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <a 
              href={`tel:${number}`}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              aria-label={t('about.department.phoneAriaLabel', { name: fullname })}
            >
              {number}
            </a>
          </p>
        </div>
      </div>
    </article>
  );
}

AboutDepartment.propTypes = {
  image: PropTypes.string.isRequired,
  fullname: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  idx: PropTypes.number.isRequired,
};

export default AboutDepartment;
