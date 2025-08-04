import config from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const itemsApi = createApi({
    reducerPath: "itemsApi",

    baseQuery: fetchBaseQuery({
        baseUrl: config.API_URL,
    }),

    endpoints: (builder) => ({
        getAuctionItems: builder.query({
            query: (eventUrl) => ({
                url: `/items-type/${eventUrl}/auction`,
                method: "GET",
            }),
        }),
    }),
});

export const { useGetAuctionItemsQuery } = itemsApi;