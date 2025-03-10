import { MapOfUzbekistan } from "../../assets";

function UzbekistanMap() {
  const regions = [
    { name: "Qoraqalpog'iston Respublikasi", count: 73 },
    { name: "Andijon", count: 23 },
    { name: "Buxoro", count: 20 },
    { name: "Jizzax", count: 22 },
    { name: "Qashqadaryo", count: 104 },
    { name: "Navoiy", count: 27 },
    { name: "Namangan", count: 21 },
    { name: "Samarqand", count: 34 },
    { name: "Sirdaryo", count: 55 },
    { name: "Surxandaryo", count: 12 },
    { name: "Toshkent viloyati", count: 30 },
    { name: "Farg'ona", count: 30 },
    { name: "Xorazm", count: 43 },
    { name: "Toshkent shahri", count: 104 },
  ];

  const total = regions.reduce((sum, region) => sum + region.count, 0);

  return (
    <div className="bg-[#222222] p-4">
      <h1 className="text-center text-2xl font-bold text-white py-4 ">
        Hudud bo'yicha o'quv markazlar
      </h1>
      <div className="flex justify-center items-center max-w-[1440px] w-full mb-[40px]">
        <div className="flex flex-col md:flex-row gap-8 justify-between">
          <div className="flex-1 flex justify-center">
            <img
              src={MapOfUzbekistan}
              alt="Map of Uzbekistan"
              className="max-w-full h-auto"
            />
          </div>

          <div className="bg-gray-800 rounded-lg p-6 text-white w-full md:w-80">
            {regions.map((region, index) => (
              <div key={index} className="flex justify-between mb-2">
                <span>{region.name} -</span>
                <span className="text-blue-400">{region.count}</span>
              </div>
            ))}
            <div className="flex justify-between mt-4 pt-4 border-t border-gray-700 font-bold">
              <span>JAMI</span>
              <span>{total}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UzbekistanMap;
