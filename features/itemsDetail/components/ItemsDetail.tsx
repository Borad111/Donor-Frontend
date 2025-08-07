"use client";

import { useGetItemDetailsQuery } from '@/features/itemsDetail/api/itemDetailApi';
import { getEventUrl } from '@/lib/getEventUrl';
import Image from 'next/image';
import { usePathname, useParams } from 'next/navigation';
import React from 'react';

interface ItemType {
  id: string;
  itemId: string;
  name: string;
  description: string;
  restriction?: string;
  fairMarketValue: number;
  photo: string;
  donor?: string;
  donorUserName?: string;
  startingBid: string;
  currentBid: string | null;
  bidRaise: string;
  buyNow: string;
}

const ItemsDetail = () => {
  const pathname = usePathname();
  const params = useParams();
  const eventUrl = getEventUrl(pathname);
  const Id = params.id as string; // Get ID from URL params

  const { data, isLoading, isError } = useGetItemDetailsQuery({ eventUrl, id: Id });
  console.log("ItemDetail Data:", data, "Loading:", isLoading, "Error:", isError);

  const itemsDetail: ItemType = data?.items;
  const bidNowPrice =
      itemsDetail &&
      Object.keys(itemsDetail).length &&
      itemsDetail.currentBid === null
        ? itemsDetail.startingBid
        : parseInt(itemsDetail?.buyNow) >
          parseInt(itemsDetail?.currentBid || '0') + parseInt(itemsDetail?.bidRaise)
        ? parseInt(itemsDetail?.currentBid || '0') + parseInt(itemsDetail?.bidRaise)
        : itemsDetail?.buyNow;


  // Function to decode HTML entities and strip HTML tags
  const decodeHtmlContent = (htmlString: string) => {
    if (!htmlString) return '';

    // Create a temporary div element to decode HTML entities
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlString;

    // Get the text content which automatically strips HTML tags
    return tempDiv.textContent || tempDiv.innerText || '';
  };

  // Read more/less state
  const [showFullDesc, setShowFullDesc] = React.useState<{ [key: string]: boolean }>({});
  const [showFullRestrict, setShowFullRestrict] = React.useState<{ [key: string]: boolean }>({});

  // Bidding state - converted from class component
  const [incrBidAmt, setIncrBidAmt] = React.useState<number | null>(null);
  const [currentBidAmount, setCurrentBidAmount] = React.useState<number>(0);

  // Helper to truncate text
  const truncate = (text: string, len: number) => {
    if (text.length <= len) return text;
    return text.slice(0, len) + '...';
  };

  // Stepper functionality for bid amount
  const handleStepperIncrement = (item: ItemType) => {
    const currentBidAmt = getCurrentBidAmount(item);
    const increment = parseFloat(item.bidRaise) || 50;
    const newAmount = currentBidAmt + increment;

    if (newAmount <= parseFloat(item.buyNow)) {
      setIncrBidAmt(newAmount);
      setCurrentBidAmount(0); // Reset currentBidAmount if manually changed
    }
  };

  const handleStepperDecrement = (item: ItemType) => {
    const currentBidAmt = getCurrentBidAmount(item);
    const decrement = parseFloat(item.bidRaise) || 50;
    const minBidAmount = getMinimumBidAmount(item);
    const newAmount = currentBidAmt - decrement;

    if (newAmount >= minBidAmount) {
      setIncrBidAmt(newAmount);
      setCurrentBidAmount(0); // Reset currentBidAmount if manually changed
    }
  };

  const getCurrentBidAmount = (item: ItemType) => {
    // Pehle check karein explicit set ki gayi amount
    if (incrBidAmt !== null && !isNaN(incrBidAmt)) {
      return Number(incrBidAmt);
    }

    // Fir check karein current bid amount
    if (currentBidAmount > 0 && !isNaN(currentBidAmount)) {
      return currentBidAmount;
    }

    // Default logic
    if (item && item.startingBid) {
      if (item.currentBid === null || !item.currentBid) {
        const startingBid = parseFloat(item.startingBid);
        return isNaN(startingBid) ? 0 : startingBid;
      } else {
        const currentBid = parseFloat(item.currentBid);
        const bidRaise = parseFloat(item.bidRaise);
        const buyNowPrice = parseFloat(item.buyNow);

        if (isNaN(currentBid) || isNaN(bidRaise)) {
          const startingBid = parseFloat(item.startingBid);
          return isNaN(startingBid) ? 0 : startingBid;
        }

        const nextBidAmount = currentBid + bidRaise;

        if (isNaN(buyNowPrice)) {
          return nextBidAmount;
        }

        return buyNowPrice > nextBidAmount ? nextBidAmount : buyNowPrice;
      }
    }

    return 0;
  };

  const getMinimumBidAmount = (item: ItemType) => {
    if (item && item.startingBid) {
      if (item.currentBid === null || !item.currentBid || parseFloat(item.currentBid) === 0) {
        return parseFloat(item.startingBid) || 0;
      } else {
        const currentBid = parseFloat(item.currentBid) || 0;
        const bidRaise = parseFloat(item.bidRaise) || 50;
        return currentBid + bidRaise;
      }
    }

    return 0;
  };

  const handleMaxBidClick = (item: ItemType) => {
    if (item && item.buyNow) {
      const maxBid = parseFloat(item.buyNow);
      if (!isNaN(maxBid)) {
        setCurrentBidAmount(maxBid);
        setIncrBidAmt(maxBid);
      }
    }
  };

  const handleBidClick = (item: ItemType) => {
    const bidAmount = getCurrentBidAmount(item);
    console.log("Placing bid for:", {
      itemId: item.itemId,
      itemName: item.name,
      bidAmount: bidAmount
    });
    // Here you would typically call an API to place the bid
    // For now, just log the bid attempt
    alert(`Bid placed for $${bidAmount.toLocaleString()} on ${item.name}`);
  };

  const handleBuyNowClick = (item: ItemType) => {
    const buyNowPrice = parseFloat(item.buyNow);
    if (!isNaN(buyNowPrice)) {
      console.log("Buy now clicked for:", {
        itemId: item.itemId,
        itemName: item.name,
        buyNowPrice: buyNowPrice
      });
      // Here you would typically call an API to purchase the item
      alert(`Buy Now: $${buyNowPrice.toLocaleString()} for ${item.name}`);
    }
  };


  return (
    <div className="max-w-5xl mx-auto p-6 bg-white">
      {data?.items.map((item: ItemType) => {
        const desc = decodeHtmlContent(item.description);
        const restrict = decodeHtmlContent(item?.restriction || '');
        const descLong = desc.length > 200;
        const restrictLong = restrict.length > 200;
        return (
          <React.Fragment key={item.id}>
            <div>
              {/* Main Content */}
              <div className="flex gap-6">
                {/* Left Side - Images */}
                <div className="flex-1">
                  {/* Main Image */}
                  <div className="mb-4">
                    <Image
                      src={item.photo}
                      alt="Item Image"
                      className="w-full h-80 object-cover rounded-lg"
                      width={500}
                      height={300}
                    />
                  </div>

                  {/* Thumbnail Images */}
                  {/* <div className="flex gap-2 overflow-x-auto">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Image
                        key={i}
                        src={`/api/placeholder/80/60`}
                        alt={`Thumbnail ${i}`}
                        className="w-20 h-16 object-cover rounded cursor-pointer flex-shrink-0"
                        width={80}
                        height={60}
                      />
                    ))}
                    <button className="w-20 h-16 bg-gray-200 rounded flex items-center justify-center text-gray-600">
                      →
                    </button>
                  </div> */}

                  {/* Description Section */}
                  <div className="mt-8">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-xl font-semibold">Description</h2>
                      <span className="text-gray-600">Value: ${item.fairMarketValue}</span>
                    </div>

                    <div className="text-gray-700 space-y-3">
                      <p>
                        {showFullDesc[item.id] || !descLong ? desc : truncate(desc, 200)}
                        {descLong && (
                          <button
                            className="ml-2 text-blue-500 underline text-sm"
                            onClick={() => setShowFullDesc(s => ({ ...s, [item.id]: !s[item.id] }))}
                          >
                            {showFullDesc[item.id] ? 'Read less' : 'Read more'}
                          </button>
                        )}
                      </p>
                    </div>

                    {/* Restrictions */}
                    {item.restriction !== null && restrict && (
                      <div className="mt-6">
                        <h3 className="text-lg font-semibold mb-2">Restrictions</h3>
                        <p className="text-gray-700">
                          {showFullRestrict[item.id] || !restrictLong ? restrict : truncate(restrict, 200)}
                          {restrictLong && (
                            <button
                              className="ml-2 text-blue-500 underline text-sm"
                              onClick={() => setShowFullRestrict(s => ({ ...s, [item.id]: !s[item.id] }))}
                            >
                              {showFullRestrict[item.id] ? 'Read less' : 'Read more'}
                            </button>
                          )}
                        </p>
                      </div>
                    )}

                    {/* Donated by */}
                    {item?.donor || item?.donorUserName && (
                      <div className="mt-4">
                        <p className="text-gray-600 text-sm"> Donated by{" "} {
                          item.donor || item.donorUserName}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Side - Details */}
                <div className="w-120 p-8">
                  {/* Item Number */}
                  <div className="bg-[#3A133F] text-white px-5 py-3 rounded-md text-sm 2xl:text-xl font-semibold inline-block mb-4">
                    #{item.itemId}
                  </div>

                  {/* Title */}
                  <h1 className="text-2xl font-bold text-gray-800 mb-6 leading-tight">
                    {item.name}
                  </h1>

                  {/* Bidding Section */}
                  <div className="mb-6">
                          {/* Current Bid Display */}
                          <div className="flex items-center justify-center gap-3 mb-4">
                            <span className='flex items-center gap-3 border-2 px-6 p-3 rounded-full'>
                              <button
                                className="w-6 h-6 rounded-full border-2 border-orange-400 flex items-center justify-center text-orange-400 hover:bg-orange-50"
                                onClick={() => handleStepperDecrement(item)}
                              >
                                -
                              </button>
                              <span className="2xl:text-xl font-bold text-gray-800">
                                ${getCurrentBidAmount(item).toLocaleString()}
                              </span>
                              <button
                                className="w-6 h-6 rounded-full border-2 border-orange-400 flex items-center justify-center text-orange-400 hover:bg-orange-50"
                                onClick={() => handleStepperIncrement(item)}
                              >
                                +
                              </button>
                            </span>
                            {/* Bid Button */}
                            <button
                              className="w-44 bg-[#ff7815] text-black py-3 rounded-full font-semibold hover:bg-orange-600 items-center justify-center gap-2 2xl:text-2xl xl:text-xl  lg:text-lg"
                              onClick={() => handleBidClick(item)}
                            >
                              ♡ Bid
                            </button>
                          </div>


                          {/* Set Max Bid Button */}
                          <button
                            className="w-full border-2 border-[#ff7815] text-[#ff7815] py-2 rounded-full mb-4 2xl:text-2xl xl:text-xl  lg:text-lg hover:bg-orange-50"
                            onClick={() => handleMaxBidClick(item)}
                          >
                            Set Max Bid
                          </button>

                    {/* Buy Now Button */}
                    <button
                      className="w-full bg-[#F4486D] text-white py-3 rounded-full hover:bg-pink-600 2xl:text-2xl xl:text-xl  lg:text-lg"
                      onClick={() => handleBuyNowClick(item)}
                    >
                      ${item.buyNow} BUY NOW
                    </button>
                  </div>

                  {/* Bid History */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 text-gray-800">Bid History</h3>

                    <div className="space-y-3">
                      <div className="bg-gray-100 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-gray-600 text-sm font-medium">#0</span>
                              <span className="font-semibold text-gray-800">Kleo Hart</span>
                            </div>
                            <span className="text-gray-500 text-sm">09:29 AM | Jul. 24, 2025</span>
                          </div>
                          <span className="font-bold text-lg text-gray-800">$263</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ItemsDetail;
