import { NavLink } from "react-router-dom";
import { aboutCounts, aboutFilters } from "../utils";
import about1 from "../assets/about-1.png";

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
              <img src={about1} alt="" className="w-full h-full" />
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

        <div className="flex items-start mt-[100px]">
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
      </div>
    </section>
  );
}

export default About;
