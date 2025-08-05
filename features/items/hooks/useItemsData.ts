"use client";
import { useGetMySettingQuery } from "@/api/mySetting/mySettingApi"
import { getEventUrl } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useGetAuctionItemsQuery, useGetMoneyRaisedQuery } from "../api/itemsApi";
import { ItemsDataResult } from "../types";

export const useItemsData=(): ItemsDataResult =>{
    const pathname = usePathname();
    const eventUrl = getEventUrl(pathname);

    const mySetting=useGetMySettingQuery(eventUrl);
    const items=useGetAuctionItemsQuery(eventUrl);
    const money=useGetMoneyRaisedQuery(eventUrl);

    return {
        isLoading:{
            mySetting: mySetting.isLoading,
            items: items.isLoading,
            money: money.isLoading
        },
        isError:{
            mySetting: mySetting.isError,
            items: items.isError,
            money: money.isError
        },
        data: {
            mySetting: mySetting.data,
            items: items.data,
            money: money.data
        }
    };
};