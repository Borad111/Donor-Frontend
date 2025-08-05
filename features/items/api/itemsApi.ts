import config from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ItemsResponse, MoneyRaisedResponse } from "../types";

export const itemsApi = createApi({
    reducerPath: "itemsApi",

    baseQuery: fetchBaseQuery({
        baseUrl: config.API_URL,
    }),

    endpoints: (builder) => ({

        getAuctionItems: builder.query<ItemsResponse,string>({
            query: (eventUrl) => ({
                url: `/items-type/${eventUrl}/auction`,
                method: "GET",
            }),
        }),
        getMoneyRaised:builder.query<MoneyRaisedResponse,string>({
            query: (eventUrl) => ({
                url: `/totalMoneyRaised/${eventUrl}`,
                method: "GET",
            }),
        })
    }),
});

export const { useGetAuctionItemsQuery,useGetMoneyRaisedQuery } = itemsApi;