import coding from "../../assets/images/projects/coder_2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import PropTypes from "prop-types";
import Courser from "../../assets/coursera.png";
import It from "../../assets/it.png";
import Talim from "../../assets/talim.png";
import Texno from "../../assets/texno.png";
import Brain from "../../assets/brain.png";
import Office from "../../assets/office.png";
import { rightIcon } from "../../assets/icons/icon";
import Contact from "../Contact/Contact";
import { useTranslation } from "react-i18next";
import { BackgroundIcon } from "../../assets/icons/icon";
import { oneMillionUzbekCodersCards } from "../../utils";
import { useNavigate } from "react-router-dom";
import { Autoplay } from "swiper/modules";

import Video from "../../assets/videos/Uzbekcoders.Uz.mp4";

const courses = [
  {
    id: 1,
    title: "Data Science Math Skills",
  },
  {
    id: 2,
    title: "Code yourself",
  },
  {
    id: 3,
    title: "Excel Fundamentals for Data Analysis",
  },
  {
    id: 4,
    title: "Introduction to Generative AI",
  },
  {
    id: 5,
    title: "Introduction to User Experience Design",
  },
];

function Courses() {
  return (
    <div className="max-w-[1300px] mx-auto px-4 py-8 sm:py-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
        Yo&apos;nalishlar
      </h2>
      <p className="mb-6 sm:mb-8 text-gray-600 text-sm sm:text-base md:text-base">
        Loyihada yosh chegarasi mavjud emas barcha o&apos;qish istagida bo&apos;lganlar
        uchun. Loyiha doirasida yoshlar 5 ta yo&apos;nalish bo&apos;yicha dunyoning
        yetakchi mentorlaridan bilim olishlari mumkin bo&apos;ladi.
      </p>

      <div className="flex flex-col gap-3 sm:gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {courses.slice(0, 3).map((course) => (
            <div
              key={course.id}
              className="p-3 sm:p-4 md:p-6 rounded-lg border border-gray-200 hover:border-blue-500 cursor-pointer transition-all duration-300"
            >
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full bg-blue-500 mb-2 sm:mb-3 md:mb-4"></div>
              <h3 className="font-medium text-sm sm:text-base md:text-lg">
                {course.title}
              </h3>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {courses.slice(3, 5).map((course) => (
            <div
              key={course.id}
              className="p-3 sm:p-4 md:p-6 rounded-lg border border-gray-200 hover:border-blue-500 cursor-pointer transition-all duration-300"
            >
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full bg-blue-500 mb-2 sm:mb-3 md:mb-4"></div>
              <h3 className="font-medium text-sm sm:text-base md:text-lg">
                {course.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const Button = ({ children, className, ...props }) => (
  <button className={`px-4 py-2 rounded font-semibold ${className}`} {...props}>
    {children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: "",
};

const OneMillionUzbekCoders = () => {
  const { t } = useTranslation("global");
  const navigate = useNavigate();

  return (
    <div className="overflow-hidden">
      <div className="max-w-[1230px] mx-auto">
        <div className="flex justify-center mt-[100px]">
          <h1 className="font-bold text-[56px] text-[#222222] mb-[40px] w-[792px] text-center">
            Bir million dasturchi loyihasi
          </h1>
        </div>

        <div className="flex flex-col items-center max-w-full">
          <img
            src={coding}
            className="rounded-[18px] w-full"
            alt="Coursera Project"
          />
          <h1 className="pt-[40px] pb-[100px] font-semibold text-[18px]">
            O&apos;zbekiston Respublikasida yoshlarni &quot;Bir million dasturchi&quot;
            loyihasining navbatdagi bosqichi sifatida &quot;Coursera&quot; onlayn
            platformasida o&apos;qitish maqsad qilingan.
          </h1>
        </div>
      </div>

      <div className="max-w-[1230px] mx-auto">
        <div className="flex justify-center">
          <h1 className="pb-[24px] font-semibold text-[32px]">
            Kelajak kasblarini egallang!
          </h1>
        </div>
      </div>

      <div className="">
        <Swiper
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay]}
          slidesPerView={1.5}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          className="mySwiper max-w-[1900px] pl-[200px] w-full"
          loop={true}
        >
          {oneMillionUzbekCodersCards.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="w-full flex flex-col md:flex-row items-center justify-center border border-[#E0E0E0] rounded-[8px] overflow-hidden p-4">
                <img
                  className="w-full md:w-1/2 h-[250px] md:h-full object-cover"
                  src={slide.img}
                  alt="Slide image"
                />
                <div className="w-full md:w-1/2 p-4 flex flex-col justify-between">
                  <h1 className="text-[18px] font-medium pb-[20px] w-full text-left">
                    {slide.text}
                  </h1>
                  <div className="flex justify-center md:justify-start">
                    <button
                      onClick={() => navigate(`/articles/${index + 1}`)}
                      className="px-6 py-2 font-medium rounded-[24px] border border-[#2F2F2F] hover:bg-[#2F2F2F] hover:text-white transition-all w-max"
                    >
                      Batafsil
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="max-w-[1230px] mx-auto py-[100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center items-center gap-[50px]">
        <img src={Texno} alt="" />
        <img src={Talim} alt="" />
        <img src={It} alt="" />
        <img src={Courser} alt="" />
      </div>

      <div className="max-w-[1230px] mx-auto">
        <h1 className="pb-[24px] font-semibold text-[32px]">Dastur sonlarda</h1>
      </div>

      <div className="max-w-[1230px] mx-auto pb-[100px] gap-[24px] grid grid-cols-1 lg:grid-cols-2">
        <div className="w-[384] py-[22px] px-[20px] rounded-[12px] border-[1px] border-[#E0E0E0]">
          <img src={Brain} alt="" />
          <h1 className="font-extrabold text-[40px] py-[16px] text-[#2675EB] leading-[48px]">
            1,000,000+
          </h1>
          <p className="font-medium text-[16px] text-[#222222]">
            Ro&apos;yxatdan o&apos;tganlar soni
          </p>
        </div>
        <div className="w-[384] py-[22px] px-[20px] rounded-[12px] border-[1px] border-[#E0E0E0]">
          <img src={Office} alt="" />
          <h1 className="font-extrabold text-[40px] py-[16px] text-[#2675EB] leading-[48px]">
            450,000+
          </h1>
          <p className="font-medium text-[16px] text-[#222222]">
            Sertifikat olganlar
          </p>
        </div>
      </div>

      <Courses />

      <div className="mb-[-120px]">
        <div className="w-full flex justify-center items-center mt-[100px]">
          <video width="670" controls>
            <source src={Video} type="video/mp4" />
            <source src={Video} type="video/ogg" />
          </video>
        </div>

        <div>
          <div className="max-w-[1230px] mx-auto px-4 py-12 mt-[100px]">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-8">
              Dasturga oid qarorlar
            </h2>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 p-6 rounded-lg border border-gray-200 hover:border-blue-500 transition-all duration-300">
                <p className="text-gray-800 text-sm sm:text-base">
                  &quot;Ma&apos;muriy islohotlar doirasida raqamli texnologiyalar sohasida
                  davlat boshqaruvini samarali tashkil etish chora-tadbirlari
                  to&apos;g&apos;risida&quot;gi PF-75-son farmoni
                </p>
                <div className="flex justify-end mt-4">
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <img src={rightIcon} width={"24px"} alt="" />
                  </button>
                </div>
              </div>

              <div className="flex-1 p-6 rounded-lg border border-gray-200 hover:border-blue-500 transition-all duration-300">
                <p className="text-gray-800 text-sm sm:text-base">
                  &quot;Raqamli xizmatlar qamrovi va sifatini oshirish hamda soha,
                  tarmoq va hududlarda raqamli transformatsiya qilish
                  chora-tadbirlari to&apos;g&apos;risida&quot;gi PQ-182-son qarori
                </p>
                <div className="flex justify-end mt-4">
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <img src={rightIcon} width={"24px"} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Contact />

      <div className="bg-[#F8F8F8] w-full py-[40px] project-section-bottom">
        <div className="max-w-[1230px] mx-auto">
          <div className="flex justify-between gap-[20px] ">
            <div className="w-2/3 flex flex-col gap-[20px]">
              <h1 className="text-[#222] font-bold text-[40px]">
                <div
                  dangerouslySetInnerHTML={{
                    __html: t("one_million_uzbek_coders_title"),
                  }}
                />
              </h1>
              <p className="text-[#222] text-[20px]">
                <div
                  dangerouslySetInnerHTML={{
                    __html: t("one_million_uzbek_coders_description"),
                  }}
                />
              </p>

              <div>
                <Button className="bg-blue-500 rounded-3xl hover:bg-blue-600 text-white px-8">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: t("one_million_uzbek_coders_events"),
                    }}
                  />
                </Button>
              </div>
            </div>

            <div className="w-1/3 project-bottom-image">
              <img src={BackgroundIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneMillionUzbekCoders;
