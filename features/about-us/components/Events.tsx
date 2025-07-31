import React from 'react'

const Events = () => {
  return (
    <div className="p-4 sm:p-8 sm:px-20 md:px-32 lg:px-56 xl:px-72 2xl:px-32 bg-[#c6e3de]">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
      Schedule Of Events
      <span className="block sm:inline text-gray-500 text-sm sm:text-base md:text-lg font-normal ml-0 sm:ml-2">
        (03 April,2025)
      </span>
      </h2>
      <div className="space-y-4 mt-6">
      {[
        { time: "5:00 PM", desc: "Door opens for checkin, Silent auction" },
        { time: "6:30 PM", desc: "Dinner service and program begins" },
        { time: "7:30 PM", desc: "Live auction" },
        { time: "8:30 PM", desc: "Fund -a- need appeal" },
        { time: "9:00 PM", desc: "Program concludes, Dancing begins" },
      ].map((event) => (
        <div
        key={event.time}
        className="flex flex-col sm:flex-row items-stretch sm:items-center bg-gray-50 rounded-lg overflow-hidden"
        >
        <div className="bg-purple-900 text-white font-semibold w-full sm:w-28 md:w-32 lg:w-36 xl:w-38 2xl:w-38 text-center py-4 text-xs sm:text-sm md:text-base">
          {event.time}
        </div>
        <div className="pl-0 sm:pl-6 py-3 text-gray-700 text-sm sm:text-base md:text-lg">
          {event.desc}
        </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Events
