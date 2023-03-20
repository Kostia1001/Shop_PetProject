import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const state = {
  cartProducts: [],
  cartSum: 0,
  cartCount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: state,
  reducers: {
    addToItemCart: (state, action) => {
      state.cartProducts.push({ ...action.payload, cartId: uuidv4() });
      state.cartSum = state.cartProducts.reduce(
        (sum, item) => sum + +item.price,
        0
      );
      state.cartCount = state.cartProducts.length;
    },
    removeFromItemCart: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (itemCart) => itemCart.cartId !== action.payload
      );
      state.cartSum = state.cartProducts.reduce(
        (sum, item) => sum + +item.price,
        0
      );
      state.cartCount = state.cartProducts.length;
    },
  },
});

export const { addToItemCart, removeFromItemCart } = cartSlice.actions;

export default cartSlice.reducer;
