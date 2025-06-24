const SkeletonCard = () => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden animate-pulse transition-colors duration-200">
    <div className="h-48 bg-gray-200 dark:bg-gray-700" />
    <div className="p-5">
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-4" />
      <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-3" />
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-4" />
      <div className="flex gap-2">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16" />
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16" />
      </div>
    </div>
  </div>
);

export default SkeletonCard;
