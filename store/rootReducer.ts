import { mySettingApi } from "@/api/mySetting/mySettingApi";
import { featureItemApi } from "@/features/about-us/api/featureItemApi";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    [mySettingApi.reducerPath]:mySettingApi.reducer,
    [featureItemApi.reducerPath]:featureItemApi.reducer,
})

export default rootReducer;