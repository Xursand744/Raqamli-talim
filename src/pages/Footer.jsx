import React from "react";
import { useTranslation } from "react-i18next";
import map from "../assets/map.png";
import { mainLogo2 } from "../assets/logos/logos";

function Footer() {
  const { t } = useTranslation("global");

  return (
    <footer className="bg-[#06306D]">
      <div className="container pt-10 pb-8 mt-[0px] md:mt-[0px]">
        <div className="flex gap-[50px] items-center md:items-start flex-col lg:flex-row md:justify-between border-b pb-11">
          <div className="w-full md:block flex">
            <div className="container pt-10 pb-8">
              <div className="flex items-center md:items-start flex-row md:justify-between border-b pb-11">
                <div className="flex flex-col md:flex-row items-start w-full gap-3 sm:gap-[40px] md:gap-[80px] footer-bottom-links-image">
                  <div>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.462986299251!2d69.3368565!3d41.3422894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5a58c63cbfd%3A0xcb882f0ad7acf773!2sRaqamli%20texnologiyalar%20vazirligi!5e0!3m2!1sru!2s!4v1740069542648!5m2!1sru!2s"
                      width="384"
                      height="224"
                      style={{ border: 0 }}
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                    {/* <img
                      src={map}
                      className="rounded-[30px] mb-5 lg:mb-0 w-full"
                      alt={t("footer.mapAlt")}
                    /> */}
                  </div>
                  <div className="flex justify-between w-full footer-bottom-links flex-wrap">
                    <div className="text-white flex gap-5 md:flex-col max-w-[200px] w-full">
                      <div className="md:flex-row">
                        <img
                          className=""
                          src={mainLogo2}
                          alt={t("footer.logoAlt")}
                        />
                        <h4 className="flex-col md:flex-row flex md:items-center md:gap-4 mt-12">
                          <span>
                            <i className="bx bxs-phone"></i>
                          </span>
                          {t("footer.phone")}
                        </h4>
                        <h4 className="flex-col md:flex-row flex md:items-center md:gap-4 mt-4 mb-4">
                          <span>
                            <i className="bx bxs-message-alt"></i>
                          </span>
                          {t("footer.email")}
                        </h4>
                        <h4 className="flex-col max-w-[166px] md:flex-row flex my-auto md:items-center md:gap-4">
                          <span>
                            <i className="bx bxs-location-plus mt-14"></i>
                          </span>
                          {t("footer.address")}
                        </h4>
                      </div>
                    </div>
                    <div>
                      <ul className="text-white gap-4 flex items-start flex-col">
                        <li className="text-[#B7B7B7]">
                          {t("footer.forStudents")}
                        </li>
                        <li className="cursor-pointer">
                          {t("footer.courses")}
                        </li>
                        <li className="cursor-pointer">
                          {t("footer.centers")}
                        </li>
                        <li className="cursor-pointer">
                          {t("footer.programs")}
                        </li>
                        <li className="cursor-pointer">
                          {t("footer.aboutUs")}
                        </li>
                        <li className="cursor-pointer">
                          {t("footer.contact")}
                        </li>
                        <li className="cursor-pointer">{t("footer.faq")}</li>
                      </ul>
                    </div>
                    <ul className="max-w-[205px] text-white gap-4 w-full flex items-start flex-col">
                      <li className="text-[#B7B7B7]">
                        {t("footer.forEntrepreneurs")}
                      </li>
                      <li className="cursor-pointer">{t("footer.contact")}</li>
                      <li className="cursor-pointer">{t("footer.faq")}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="text-white mt-[34px] flex flex-col-reverse md:flex-row items-center justify-between footer-bottom">
                <div className="flex items-center gap-[52px]">
                  <div>
                    <h5 className="text-[14px]">{t("footer.copyright")}</h5>
                  </div>
                  <ul className="flex items-center gap-5 text-[14px]">
                    <li className="underline">{t("footer.privacyPolicy")}</li>
                    <li className="underline">{t("footer.termsOfService")}</li>
                    <li className="underline">{t("footer.cookieSettings")}</li>
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
