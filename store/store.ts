import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { mySettingApi } from "@/api/mySetting/mySettingApi";
import { featureItemApi } from "@/features/about-us/components/api/featureItemApi";

export const appStore=configureStore({
    reducer:rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(mySettingApi.middleware,featureItemApi.middleware),
    devTools:true,
});

export type RootState = ReturnType<typeof appStore.getState>;
