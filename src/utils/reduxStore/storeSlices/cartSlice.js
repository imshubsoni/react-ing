import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeItemFromCart: (state, action) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

// export actions which can be used to update state of cart
export const { addItemToCart, removeItemFromCart, clearCart } =
  cardSlice.actions;

// Export reducer which needs to be added in main store
export default cardSlice.reducer;
