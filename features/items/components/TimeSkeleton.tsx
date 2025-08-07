// features/components/timeSkeleton.tsx

export const TimeSkeleton = () => {
  return (
    <div className="w-[90%] mx-auto  flex justify-between gap-4 mt-24">
      {Array(3)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 w-full bg-white shadow rounded-2xl animate-pulse"
          >
            <div className="w-6 h-6 bg-gray-300 rounded-full mb-2" />
            <div className="w-24 h-4 bg-gray-300 rounded mb-2" />
            <div className="w-32 h-5 bg-gray-300 rounded mb-1" />
            {index === 1 && (
              <div className="w-40 h-3 bg-gray-200 rounded mt-1" />
            )}
            {index === 2 && (
              <>
                <div className="w-full h-3 bg-gray-300 rounded mt-2 mb-1" />
                <div className="w-1/2 h-3 bg-gray-200 rounded" />
              </>
            )}
          </div>
        ))}
    </div>
  );
};
