import walletImage from "../assets/chance-1.png";
import robotImage from "../assets/chance-2.png";
import CompensationBannerItem from "../components/CompensationItem";
import React, { useState, useRef } from "react";
import "../assets/css/swiper.css";

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

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const containerRef = useRef(null);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.clientX);
    containerRef.current.style.transition = "none";
  };

  const handleMouseMove = (event) => {
    if (!isDragging) return;

    const currentX = event.clientX;
    const distance = currentX - startX;
    const newTranslate = prevTranslate + distance;

    setCurrentTranslate(newTranslate);
    containerRef.current.style.transform = `translateX(${newTranslate}px)`;
  };

  const handleMouseUp = () => {
    setIsDragging(false);

    const items = containerRef.current.children;
    const containerWidth = containerRef.current.offsetWidth;
    const itemWidth = items[0].offsetWidth;
    const maxTranslate = -(items.length - 1) * itemWidth;

    let snapTranslate = Math.round(currentTranslate / itemWidth) * itemWidth;
    snapTranslate = Math.min(0, Math.max(maxTranslate, snapTranslate));

    setPrevTranslate(snapTranslate);
    setCurrentTranslate(snapTranslate);

    containerRef.current.style.transition = "transform 0.3s ease";
    containerRef.current.style.transform = `translateX(${snapTranslate}px)`;
  };

  return (
    <div
      className="swiper-container"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className="swiper-wrapper flex gap-[50px]" ref={containerRef}>
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
    </div>
  );
}

export default Compensation;
