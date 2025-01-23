import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cryptoBMC: [],
    totalPages: 0,
};

const cryptoSlice = createSlice({
    name: "crypto",
    initialState,
    reducers: {
        setCryptoBMC: (state, action) => {
            state.cryptoBMC = action.payload;
        },
        setTotalPage: (state, action) => {
            state.totalPages = action.payload;
        },
    },
});

export const { setCryptoBMC, setTotalPage } = cryptoSlice.actions;

export default cryptoSlice.reducer;
