"use client"

import React, { useState } from 'react';
import { AuctionItem, AuctionStats } from '../types';
import { usePathname } from 'next/navigation';
import { getEventUrl } from '@/lib/getEventUrl';
import { useGetAuctionItemsQuery } from '../api/itemsApi';
import Image from 'next/image';
import Link from 'next/link';

const Items: React.FC = () => {
  const pathname = usePathname();
  const eventUrl = getEventUrl(pathname);

  const { data } = useGetAuctionItemsQuery(eventUrl)
  console.log("Auction Items Data:", data);

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('All');

  const auctionStats: AuctionStats = {
    openingTime: '15-05-25,12:30PM',
    closingTime: '15-05-25, 05:30PM, 05 hrs left to bid',
    goalAmount: 100000,
    amountRaised: 85000,
    progressPercentage: 90
  };

  const formatCurrency = (amount: number | null | undefined): string => {
    if (amount === null || amount === undefined) {
      return '$0';
    }
    return `$${amount.toLocaleString()}`;
  };

  const getValidItems = (): AuctionItem[] => {
    return data?.items?.filter((item: AuctionItem) => item.itemId !== null && item.itemId !== undefined)
      .map((item: AuctionItem) => ({
        ...item,
        currentBid: item.currentBid !== null && item.currentBid !== undefined ? item.currentBid : item.startingBid,
        isStartingBid: item.currentBid === null || item.currentBid === undefined
      })) || [];
  };

  return (
    <div className="min-h-screen bg-gray-50 mt-12">
      {/* Header Stats - Card Layout */}
      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 py-4">

        {/* Opening Time Card */}
        <div className="bg-white rounded-xl shadow-md border w-[320px] p-5 flex flex-col items-center">
          <div className="flex flex-col items-center w-full">
            <svg className="w-6 h-6 text-[#1dcaff] mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="#1dcaff" strokeWidth="2" fill="#e6fafd" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 2" stroke="#1dcaff" strokeWidth="2" />
            </svg>
            <span className="text-[#1dcaff] font-bold text-lg">Opening Time</span>
            <span className="font-bold text-black text-base mt-2">{auctionStats.openingTime}</span>
          </div>
        </div>

        {/* Closing Time Card */}
        <div className="bg-white rounded-xl shadow-md border w-[320px] p-5 flex flex-col items-center">
          <div className="flex flex-col items-center w-full">
            <svg className="w-6 h-6 text-[#f28b5b] mb-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="#f28b5b" strokeWidth="2" fill="#fff6f1" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 2" stroke="#f28b5b" strokeWidth="2" />
            </svg>
            <span className="text-[#f28b5b] font-bold text-lg">Closing Time:</span>
            <span className="font-bold text-black text-base mt-2">{auctionStats.closingTime}</span>
          </div>
        </div>

        {/* Goal Progress Card */}
        <div className="bg-white rounded-xl shadow-md border w-[320px] p-5 flex flex-col items-center">
          <div className="flex items-center justify-between w-full mb-2">
            <span className="font-bold text-[#f28b5b] text-base ml-auto">Goal: {formatCurrency(auctionStats.goalAmount)}</span>
          </div>

          {/* Progress Bar with Steps */}
          <div className="flex items-center w-full mb-2 mt-1 space-x-2">
            <div className="h-3 w-1/6 rounded-full bg-[#1dcaff]" />
            <div className="h-3 w-1/6 rounded-full bg-[#1dcaff]" />
            <div className="h-3 w-1/6 rounded-full bg-[#1dcaff]" />
            <div className="h-3 w-1/6 rounded-full bg-[#1dcaff]" />
            <div className="h-3 w-1/6 rounded-full bg-[#1dcaff]" />
            <div className="h-3 w-1/6 rounded-full bg-gray-200" />
          </div>

          <div className="flex items-center w-full justify-between mt-2">
            <span className="text-[#1dcaff] font-extrabold text-lg">{formatCurrency(auctionStats.amountRaised)} Raised!</span>
            <span className="text-black font-bold text-lg">{auctionStats.progressPercentage}%</span>
          </div>

        </div>

      </div>

      {/* Main Content */}
      <div className="px-8 py-8">

        {/* Page Title and Filters */}
        <div className="flex flex-col sm:flex sm:flex-col sm:text-center md:flex-col md:items-center md:justify-between mb-8 xl:flex xl:flex-row xl:gap-5 2xl:flex 2xl:flex-row 2xl:gap-5 mx-6">
          <h1 className="text-3xl text-center font-bold text-gray-900 mb-4 md:mb-0">Online Auction</h1>

          <div className="flex flex-col md:flex-row gap-3 items-center">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-52 pl-10 pr-10 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </div>

            {/* Category Filter */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-52 appearance-none bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5 pr-8 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white"
              >
                <option value="All">All</option>
                <option value="Art">Art</option>
                <option value="Experience">Experience</option>
                <option value="Travel">Travel</option>
              </select>
              <div className="absolute right-2.5 top-1/2 transform -translate-y-1/2">
                <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="absolute left-2.5 top-1/2 transform -translate-y-1/2">
                <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </div>
            </div>

            {/* Sort Filter */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-52 appearance-none bg-gray-50 border border-gray-200 rounded-lg pl-8 py-2.5 pr-8 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white"
              >
                <option value="All">All</option>
                <option value="Price Low to High">Price Low to High</option>
                <option value="Price High to Low">Price High to Low</option>
                <option value="Ending Soon">Ending Soon</option>
              </select>
              <div className="absolute right-2.5 top-1/2 transform -translate-y-1/2">
                <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="absolute left-2.5 top-1/2 transform -translate-y-1/2">
                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Auction Items Flex Layout */}
        <div className="place-content-center flex flex-wrap justify-center gap-6 max-w-screen-xl mx-auto">
          {getValidItems().map((item: AuctionItem) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col w-[280px] max-w-[280px]">

              {/* Item Number Badge */}
              <div className="relative">
                <div className="absolute top-3 left-3 bg-gray-800 text-white px-2 py-1 rounded text-sm font-medium">
                  {item.itemId}
                </div>

                <Link href={`itemDetail/${item.id}`} className="block">
                  {/* Placeholder for image */}
                  <div className="w-full h-48 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden cursor-pointer">
                    <Image
                      src={item.photo}
                      alt={item.title}
                      width={280}
                      height={192}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>
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
      </div>
    </div>
  );
};

export default Items;
