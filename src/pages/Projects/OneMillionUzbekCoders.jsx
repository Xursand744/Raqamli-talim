import React from 'react';
import Blue from '../../assets/blue.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import First from '../../assets/1.jpg';
import Second from '../../assets/2.jpg';
import Third from '../../assets/3.jpg';
import Fourth from '../../assets/4.jpg';
import Fifth from '../../assets/5.jpg';
import Sixth from '../../assets/6.jpg';
import Seventh from '../../assets/7.jpg';
import Courser from '../../assets/coursera.png'
import It from '../../assets/it.png'
import Talim from '../../assets/talim.png'
import Texno from '../../assets/texno.png'
import Brain from '../../assets/brain.png'
import Office from '../../assets/office.png'

const slides = [
  { img: First, text: "14 ta hududda eng yuqori natija ko‘rsatgan o‘quvchilarga noutbuk va qimmatbaho sovg'alar" },
  { img: Second, text: "14 ta hududda eng yuqori natija ko‘rsatgan o‘quvchilarga noutbuk va qimmatbaho sovg'alar" },
  { img: Third, text: "14 ta hududda eng yuqori natija ko‘rsatgan o‘quvchilarga noutbuk va qimmatbaho sovg'alar" },
  { img: Fourth, text: "14 ta hududda eng yuqori natija ko‘rsatgan o‘quvchilarga noutbuk va qimmatbaho sovg'alar" },
  { img: Fifth, text: "14 ta hududda eng yuqori natija ko‘rsatgan o‘quvchilarga noutbuk va qimmatbaho sovg'alar" },
  { img: Sixth, text: "14 ta hududda eng yuqori natija ko‘rsatgan o‘quvchilarga noutbuk va qimmatbaho sovg'alar" },
  { img: Seventh, text: "14 ta hududda eng yuqori natija ko‘rsatgan o‘quvchilarga noutbuk va qimmatbaho sovg'alar" },
  ];

const OneMillionUzbekCoders = () => {
  return (
    <div className="overflow-hidden">
      <div className="container mx-auto">
        <div className="flex justify-center mt-[100px]">
          <h1 className="font-bold text-[56px] text-[#222222] mb-[40px] w-[792px] text-center">
            Bir million dasturchi loyihasi (Coursera)
          </h1>
        </div>

        <div className="flex flex-col items-center">
          <img src={Blue} className="rounded-[18px]" alt="Coursera Project" />
          <h1 className="pt-[40px] pb-[100px] w-[792px] font-semibold text-[18px] text-center">
            O‘zbekiston Respublikasida yoshlarni “Bir million dasturchi” loyihasining navbatdagi bosqichi sifatida “Coursera” onlayn platformasida o‘qitish maqsad qilingan.
          </h1>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="flex justify-center">
          <h1 className="pb-[24px] font-semibold text-[32px]">Kelajak kasblarini egallang!</h1>
        </div>
      </div>

      <div className="container mx-auto">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          className="mySwiper"
        >
          {slides.map((slide, index) => (
           <SwiperSlide key={index}>
           <div className="w-full h-auto flex flex-col md:flex-row items-center justify-center border border-[#E0E0E0] rounded-[8px] overflow-hidden p-4">
             <img className="w-full md:w-1/2 h-[250px] md:h-full object-cover" src={slide.img} alt="Slide image" />
             <div className="w-full md:w-1/2 p-4 flex flex-col justify-between">
               <h1 className="text-[18px] lg:text-[34px] font-medium pb-[20px] w-full lg:w-[462px] text-center md:text-left">
                 {slide.text}
               </h1>
               <div className="flex justify-center md:justify-start">
                 <button className="px-6 py-2 font-medium rounded-[24px] border border-[#2F2F2F] hover:bg-[#2F2F2F] hover:text-white transition-all w-max">
                   Batafsil
                 </button>
               </div>
             </div>
           </div>
         </SwiperSlide>
         
          ))}
        </Swiper>
      </div>

      <div className="container mx-auto py-[100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center items-center gap-[50px]">
        <img src={Texno} alt="" />
        <img src={Talim} alt="" />
        <img src={It} alt="" />
        <img src={Courser} alt="" />
      </div>

      <div className='container mx-auto'>
        <h1 className="pb-[24px] font-semibold text-[32px]">Dastur sonlarda</h1>
      </div>

      <div className='container mx-auto pb-[100px] gap-[24px] grid grid-cols-1 lg:grid-cols-2'>
          <div className='w-[384] py-[22px] px-[20px] rounded-[12px] border-[1px] border-[#E0E0E0]'>
            <img src={Brain} alt="" />
            <h1 className='font-extrabold text-[40px] py-[16px] text-[#2675EB] leading-[48px]'>1,000,000+</h1>
            <p className='font-medium text-[16px] text-[#222222]'>Ro‘yxatdan o‘tganlar soni</p>
          </div>
          <div className='w-[384] py-[22px] px-[20px] rounded-[12px] border-[1px] border-[#E0E0E0]'>
            <img src={Office} alt="" />
            <h1 className='font-extrabold text-[40px] py-[16px] text-[#2675EB] leading-[48px]'>450,000+</h1>
            <p className='font-medium text-[16px] text-[#222222]'>Sertifikat olganlar</p>
          </div>
      </div>

      <div className='container mx-auto'>
        <h1 className="font-semibold text-[32px]">Yo‘nalishlar</h1>
        <p className='lg:w-[792px] text-[18px] py-[24px]'>Loyihada yosh chegarasi mavjud emas barcha o‘qish istagida bo‘lganlar uchun.
        Loyiha doirasida  yoshlar 5 ta yo‘nalish bo‘yicha dunyoning yetakchi mentorlaridan bilim olishlari mumkin bo‘ladi.</p>
      </div>
    </div>
  );
}

export default OneMillionUzbekCoders;
