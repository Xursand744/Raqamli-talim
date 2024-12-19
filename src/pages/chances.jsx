import ChanceImage from "../assets/chance-1.png";
import ChanceImage2 from "../assets/chance-2.png";
import Chance from "../components/chance";
import ChanceRobot from "../components/chanceRobot";

export default function Chances() {
  const data = [
    {
      title: "IT kompensatsiya\nol",
      desc: "IT ga Sarflagan\npullaringni qaytarib ol",
      image: ChanceImage,
      type: "wallet",
    },
    {
      title: "Maktabda IT ni\no’rgan",
      desc: "IT ga Sarflagan\npullaringni qaytarib ol",
      type: "robot",
      image: ChanceImage2,
    },
    {
      title: "IT kompensatsiya\nol",
      desc: "IT ga Sarflagan\npullaringni qaytarib ol",
      image: ChanceImage,
      type: "wallet",
    },
    {
      title: "Maktabda IT ni\no’rgan",
      desc: "IT ga Sarflagan\npullaringni qaytarib ol",
      type: "robot",
      image: ChanceImage2,
    },
    {
      title: "IT kompensatsiya\nol",
      desc: "IT ga Sarflagan\npullaringni qaytarib ol",
      image: ChanceImage,
      type: "wallet",
    },
    {
      title: "Maktabda IT ni\no’rgan",
      desc: "IT ga Sarflagan\npullaringni qaytarib ol",
      type: "robot",
      image: ChanceImage2,
    },
    {
      title: "IT kompensatsiya\nol",
      desc: "IT ga Sarflagan\npullaringni qaytarib ol",
      image: ChanceImage,
      type: "wallet",
    },
    {
      title: "Maktabda IT ni\no’rgan",
      desc: "IT ga Sarflagan\npullaringni qaytarib ol",
      image: ChanceImage2,
      type: "robot",
    },
    {
      title: "IT kompensatsiya\nol",
      desc: "IT ga Sarflagan\npullaringni qaytarib ol",
      type: "wallet",
      image: ChanceImage,
    },
  ];

  return (
    <div>
      <h1 className="title mb-[40px]">Maxsus imkoniyalar</h1>

      <div className="flex flex-wrap justify-between gap-[10px]">
        {data &&
          data.map((item) => {
            if (item.type === "wallet") {
              return (
                <Chance
                  title={item.title}
                  desc={item.desc}
                  image={item.image}
                  imgWidth={item.imgWidth}
                />
              );
            }

            return (
              <ChanceRobot
                title={item.title}
                desc={item.desc}
                image={item.image}
                imgWidth={item.imgWidth}
              />
            );
          })}
      </div>
    </div>
  );
}
