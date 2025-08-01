"use client";
import { getEventUrl } from "@/lib/getEventUrl";
import { usePathname } from "next/navigation";
import React from "react";
import { useGetFeaturedItemsQuery } from "../api/featureItemApi";
import ItemsSkeleton from "@/components/ui/ItemsSkeleton";
import ErrorFallback from "@/components/ui/ErrorFallback";
import { FeaturedItem, FeaturedItemsResponse } from "../types";

type Props = {
  data: FeaturedItemsResponse;
  isLoading: boolean;
  isError: boolean;
};
const FeaturedItems = ({ isError, data, isLoading }: Props) => {
  const pathname = usePathname();
  const eventUrl = getEventUrl(pathname);

  if (isError) {
    return <ErrorFallback />;
  }
  if (isLoading) {
    return <ItemsSkeleton />;
  }
  const featuredItems = data?.items?.slice(0, 3) || [];
  return (
    <div className="bg-[#c6e3dc] w-auto py-20">
      <button className="bg-lime-200 rounded-full px-6 py-2 font-medium text-black shadow mb-8">
        TEST1
      </button>
      <h1 className="text-4xl font-semibold text-black pb-8">Featured Items</h1>
      <div className="flex flex-col gap-6 items-center sm:flex-row sm:gap-4 sm:flex-wrap md:flex-row md:gap-6 md:flex-wrap lg:flex-row lg:gap-8 lg:flex-wrap xl:flex-row xl:gap-8 xl:flex-wrap w-auto">
        {featuredItems?.map((item, idx) => {
          const updatedAt = new Date(item.updatedAt);
          const now = new Date();
          const endTime = new Date(updatedAt.getTime() + 30 * 60 * 1000); // 30 min after updatedAt
          const diffInMs = endTime.getTime() - now.getTime();
          const minutesLeft = Math.max(Math.floor(diffInMs / (1000 * 60)), 0);

          return (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-lg w-80 overflow-hidden relative mx-auto"
            >
              <div className="absolute top-0 left-0 bg-[#5a2b81] text-white px-[10px] py-[6px] rounded-tl-[8px] rounded-br-[8px] text-[13px] font-bold z-[2]">
                {item.id}
              </div>
              <div className="bg-gray-100 flex items-center justify-center h-56 p-5">
                <img src={item.photo} className={` cursor-pointer`} />
              </div>
              <div className="p-6">
                <div className="font-bold text-lg text-black">{item.name}</div>
                <div className="text-sm text-red-500 mt-1 mb-4">
                  {minutesLeft > 0
                    ? `${minutesLeft} min left to bid`
                    : "Bidding ended"}
                </div>
                <hr />
                <div className="bg-gray-50 rounded-lg flex items-center justify-between px-4 py-4">
                  <span className="font-bold text-xl text-black">
                    $ {item.price}
                  </span>
                  <button className="bg-lime-400 hover:bg-lime-500 text-black font-medium rounded-full px-6 py-2 transition">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedItems;
