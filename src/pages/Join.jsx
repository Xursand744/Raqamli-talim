import { mainLogo } from "../assets/logos/logos";

function Join() {
  return (
    <section className="my-[50px] md:my-[100px]  rounded-[27px]">
      <div className="container p-10 rounded-[27px] join-section">
        <div className="flex items-center justify-between">
          <div className="text-white">
            <h2 className="text-[40px] font-semibold">
              Raqamli ta’lim jamoasiga qo’shiling!
            </h2>
            <h4 className="text-[24px] mt-5 mb-[60px]">
              Qobilyatingizni ta'lim kelajagi uchun sarflang
            </h4>
            <button className="py-3 px-6 text-[#2675EB] rounded-[27px] bg-white hover:bg-[#2675EB] hover:text-white transition">
              Jamoaga qo’shil
            </button>
          </div>
          <div>
            <img src={mainLogo} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Join;
