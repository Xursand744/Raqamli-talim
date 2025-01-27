import { useTranslation } from "react-i18next";
import AboutPageHeader from "../../components/AboutComponents/AboutPageHeader";
import { leadershipInformations } from "../../utils";
import LeaderShipCard from "../../components/AboutComponents/LeaderShipCard";

function Leadership() {
  const { t } = useTranslation("global");

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

  return (
    <div>
      <div className="container">
        <AboutPageHeader
          title={t("menu.leadership")}
          breadCrumps={breadCrumps}
        />

        <div className="flex justify-between flex-wrap gap-[20px] mb-[50px]">
          {leadershipInformations &&
            leadershipInformations.map((item) => {
              return <LeaderShipCard {...item} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Leadership;
