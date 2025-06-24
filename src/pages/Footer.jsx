import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { mainLogo2 } from "../assets/logos/logos";
import Cookies from "js-cookie";

const Footer = () => {
  const { t, i18n } = useTranslation("global");
  const navigate = useNavigate();

  useEffect(() => {
    const savedLanguage = Cookies.get("lang") || "uz";
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

  const contactInfo = [
    {
      icon: "bxs-phone",
      text: t("footer.phone"),
      marginTop: "mt-12",
      ariaLabel: t("footer.phoneAriaLabel"),
    },
    {
      icon: "bxs-message-alt",
      text: t("footer.email"),
      marginTop: "mt-4 mb-4",
      ariaLabel: t("footer.emailAriaLabel"),
    },
    {
      icon: "bxs-location-plus",
      text: t("footer.address"),
      marginTop: "",
      ariaLabel: t("footer.addressAriaLabel"),
    },
  ];

  const studentLinks = [
    { text: t("footer.courses"), link: "/courses", ariaLabel: t("footer.coursesAriaLabel") },
    { text: t("footer.centers"), link: "/study-centers", ariaLabel: t("footer.centersAriaLabel") },
    { text: t("footer.aboutUs"), link: "/about", ariaLabel: t("footer.aboutUsAriaLabel") },
  ];

  const entrepreneurLinks = [
    { text: t("footer.contact"), link: "/contact", ariaLabel: t("footer.contactAriaLabel") },
  ];

  const socialLinks = [
    { 
      icon: "bxl-facebook", 
      href: "https://www.facebook.com/uzdigitaledu?mibextid=LQQJ4d",
      ariaLabel: t("footer.facebookAriaLabel")
    },
    { 
      icon: "bxl-instagram", 
      href: "https://www.instagram.com/digital.eduuz",
      ariaLabel: t("footer.instagramAriaLabel")
    },
    { 
      icon: "bxl-linkedin-square", 
      href: "https://www.linkedin.com/company/digital-eduuz",
      ariaLabel: t("footer.linkedinAriaLabel")
    },
  ];

  const scrollToTopOnClick = (link) => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    navigate(link);
  };

  return (
    <footer className="bg-[#06306D] dark:bg-gray-900 transition-colors duration-200" role="contentinfo">
      <div className="container pt-10 pb-8">
        <div className="flex flex-col lg:flex-row gap-[50px] md:items-start pb-11">
          {/* Map and Links */}
          <div className="flex flex-col md:flex-row w-full gap-3 sm:gap-[40px] md:gap-[80px]">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2995.462986299251!2d69.3368565!3d41.3422894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5a58c63cbfd%3Axcb882f0ad7acf773!2sRaqamli%20texnologiyalar%20vazirligi!5e0!3m2!1sru!2s!4v1740069542648!5m2!1sru!2s"
                width="384"
                height="224"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t("footer.mapTitle")}
                aria-label={t("footer.mapAriaLabel")}
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>

            {/* Contact and Navigation Links */}
            <div className="flex flex-wrap w-full justify-between">
              {/* Logo and Contact */}
              <div className="text-white flex flex-col gap-5 max-w-[200px] w-full">
                <img src={mainLogo2} alt={t("footer.logoAlt")} className="filter brightness-0 invert dark:filter-none" />
                {contactInfo.map((item, idx) => (
                  <h4
                    key={idx}
                    className={`flex items-center gap-4 ${item.marginTop} text-white dark:text-gray-200`}
                    aria-label={item.ariaLabel}
                  >
                    <i className={`bx ${item.icon} text-blue-300 dark:text-blue-400`} aria-hidden="true"></i>
                    {item.text}
                  </h4>
                ))}
              </div>

              {/* For Students */}
              <nav aria-label={t("footer.studentsNavAriaLabel")}>
                <ul className="text-white flex flex-col gap-4">
                  <li className="text-[#B7B7B7] dark:text-gray-400 font-semibold">
                    {t("footer.forStudents")}
                  </li>
                  {studentLinks.map((link, idx) => (
                    <li key={idx}>
                      <button 
                        onClick={() => scrollToTopOnClick(link.link)}
                        className="cursor-pointer text-white dark:text-gray-200 hover:text-blue-200 dark:hover:text-blue-300 transition-colors duration-200"
                        aria-label={link.ariaLabel}
                      >
                        {link.text}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* For Entrepreneurs */}
              <nav aria-label={t("footer.entrepreneursNavAriaLabel")}>
                <ul className="max-w-[205px] text-white flex flex-col gap-4 w-full">
                  <li className="text-[#B7B7B7] dark:text-gray-400 font-semibold">
                    {t("footer.forEntrepreneurs")}
                  </li>
                  {entrepreneurLinks.map((link, idx) => (
                    <li key={idx}>
                      <button 
                        onClick={() => scrollToTopOnClick(link.link)}
                        className="cursor-pointer text-white dark:text-gray-200 hover:text-blue-200 dark:hover:text-blue-300 transition-colors duration-200"
                        aria-label={link.ariaLabel}
                      >
                        {link.text}
                      </button>
                    </li>
                  ))}

                  <li className="mt-auto">
                    <div className="space-x-3 text-[20px]" role="list" aria-label={t("footer.socialLinksAriaLabel")}>
                      {socialLinks.map((social, idx) => (
                        <a 
                          key={idx}
                          href={social.href} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label={social.ariaLabel}
                          className="text-white dark:text-gray-200 hover:text-blue-200 dark:hover:text-blue-300 transition-colors duration-200"
                        >
                          <i className={`bx ${social.icon}`} aria-hidden="true"></i>
                        </a>
                      ))}
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
