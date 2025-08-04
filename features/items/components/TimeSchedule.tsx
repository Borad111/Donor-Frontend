import ItemsSkeleton from "@/components/ui/ItemsSkeleton";
import { formatDateTime, getTimeLeft } from "@/lib/utils";
import { EventSetting } from "@/types/settingTypes";
import React from "react";

type Props = {
  isError: boolean;
  isLoading: boolean;
  data?: EventSetting;
};
function TimeSchedule({ isError, data, isLoading }: Props) {
  if (isLoading) {
    return <ItemsSkeleton />;
  }
  return (
    <div className="w-full">
      <div className="flex flex-wrap mt-8 justify-start items-center gap-6 py-4">
        {/* Opening Time Card */}
        <div className="flex-1 min-w-[300px] bg-white rounded-xl shadow-md border p-6">
          <div className="flex flex-col items-center">
            <svg
              className="w-6 h-6 text-[#1dcaff] mb-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="#1dcaff"
                strokeWidth="2"
                fill="#e6fafd"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 2"
                stroke="#1dcaff"
                strokeWidth="2"
              />
            </svg>
            <span className="text-[#1dcaff] font-bold text-lg">
              Opening Time
            </span>
            <span className="font-bold text-black text-base mt-2"></span>
            <span className="font-bold text-black text-base mt-2"></span>

            <span className="font-bold text-black text-base mt-2">
              {" "}
              {formatDateTime(data?.startDate as string) || ""}
            </span>
            <span className="font-bold text-black text-base mt-2"></span>
          </div>
        </div>

        {/* Closing Time Card */}
        <div className="flex-1 min-w-[300px] bg-white rounded-xl shadow-md border p-6">
          <div className="flex flex-col items-center">
            <svg
              className="w-6 h-6 text-[#f28b5b] mb-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="#f28b5b"
                strokeWidth="2"
                fill="#fff6f1"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 2"
                stroke="#f28b5b"
                strokeWidth="2"
              />
            </svg>
            <span className="text-[#f28b5b] font-bold text-lg">
              Closing Time
            </span>
            <span className="font-bold text-black text-base mt-2">
              {formatDateTime(data?.endDate as string) }
            </span>
            <span className="text-sm text-gray-600 mt-1">
              {getTimeLeft(data?.endDate as string)}
            </span>
          </div>
        </div>

        {/* Goal Progress Card */}
        <div className="flex-1 min-w-[300px] bg-white rounded-xl shadow-md border p-6">
          <div className="w-full flex flex-col items-center">
            <div className="flex items-center justify-between w-full mb-2">
              <span className="font-bold text-[#f28b5b] text-base ml-auto">
                Goal:
              </span>
            </div>

            {/* Progress Bar */}
            <div className="flex items-center w-full mb-2 mt-1 space-x-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-3 w-1/6 rounded-full bg-[#1dcaff]" />
              ))}
              <div className="h-3 w-1/6 rounded-full bg-gray-200" />
            </div>

            <div className="flex items-center w-full justify-between mt-2">
              <span className="text-[#1dcaff] font-extrabold text-lg">
                Raised!
              </span>
              <span className="text-black font-bold text-lg">%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TimeSchedule;
