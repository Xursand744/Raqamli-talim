import OverviewProject from "../../components/Projects/OverviewProject";
import { useTranslation } from "react-i18next";
import coding from "../../assets/images/projects/coder_1.jpg";
import xorazmiy from "../../assets/images/projects/xorazmiy_1.jpg";
import talent from "../../assets/images/projects/talent_1.jpg";
import istedod from "../../assets/projects/istedod.jpg";
import CarouselImage from "../../assets/carousel.jpg";
import olimpiads from "../../assets/projects/olimpiads.png";
import aca from "../../assets/images/projects/8.jpg";
import tot from "../../assets/images/projects/5.jpg";
import stipendiya from "../../assets/images/projects/stipendiya_home.png";

function ProjectsOverview() {
  const { t } = useTranslation("global");
  
  const projects = t('projectsOverview.projects', { returnObjects: true });
  
  // Ensure projects is an array
  const safeProjects = Array.isArray(projects) ? projects : [];
  
  // Map images to projects
  const projectImages = {
    3: coding, // One Million Programmers
    1: xorazmiy, // Al-Khwarizmi
    4: talent, // IT Village
    20: istedod, // IT Talents
    2: CarouselImage, // IT Talents Program
    11: olimpiads, // Olympiads
    10: aca, // ACA Navigator
    5: tot, // ToT
    21: stipendiya, // Stipendiya
  };
  
  const projectsWithImages = safeProjects.map((project) => ({
    ...project,
    image: projectImages[project.id] || CarouselImage // fallback image
  }));

  return (
    <div className="max-w-[1230px] mx-auto mt-[120px] mb-[50px]">
      <h1 className="font-medium text-[20px] mb-[30px] text-gray-900 dark:text-white transition-colors duration-200">
        {t('projectsOverview.title')}
      </h1>
      <div className="flex justify-between items-center flex-wrap gap-[30px]">
        {projectsWithImages.map((item) => (
          <OverviewProject
            className="w-96"
            key={item.id}
            {...item}
          />
        ))}
        <div className="cursor-pointer rounded-xl overflow-hidden h-[384px] w-96"></div>
      </div>
    </div>
  );
}

export default ProjectsOverview;
