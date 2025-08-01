"use client";
import React, { Suspense } from "react";
import { useAboutUsData } from "../hooks/usAboutUsData";
import ItemsSkeleton from "../../../components/ui/ItemsSkeleton";
import ErrorFallback from "@/components/ui/ErrorFallback";
import dynamic from "next/dynamic";

const FeaturedItems = dynamic(
  () => import("@/features/about-us/components/FeaturedItems"),
  { ssr: false }
);
const LiveAuction = dynamic(
  () => import("@/features/about-us/components/LiveAuction"),
  { ssr: false }
);

const Events = dynamic(() => import("@/features/about-us/components/Events"), {
  ssr: false,
});

const Sponsors = dynamic(
  () => import("@/features/about-us/components/Sponsors"),
  { ssr: false }
);

const AuctionInfo = dynamic(
  () => import("@/features/about-us/components/AuctionInfo"),
  { ssr: false }
);

function AboutContent() {
  const { isLoading, isError, data } = useAboutUsData();
  if (isError) return <ErrorFallback />;

  if (isLoading) return <ItemsSkeleton />;

  return (
    <div>
      <div className="flex flex-col sm:flex sm:flex-col lg:flex lg:flex-row xl:flex xl:flex-row md:gap-8 justify-evenly bg-[#c6e3de]">
        <Suspense fallback={<ItemsSkeleton />}>
          <FeaturedItems data={data.featuredItems || []} />
        </Suspense>
        <Suspense fallback={<ItemsSkeleton />}>
          <AuctionInfo data={data.tikets || []} />
        </Suspense>
      </div>
      <Suspense fallback={<ItemsSkeleton />}>
        <LiveAuction data={data.mySetting || []} />
      </Suspense>
      <Suspense fallback={<ItemsSkeleton />}>
        <Events data={data.events || []} />
      </Suspense>
      <Suspense fallback={<ItemsSkeleton />}>
        <Sponsors data={data.mySetting || []} />
      </Suspense>
    </div>
  );
}

export default AboutContent;
