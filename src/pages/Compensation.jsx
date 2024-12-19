import walletImage from "../assets/chance-1.png";
import robotImage from "../assets/chance-2.png";
import CompensationBannerItem from "../components/CompensationItem";

function Compensation() {
  const data = [
    {
      span: "Kompensatsiya",
      title: "olmoqchimisiz?",
      desc: "IT sertifikat pullaringizni 100% gacha qaytaring",
      image: walletImage,
    },
    {
      span: "O’quv markaz",
      title: "ochmoqchimisiz?",
      desc: "O’z qobilyatlaringni ta’lim kelajak uchun sarfla",
      image: robotImage,
    },
  ];

  return (
    <div className="overflow-x-scroll flex gap-[60px]">
      {data &&
        data.map((item) => {
          return (
            <CompensationBannerItem
              key={item.title}
              title={item.title}
              span={item.span}
              desc={item.desc}
              image={item.image}
            />
          );
        })}
    </div>
  );
}

export default Compensation;
