export const shopReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD_TO_ITEM":
      return { products: [...state.products, payload] };
    case "REMOVE_FROM_ITEM":
      const filteredProducts = state.products.filter(
        (product) => product.id !== payload
      );
      return {
        products: filteredProducts,
      };
    default:
      return state;
  }
};

export const initialState = {
  products: [],
};
