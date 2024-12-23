import React, { useState } from "react";
import pdp from "../assets/pdp.svg";
import Modal from "./Modal";

export default function CourseItem({ course }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        class="max-w-sm mx-auto w-[282px] h-[372px] bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer"
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        <div class=" relative bg-gradient-to-tr from-blue-0 to-teal-0">
          <img class="w-full" src={course.image} alt="" />
          <div class="p-2">
            <h2 class="absolute top-[144px] text-sm font-bold px-4 bg-white rounded-2xl text-center">
              {course.duration}
            </h2>
          </div>
        </div>
        <div class="p-2">
          <div class="flex p-[px]">
            <img src={pdp} alt="" />
            <h3 class="text-xl font-semibold ml-[10px]">{course.center}</h3>
          </div>
          <p class="text-[16px] font-bold mt-[10px]">{course.name}</p>
          <div class="mt-2">
            <span class="text-[18px] font-bold text-blue-600">
              {course.price.toLocaleString("uz-UZ")} UZS
            </span>
            <span class="text-[18px] font-bold text-blue-600">/oyiga</span>
          </div>
          <div class="mt-1 flex items-center space-x-4 text-gray-500">
            <div class="flex items-center">
              <i class="bx bx-map"></i>
              <span>{course.location}</span>
            </div>
            <div class="flex items-center">
              <span>{course.title}</span>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        course={course}
      />
    </>
  );
}
