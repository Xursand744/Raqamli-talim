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
                left: `${priceRange.min / 50000}%`,
                right: `${100 - priceRange.max / 50000}%`,
              }}
            />
          </div>
          <input
            type="range"
            name="min"
            min="0"
            max="5000000"
            value={priceRange.min}
            onChange={handleRangeChange}
            className="absolute w-full h-1 -mt-1 bg-transparent appearance-none pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-blue-500 [&::-moz-range-thumb]:cursor-pointer [&::-ms-thumb]:pointer-events-auto [&::-ms-thumb]:w-4 [&::-ms-thumb]:h-4 [&::-ms-thumb]:appearance-none [&::-ms-thumb]:rounded-full [&::-ms-thumb]:bg-blue-500 [&::-ms-thumb]:cursor-pointer"
          />
          <input
            type="range"
            name="max"
            min="0"
            max="5000000"
            value={priceRange.max}
            onChange={handleRangeChange}
            className="absolute w-full h-1 -mt-1 bg-transparent appearance-none pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-blue-500 [&::-moz-range-thumb]:cursor-pointer [&::-ms-thumb]:pointer-events-auto [&::-ms-thumb]:w-4 [&::-ms-thumb]:h-4 [&::-ms-thumb]:appearance-none [&::-ms-thumb]:rounded-full [&::-ms-thumb]:bg-blue-500 [&::-ms-thumb]:cursor-pointer"
          />
        </div>
        <div className="flex gap-4 items-center">
          <input
            type="text"
            value={formatPrice(priceRange.min)}
            onChange={(e) => {
              const value = parseInt(e.target.value.replace(/[^0-9]/g, ""));
              if (!isNaN(value) && value >= 0 && value <= priceRange.max) {
                setPriceRange((prev) => ({ ...prev, min: value }));
              }
            }}
            className="w-full p-2 border rounded-lg text-sm text-center"
          />
          <input
            type="text"
            value={formatPrice(priceRange.max)}
            onChange={(e) => {
              const value = parseInt(e.target.value.replace(/[^0-9]/g, ""));
              if (
                !isNaN(value) &&
                value >= priceRange.min &&
                value <= 5000000
              ) {
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
