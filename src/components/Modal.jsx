import CourseItemImage from "../assets/course-item.jpg";
import pdp from "../assets/pdp.svg";

const Modal = ({ isOpen, onClose, course }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-[12px] shadow-lg   relative  max-w-[538px] w-full">
        <button
          className="absolute  bg-white right-0 top-0 z-20 rounded-full p-[5px] m-[15px] hover:text-gray-900"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6 6L18 18"
              stroke="#222222"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M18 6L6 18"
              stroke="#222222"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="w-full relative">
          <img
            src={CourseItemImage}
            className="min-h-[100px] w-full"
            style={{
              borderTopLeftRadius: "12px",
              borderTopRightRadius: "12px",
            }}
            alt=""
          />

          <div className="flex gap-[10px] absolute bottom-[10px] left-[20px]">
            <div className="bg-[white] px-[12px] rounded-[12px]">
              {course.duration}
            </div>
            <div className="bg-[white] px-[12px] rounded-[12px]">
              {course.title}
            </div>
          </div>
        </div>

        <div className="p-6">
          <h2 className="text-xl font-bold">{course.name}</h2>
          <p className="text-blue-500 text-lg font-semibold mt-2">
            {course.price.toLocaleString("uz-UZ")} UZS/oyiga
          </p>

          <div className="mt-4">
            <h3 className="font-semibold flex gap-[10px]">
              <img src={pdp} alt="" />
              {course.center}
            </h3>
            <div className="mt-[20px]">
              <div className="flex justify-between">
                <div className="flex items-center gap-[1px] w-1/2 text-[14px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.00675 9.0485C6.95408 9.0485 6.09808 8.1925 6.09808 7.13984C6.09808 6.08717 6.95408 5.23117 8.00675 5.23117C9.05941 5.23117 9.91608 6.08717 9.91608 7.13984C9.91608 8.1925 9.05941 9.0485 8.00675 9.0485ZM8.00008 1.6665C5.05941 1.6665 2.66675 4.0885 2.66675 7.06584C2.66675 10.6712 5.76941 14.3332 8.00008 14.3332C10.2301 14.3332 13.3334 10.6712 13.3334 7.06584C13.3334 4.0885 10.9407 1.6665 8.00008 1.6665Z"
                      fill="#2675EB"
                    />
                  </svg>

                  {course.fullLocation}
                </div>
                <div className="flex items-center gap-[5px] w-1/3 text-[14px]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="phone">
                      <path
                        id="Vector"
                        opacity="0.4"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.6711 9.75858C12.5156 9.61074 12.3466 9.44946 12.1674 9.26962C11.3502 8.45618 10.6442 8.73202 10.0766 8.95538C9.39624 9.22098 8.75496 9.47314 7.58504 8.3045C6.41448 7.13458 6.66536 6.49201 6.9316 5.81169C7.15368 5.24337 7.43016 4.53681 6.61288 3.72209C6.43496 3.54353 6.27495 3.37457 6.12711 3.21841C5.52615 2.58417 5.09223 2.12593 4.48103 2.11825C3.98119 2.10161 3.39879 2.44529 2.57191 3.27345C2.56359 3.28177 2.52199 3.32337 2.51495 3.33233C2.33191 3.51025 1.84615 3.98513 1.84039 4.91121C1.83079 6.35953 2.99879 8.26674 5.31111 10.5803C7.61256 12.8811 9.51208 14.0466 10.9578 14.0466H10.9738C11.9018 14.0415 12.3774 13.5551 12.5566 13.372L12.6167 13.3138C13.4404 12.4895 13.7745 11.9365 13.7674 11.4085C13.7604 10.7973 13.3034 10.3615 12.6711 9.75858Z"
                        fill="#2675EB"
                      />
                      <path
                        id="Vector_2"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M11.1059 6.71468C11.1507 6.94382 11.3516 7.10254 11.5763 7.10254C11.607 7.10254 11.6383 7.09999 11.6691 7.09423C11.9289 7.04367 12.0991 6.79151 12.0486 6.531C11.8047 5.28044 10.8396 4.31532 9.58969 4.07148C9.32921 4.02796 9.07769 4.19052 9.02649 4.451C8.97593 4.71148 9.14553 4.96364 9.40601 5.0142C10.27 5.18188 10.9375 5.8494 11.1059 6.71468Z"
                        fill="#2675EB"
                      />
                      <path
                        id="Vector_3"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.5505 1.96024C9.29002 1.91992 9.04938 2.12088 9.02058 2.38392C8.99114 2.6476 9.18122 2.88504 9.4449 2.91384C11.4347 3.13464 12.9796 4.67896 13.203 6.66936C13.2305 6.91515 13.4379 7.09627 13.6791 7.09627C13.6971 7.09627 13.715 7.09499 13.7335 7.09371C13.9966 7.06427 14.1867 6.82683 14.1566 6.56313C13.8839 4.12344 11.9895 2.23032 9.5505 1.96024Z"
                        fill="#2675EB"
                      />
                    </g>
                  </svg>

                  {course.number}
                </div>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-[5px] w-1/2 text-[14px]">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Isolation_Mode" clipPath="url(#clip0_29229_3292)">
                      <path
                        id="Vector"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.3334 6.99979C13.3334 9.80152 11.5141 12.1784 8.99242 13.0134C8.36599 13.2209 7.69604 13.3332 6.99998 13.3332C6.97439 13.3332 6.9488 13.333 6.9233 13.3327C3.46085 13.2917 0.666687 10.472 0.666687 6.99979C0.666687 3.52759 3.50227 0.666504 6.99998 0.666504C10.4977 0.666504 13.3334 3.50192 13.3334 6.99979Z"
                        fill="#2675EB"
                      />
                      <path
                        id="Vector_2"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.5382 4.30639L9.47814 10.8084C9.42749 11.1188 9.01932 11.2188 8.73473 10.9936C7.86923 10.3085 7.04097 9.65294 6.24761 9.02503C5.89323 8.74453 5.83831 8.27022 6.12046 7.96962C6.78223 7.26469 7.44731 6.55601 8.11596 5.84367C8.23205 5.72001 8.04129 5.54978 7.89508 5.64516C6.8516 6.32651 5.8277 6.99498 4.82303 7.65092C4.60763 7.79156 4.32705 7.81132 4.08755 7.70418C3.52647 7.45319 2.98045 7.20899 2.44861 6.97122C2.16011 6.84216 2.18901 6.43852 2.49152 6.33957L9.91607 3.90971C10.2351 3.80536 10.584 4.0252 10.5382 4.30639Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_29229_3292">
                        <rect
                          width="12.6667"
                          height="12.6667"
                          fill="white"
                          transform="translate(0.666687 0.666504)"
                        />
                      </clipPath>
                    </defs>
                  </svg>

                  {course.telegram}
                </div>
                <div className="flex items-center gap-[5px] w-1/3 text-[14px]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.26687 8.00031C5.26687 7.34964 5.30687 6.69831 5.3822 6.07161C4.25354 5.94161 3.18954 5.73361 2.20554 5.45361C1.86154 6.23361 1.66687 7.09431 1.66687 8.00031C1.66687 8.90631 1.86087 9.76631 2.20487 10.5463C3.19154 10.265 4.2562 10.0563 5.3822 9.92697C5.30687 9.30097 5.26687 8.65031 5.26687 8.00031Z"
                      fill="#2675EB"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.6178 6.0721C10.6931 6.69877 10.7331 7.35011 10.7331 8.00077C10.7331 8.65077 10.6931 9.30077 10.6178 9.92677C11.7438 10.0561 12.8085 10.2648 13.7951 10.5454C14.1391 9.76611 14.3331 8.90611 14.3331 8.00077C14.3331 7.09477 14.1385 6.23477 13.7945 5.4541C12.8105 5.73477 11.7458 5.94277 10.6178 6.0721Z"
                      fill="#2675EB"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.37806 6.16016C6.30806 6.72218 6.26672 7.33618 6.26672 8.00018C6.26672 8.66351 6.30806 9.27751 6.37806 9.83884C7.45606 9.76284 8.54073 9.76284 9.62206 9.83884C9.69206 9.27751 9.7334 8.66351 9.7334 8.00018C9.7334 7.33618 9.69206 6.72218 9.62206 6.16016C9.0814 6.19816 8.54006 6.22416 7.99873 6.22416C7.4574 6.22416 6.91673 6.19816 6.37806 6.16016Z"
                      fill="#2675EB"
                    />
                    <g opacity="0.4">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9.4584 5.16951C9.10507 3.48751 8.47907 2.49951 7.99973 2.49951C7.5204 2.49951 6.89507 3.48751 6.54175 5.16951C7.5104 5.23351 8.48573 5.23351 9.4584 5.16951Z"
                        fill="#2675EB"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.54102 10.8278C6.89434 12.5111 7.52034 13.4998 7.99967 13.4998C8.47967 13.4998 9.10567 12.5111 9.459 10.8278C8.48634 10.7631 7.511 10.7631 6.54102 10.8278Z"
                        fill="#2675EB"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.4649 10.9146C10.1542 12.5046 9.57424 13.7986 8.74158 14.2852C10.6522 14.0612 12.3029 12.9846 13.3062 11.4459C12.4202 11.2066 11.4696 11.0272 10.4649 10.9146Z"
                        fill="#2675EB"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.53518 10.915C4.53051 11.0284 3.57985 11.2077 2.69385 11.447C3.69718 12.9857 5.34785 14.0617 7.25853 14.2857C6.42585 13.7984 5.84585 12.505 5.53518 10.915Z"
                        fill="#2675EB"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.53549 5.08205C5.84616 3.49338 6.42616 2.20005 7.25813 1.71338C5.34816 1.93738 3.69816 3.01338 2.69482 4.55071C3.57816 4.78938 4.52882 4.96871 5.53549 5.08205Z"
                        fill="#2675EB"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.4645 5.08271C11.4712 4.96938 12.4219 4.79005 13.3052 4.55205C12.3025 3.01405 10.6519 1.93805 8.74121 1.71338C9.57388 2.20071 10.1539 3.49338 10.4645 5.08271Z"
                        fill="#2675EB"
                      />
                    </g>
                  </svg>

                  {course.website}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
