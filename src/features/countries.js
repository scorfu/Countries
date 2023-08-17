import { createSlice } from "@reduxjs/toolkit";
import { fetchCountriesData } from "../fetch/fetch";

const initialState = {
    countries: [],
    country: ['country']
}

const countriesSlice = createSlice({
    name: "countries",
    initialState,
    reducers: {
        setCountries: (state, action) => {
            state.countries = action.payload;
        },
        setCountry: (state, action) => {
            state.country = action.payload;
        }
    }
});

export const { setCountries, setCountry } = countriesSlice.actions;

export const fetchAndSetCountries = () => async dispatch => {
    try {
        const countriesData = await fetchCountriesData();
        dispatch(setCountries(countriesData));
    } catch (error) {
        console.error('Error fetching and setting countries:', error);
    }
};

export default countriesSlice.reducer;