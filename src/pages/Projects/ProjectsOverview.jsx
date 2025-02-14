import OverviewProject from "../../components/Projects/OverviewProject";
import { projectsOverview } from "../../utils";

function ProjectsOverview() {
  return (
    <div className="max-w-[1230px] mx-auto mt-[100px] mb-[50px]">
      <h1 className="font-medium text-[20px] mb-[30px]">Loyihalar</h1>
      <div className="flex justify-between  gap-[24px] flex-wrap">
        {projectsOverview &&
          projectsOverview.map((item) => (
            <OverviewProject key={item} {...item} />
          ))}
      </div>
    </div>
  );
}

export default ProjectsOverview;
