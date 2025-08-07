const ItemsDetailSkeleton = () => {
  return (
   <div className="w-[80%] h-[50%] mx-auto flex mb-24 flex-col mt-24 md:flex-row gap-6 p-6 border rounded-lg shadow animate-pulse bg-white">
  {/* Left Side: Image & Description */}
  <div className="flex-1 space-y-4">
    {/* Image */}
    <div className="w-full h-96 bg-gray-300 rounded"></div>

    {/* Description */}
    <div className="space-y-2">
      <div className="h-4 w-1/3 bg-gray-300 rounded"></div>
      <div className="h-3 w-full bg-gray-200  rounded"></div>
      <div className="h-3 w-4/6 bg-gray-200 mt-8 rounded"></div>
    </div>
  </div>

  {/* Right Side: Bidding Details */}
  <div className="w-full md:w-1/3 space-y-4">
    {/* Badge & Title */}
    <div className="h-4 w-1/4 bg-gray-300 rounded"></div>
    <div className="h-5 w-2/3 bg-gray-300 rounded"></div>

    {/* Bid Box */}
    <div className="flex items-center gap-3">
      <div className="h-10 w-16 bg-gray-200 rounded"></div>
      <div className="h-10 w-24 bg-gray-300 rounded"></div>
    </div>

    {/* Set Max Bid Button */}
    <div className="h-10 w-full border-2 border-orange-300 rounded"></div>

    {/* Buy Now Button */}
    <div className="h-12 w-full bg-pink-300 rounded"></div>

    {/* Bid History */}
    <div className="space-y-2">
      <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
      <div className="flex justify-between items-center bg-gray-100 p-3 rounded shadow">
        <div className="space-y-1">
          <div className="h-3 w-24 bg-gray-200 rounded"></div>
          <div className="h-2 w-32 bg-gray-200 rounded"></div>
        </div>
        <div className="h-4 w-12 bg-gray-300 rounded"></div>
      </div>
    </div>
  </div>
</div>

  );
};

export default ItemsDetailSkeleton;
