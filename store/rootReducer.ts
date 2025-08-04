import { mySettingApi } from "@/api/mySetting/mySettingApi";
import { featureItemApi } from "@/features/about-us/api/featureItemApi";
import { itemsApi } from "@/features/items/api/itemsApi";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    [mySettingApi.reducerPath]:mySettingApi.reducer,
    [featureItemApi.reducerPath]:featureItemApi.reducer,
    [itemsApi.reducerPath]:itemsApi.reducer,
})

export default rootReducer;