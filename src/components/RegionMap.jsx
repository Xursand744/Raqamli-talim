import React, { useState } from "react";
import { regionsPathArray } from "./mapArray";

export const RegionsMap = ({
  defaultFillColor = "#FFFFFF",
  selectedFillColor = "#043b87",
  hoverFillColor = "#7b7f94",
  selectedStyle = {},
  handleClick,
  ...props
}) => {
  const [curRegion, setCurRegion] = useState(
    regionsPathArray[regionsPathArray.length - 1]
  );
  const [hoverRegionId, setHoverRegionId] = useState(null);

  const handleClickRegion = (region) => {
    // Если нажимаем на уже выбранный регион - сбрасываем выбор
    if (curRegion?.id === region.id) {
      setCurRegion(null);
      if (handleClick) handleClick(null);
    } else {
      // Иначе выбираем новый регион
      setCurRegion(region);
      if (handleClick) handleClick(region.id);
    }
  };

  const renderRegion = (region) => {
    const { id, name, path } = region;
    const isCurrentRegion = curRegion && curRegion.id === id;
    const isHovered = hoverRegionId === id;
  
    const isSpecialRegion = name === "Samarqand viloyati" || name === "Sirdaryo viloyati";
  
    // ✅ Yashil faqat maxsus regionlarga va ular tanlangan yoki hover bo'lganda qo'llaniladi
    const fillColor =
      isSpecialRegion && (isCurrentRegion || isHovered)
        ? "#3cb371" // yashil
        : isCurrentRegion
        ? selectedFillColor
        : isHovered
        ? hoverFillColor
        : region.address ? '#3cb371' : defaultFillColor;
  
    const style = isCurrentRegion ? selectedStyle : {};
  
    return (
      <path
        key={id}
        d={path}
        name={name}
        onClick={() => handleClickRegion(region)}
        onMouseEnter={() => !isCurrentRegion && setHoverRegionId(id)}
        onMouseLeave={() => !isCurrentRegion && setHoverRegionId(null)}
        style={style}
        fill={fillColor}
        cursor="pointer"
      />
    );
  };
  
  
  

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={props.width || "100%"}
      height={props.height || "100%"}
      viewBox="0 0 1000 700"
      {...props}
    >
      {regionsPathArray.map(renderRegion)}
    </svg>
  );
};
