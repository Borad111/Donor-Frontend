"use client";
import { getEventUrl } from "@/lib/getEventUrl";
import { usePathname } from "next/navigation";
import React from "react";
import {
  useGetFeaturedItemsQuery,
  useGetTiketsQuery,
} from "../api/featureItemApi";
import ItemsSkeleton from "@/components/ui/ItemsSkeleton";
import ErrorFallback from "@/components/ui/ErrorFallback";
import { TicketsResponse } from "../types";

type Props={
  data:TicketsResponse;
  isLoading:boolean;
  isError:boolean;
}
const AuctionInfo = ({ data, isLoading, isError }:Props) => {
  const pathname = usePathname();
  const eventUrl = getEventUrl(pathname);
  if (isError) {
    return <ErrorFallback />;
  }
  if (isLoading) {
    return <ItemsSkeleton />;
  }
  const ticket = data?.ticketSetting[0];
  const formattedDate = ticket?.ticketDate ? new Date(ticket?.ticketDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  ): 'Date not specified';
  const formattedTime = ticket?.ticketDate  ? new Date(ticket?.ticketDate).toLocaleTimeString(
    "en-US",
    {
      hour: "2-digit",
      minute: "2-digit",
    }
  ):'Date not specified';
  return (
    <div className="bg-[#c6e3de] flex flex-col items-center w-auto gap-8 py-20">
      {/* Progress Card */}
      <div className="bg-white rounded-xl shadow-md w-[310px] p-5">
        <div className="flex justify-between items-center mb-3">
          <span className="font-bold text-[#f28b5b] text-lg ml-auto">
            Goal: $99,969
          </span>
        </div>
        {/* Progress Bar with Steps */}
        <div className="flex items-center mb-4 mt-2 space-x-2">
          <div className="h-3 w-1/6 rounded-full bg-[#1dcaff]" />
          <div className="h-3 w-1/6 rounded-full bg-gray-200" />
          <div className="h-3 w-1/6 rounded-full bg-gray-200" />
          <div className="h-3 w-1/6 rounded-full bg-gray-200" />
          <div className="h-3 w-1/6 rounded-full bg-gray-200" />
          <div className="h-3 w-1/6 rounded-full bg-gray-200" />
        </div>
        <div className="flex justify-between items-center mt-2">
          <span className="text-[#1dcaff] font-extrabold text-lg">
            $24,804 Raised!
          </span>
          <span className="text-black font-bold text-lg">25%</span>
        </div>
      </div>

      {/* Auction Info Card */}
      <div className="bg-[#3d184e] rounded-xl shadow-md w-[310px] h-[360px] flex flex-col items-center justify-center p-2">
        <h2 className="text-white text-xl font-extrabold text-center leading-tight mb-6">
          Celebrate A Turtle Bay Tradition With Lot Of Services
        </h2>
        <div className="bg-[#4a2060] rounded-xl w-[260px] py-6 flex flex-col items-center mb-6">
          <span className="text-white text-lg font-semibold mb-2">
            #{ticket?.id}
          </span>
          <h2 className="text-white text-xl font-extrabold text-center leading-tight mb-4">
            {ticket?.eventVenueName}
          </h2>

          <div className="text-white text-sm text-center mb-2">
            {ticket?.venueAddress}
          </div>
          <span className="text-[#f6c7e2] text-base font-medium">
            {formattedDate} | {formattedTime}
          </span>
        </div>

        <span className="text-white mb-4 text-lg font-medium">Share</span>
        <div className="flex space-x-8">
          <a href="#" className="text-[#4267B2] text-2xl" aria-label="Facebook">
            <i className="fab fa-facebook-square"></i>
          </a>
          <a
            href="#"
            className="text-[#e1306c] text-2xl"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-[#0e76a8] text-2xl" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="text-[#1da1f2] text-2xl" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AuctionInfo;
