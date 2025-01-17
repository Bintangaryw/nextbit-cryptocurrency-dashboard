import { combineReducers } from "@reduxjs/toolkit";
import categoriesReducer from "./categoriesReducers";
import cryptoReducer from "./cryptoReducers";

export default combineReducers({
    categories: categoriesReducer,
    crypto: cryptoReducer,
});
