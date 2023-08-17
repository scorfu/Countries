import { configureStore } from "@reduxjs/toolkit";
import countriesSlice  from "../features/countries";

export const store = configureStore({
    reducer: {
        countries: countriesSlice,
    }
})