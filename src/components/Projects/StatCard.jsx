function StatCard({ number, title, count, description, total }) {
  return (
    <div className="bg-white rounded-lg border-[1px] border-[#E0E0E0] p-6 flex flex-col h-full">
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg">
          {number}
        </div>
      </div>
      <p className="text-gray-700 mt-[10px]">
        <span className="text-[#2F2F2F] font-semibold">{title}</span>
        {count} {description} {total}
      </p>
    </div>
  );
}

export default StatCard;
