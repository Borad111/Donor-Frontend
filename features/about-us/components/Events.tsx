import React from "react";
import { getEventUrl } from "@/lib/getEventUrl";
import { usePathname } from "next/navigation";
import { useGetEventsQuery } from "../api/featureItemApi";

const Events = () => {
  const pathname = usePathname();
  const eventUrl = getEventUrl(pathname);

  const { data, isError, isLoading } = useGetEventsQuery(eventUrl);
  return (
    <>
      {data?.event?.length > 0 && (
        <div className="p-4 sm:p-8 sm:px-20 md:px-32 lg:px-56 xl:px-72 2xl:px-32 bg-[#c6e3de]">
          <h2 className="text-xl mt-10 sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
            Schedule Of Events  
            <span className="block sm:inline text-gray-500 text-sm sm:text-base md:text-lg font-normal ml-0 sm:ml-2">
              ({data?.event?.length} events)
            </span>
          </h2>

          <div className="space-y-4 mt-6">
            {data.event.map((item: any) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-stretch sm:items-center bg-gray-50 rounded-lg overflow-hidden"
              >
                <div className="bg-purple-900 text-white font-semibold w-full sm:w-28 md:w-32 lg:w-36 xl:w-38 2xl:w-38 text-center py-4 text-xs sm:text-sm md:text-base">
                  {formatTime(item.time)}
                </div>
                <div className="pl-0 sm:pl-6 py-3 text-gray-700 text-sm sm:text-base md:text-lg">
                  {item.description || item.event}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

function formatTime(timeString: string): string {
  const [hours, minutes] = timeString.split(":").map(Number);
  const date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes);
  return date.toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}
export default Events;
