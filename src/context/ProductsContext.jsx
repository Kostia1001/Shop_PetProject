import { useReducer, createContext } from "react";
import { shopReducer, initialState } from "../reducers/ProductsReducers";

export const ShopContext = createContext(null);

export const ProductProvider = ( {children} ) => {
  const [state, dispatch] = useReducer(shopReducer, initialState);

  const addToItem = (product) => {
    dispatch({ type: "ADD_TO_ITEM", payload: product });
  };

  const removeFromItem = (productId) => {
    dispatch({ type: "REMOVE_FROM_ITEM", payload: productId });
  };

  const value = {
    addToItem: addToItem,
    removeFromItem: removeFromItem,
    state: state,
  };

  return (
    <ShopContext.Provider value={value}>{ children }</ShopContext.Provider>
  );
};
