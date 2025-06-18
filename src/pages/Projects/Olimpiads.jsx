import OverviewProject from "../../components/Projects/OverviewProject";
import BreadCrumbs from "../../components/BreadCrumps/BreadCrumps";
import { useTranslation } from "react-i18next";
import api from "../../assets/images/projects/9.png";
import icpc from "../../assets/images/projects/10.jpg";
import ict from "../../assets/images/projects/7.jpg";

function JobEduFestProjects() {
  const { t } = useTranslation("global");

  const jobEduProjects = [
    {
      id: 7,
      title: "ICT4Girls",
      image: ict,
      link: "ict4girls",
    },
    {
      id: 8,
      title: "APIO",
      image: api,
      link: "apio",
    },
    {
      id: 9,
      title: "ICPC Uzbekistan Olympiad",
      image: icpc,
      link: "icpc-uzbekistan-olympiad",
    },
  ];

  return (
    <>
      <div className="max-w-[1230px] mx-auto mt-[120px] mb-[20em]">
        <h1 className="font-medium text-[28px] mb-[30px]">Olimpiadalar</h1>
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