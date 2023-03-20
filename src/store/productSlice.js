import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const state = {
  products: [],
};

const productSlice = createSlice({
  name: "product",
  initialState: state,
  reducers: {
    addToItem: (state, action) => {
      state.products.push({ ...action.payload, wishListId: uuidv4() });
    },
    removeFromItem: (state, action) => {
      state.products = state.products.filter(
        (product) => product.wishListId !== action.payload
      );
    },
  },
});

export const { addToItem, removeFromItem } = productSlice.actions;

export default productSlice.reducer;
