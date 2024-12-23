import React from "react";

export default function CourseItem({ course }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="font-semibold text-lg mb-2">{course.title}</h3>
      <p className="text-gray-600 mb-2">{course.center}</p>
      <div className="flex justify-between items-center">
        <span className="text-blue-600 font-bold">
          {course.price.toLocaleString("uz-UZ")} so'm
        </span>
        <span className="text-sm text-gray-500">{course.duration}</span>
      </div>
    </div>
  );
}
