import config from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const itemDetailApi = createApi({
    reducerPath: "itemDetailApi",

    baseQuery: fetchBaseQuery({
        baseUrl: config.API_URL,
    }),

    endpoints: (builder) => ({
        getItemDetails: builder.query({
            query: ({ eventUrl, id}) => ({
                url: `/itemdetail/${eventUrl}/${id}`,
                method: "GET",
            }),
        }),
    }),
});

export const { useGetItemDetailsQuery } = itemDetailApi;