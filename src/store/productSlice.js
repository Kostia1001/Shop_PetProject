import { createSlice } from "@reduxjs/toolkit";

const state = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState: state,
  reducers: {
    addToItem: (state, action) => {
      console.log(action);
      state.products.push(action.payload);
    },
    removeFromItem: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

export const { addToItem, removeFromItem } = productSlice.actions;

export default productSlice.reducer;
