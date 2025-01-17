import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cryptoBMC: [],
};

const cryptoSlice = createSlice({
    name: "crypto",
    initialState,
    reducers: {
        setCryptoBMC: (state, action) => {
            state.cryptoBMC = action.payload;
        },
    },
});

export const { setCryptoBMC } = cryptoSlice.actions;

export default cryptoSlice.reducer;
