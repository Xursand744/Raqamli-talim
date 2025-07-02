import OverviewProject from "../../components/Projects/OverviewProject";
import api from "../../assets/images/projects/9.png";
import icpc from "../../assets/images/projects/10.jpg";
import ict from "../../assets/images/projects/7.jpg";
import { useTranslation } from "react-i18next";

function JobEduFestProjects() {
  const { t } = useTranslation("global");
  
  const projects = t('olimpiads.projects', { returnObjects: true });
  
  // Ensure projects is an array
  const safeProjects = Array.isArray(projects) ? projects : [];
  
  const jobEduProjects = safeProjects.map((project, index) => {
    const images = [ict, api, icpc];
    return {
      ...project,
      image: images[index]
    };
  });

  return (
    <>
      <div className="max-w-[1230px] mx-auto mt-[120px] mb-[10em]">
        <h1 className="font-medium text-[28px] mb-[30px] text-gray-900 dark:text-white transition-colors duration-200">
          {t('olimpiads.title')}
        </h1>
        <div className="flex justify-between items-center flex-wrap gap-[30px]">
          {jobEduProjects &&
            jobEduProjects.map((item) => (
              <OverviewProject
                className="w-96"
                key={item.id}
                {...item}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default JobEduFestProjects; 