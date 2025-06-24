import { useState } from "react";
import { clockIcon, emailIcon, phnoeIcon } from "../../assets/icons/icon";
import {
  LeadershipImage1,
  LeadershipImage2,
  LeadershipImage3,
  VacancyImage,
} from "../../assets";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import AboutPageHeader from "../../components/AboutComponents/AboutPageHeader";
import "./about.css";
import PropTypes from "prop-types";

const Leadership = () => {
  const { t } = useTranslation("global");

  const mainProfile = {
    name: "Azamat Eshankulov",
    title: t("leadership.director.title"),
    description: t("leadership.director.description"),
    fullDescription: t("leadership.director.fullDescription"),
    email: "a.eshankulov@digital.uz",
    phone: "+998 71 203 03 43 (101)",
    hours: t("leadership.director.hours"),
    image: LeadershipImage1,
  };

  const teamMembers = [
    {
      name: "Vakant",
      title: "about.leadership.title.directorFirstDeputy",
      email: "",
      phone: "",
      hours: "",
      image: VacancyImage,
    },
    {
      name: "Davronbek Adilbekov",
      title: "about.leadership.title.directorDeputy",
      email: "d.adilbekov@digital.uz",
      phone: "+998 71 203 03 43 (103)",
      image: LeadershipImage2,
      hours: "about.leadership.hours.wednesday",
    },
    {
      title: "about.leadership.title.directorDeputy",
      name: "Jasur Askarov",
      email: "invest@digital.uz",
      phone: "+998 78 238-41-76",
      image: LeadershipImage3,
      hours: "about.leadership.hours.thursday",
    },
  ];

  const breadCrumps = [
    {
      link: "/about",
      name: t("menu.center"),
    },
    {
      link: "/leadership",
      name: t("menu.leadership"),
    },
  ];

  const ContactInfo = ({ email, phone, hours, mainProfile }) => (
    <div
      className={`flex ${
        !mainProfile ? "flex-col" : "justify-between"
      } space-y-2 mt-4`}
    >
      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 transition-colors duration-200">
        <img src={emailIcon} alt="Email icon" />
        {email ? (
          <a href={`mailto:${email}`} className="text-[14px] hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
            {email}
          </a>
        ) : (
          <span className="text-[14px] text-gray-400 dark:text-gray-500 transition-colors duration-200">{t("noEmail")}</span>
        )}
      </div>
      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 transition-colors duration-200">
        <img src={phnoeIcon} alt="Phone icon" />
        {phone ? (
          <a href={`tel:${phone}`} className="text-[14px] hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
            {phone}
          </a>
        ) : (
          <span className="text-[14px] text-gray-400 dark:text-gray-500 transition-colors duration-200">{t("noPhone")}</span>
        )}
      </div>
      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 transition-colors duration-200">
        <img src={clockIcon} alt="Clock icon" />
        {hours ? (
          <span className="text-[14px] transition-colors duration-200">{t(hours)}</span>
        ) : (
          <span className="text-[14px] text-gray-400 dark:text-gray-500 transition-colors duration-200">{t("noHours")}</span>
        )}
      </div>
    </div>
  );

  ContactInfo.propTypes = {
    email: PropTypes.string,
    phone: PropTypes.string,
    hours: PropTypes.string,
    mainProfile: PropTypes.bool
  };

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div>
      <div className="max-w-[1230px] mx-auto mb-8">
        <AboutPageHeader
          breadCrumps={breadCrumps}
          title={t("menu.leadership")}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden mb-8 border border-[#ccc] dark:border-gray-700 shadow-xl mt-[30px] transition-colors duration-200">
            <div className="flex flex-col md:flex-row h-full">
              <div className="w-1/3 relative min-h-[400px] main-director-image-wrapper">
                <img
                  src={mainProfile.image || "/placeholder.svg"}
                  alt={mainProfile.name}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </div>
              <div className="md:w-2/3 p-6 bg-white dark:bg-gray-900 transition-colors duration-200">
                <div className="flex flex-col">
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
                    {mainProfile.name}
                  </h1>
                  <h2 className="text-xl text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-200">
                    {t(mainProfile.title) || mainProfile.title}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-200 mb-2 transition-colors duration-200">
                    {isExpanded
                      ? mainProfile.fullDescription
                      : mainProfile.description}
                  </p>
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200 self-start mb-4"
                  >
                    {isExpanded ? t("common.collapse") : t("more")}
                  </button>
                  <ContactInfo
                    email={mainProfile.email}
                    phone={mainProfile.phone}
                    hours={mainProfile.hours}
                    mainProfile={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden border border-[#ccc] dark:border-gray-700 shadow-xl h-[520px] transition-colors duration-200">
                <div className="aspect-w-4 aspect-h-3 max-h-[300px] min-h-[280px] overflow-hidden leadership-card-image-wrapper">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 bg-white dark:bg-gray-900 transition-colors duration-200">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-200">{t(member.title)}</p>
                  <ContactInfo
                    email={member.email}
                    phone={member.phone}
                    hours={member.hours}
                    mainProfile={false}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Leadership;
