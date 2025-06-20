import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import HomeIcon from "../assets/home-icon-white.svg";
import xorazmiy from "../assets/images/projects/xorazmiy_2.jpg";
import { projectCounts } from "../utils";
import { BackgroundIcon } from "../assets/icons/icon";
import Video from "../assets/videos/al_xorazmiy.mp4";
import "../assets/css/responsive.css";

// Button component
const Button = ({ children, className = "", ...props }) => (
  <button
    className={`px-4 py-2 rounded font-semibold ${className}`}
    {...props}
  >
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

// ProjectStat component
const ProjectStat = ({ icon, value, description }) => (
  <div className="border border-[#E0E0E0] w-[180px] h-[180px] rounded-[12px] p-[16px] flex flex-col justify-between">
    <img src={icon} alt="" width={50} height={50} />
    <h2 className="text-white text-[40px] font-bold">{value}</h2>
    <p className="text-white text-[16px]">{description}</p>
  </div>
);

ProjectStat.propTypes = {
  icon: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  description: PropTypes.string.isRequired
};

// Breadcrumbs component
const Breadcrumbs = ({ projectName }) => {
  const { t } = useTranslation("global");
  
  return (
    <div className="flex gap-[10px] items-center">
      <NavLink className="flex gap-[10px] items-center" to="/">
        <img src={HomeIcon} alt="Home" className="w-5 h-5" />
        {t("project_home")}
      </NavLink>
      <span>&gt;</span>
      <NavLink to="/projects">{t("projects")}</NavLink>
      <span>&gt;</span>
      <span className="text-gray-300">{projectName}</span>
    </div>
  );
};

Breadcrumbs.propTypes = {
  projectName: PropTypes.string.isRequired
};

// Video Section Component
const VideoSection = ({ videoSrc }) => (
  <div className="mt-[100px] relative">
    <video 
      controls 
      className="rounded-lg w-full"
    >
      <source src={videoSrc} type="video/mp4" />
      <source src={videoSrc} type="video/ogg" />
      Your browser does not support the video tag.
    </video>
  </div>
);

VideoSection.propTypes = {
  videoSrc: PropTypes.string.isRequired
};

// CallToAction Component
const CallToAction = ({ title, description, buttonText }) => {
  const { t } = useTranslation("global");
  
  return (
    <div className="bg-[#174078] w-full py-[40px] project-section-bottom">
      <div className="max-w-[1230px] mx-auto">
        <div className="flex justify-between gap-[20px] flex-wrap md:flex-nowrap">
          <div className="w-full md:w-2/3 flex flex-col gap-[20px]">
            <h2 className="text-white font-bold text-[40px]">
              {title}
            </h2>
            <p className="text-white text-[20px]">{description}</p>

            <div>
              <Button className="bg-blue-500 rounded-3xl hover:bg-blue-600 text-white px-8 transition duration-300">
                {buttonText}
              </Button>
            </div>
          </div>

          <div className="w-full md:w-1/3 project-bottom-image">
            <img src={BackgroundIcon} alt="Background" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

CallToAction.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired
};

function Project() {
  const { t } = useTranslation("global");
  
  // Project name should come from a data source based on slug
  const projectName = "Al Xorazmiy Vorislari";

  return (
    <section className="project-section project-body relative text-white">
      <div className="max-w-[791px] my-0 mx-auto pb-[50px]">
        {/* <div className="pt-[100px]">
          <Breadcrumbs projectName={projectName} />
        </div> */}

        <h1 className="project-title pt-[2em]">{t("project_title")}</h1>

        {/* Hero Image */}
        <div className="max-w-[791px] mt-[40px]">
          <img
            src={xorazmiy}
            alt={projectName}
            className="w-full h-full rounded-[20px] object-cover"
          />
        </div>

        {/* Project Description */}
        <div className="mt-[40px]">
          <p className="project-desc">{t("project_description")}</p>
        </div>

        {/* Project Stats */}
        <div className="flex justify-between mt-[40px] flex-wrap gap-[20px]">
          {projectCounts.map((project) => (
            <ProjectStat 
              key={project.icon}
              icon={project.icon}
              value={project.value}
              description={t(project.desc)}
            />
          ))}
        </div>

        {/* Project Details */}
        <div className="mt-[40px]">
          <p className="desc">{t("project_details")}</p>
        </div>

        {/* Video Section */}
        <VideoSection videoSrc={Video} />

        {/* Project Goal */}
        <div className="mt-[40px]">
          <p className="desc">{t("project_goal")}</p>
        </div>
      </div>

      {/* Call to Action Section */}
      <CallToAction 
        title={t("study_title")}
        description={t("study_description")}
        buttonText={t("all_events")}
      />
    </section>
  );
}

export default Project;
