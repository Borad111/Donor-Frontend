import React from 'react'

function ItemSkeleton() {
   return (
    <div className="animate-pulse rounded-lg  mt-24 shadow-md border bg-white overflow-hidden w-[300px] h-[360px]">
      {/* Image placeholder with badge */}
      <div className="relative w-full h-[200px] bg-gray-200">
        {/* Badge placeholder */}
        <div className="absolute top-2 left-2 w-10 h-6 bg-purple-300 rounded"></div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        {/* Title */}
        <div className="h-5 bg-gray-200 rounded w-4/5"></div>

        {/* Starting bid label */}
        <div className="h-3 bg-gray-200 rounded w-20"></div>

        {/* Price */}
        <div className="h-5 bg-gray-200 rounded w-12"></div>
      </div>
    </div>
  );
};

export default ItemSkeleton
