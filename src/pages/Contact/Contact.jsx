import { useState } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

const Contact = ({ title }) => {
  const { t } = useTranslation("global");
  const [phone, setPhone] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const formatPhoneNumber = (value) => {
    let digits = value.replace(/\D/g, "");

    if (isFocused && !digits.startsWith("998")) {
      digits = "998";
    }

    digits = digits.slice(0, 12);

    let formatted = isFocused ? `+${digits.slice(0, 3)}` : "";
    if (digits.length > 3) formatted += ` ${digits.slice(3, 5)}`;
    if (digits.length > 5) formatted += ` ${digits.slice(5, 8)}`;
    if (digits.length > 8) formatted += ` ${digits.slice(8, 10)}`;
    if (digits.length > 10) formatted += ` ${digits.slice(10, 12)}`;

    return formatted;
  };

  const handlePhoneChange = (e) => {
    setPhone(formatPhoneNumber(e.target.value));
  };

  const handleSubmit = () => {
    setPhone("");
    setIsFocused(false);
    setName("");
    setEmail("");
    setMessage("");
    setShowModal(true);
  };

  return (
    <div className="">
      <main>
        <section className="py-[180px]">
          <div className="max-w-[1230px] mx-auto">
            <div className="flex justify-center">
              <h1 className="pb-[40px] font-bold text-[44px] leading-[64px] text-[#222222]">
                {title || t("contact.title")}
              </h1>
            </div>

            <div className="flex justify-center items-center">
              <div>
                <div>
                  <h1 className="text-[16px] text-[#222222] mb-[8px] mt-[40px]">
                    {t("contact.nameLabel")}
                  </h1>
                  <input
                    className="w-[300px] md:w-[500px] lg:w-[792px] p-[12px] outline-none border-[1px] border-[#E0E0E0] rounded-[8px] focus:border-[#2675EB]"
                    type="text"
                    placeholder={t("contact.namePlaceholder")}
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>

                <div>
                  <h1 className="text-[16px] text-[#222222] mb-[8px] mt-[40px]">
                    {t("contact.phoneLabel")}
                  </h1>
                  <input
                    className="w-[300px] md:w-[500px] lg:w-[792px] p-[12px] outline-none border-[1px] border-[#E0E0E0] rounded-[8px] focus:border-[#2675EB]"
                    type="text"
                    placeholder={!isFocused ? t("contact.phonePlaceholder") : ""}
                    value={phone}
                    onChange={handlePhoneChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => {
                      if (phone === "+998 ") {
                        setPhone("");
                        setIsFocused(false);
                      }
                    }}
                  />
                </div>

                <div>
                  <h1 className="text-[16px] text-[#222222] mb-[8px] mt-[40px]">
                    {t("contact.emailLabel")}
                  </h1>
                  <input
                    className="w-[300px] md:w-[500px] lg:w-[792px] p-[12px] outline-none border-[1px] border-[#E0E0E0] rounded-[8px] focus:border-[#2675EB]"
                    type="text"
                    placeholder={t("contact.emailPlaceholder")}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>

                <div>
                  <h1 className="text-[16px] text-[#222222] mb-[8px] mt-[40px]">
                    {t("contact.messageLabel")}
                  </h1>
                  <textarea
                    className="w-[300px] md:w-[500px] lg:w-[792px] h-[144px] p-[12px] outline-none border-[1px] border-[#E0E0E0] rounded-[8px] focus:border-[#2675EB]"
                    placeholder={t("contact.messagePlaceholder")}
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                  ></textarea>
                </div>

                <div className="pt-[40px] flex justify-center">
                  <button
                    className="px-[40px] py-[12px] bg-[#2675EB] font-medium text-[20px] text-white rounded-[27px]"
                    onClick={handleSubmit}
                  >
                    {t("contact.submit")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 animate-[fadeIn_0.3s_ease-in-out]"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg animate-[scaleIn_0.3s_ease-in-out]"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold text-green-600 mb-2">
              {t("contact.successTitle")}
            </h2>
            <p className="text-gray-600">{t("contact.successText")}</p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

Contact.propTypes = {
  title: PropTypes.string
};

export default Contact;
