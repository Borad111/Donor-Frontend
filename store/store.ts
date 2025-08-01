import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import { mySettingApi } from "@/api/mySetting/mySettingApi";

export const appStore=configureStore({
    reducer:rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(mySettingApi.middleware),
    devTools:true,
});

export type RootState = ReturnType<typeof appStore.getState>;
