"use client";
import { useGetMySettingQuery } from "@/api/mySetting/mySettingApi"
import { getEventUrl } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useGetAuctionItemsQuery } from "../api/itemsApi";

export const useItemsData=()=>{
    const pathname = usePathname();
    const eventUrl = getEventUrl(pathname);

    const mySetting=useGetMySettingQuery(eventUrl);
    const items=useGetAuctionItemsQuery(eventUrl);
   

    return {
        isLoading:{
            mySetting: mySetting.isLoading,
            items: items.isLoading
        },
        isError:{
            mySetting: mySetting.isError,
            items: items.isError
        },
        data: {
            mySetting: mySetting.data,
            items: items.data,
        }
    };
};