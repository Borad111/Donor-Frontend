"use client";
import React from 'react';
import dynamic from 'next/dynamic';
import { useItemsData } from '../hooks/useItemsData';
import { TimeSkeleton } from '../components/TimeSkeleton';
import { SearchSkeleton } from '../components/SearchSkeleton';
// import SearchFilter from '../components/SearchFilter';

  const TimeSchedule=dynamic(
    () => import('../components/TimeSchedule'),
    { ssr: false, loading: () => <TimeSkeleton/> }
  )

  const SearchFilter=dynamic(
    () => import('../components/SearchFilter'),
    { ssr: false, loading: () => <SearchSkeleton/> }
  )
  const ItemList=dynamic(
    () => import('../components/itemList'),
    { ssr: false, loading: () => <div className="flex justify-center"><TimeSkeleton/></div> }
  )
function ItemContant() {

  const { isLoading, isError, data } = useItemsData();
  return (
    <div className="w-[80%] mx-auto">
      <TimeSchedule isError={isError.mySetting} data={data.mySetting?.setting} isLoading={isLoading.mySetting}/>
      <SearchFilter/>
      <ItemList isError={isError.items} isLoading={isLoading.items} data={data.items?.items || []}/>
    </div>
  );
}

export default ItemContant;
