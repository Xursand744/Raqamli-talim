export default function Chance({ title, desc, image }) {
  return (
    <div className="w-[354px] min-h-[180px] overflow-hidden flex justify-between rounded-[12px] relative border-[1px] border-[#C0C0C0] p-[20px]">
      <div className="w-[60%] flex flex-col justify-between">
        <h2 className="text-[20px] font-bold leading-[32px]">{title}</h2>

        <p>{desc}</p>
      </div>
      <div
        className={`w-[150px] overflow-hidden absolute bottom-[-40px] right-[4px]`}
      >
        <img src={image} className="" alt="image" />
      </div>
    </div>
  );
}
