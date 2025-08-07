"use client";
import React, { Suspense } from "react";
import { useAboutUsData } from "../hooks/usAboutUsData";
import ItemsSkeleton from "../../../components/ui/ItemsSkeleton";
import ErrorFallback from "@/components/ui/ErrorFallback";
import dynamic from "next/dynamic";

const FeaturedItems = dynamic(
  () => import("@/features/about-us/components/FeaturedItems"),
  { ssr: false , loading: () => <ItemsSkeleton />}
);
const LiveAuction = dynamic(
  () => import("@/features/about-us/components/LiveAuction"),
  { ssr: false ,loading: () => <ItemsSkeleton /> }
);

const Events = dynamic(() => import("@/features/about-us/components/Events"), {
  ssr: false, loading: () => <ItemsSkeleton /> 
});

const Sponsors = dynamic(
  () => import("@/features/about-us/components/Sponsors"),
  { ssr: false ,loading: () => <ItemsSkeleton /> }
);

const AuctionInfo = dynamic(
  () => import("@/features/about-us/components/AuctionInfo"),
  { ssr: false , loading: () => <ItemsSkeleton /> }
);

function AboutContent() {
  const { isLoading, isError, data } = useAboutUsData();
  
  return (
    <div>
      <div className="flex flex-col sm:flex sm:flex-col lg:flex lg:flex-row xl:flex xl:flex-row md:gap-8 justify-evenly bg-[#c6e3de]">
          <FeaturedItems isError={isError.featuredItems} isLoading={isLoading.featuredItems} data={data.featuredItems?.items || []} />
          <AuctionInfo isError={isError.tikets} isLoading={isLoading.tikets} data={data.tikets?.ticketSetting || []} />
      </div>
        <LiveAuction isError={isError.mySetting} isLoading={isLoading.mySetting} data={data.mySetting?.setting } />
        <Events isError={isError.events} isLoading={isLoading.events} data={data.events?.event || []} />
        <Sponsors isError={isError.mySetting} isLoading={isLoading.mySetting} data={data.mySetting?.sponsor || []} />
    </div>
  );
}

export default AboutContent;
