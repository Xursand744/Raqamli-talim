import OverviewProject from "../../components/Projects/OverviewProject";
import { projectsOverview } from "../../utils";

function ProjectsOverview() {
  return (
    <div className="max-w-[1230px] mx-auto mt-[100px] mb-[50px]">
      <h1 className="font-medium text-[20px] mb-[30px] text-gray-900 dark:text-white transition-colors duration-200">Loyihalar</h1>
      <div className="flex justify-between items-center flex-wrap gap-[30px]">
        {projectsOverview &&
          projectsOverview.map((item) => (
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
