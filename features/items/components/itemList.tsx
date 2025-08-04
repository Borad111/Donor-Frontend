import React from 'react'
import { AuctionItem, AuctionStats } from '../types';
import Image from 'next/image';

function itemList() {
      const getValidItems = (): AuctionItem[] => {
        return data?.items?.filter((item: AuctionItem) => item.itemId !== null && item.itemId !== undefined)
          .map((item: AuctionItem) => ({
            ...item,
            currentBid: item.currentBid !== null && item.currentBid !== undefined ? item.currentBid : item.startingBid,
            isStartingBid: item.currentBid === null || item.currentBid === undefined
          })) || [];
      };
  return (
     <div className="place-content-center flex flex-wrap justify-center gap-6 max-w-screen-xl mx-auto">
             {getValidItems().map((item: AuctionItem) => (
               <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col w-[280px] max-w-[280px]">
   
                 {/* Item Number Badge */}
                 <div className="relative">
                   <div className="absolute top-3 left-3 bg-gray-800 text-white px-2 py-1 rounded text-sm font-medium">
                     {item.itemId}
                   </div>
   
                   {/* Placeholder for image */}
                   <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden cursor-pointer">
                   {item?.photo ? (
                   <Image
                       src={item.photo}
                       alt={item?.title}
                       width={280}
                       height={192}
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
                 <div className="p-4 flex flex-col flex-1">
                   <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[3rem]">
                     {item.name}
                   </h3>
                   <div className="flex justify-between items-center mt-auto">
                       <p className="text-sm text-gray-600 mb-1">
                         {item.isStartingBid ? 'STARTING BID:' : 'CURRENT BID:'}
                       </p>
                       <p className="text-xl font-bold text-gray-900">
                         {formatCurrency(item.currentBid)}
                       </p>
                   </div>
                 </div>
               </div>
             ))}
           </div>
  )
}

export default itemList
