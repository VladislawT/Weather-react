import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentWeatherSliceReducer from './slices/currentWeatherSlice';

const rootReducer = combineReducers({
    currentWeatherSliceReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddlewere => getDefaultMiddlewere
    ({
        serializableCheck: false,
    })
    
});

export type Rootstate = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];