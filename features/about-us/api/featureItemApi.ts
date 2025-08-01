import config from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const featureItemApi = createApi({
  reducerPath: "featureItemApi",

  baseQuery: fetchBaseQuery({
    baseUrl: config.API_URL,
  }),

  endpoints: (builder) => ({
    getFeaturedItems: builder.query({
      query: ({ eventUrl, search }) => ({
        url: `/items-type/${eventUrl}/${search}`,
        method: "GET",
      }),
    }),

    getEvents:builder.query({
      query: (eventUrl) => ({
        url: `/event/fetch/${eventUrl}`,
        method: "GET",  
      })
    }),

    getTikets:builder.query({
      query: (eventUrl) => ({
        url: `/ticketSetting/${eventUrl}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetFeaturedItemsQuery,useGetEventsQuery ,useGetTiketsQuery} = featureItemApi;
