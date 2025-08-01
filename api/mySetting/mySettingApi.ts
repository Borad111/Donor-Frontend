import config from "@/config";
import { SettingResponse } from "@/types/settingTypes";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mySettingApi = createApi({

    reducerPath: "mySettingApi",

    baseQuery: fetchBaseQuery({
    baseUrl: config.API_URL,
    }),

    endpoints:(builder) => ({
      getMySetting: builder.query<SettingResponse,string>({
        query: (eventUrl) => ({
            url: `mysetting/${eventUrl}`,
            method: "GET",
            suspense: true, // Enable suspense for this query
        })
      }),
})
});


export const { useGetMySettingQuery } = mySettingApi;