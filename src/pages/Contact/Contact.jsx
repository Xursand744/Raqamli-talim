import React, { useState } from "react";

const Contact = () => {
  const [phone, setPhone] = useState("");
  const [isFocused, setIsFocused] = useState(false);

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

  return (
    <div>
      <main>
        <section className="py-[180px]">
          <div className="container mx-auto">
            <div className="flex justify-center">
              <h1 className="pb-[40px] font-bold text-[44px] leading-[64px] text-[#222222]">
                Biz bilan bog‘laning
              </h1>
            </div>

            <div className="flex justify-center items-center">
              <div>
                <div>
                  <h1 className="text-[16px] text-[#222222] mb-[8px] mt-[40px]">
                    To‘liq ismingiz
                  </h1>
                  <input
                    className="w-[300px] md:w-[500px] lg:w-[792px] p-[12px] outline-none border-[1px] border-[#E0E0E0] rounded-[8px] focus:border-[#2675EB]"
                    type="text"
                    placeholder="To‘liq ismingiz"
                  />
                </div>

                <div>
                  <h1 className="text-[16px] text-[#222222] mb-[8px] mt-[40px]">
                    Telefon raqamingiz
                  </h1>
                  <input
                    className="w-[300px] md:w-[500px] lg:w-[792px] p-[12px] outline-none border-[1px] border-[#E0E0E0] rounded-[8px] focus:border-[#2675EB]"
                    type="text"
                    placeholder={!isFocused ? "+998 XX XXX XX XX" : ""}
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
                    Elektron pochta
                  </h1>
                  <input
                    className="w-[300px] md:w-[500px] lg:w-[792px] p-[12px] outline-none border-[1px] border-[#E0E0E0] rounded-[8px] focus:border-[#2675EB]"
                    type="text"
                    placeholder="E-pochta manzili"
                  />
                </div>

                <div>
                  <h1 className="text-[16px] text-[#222222] mb-[8px] mt-[40px]">
                    Biz qanday yordam bera olamiz?
                  </h1>
                  <textarea
                    className="w-[300px] md:w-[500px] lg:w-[792px] h-[144px] p-[12px] outline-none border-[1px] border-[#E0E0E0] rounded-[8px] focus:border-[#2675EB]"
                    placeholder="Xabaringizni shu yerga kiriting"
                  ></textarea>
                </div>

                <div className="pt-[40px]">
                  <button>Yuborish</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
