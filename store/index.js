import {configureStore} from "@reduxjs/toolkit";
import habitReducer from "./slices/habitsSlice"
import userReducer from "./slices/userSlice"
import filterReducer from "./slices/filtersSlice"
import { calendarApi } from "./slices/api/calendarApi";

export default configureStore({
    reducer: {
        habits: habitReducer,
        user: userReducer,
        filters: filterReducer,
        [calendarApi.reducerPath]: calendarApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(calendarApi.middleware)
})