function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
        🔍
      </div>
      <h3 className="text-lg font-semibold">
        No products found
      </h3>
      <p className="text-gray-500 text-sm mt-1">
        Try adjusting your filters
      </p>
      <button className="mt-4 bg-[#FF9F1C] hover:bg-yellow-500 px-5 py-2 rounded-md font-medium">
        Clear Filters
      </button>
    </div>
  );
}

export default EmptyState