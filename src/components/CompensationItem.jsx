import React from "react";

const CompensationBannerItem = ({ title, span, desc, image }) => {
  return (
    <div className="inline">
      <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-md lg:flex-row sm:justify-between max-w-[1200px] w-full min-h-[300px]">
        <div className="text-center sm:text-left">
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-[40px] font-semibold text-blue-600 relative">
                {span} <span className="text-[#222]">{title}?</span>
                <div className="absolute left-0 bottom-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="338"
                    height="18"
                    viewBox="0 0 338 18"
                    fill="none"
                  >
                    <path
                      d="M336.405 2.46431C327.341 5.36208 318.006 6.08499 308.648 7.52637C294.333 9.73146 279.945 10.9573 265.566 12.653C214.847 18.6344 163.871 15.0188 113.034 12.6325C82.0605 11.1785 50.5814 10.9207 19.8885 6.92608C13.9427 6.15225 8.00764 5.25997 2.00969 5.18612"
                      stroke="#69A5FF"
                      stroke-width="3"
                      stroke-linecap="round"
                    />
                  </svg>
                </div>
              </h1>
              <p className="mt-2 text-gray-700 text-[24px]">{desc}</p>
            </div>

            <div className="mt-[60px]">
              <button className="px-6 py-2 font-medium text-white transition bg-black rounded-[27px] hover:bg-gray-800">
                Qo‘llanmaga o‘tish
              </button>
            </div>
          </div>
        </div>
        <div className="relative mt-4 sm:mt-0 sm:ml-6">
          <img src={image} alt="Wallet" className="w-[284px] h-[284px]" />
        </div>
      </div>
    </div>
  );
};

export default CompensationBannerItem;
