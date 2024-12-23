import React, { useState } from "react";

const PriceRange = () => {
  const [minValue, setMinValue] = useState(2500000); // Minimum value
  const [maxValue, setMaxValue] = useState(5000000); // Maximum value

  const minPrice = 0; // Minimum possible price
  const maxPrice = 10000000; // Maximum possible price

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 1); // Ensure minValue is less than maxValue
    setMinValue(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 1); // Ensure maxValue is greater than minValue
    setMaxValue(value);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Label */}
      <label className="block text-lg font-medium mb-4">
        Kurslar narx oraliği
      </label>

      {/* Slider Container */}
      <div className="relative w-full">
        {/* Slider Track */}
        <div className="absolute top-1/2 w-full h-2 bg-gray-300 rounded-full transform -translate-y-1/2"></div>

        {/* Highlighted Range */}
        <div
          className="absolute top-1/2 h-2 bg-blue-500 rounded-full transform -translate-y-1/2"
          style={{
            left: `${(minValue / maxPrice) * 100}%`,
            right: `${100 - (maxValue / maxPrice) * 100}%`,
          }}
        ></div>

        {/* Min Range Slider */}
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={minValue}
          onChange={handleMinChange}
          className="absolute w-full h-2 appearance-none bg-transparent pointer-events-auto z-10 focus:outline-none"
          style={{
            zIndex: minValue < maxValue - 1 ? 3 : 2,
          }}
        />

        {/* Max Range Slider */}
        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={maxValue}
          onChange={handleMaxChange}
          className="absolute w-full h-2 appearance-none bg-transparent pointer-events-auto z-10 focus:outline-none"
        />
      </div>

      {/* Value Inputs */}
      <div className="flex justify-between items-center mt-6">
        <div className="w-1/2">
          <input
            type="number"
            value={minValue}
            onChange={handleMinChange}
            className="w-full text-center border border-gray-300 rounded-md px-2 py-1 focus:outline-none"
          />
        </div>
        <div className="w-1/2">
          <input
            type="number"
            value={maxValue}
            onChange={handleMaxChange}
            className="w-full text-center border border-gray-300 rounded-md px-2 py-1 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default PriceRange;
