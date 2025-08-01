"use client";
import React from "react";
import AuctionInfo from "@/features/about-us/components/AuctionInfo";
import FeaturedItems from "@/features/about-us/components/FeaturedItems";
import Hero from "@/features/about-us/components/Hero";
import Sponsors from "@/features/about-us/components/Sponsors";
import { usePathname } from "next/navigation";
import { getEventUrl } from "@/lib/getEventUrl";
import { useGetMySettingQuery } from "@/api/mySetting/mySettingApi";
import Events from "./Events";
import LiveAuction from "./LiveAuction";

function AboutUs() {
  const pathname = usePathname();
  const eventUrl = getEventUrl(pathname);

  const { data, isLoading, isError } = useGetMySettingQuery(eventUrl);
  return (
    <div>
      {/* <Hero /> */}
      <div className="flex flex-col sm:flex sm:flex-col lg:flex lg:flex-row xl:flex xl:flex-row md:gap-8 justify-evenly bg-[#c6e3de]">
        <FeaturedItems data={data} />
        <AuctionInfo data={data} />
      </div>
      <LiveAuction />
      <Events />
      <Sponsors data={data} />
    </div>
  );
}

export default AboutUs;
