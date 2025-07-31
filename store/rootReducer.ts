import { mySettingApi } from "@/api/mySetting/mySettingApi";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    [mySettingApi.reducerPath]:mySettingApi.reducer,
})

export default rootReducer;