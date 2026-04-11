import React from "react";
import { ItemsContext } from "./ItemsContext";
import { useEffect, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";

function ItemsProvider({ children }) {
  // Initializing state from localStorage
  const initialCartState = (() => {
    const saved = localStorage.getItem("cart");
    const initialValue = JSON.parse(saved);
    return (
      initialValue || {
        items: [],
        cartNumber: 0,
      }
    );
  })();

  const [cart, dispatch] = useReducer(cartReducer, initialCartState);

  useEffect(() => {
    if (cart !== undefined && cart !== null)
      localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <ItemsContext.Provider value={{ cart, dispatch }}>
      {children}
    </ItemsContext.Provider>
  );
}

export default ItemsProvider;
