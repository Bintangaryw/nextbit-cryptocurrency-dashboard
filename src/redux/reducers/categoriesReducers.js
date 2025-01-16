import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    trending: [],
    topGainers: [],
    topLosers: [],
};

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload;
        },
        setTrending: (state, action) => {
            state.trending = action.payload;
        },
        setTopGainers: (state, action) => {
            state.topGainers = action.payload;
        },
        setTopLosers: (state, action) => {
            state.topLosers = action.payload;
        },
    },
});

export const { setCategories, setTrending, setTopGainers, setTopLosers } = categoriesSlice.actions;

export default categoriesSlice.reducer;
