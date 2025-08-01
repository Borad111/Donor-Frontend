import config from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FeaturedItemsResponse, EventResponse, FeaturedItemsRequest, TicketsResponse } from "../types";

export const featureItemApi = createApi({
  reducerPath: "featureItemApi",

  baseQuery: fetchBaseQuery({
    baseUrl: config.API_URL,
  }),

  endpoints: (builder) => ({

    getFeaturedItems: builder.query<FeaturedItemsResponse,FeaturedItemsRequest>({
      query: ({ eventUrl, search }) => ({
        url: `/items-type/${eventUrl}/${search}`,
        method: "GET",
      }),
    }),

    getEvents:builder.query<EventResponse,string>({
      query: (eventUrl) => ({
        url: `/event/fetch/${eventUrl}`,
        method: "GET",  
      })
    }),

    getTikets:builder.query<TicketsResponse,string>({
      query: (eventUrl) => ({
        url: `/ticketSetting/${eventUrl}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetFeaturedItemsQuery,useGetEventsQuery ,useGetTiketsQuery} = featureItemApi;
