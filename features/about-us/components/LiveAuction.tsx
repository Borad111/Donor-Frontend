import ErrorFallback from '@/components/ui/ErrorFallback';
import ItemsSkeleton from '@/components/ui/ItemsSkeleton';
import { EventSetting, SettingResponse } from '@/types/settingTypes';
import React from 'react'

type Props={
  data?:EventSetting;
  isLoading:boolean;
  isError:boolean;
}
const LiveAuction = ({ isError,data,isLoading }:Props) => {
  if (!data) return null
  const title = data?.title;
  const description = data?.description;
if (isError) {
    return <ErrorFallback/>
  }
  if(isLoading){
    return <ItemsSkeleton/>
  }
  // Agar dono na ho to null return karo — means kuch bhi render nahi hoga
  if (!title && !description) {
    return null;
  }

  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32 pt-6 max-w-full mx-auto bg-[#c6e3de] text-left">
      <h1 className="text-md sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-gray-900 mb-2">
        {title}
      </h1>
      <p className="font-semibold text-gray-800 mb-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl xl:pt-4">
        {description}{" "}
      </p>
     
      <div className="bg-orange-100 border-l-4 border-orange-400 text-orange-700 px-2 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 rounded-md max-w-full mx-auto">
        <span className="font-bold">Don’t Forget Your Mobile Device For Online Bidding!</span>
      </div>
    </div>
  );
};


export default LiveAuction
