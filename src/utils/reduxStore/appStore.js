import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./storeSlices/cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
