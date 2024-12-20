import { NavLink } from "react-router-dom";
import { aboutCounts, aboutFilters } from "../utils";
import aboutfirst from "../assets/about-1.png";
import aboutImage from "../assets/about-image.jpg";
import startVideo from "../assets/startVideoIcon.svg";
import { about1, about2, about3, about4, about5 } from "../assets";
import Join from "./Join";

function About() {
  return (
    <section className="about mt-[40px]">
      <div className="container">
        <div className="flex gap-[20px] flex-wrap">
          {aboutFilters &&
            aboutFilters.map((item) => {
              return (
                <NavLink
                  to={`${item.link}`}
                  className="py-[8px] px-[32px] rounded-[27px] border-[1px] border-[#B7B7B7] bg-[#F8F8F8] about-filter-link"
                >
                  {item.title}
                </NavLink>
              );
            })}
        </div>

        <div>
          <h1 className="title mb-[20px]" style={{ textAlign: "left" }}>
            Biz haqimizda
          </h1>

          <div className="flex justify-between gap-[20px]">
            <div className="w-1/2 min-h-[356px]">
              <img src={aboutfirst} alt="" className="w-full h-full" />
            </div>
            <div className="w-1/2">
              <p className="desc">
                Raqamli ta'limni rivojlantirish markazi vazirilik oldiga qo'ygan
                missiyalarga erishishda IT iqtidorlar va xususiy IT ta'limni
                qo'llab -quvatlash, yoshlarni IT bilimini oshirishda davlat
                tominidan moliyalashtiriladigan dasturlarni ishlab chiqish va
                muvofiqlashtirish hamda aholi va davlat xizmatchilarining IT
                savodxonligini oshirish ustida uzoq muddatli satrategik
                faoliyatni olib boradi.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-[100px] about-counts">
          <h1
            className="title w-1/2"
            style={{ textAlign: "left", verticalAlign: "start", marginTop: 0 }}
          >
            Markaz 2030 - yilga qadar quyidagi natijaga erishish ustida ish olib
            boradi
          </h1>

          <div className="w-1/2 flex justify-between flex-wrap gap-[20px]">
            {aboutCounts &&
              aboutCounts.map((count) => {
                return (
                  <div className="w-[282px] h-[192px] border-[#E0E0E0] border-[1px] rounded-[16px] pl-[40px] pt-[40px]">
                    <h1 className="about-count-value text-[44px] font-bold">
                      {count.value}
                    </h1>
                    <p>{count.title}</p>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="mt-[100px] relative">
          <img
            className="rounded-[24px] w-full h-full"
            src={aboutImage}
            alt=""
          />

          <img
            src={startVideo}
            alt=""
            className="absolute left-[45%] cursor-pointer top-[40%] z-[10]"
          />

          <div className="bg-[#222] rounded-[24px] opacity-[0.6] h-full w-full absolute left-0 top-0"></div>
        </div>
        <div className="flex justify-center mt-[27px]">
          <p className="max-w-[790px] desc">
            Markaz o'z faoliyati davomida  maktab davridan boshlab yoshlarni
            oliy ta'lim, xususiy IT ta'lim  va ish beruvchi kompaniyalar bilan
            bog'lash ularni o'z qobilyatlarini aniqlash va kelajak kasblariga
            tayyorlash uchun kompleks dasturlarni ishlab chiqadi va amaliyotga
            tadbiq etadi. <br /> <br /> Biz vazirlik o'z oldiga qo'ygan bosh
            maqsad -- raqamlashtirish orqali insonlar hayotini yaxshilash va
            aholining qo’shimcha daromad topishiga ko’maklashishdan iborat
            missiyasiga erishishiga yoshlar o'rtasida IT ta'limni ommalashtirish
            orqali o'z hissamizni qo'shamiz. <br />
            <br /> Biz munosib kalajakni yoshlar bilan birgalikda kodlaymiz!
          </p>
        </div>

        <div className="flex justify-between items-center mt-[100px] about-images-section">
          <div className="flex flex-col justify-between gap-[24px]">
            <img src={about1} alt="" />
            <img src={about3} alt="" />
          </div>
          <div>
            <img src={about2} alt="" />
          </div>
          <div className="flex flex-col justify-between gap-[24px]">
            <img src={about4} alt="" />
            <img src={about5} alt="" />
          </div>
        </div>

        <Join />
      </div>
    </section>
  );
}

export default About;
