import { useTranslation } from "react-i18next";
import {
  amazon,
  blender,
  figma,
  shopify,
  vscode,
  webflow,
} from "../assets/logos/logos";

function Rate() {
  const { t } = useTranslation("global");

  return (
    <div className="hidden relative bg-[#F0F3FF] dark:bg-gray-800 mt-[50px] md:mt-[100px] h-[500px] md:flex justify-center items-center flex-col rate-section transition-colors duration-200">
      <div className="relative z-40 max-w-[600px] w-full">
        <h1
          className="mb-[80px] text-center text-[44px] font-semibold"
          style={{ marginTop: 0 }}
        >
          {t("rate.title")}
        </h1>
        <div className="w-full flex justify-center items-center">
          <button className="btn py-[12px] px-[40px] rounded-[40px] bg-[#222] border-none text-white text-[22px] hover:bg-[#555] transition ">
            {t("rate.buttonText")}
          </button>
        </div>
      </div>

      <img src={amazon} alt="" className="absolute left-[10%] top-[10%]" />
      <img src={vscode} alt="" className="absolute left-[5%] top-[40%]" />
      <img src={figma} alt="" className="absolute left-[10%] bottom-[10%]" />
      <img src={shopify} alt="" className="absolute right-[10%] top-[10%]" />
      <img src={webflow} alt="" className="absolute right-[5%] top-[40%]" />
      <img src={blender} alt="" className="absolute right-[10%] bottom-[10%]" />
    </div>
  );
}

export default Rate;
