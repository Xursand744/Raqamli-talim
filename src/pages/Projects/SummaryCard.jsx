import PropTypes from "prop-types";

function SummaryCard({ totalBalls }) {
  return (
    <div className="bg-blue-500 dark:bg-blue-600 text-white rounded-lg shadow-md dark:shadow-gray-900/50 p-6 flex flex-col h-full transition-colors duration-200">
      <div className="flex items-center mb-2">
        <div className="w-8 h-8 rounded-full bg-white text-blue-500 flex items-center justify-center font-bold text-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <h3 className="mt-[5px]">
        Ushbu ko&apos;rsatkichlarning barchasini qo&apos;shib, umumiy ballni olamiz:{" "}
        {totalBalls}
      </h3>
    </div>
  );
}

SummaryCard.propTypes = {
  totalBalls: PropTypes.string.isRequired,
};

export default SummaryCard;
