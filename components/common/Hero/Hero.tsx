"use client"
import React from 'react'
import { usePathname } from 'next/navigation';
import { useGetMySettingQuery } from '@/api/mySetting/mySettingApi';
import { getEventUrl } from '@/lib/utils';
import { HeroSkeleton } from './HeroSkeleton';

const Hero = () => {
  const pathname=usePathname();
  const eventUrl=getEventUrl(pathname);

  const {data,isLoading,isError}=useGetMySettingQuery(eventUrl);
   if (isLoading) {
    return (
     <HeroSkeleton/>
    );
  }

  if (isError || !data) {
    return (
      <div className="w-full py-24 flex items-center justify-center min-h-[150px]">
        <p className="text-red-500 text-lg">Error loading data</p>
      </div>
    );
  } 
  return (
    <div className="bg-purple-700 w-full py-24 flex items-center justify-center min-h-[150px]">
      <h1 className="text-3xl md:text-5xl font-extrabold text-black text-center px-4">
        {data?.setting?.name}
      </h1>
    </div>
  )
}

export default Hero;
