import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { mainLogo2 } from "../assets/logos/logos";

const Footer = () => {
  const { t } = useTranslation("global");
  const navigate = useNavigate();

  const contactInfo = [
    {
      icon: "bxs-phone",
      text: t("footer.phone"),
      marginTop: "mt-12",
    },
    {
      icon: "bxs-message-alt",
      text: t("footer.email"),
      marginTop: "mt-4 mb-4",
    },
    {
      icon: "bxs-location-plus",
      text: t("footer.address"),
      marginTop: "",
    },
  ];

  const studentLinks = [
    { text: t("footer.courses") },
    { text: t("footer.centers") },
    { text: t("footer.programs") },
    { text: t("footer.aboutUs") },
    { text: t("footer.contact") },
    { text: t("footer.faq") },
  ];

  const entrepreneurLinks = [
    { text: t("footer.contact"), link: "/contact" },
    { text: t("footer.faq"), link: "/faq" },
  ];

  return (
    <footer className="bg-[#06306D]">
      <div className="container pt-10 pb-8">
        <div className="flex flex-col lg:flex-row gap-[50px] md:items-start pb-11">
          {/* Map and Links */}
          <div className="flex flex-col md:flex-row w-full gap-3 sm:gap-[40px] md:gap-[80px]">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.462986299251!2d69.3368565!3d41.3422894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5a58c63cbfd%3A0xcb882f0ad7acf773!2sRaqamli%20texnologiyalar%20vazirligi!5e0!3m2!1sru!2s!4v1740069542648!5m2!1sru!2s"
                width="384"
                height="224"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Contact and Navigation Links */}
            <div className="flex flex-wrap w-full justify-between">
              {/* Logo and Contact */}
              <div className="text-white flex flex-col gap-5 max-w-[200px] w-full">
                <img src={mainLogo2} alt={t("footer.logoAlt")} />
                {contactInfo.map((item, idx) => (
                  <h4
                    key={idx}
                    className={`flex items-center gap-4 ${item.marginTop}`}
                  >
                    <i className={`bx ${item.icon}`}></i>
                    {item.text}
                  </h4>
                ))}
              </div>

              {/* For Students */}
              <div>
                <ul className="text-white flex flex-col gap-4">
                  <li className="text-[#B7B7B7]">
                    {t("footer.forStudents")}
                  </li>
                  {studentLinks.map((link, idx) => (
                    <li key={idx} className="cursor-pointer">
                      {link.text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* For Entrepreneurs */}
              <ul className="max-w-[205px] text-white flex flex-col gap-4 w-full">
                <li className="text-[#B7B7B7]">
                  {t("footer.forEntrepreneurs")}
                </li>
                {entrepreneurLinks.map((link, idx) => (
                  <li key={idx} className="cursor-pointer" onClick={() => navigate(link.link)}>
                    {link.text}
                  </li>
                ))}

                <li className="mt-auto">
                  <div className="space-x-3 text-[20px]">
                    <a href="https://www.facebook.com/uzdigitaledu?mibextid=LQQJ4d" target="_blank">
                      <i className="bx bxl-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/digital.eduuz" target="_blank">
                      <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/digital-eduuz" target="_blank">
                      <i className="bx bxl-linkedin-square"></i>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        {/* <div className="text-white mt-[34px] flex flex-col-reverse md:flex-row items-center justify-between">
          <div className="flex items-center gap-[52px]">
            <h5 className="text-[14px]">{t("footer.copyright")}</h5>
            <ul className="flex gap-5 text-[14px] underline">
              <li>{t("footer.privacyPolicy")}</li>
              <li>{t("footer.termsOfService")}</li>
              <li>{t("footer.cookieSettings")}</li>
            </ul>
          </div>
          <div className="space-x-3 text-[20px]">
            <i className="bx bxl-facebook"></i>
            <i className="bx bxl-instagram"></i>
            <i className="bx bxl-twitter"></i>
            <i className="bx bxl-linkedin-square"></i>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
