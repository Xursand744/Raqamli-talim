import React from 'react';

const PriceRange = ({ priceRange, setPriceRange }) => {
  const handleMinChange = (e) => {
    const value = parseInt(e.target.value);
    setPriceRange((prev) => ({ ...prev, min: value }));
  };

  const handleMaxChange = (e) => {
    const value = parseInt(e.target.value);
    setPriceRange((prev) => ({ ...prev, max: value }));
  };

  return (
    <div>
      <h3 className="font-medium mb-2">Narx oralig'i</h3>
      <div className="flex items-center gap-2">
        <input
          type="number"
          value={priceRange.min}
          onChange={handleMinChange}
          className="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
          placeholder="Min"
        />
        <span>-</span>
        <input
          type="number"
          value={priceRange.max}
          onChange={handleMaxChange}
          className="w-full p-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-blue-500"
          placeholder="Max"
        />
      </div>
    </div>
  );
};

export default PriceRange;

