import React from "react";
import { Item } from "../types";
import Image from "next/image";
import ItemListSkeleton from "./ItemListSkeleton";
import { formatCurrency, getEventUrl } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ItemWithBid extends Item {
  displayBid: number;
  bidLabel: string;
}

type Props = {
  data: Item[];
  isLoading: boolean;
  isError: boolean;
};

function ItemList({ isError, isLoading, data }: Props) {
  
  if (isLoading) {
    return <ItemListSkeleton />;
  }

  if (isError) {
    return <div className="text-center text-red-500 py-10">Error loading items</div>;
  }

  if (data.length === 0) {
    return (
      <div className="text-center py-20">
        <h3 className="text-xl font-medium text-gray-700">No items found</h3>
        <p className="text-gray-500 mt-2">
          Try adjusting your search or filter criteria
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-8">
      {data.map((item) => {
        const showCurrentBid = item.currentBid != null;
        const displayBid = showCurrentBid ? item.currentBid : item.startingBid;
        const bidLabel = showCurrentBid ? "CURRENT BID:" : "STARTING BID:";

        return (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
          >
            <div className="relative">
              <div className="absolute  bg-purple-950 text-white px-3 py-1 rounded-md  text-lg font-medium z-10">
                #{item.itemId}      
              </div>

              <Link href={`itemDetail/${item.id}`} className="block">
                <div className="w-full aspect-[4/3] bg-gray-100 overflow-hidden">
                  {item?.photo ? (
                    <Image
                      src={item.photo}
                      alt={item.name || "Auction item"}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      priority={false}
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
                      No Image Available
                    </div>
                  )}
                </div>
              </Link>
            </div>

            <div className="p-4 flex flex-col flex-1">
              <h3 className="font-semibold text-gray-900 text-lg mb-2 line-clamp-2">
                {item.name}
              </h3>
              {/* <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                {item.description}
              </p> */}
              <div className="flex justify-between items-center mt-auto pt-2 border-t border-gray-100">
                <span className="text-sm text-gray-600">{bidLabel}</span>
                <span className="text-lg font-bold text-gray-900">
                  {formatCurrency(displayBid || 0)}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ItemList;