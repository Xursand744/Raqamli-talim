import { useState } from "react";
import pdp from "../assets/pdp.svg";
import Modal from "./Modal";

export default function CourseItem({ course }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="max-w-sm mx-auto w-full h-[400px] bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        <div className="relative bg-gradient-to-tr from-blue-500 to-teal-400 h-[180px] flex items-center justify-center">
          <img 
            className="w-[280px] h-[170px] object-contain transition-transform duration-300 hover:scale-105" 
            src={course.image} 
            alt={course.name} 
          />
          <div className="absolute bottom-4 left-4">
            <h2 className="text-sm font-bold px-4 py-1 bg-white/90 rounded-full text-blue-600 shadow-sm">
              {course.duration}
            </h2>
          </div>
        </div>
        <div className="p-4">
          <div className="flex items-center mb-3">
            <img src={pdp} alt={course.center} className="w-8 h-8 rounded-full" />
            <h3 className="text-md font-semibold ml-3 text-gray-700">{course.center}</h3>
          </div>
          <p className="text-lg font-bold text-gray-800 line-clamp-2 mb-3">{course.name}</p>
          <div className="mb-4">
            <span className="text-xl font-bold text-blue-600">
              {course.price.toLocaleString("uz-UZ")} UZS
            </span>
            <span className="text-sm font-medium text-gray-500 ml-1">/oyiga</span>
          </div>
          <div className="flex items-center space-x-4 text-gray-600 text-sm">
            <div className="flex items-center">
              <i className="bx bx-map text-blue-500 mr-1"></i>
              <span>{course.location}</span>
            </div>
            <div className="flex items-center">
              <i className="bx bx-book text-blue-500 mr-1"></i>
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
