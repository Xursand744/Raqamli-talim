import { useTranslation } from "react-i18next";
import AboutPageHeader from "../../components/AboutComponents/AboutPageHeader";
import { eyeIcon } from "../../assets/icons/icon";

function HigherStandingOptimization() {
  const { t } = useTranslation("global");

  const breadCrumps = [
    {
      link: "/about",
      name: t("menu.center"),
    },
    {
      link: "/higher-standing-organization",
      name: t("menu.higherOrganization"),
    },
  ];

  return (
    <div className="max-w-[1230px] mx-auto mb-8">
      <AboutPageHeader
        title={t("menu.higherOrganization")}
        breadCrumps={breadCrumps}
      />

      <div className="higher-standing-optimization corruption mt-[20px]">
        <p>{t("about.higherStandingOptimization.text")}</p>
      </div>

      <div className="mt-[40px] flex flex-col items-end mb-[40px]">
        <div className="flex gap-[10px] items-center mb-[10px]">
          <img src={eyeIcon} alt="" />
          <span>{t("about.higherStandingOptimization.views")}: 4248</span>
        </div>
        <div>{t("about.higherStandingOptimization.lastUpdate")}: 2023-05-22 16:30:07</div>
      </div>
    </div>
  );
}

export default HigherStandingOptimization;
