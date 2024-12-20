import map from "../assets/map.png";
import { mainLogo2 } from "../assets/logos/logos";

function Footer() {
  return (
    <footer className="bg-[#06306D]">
      <div className="container pt-10 pb-8 mt-[50px] md:mt-[100px]">
        <div className="flex gap-[50px] items-center md:items-start  flex-col lg:flex-row md:justify-between border-b pb-11">
          <div className="max-w-[400px] w-full hidden md:block">
            <img src={map} className="rounded-[30px] w-full mb-5 lg:mb-0 mx-auto" alt="" />
            {/* mt-[50px] md:mt-[100px] */}
            <div className="container pt-10 pb-8 ">
              <div className="flex items-center md:items-start  flex-col lg:flex-row md:justify-between border-b pb-11">
                <div className="w-full">
                  <img src={map} className="rounded-[30px]" alt="" />
                </div>
                <div className="flex flex-col md:flex-row items-start w-full gap-3 sm:gap-[40px] md:gap-[80px]">
                  <div className="text-white flex gap-5 md:flex-col md:max-w-[200px] w-full">
                    <div className="md:flex-row">
                      <img className="" src={mainLogo2} alt="" />
                      <h4 className="flex-col md:flex-row  flex  md:items-center md:gap-4 mt-12">
                        <span>
                          <i className="bx bxs-phone"></i>
                        </span>
                        +998 71 203 03 43
                      </h4>
                      <h4 className="flex-col md:flex-row flex  md:items-center md:gap-4 mt-4 mb-4">
                        <span>
                          <i className="bx bxs-message-alt"></i>
                        </span>
                        education@digital.uz
                      </h4>
                    </div>

                    <h4 className="flex-col max-w-[166px] md:flex-row flex my-auto  md:items-center md:gap-4">
                      <span>
                        <i className="bx bxs-location-plus mt-14"></i>
                      </span>
                      100164 Toshkent shahri, I.Muminov ko'chasi, 4
                    </h4>
                  </div>

                  <div className="max-w-[500px] w-full md:hidden">
                    <img src={map} className=" rounded-[30px] mb-5 lg:mb-0 w-full" alt="" />
                  </div>

                  <div>

                    <ul className=" text-white gap-4 flex items-start flex-col">
                      <li className="text-[#B7B7B7]">O‘quvchilarga</li>
                      <li className="cursor-pointer">Kurslar</li>
                      <li className="cursor-pointer">IT o‘quv markazlar</li>
                      <li className="cursor-pointer">Dasturlar</li>
                      <li className="cursor-pointer">Biz haqimizda</li>
                      <li className="cursor-pointer">Biz bilan bog‘lanish</li>
                      <li className="cursor-pointer">FAQ</li>
                    </ul>
                    <ul className="mt-3 md:mt-0 md:hidden w-full text-white gap-4 flex items-start flex-col">
                      <li className="cursor-pointer">Languech</li>
                      <li className="cursor-pointer">English</li>
                      <li className="cursor-pointer">Uzbek</li>
                      <li className="cursor-pointer">Russian</li>
                    </ul>
                  </div>
                  <ul className="max-w-[205px] w-full text-white gap-4 flex items-start flex-col">
                    <li className="text-[#B7B7B7]">Tadbirkorlarga</li>
                    <li className="cursor-pointer">Biz bilan bog‘lanish</li>
                    <li className="cursor-pointer">FAQ</li>
                    <ul className="hidden md:block">
                      <li className="cursor-pointer">Til</li>
                      <li className="cursor-pointer">Ruscha</li>
                      <li className="cursor-pointer">O‘zbekcha</li>
                      <li className="cursor-pointer">Inglizcha</li>
                    </ul>
                  </ul>
                </div>
              </div>
              <div className="text-white mt-[34px] flex flex-col-reverse md:flex-row items-center justify-between footer-bottom">
                <div className="flex items-center gap-[52px]">
                  <div>
                    <h5 className="text-[14px]">
                      © 2024 MITC. Barcha huquqlar himoyalangan.
                    </h5>
                  </div>
                  <ul className="flex items-center gap-5 text-[14px]">
                    <li className="underline">Maxfiylik siyosati</li>
                    <li className="underline">Xizmat ko‘rsatish shartlari</li>
                    <li className="underline">Cookies sozlamalari</li>
                  </ul>
                </div>
                <div className="text-center space-x-3">
                  <i className="bx bxl-facebook text-[20px]"></i>
                  <i className="bx bxl-instagram text-[20px]"></i>
                  <i className="bx bxl-twitter text-[20px]"></i>
                  <i className="bx bxl-linkedin-square text-[20px]"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
