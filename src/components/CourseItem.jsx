import React from "react";
import pdp from "../assets/pdp.svg";

export default function CourseItem({ course }) {
  return (
    <div class="max-w-sm mx-auto w-[282px] h-[372px] bg-white shadow-lg rounded-lg overflow-hidden">
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

    // <div className="bg-white rounded-lg shadow-md p-4">
    //   <img
    //     src={course.image}
    //     alt={course.title}
    //     className="w-full h-40 object-cover rounded-md mb-4"
    //   />
    //   <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
    //   <p className="text-gray-600 mb-2">{course.center}</p>
    //   <div className="flex justify-between items-center">
    //     <span className="text-blue-600 font-bold">
    //       {course.price.toLocaleString("uz-UZ")} so'm
    //     </span>
    //     <span className="text-sm text-gray-500">{course.duration}</span>
    //   </div>
    // </div>
  );
}
