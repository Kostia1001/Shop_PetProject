import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const state = {
  products: [],
  wishlistCount: 0,
};

const productSlice = createSlice({
  name: "product",
  initialState: state,
  reducers: {
    addToItem: (state, action) => {
      state.products.push({ ...action.payload, wishListId: uuidv4() });
      state.wishlistCount = state.products.length;
    },
    removeFromItem: (state, action) => {
      state.products = state.products.filter(
        (product) => product.wishListId !== action.payload
      );
      state.wishlistCount = state.products.length;
    },
  },
});

export const { addToItem, removeFromItem } = productSlice.actions;

export default productSlice.reducer;
