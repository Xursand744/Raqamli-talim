import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

export default function PriceRange({ priceRange, setPriceRange }) {
  const { t, i18n } = useTranslation("global");

  const formatPrice = (price) => {
    return new Intl.NumberFormat(i18n.language === "uz" ? "uz-UZ" : i18n.language, {
      style: "currency",
      currency: "UZS",
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleRangeChange = (e) => {
    const { name, value } = e.target;
    const newRange = {
      ...priceRange,
      [name]: parseInt(value)
    };
    setPriceRange(newRange);
  };

  return (
    <div className="mb-6">
      <h3 className="font-medium mb-2">{t("filters.price.title")}</h3>
      <div className="space-y-2">
        <div className="relative pt-1">
          <div className="h-1 bg-gray-200 rounded-lg">
            <div
              className="absolute h-1 bg-blue-500 rounded-lg"
              style={{
                left: `${(priceRange.min / 5000000) * 100}%`,
                right: `${100 - (priceRange.max / 5000000) * 100}%`,
              }}
            />
          </div>
          <input
            type="range"
            name="min"
            min="0"
            max="5000000"
            value={priceRange.min}
            onChange={handleRangeChange}
            className="absolute w-full h-1 -mt-1 bg-transparent appearance-none pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-blue-500 [&::-moz-range-thumb]:cursor-pointer [&::-ms-thumb]:pointer-events-auto [&::-ms-thumb]:w-4 [&::-ms-thumb]:h-4 [&::-ms-thumb]:appearance-none [&::-ms-thumb]:rounded-full [&::-ms-thumb]:bg-blue-500 [&::-ms-thumb]:cursor-pointer"
            aria-label={t("filters.price.minLabel")}
          />
          <input
            type="range"
            name="max"
            min="0"
            max="5000000"
            value={priceRange.max}
            onChange={handleRangeChange}
            className="absolute w-full h-1 -mt-1 bg-transparent appearance-none pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-500 [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-blue-500 [&::-moz-range-thumb]:cursor-pointer [&::-ms-thumb]:pointer-events-auto [&::-ms-thumb]:w-4 [&::-ms-thumb]:h-4 [&::-ms-thumb]:appearance-none [&::-ms-thumb]:rounded-full [&::-ms-thumb]:bg-blue-500 [&::-ms-thumb]:cursor-pointer"
            aria-label={t("filters.price.maxLabel")}
          />
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>{formatPrice(priceRange.min)}</span>
          <span>{formatPrice(priceRange.max)}</span>
        </div>
      </div>
    </div>
  );
}

PriceRange.propTypes = {
  priceRange: PropTypes.shape({
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired
  }).isRequired,
  setPriceRange: PropTypes.func.isRequired
};
