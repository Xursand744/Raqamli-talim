function SuccessHistoryItem({ studyCenter, fullname, desc, tags, image }) {
  return (
    <div className="max-w-[384px] rounded-lg overflow-hidden shadow-lg">
      <div className="h-[200px]">
        <img
          src={image}
          className="w-full h-full object-cover"
          alt=""
        />
      </div>

      <div className="border-t border-gray-200 p-4 bg-white">
        {/* <p className="text-[14px]">{studyCenter}</p> */}
        <h2 className="text-[#222] text-[20px] font-medium mt-2 mb-3">
          {fullname}
        </h2>
        <p className="mb-4 text-gray-700">{desc}</p>
        <div className="flex gap-3">
          {/* {tags.map((tag) => {
            return (
              <span
                key={tag}
                className="bg-[#F0F3FF] rounded-full py-1 px-4 text-sm"
              >
                <span className="text-[#2675EB]">#</span> {tag}
              </span>
            );
          })} */}
        </div>
      </div>
    </div>
  );
}

export default SuccessHistoryItem;
