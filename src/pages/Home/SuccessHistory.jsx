import { useTranslation } from "react-i18next";
import SuccessHistory1 from "../../assets/success-history-1.png";
import SuccessHistory2 from "../../assets/success-history-2.jpg";
import SuccessHistory3 from "../../assets/success-history-3.jpg";
import SuccessHistoryItem from "../../components/SuccessHistoryItem";

function SuccessHistory() {
  const { t } = useTranslation("global");

  const data = [
    {
      id: "abror-juraev",
      studyCenter: "PDP",
      fullName: "Abror Juraev",
      desc: t("successHistory.abror.desc"),
      tags: [t("locations.andijan"), t("roles.frontend")],
      image: SuccessHistory1,
      clickable: false,
    },
    {
      id: "zarnigor-raximova",
      studyCenter: "Mohirdev",
      fullName: t("successHistory.mohira.fullName"),
      desc: t("successHistory.mohira.desc"),
      tags: [t("locations.navoi"), t("roles.backend")],
      image: SuccessHistory2,
      clickable: true,
    },
    {
      id: "sevinch-mukimova",
      studyCenter: "Alloma",
      fullName: t("successHistory.sevinch.fullName"),
      desc: t("successHistory.sevinch.desc"),
      tags: [t("locations.tashkent"), t("roles.design")],
      image: SuccessHistory3,
      clickable: false,
    },
  ];

  return (
    <div>
      <h1 className="title mb-[40px]">{t("successHistory.title")}</h1>

      <div className="flex justify-center gap-6 lg:gap-0 lg:justify-between flex-wrap">
        {data.map((item, index) => (
          <SuccessHistoryItem
            key={index}
            id={item.id}
            studyCenter={item.studyCenter}
            fullname={item.fullName}
            desc={item.desc}
            tags={item.tags}
            image={item.image}
            clickable={item.clickable}
          />
        ))}
      </div>
    </div>
  );
}

export default SuccessHistory;
