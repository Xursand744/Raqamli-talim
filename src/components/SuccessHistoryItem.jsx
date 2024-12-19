function SuccessHistoryItem({ studyCenter, fullname, desc, tags, image }) {
  return (
    <div>
      <div className="max-w-[384px] min-h-[232px]">
        <img
          src={image}
          className="w-full h-full"
          style={{ borderTopRightRadius: "10px", borderTopLeftRadius: "10px" }}
          alt=""
        />
      </div>

      <div
        style={{
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
          border: "1px solid #E0E0E0",
          maxWidth: "384px",
          padding: "16px",
        }}
      >
        <p className="text-[14px]">{studyCenter}</p>
        <h2 className="text-[#222] text-[20px] font-medium mt-[8px] mb-[12px]">
          {fullname}
        </h2>
        <p className="mb-[24px]">{desc}</p>
        <div className="flex gap-[12px]">
          {tags.map((tag) => {
            return (
              <span
                key={tag}
                className="bg-[#F0F3FF] rounded-[22px] py-[4px] px-[16px]"
              >
                <span className="text-[#2675EB]">#</span> {tag}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SuccessHistoryItem;
