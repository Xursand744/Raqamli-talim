import React from 'react';

const CourseItem = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={course.image} alt={course.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{course.name}</h3>
        <p className="text-gray-600 mb-2">{course.center}</p>
        <p className="text-gray-800 font-bold">{course.price.toLocaleString()} so'm</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-sm text-gray-500">{course.duration}</span>
          <span className="text-sm text-gray-500">{course.format}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;

