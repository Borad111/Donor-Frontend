// features/about-us/components/FeaturedItemsSkeleton.tsx
import React from "react";

const ItemsSkeleton = () => {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-xl shadow-md p-4 animate-pulse space-y-4"
        >
          <div className="h-40 bg-gray-300 rounded-lg"></div>
          <div className="h-4 bg-gray-300 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  );
};

export default ItemsSkeleton;
