import React, { useState } from "react";

// const PriceRange = () => {
//   const [minValue, setMinValue] = useState(2500000); // Minimum value
//   const [maxValue, setMaxValue] = useState(5000000); // Maximum value

//   const minPrice = 0; // Minimum possible price
//   const maxPrice = 10000000; // Maximum possible price

//   const handleMinChange = (e) => {
//     const value = Math.min(Number(e.target.value), maxValue - 1); // Ensure minValue is less than maxValue
//     setMinValue(value);
//   };

//   const handleMaxChange = (e) => {
//     const value = Math.max(Number(e.target.value), minValue + 1); // Ensure maxValue is greater than minValue
//     setMaxValue(value);
//   };

//   return (
//     <div className="w-full max-w-md mx-auto">
//       {/* Label */}
//       <label className="block text-lg font-medium mb-4">
//         Kurslar narx oraliği
//       </label>

//       {/* Slider Container */}
//       <div className="relative w-full">
//         {/* Slider Track */}
//         <div className="absolute top-1/2 w-full h-2 bg-gray-300 rounded-full transform -translate-y-1/2"></div>

//         {/* Highlighted Range */}
//         <div
//           className="absolute top-1/2 h-2 bg-blue-500 rounded-full transform -translate-y-1/2"
//           style={{
//             left: `${(minValue / maxPrice) * 100}%`,
//             right: `${100 - (maxValue / maxPrice) * 100}%`,
//           }}
//         ></div>

//         {/* Min Range Slider */}
//         <input
//           type="range"
//           min={minPrice}
//           max={maxPrice}
//           value={minValue}
//           onChange={handleMinChange}
//           className="absolute w-full h-2 appearance-none bg-transparent pointer-events-auto z-10 focus:outline-none"
//           style={{
//             zIndex: minValue < maxValue - 1 ? 3 : 2,
//           }}
//         />

//         {/* Max Range Slider */}
//         <input
//           type="range"
//           min={minPrice}
//           max={maxPrice}
//           value={maxValue}
//           onChange={handleMaxChange}
//           className="absolute w-full h-2 appearance-none bg-transparent pointer-events-auto z-10 focus:outline-none"
//         />
//       </div>

//       {/* Value Inputs */}
//       <div className="flex justify-between items-center mt-6">
//         <div className="w-1/2">
//           <input
//             type="number"
//             value={minValue}
//             onChange={handleMinChange}
//             className="w-full text-center border border-gray-300 rounded-md px-2 py-1 focus:outline-none"
//           />
//         </div>
//         <div className="w-1/2">
//           <input
//             type="number"
//             value={maxValue}
//             onChange={handleMaxChange}
//             className="w-full text-center border border-gray-300 rounded-md px-2 py-1 focus:outline-none"
// import { useState } from "react";
// import { Search } from "lucide-react";

// export default function PriceRange() {
//   const [priceRange, setPriceRange] = useState({
//     min: 0,
//     max: 5000000,
//   });

//   const formatPrice = (price) => {
//     return new Intl.NumberFormat("uz-UZ").format(price);
//   };

//   const handleRangeChange = (e) => {
//     const { name, value } = e.target;
//     setPriceRange((prev) => ({
//       ...prev,
//       [name]: parseInt(value),
//     }));
//   };

//   return (
//     <div className="w-full max-w-sm bg-white p-4 rounded-lg shadow">
//       <div className="space-y-6">
//         {/* Price Range */}
//         <div>
//           <h3 className="font-medium mb-2">Kurslar narx oralig\'i</h3>
//           <div className="space-y-2">
//             <div className="relative pt-1">
//               <div className="h-1 bg-gray-200 rounded-lg">
//                 <div
//                   className="absolute h-1 bg-blue-500 rounded-lg"
//                   style={{
//                     left: `${priceRange.min / 50000}%`,
//                     right: `${100 - priceRange.max / 50000}%`,
//                   }}
//                 />
//               </div>
//               <input
//                 type="range"
//                 name="min"
//                 min="0"
//                 max="5000000"
//                 value={priceRange.min}
//                 onChange={handleRangeChange}
//                 className="absolute w-full h-1 -mt-1 bg-transparent appearance-none pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-blue-500 [&::-moz-range-thumb]:cursor-pointer [&::-ms-thumb]:pointer-events-auto [&::-ms-thumb]:w-4 [&::-ms-thumb]:h-4 [&::-ms-thumb]:appearance-none [&::-ms-thumb]:rounded-full [&::-ms-thumb]:bg-blue-500 [&::-ms-thumb]:cursor-pointer"
//               />
//               <input
//                 type="range"
//                 name="max"
//                 min="0"
//                 max="5000000"
//                 value={priceRange.max}
//                 onChange={handleRangeChange}
//                 className="absolute w-full h-1 -mt-1 bg-transparent appearance-none pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-blue-500 [&::-moz-range-thumb]:cursor-pointer [&::-ms-thumb]:pointer-events-auto [&::-ms-thumb]:w-4 [&::-ms-thumb]:h-4 [&::-ms-thumb]:appearance-none [&::-ms-thumb]:rounded-full [&::-ms-thumb]:bg-blue-500 [&::-ms-thumb]:cursor-pointer"
//               />
//             </div>
//             <div className="flex gap-4 items-center">
//               <input
//                 type="text"
//                 value={formatPrice(priceRange.min)}
//                 onChange={(e) => {
//                   const value = parseInt(e.target.value.replace(/[^0-9]/g, ""));
//                   if (!isNaN(value) && value >= 0 && value <= priceRange.max) {
//                     setPriceRange((prev) => ({ ...prev, min: value }));
//                   }
//                 }}
//                 className="w-full p-2 border rounded-lg text-sm text-center"
//               />
//               <input
//                 type="text"
//                 value={formatPrice(priceRange.max)}
//                 onChange={(e) => {
//                   const value = parseInt(e.target.value.replace(/[^0-9]/g, ""));
//                   if (
//                     !isNaN(value) &&
//                     value >= priceRange.min &&
//                     value <= 5000000
//                   ) {
//                     setPriceRange((prev) => ({ ...prev, max: value }));
//                   }
//                 }}
//                 className="w-full p-2 border rounded-lg text-sm text-center"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { Search } from "lucide-react";

export default function PriceRange({ priceRange, setPriceRange }) {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("uz-UZ").format(price);
  };

  const handleRangeChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prev) => ({
      ...prev,
      [name]: parseInt(value),
    }));
  };

  return (
    <div>
      <h3 className="font-medium mb-2">Kurslar narx oralig'i</h3>
      <div className="space-y-2">
        <div className="relative pt-1">
          <div className="h-1 bg-gray-200 rounded-lg">
            <div
              className="absolute h-1 bg-blue-500 rounded-lg"
              style={{
                left: `${priceRange / 50000}%`,
                right: `${100 - priceRange / 50000}%`,
              }}
            />
          </div>
          <input
            type="range"
            name="min"
            min="0"
            max="5000000"
            value={priceRange}
            onChange={handleRangeChange}
            className="absolute w-full h-1 -mt-1 bg-transparent appearance-none pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-blue-500 [&::-moz-range-thumb]:cursor-pointer [&::-ms-thumb]:pointer-events-auto [&::-ms-thumb]:w-4 [&::-ms-thumb]:h-4 [&::-ms-thumb]:appearance-none [&::-ms-thumb]:rounded-full [&::-ms-thumb]:bg-blue-500 [&::-ms-thumb]:cursor-pointer"
          />
          <input
            type="range"
            name="max"
            min="0"
            max="5000000"
            value={priceRange}
            onChange={handleRangeChange}
            className="absolute w-full h-1 -mt-1 bg-transparent appearance-none pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-blue-500 [&::-moz-range-thumb]:cursor-pointer [&::-ms-thumb]:pointer-events-auto [&::-ms-thumb]:w-4 [&::-ms-thumb]:h-4 [&::-ms-thumb]:appearance-none [&::-ms-thumb]:rounded-full [&::-ms-thumb]:bg-blue-500 [&::-ms-thumb]:cursor-pointer"
          />
        </div>
        <div className="flex gap-4 items-center">
          <input
            type="text"
            value={formatPrice(priceRange)}
            onChange={(e) => {
              const value = parseInt(e.target.value.replace(/[^0-9]/g, ""));
              if (!isNaN(value) && value >= 0 && value <= priceRange) {
                setPriceRange((prev) => ({ ...prev, min: value }));
              }
            }}
            className="w-full p-2 border rounded-lg text-sm text-center"
          />
          <input
            type="text"
            value={formatPrice(priceRange)}
            onChange={(e) => {
              const value = parseInt(e.target.value.replace(/[^0-9]/g, ""));
              if (!isNaN(value) && value >= priceRange && value <= 5000000) {
                setPriceRange((prev) => ({ ...prev, max: value }));
              }
            }}
            className="w-full p-2 border rounded-lg text-sm text-center"
          />
        </div>
      </div>
    </div>
  );
}

// export default function PriceRange({
//   priceRange = { min: 0, max: 5000000 },
//   setPriceRange,
// }) {
//   const formatPrice = (price) => {
//     return new Intl.NumberFormat("uz-UZ").format(price);
//   };

//   const handleRangeChange = (e) => {
//     const { name, value } = e.target;
//     setPriceRange((prev) => ({
//       ...prev,
//       [name]: parseInt(value),
//     }));
//   };

//   return (
//     <div>
//       <h3 className="font-medium mb-2">Kurslar narx oralig'i</h3>
//       <div className="space-y-2">
//         <div className="relative pt-1">
//           <div className="h-1 bg-gray-200 rounded-lg">
//             <div
//               className="absolute h-1 bg-blue-500 rounded-lg"
//               style={{
//                 left: `${(priceRange.min || 0) / 50000}%`,
//                 right: `${100 - (priceRange.max || 5000000) / 50000}%`,
//               }}
//             />
//           </div>
//           <input
//             type="range"
//             name="min"
//             min="0"
//             max="5000000"
//             value={priceRange.min || 0}
//             onChange={handleRangeChange}
//             className="absolute w-full h-1 -mt-1 bg-transparent appearance-none pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-blue-500 [&::-moz-range-thumb]:cursor-pointer [&::-ms-thumb]:pointer-events-auto [&::-ms-thumb]:w-4 [&::-ms-thumb]:h-4 [&::-ms-thumb]:appearance-none [&::-ms-thumb]:rounded-full [&::-ms-thumb]:bg-blue-500 [&::-ms-thumb]:cursor-pointer"
//           />
//           <input
//             type="range"
//             name="max"
//             min="0"
//             max="5000000"
//             value={priceRange.max || 5000000}
//             onChange={handleRangeChange}
//             className="absolute w-full h-1 -mt-1 bg-transparent appearance-none pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-blue-500 [&::-moz-range-thumb]:cursor-pointer [&::-ms-thumb]:pointer-events-auto [&::-ms-thumb]:w-4 [&::-ms-thumb]:h-4 [&::-ms-thumb]:appearance-none [&::-ms-thumb]:rounded-full [&::-ms-thumb]:bg-blue-500 [&::-ms-thumb]:cursor-pointer"
//           />
//         </div>
//         <div className="flex gap-4 items-center">
//           <input
//             type="text"
//             value={formatPrice(priceRange.min || 0)}
//             onChange={(e) => {
//               const value = parseInt(e.target.value.replace(/[^0-9]/g, ""));
//               if (!isNaN(value) && value >= 0 && value <= priceRange.max) {
//                 setPriceRange((prev) => ({ ...prev, min: value }));
//               }
//             }}
//             className="w-full p-2 border rounded-lg text-sm text-center"
//           />
//           <input
//             type="text"
//             value={formatPrice(priceRange.max || 5000000)}
//             onChange={(e) => {
//               const value = parseInt(e.target.value.replace(/[^0-9]/g, ""));
//               if (
//                 !isNaN(value) &&
//                 value >= priceRange.min &&
//                 value <= 5000000
//               ) {
//                 setPriceRange((prev) => ({ ...prev, max: value }));
//               }
//             }}
//             className="w-full p-2 border rounded-lg text-sm text-center"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
