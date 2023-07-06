import { configureStore, createSlice } from "@reduxjs/toolkit"
import { createSlice } from "./cartSlice";

const store = configureStore({
    reducer: {
        cart: createSlice,
    }
})

export default store;