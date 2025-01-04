import React from 'react';

export default function MobileSidebar({ filters, selectedSpecialty, handleSpecialtyClick, setSelectedSpecialty }) {
  return (
    <div className="md:hidden">
      <button className="w-full py-2 mb-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
        Filtrlar
      </button>
      <div className="space-y-4">
        {filters.map((section) => (
          <div key={section.name} className="space-y-2">
            <h2 className="font-medium">{section.name}</h2>
            <div className="flex flex-wrap gap-2">
              {section.items.map((item) => (
                <button
                  key={item.name}
                  className={`px-3 py-1 text-sm rounded-full ${
                    selectedSpecialty === item.key
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}
                  onClick={() => handleSpecialtyClick(item.key)}
                >
                  {item.name} ({item.count})
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button 
        className="w-full py-2 mt-4 text-blue-500 bg-white border border-blue-500 rounded-lg hover:bg-blue-50"
        onClick={() => setSelectedSpecialty('')}
      >
        Tozalash
      </button>
    </div>
  );
}

