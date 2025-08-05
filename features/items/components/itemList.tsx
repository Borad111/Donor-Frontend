import React from "react";
import { Item } from "../types";
import Image from "next/image";
import ItemListSkeleton from "./ItemListSkeleton";
import { formatCurrency } from "@/lib/utils";

type Props = {
  data: Item[];
  isLoading: boolean;
  isError: boolean;
};
function itemList({ isError, isLoading, data }: Props) {
  if (isLoading) {
    return <ItemListSkeleton />;
  }
  const getValidItems = (): Item[] => {
    return (
      data
        ?.filter(
          (item: Item) =>
            item.itemId !== null && item.itemId !== undefined || item.startingBid !== null && item.currentBid !== null
        )
        .map((item: Item) => ({
          ...item,
          currentBid:
            item.currentBid !== null && item.currentBid !== undefined
              ? item.currentBid
              : item.startingBid,
          isStartingBid:
            item.currentBid === null || item.currentBid === undefined,
        })) || []
    );
  };
  
  return (
    <div className="place-content-center flex flex-wrap mb-24 justify-center gap-x-6 gap-y-10 w-full">
      {getValidItems().map((item: Item) => (
        <div
          key={item.id}
          className="bg-white mt-5 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col w-[calc(25%-20px)] min-w-[250px]" // Adjusted calculation
        >
          {/* Item Number Badge */}
          <div className="relative">
            <div className="absolute top-0 left-0  bg-purple-950 text-white px-4 py-1 rounded text-md font-medium">
              {item.itemId}
            </div>

            {/* Image section */}
            <div className="w-full aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden cursor-pointer">
              {item?.photo ? (
                <Image
                  src={item.photo}
                  alt="Photo "
                  width={300}
                  height={225}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                  No Image
                </div>
              )}
            </div>
          </div>

          {/* Item Details */}
          <div className="p-5 flex flex-col flex-1">
            <h3 className="font-semibold text-gray-900 mb-3 text-lg line-clamp-2 min-h-[3.5rem]">
              {item.name}
            </h3>
            <div className="flex justify-between items-center mt-auto">
              <p className="text-base text-gray-600 mb-2">
                {item.startingBid ? "STARTING BID:" : "CURRENT BID:"}
              </p>
              <p className="text-xl font-bold text-gray-900">
                {formatCurrency(item.currentBid as number | null)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default itemList;
