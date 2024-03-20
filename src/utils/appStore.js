import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import  restroReducer from './restroSlice'
const appStore = configureStore({
    reducer : {
        cart : cartReducer,
        restro :restroReducer
    }
});

export default appStore;