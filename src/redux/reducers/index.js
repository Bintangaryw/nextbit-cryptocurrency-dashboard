import { combineReducers } from "@reduxjs/toolkit";
import categoriesReducer from "./categoriesReducers";

export default combineReducers({
    categories: categoriesReducer,
});
