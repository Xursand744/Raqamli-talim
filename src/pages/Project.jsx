import { NavLink, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HomeIcon from "../assets/home-icon-white.svg";
import slugToText from "../lib/slugToText";
import capitalizeFirstLetter from "../lib/capitalizeFirstLetter";
import ProjectImage from "../assets/project-image.png";
import { projectCounts } from "../utils";
import projectImage2 from "../assets/project-image-2.png";
import startVideo from "../assets/startVideoIcon.svg";
import { BackgroundIcon } from "../assets/icons/icon";
import "../assets/css/responsive.css";

function Project() {
  const { slug } = useParams();
  const { t } = useTranslation("global");

  const Button = ({ children, className, ...props }) => (
    <button
      className={`px-4 py-2 rounded font-semibold ${className}`}
      {...props}
    >
      {children}
    </button>
  );

  return (
    <section className="project-section project-body relative text-white">
      <div className="max-w-[791px] my-0 mx-auto pb-[50px]">
        <div className="pt-[100px] flex gap-[10px]">
          <NavLink className={`flex gap-[10px]`} to={"/"}>
            <img src={HomeIcon} alt="" />
            {t("project_home")}
          </NavLink>{" "}
          {" >"} <NavLink to={"/projects"}>{t("projects")}</NavLink> {" >"}{" "}
          <NavLink to={`/projects/${slug}`}>Al Xorazmiy Vorislari</NavLink>
        </div>

        <h1 className="project-title mt-[80px]">{t("project_title")}</h1>

        <div className="max-w-[791px] mt-[40px]">
          <img
            src={ProjectImage}
            alt=""
            className="w-full h-full rounded-[20px]"
          />
        </div>

        <div className="mt-[40px]">
          <p className="project-desc">{t("project_description")}</p>
        </div>

        <div className="flex justify-between mt-[40px] flex-wrap gap-[20px]">
          {projectCounts &&
            projectCounts.map((project) => {
              return (
                <div
                  key={project.icon}
                  className="border-[1px] border-[#E0E0E0] w-[180px] h-[180px] rounded-[12px] p-[16px] flex flex-col justify-between"
                >
                  <img src={project.icon} alt="" width={50} height={50} />
                  <h1 className="text-white text-[40px] font-bold">
                    {project.value}
                  </h1>
                  <p className="text-white text-[16px]">{t(project.desc)}</p>
                </div>
              );
            })}
        </div>

        <div className="mt-[40px]">
          <p className="desc">{t("project_details")}</p>
        </div>

        <div className="mt-[100px] relative">
          <img
            className="rounded-[24px] w-full h-full"
            src={projectImage2}
            alt=""
          />
          <img
            src={startVideo}
            alt=""
            className="absolute left-[40%] cursor-pointer top-[30%] z-[10] start-video-icon"
          />
          <div className="bg-[#222] rounded-[24px] opacity-[0.6] h-full w-full absolute left-0 top-0"></div>
        </div>

        <div className="mt-[40px]">
          <p className="desc">{t("project_goal")}</p>
        </div>
      </div>

      <div className="bg-[#174078] w-full py-[40px] project-section-bottom">
        <div className="max-w-[1230px] mx-auto">
          <div className="flex justify-between gap-[20px] ">
            <div className="w-2/3 flex flex-col gap-[20px]">
              <h1 className="text-white font-bold text-[40px]">
                {t("study_title")}
              </h1>
              <p className="text-white text-[20px]">{t("study_description")}</p>

              <div>
                <Button className="bg-blue-500 rounded-3xl hover:bg-blue-600 text-white px-8">
                  {t("all_events")}
                </Button>
              </div>
            </div>

            <div className="w-1/3 project-bottom-image">
              <img src={BackgroundIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
