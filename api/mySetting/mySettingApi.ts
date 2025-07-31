import config from "@/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mySettingApi = createApi({

    reducerPath: "mySettingApi",

    baseQuery: fetchBaseQuery({
    baseUrl: config.API_URL,
    }),

    endpoints:(builder) => ({
      getMySetting: builder.query({
        query: (eventUrl) => ({
            url: `mysetting/${eventUrl}`,
            method: "GET"
        })
      }),
})
});


export const { useGetMySettingQuery } = mySettingApi;