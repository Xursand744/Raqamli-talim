import {
  amazon,
  blender,
  figma,
  shopify,
  vscode,
  webflow,
} from "../assets/logos/logos";

function Rate() {
  return (
    <div className="relative bg-[#F0F3FF] mt-[50px] md:mt-[100px] h-[500px] flex justify-center items-center flex-col">
      <h1 className="title mb-[80px]" style={{ marginTop: 0 }}>
        IT sohasidagi o’z bilimingizni baholang
      </h1>

      <button className="btn py-[12px] px-[40px] rounded-[40px] bg-[#222] border-none text-white text-[22px] hover:bg-[#555] transition">
        Baholashdan o’tish
      </button>

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
