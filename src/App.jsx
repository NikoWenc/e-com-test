import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import fetchShopItems from "./utils/fetchShopItems";
import { ItemsContext } from "./context/ItemsContext";
import { useEffect, useState, useReducer } from "react";
import { cartReducer } from "./Reducer/cartReducer/CartReducer";

export default function App() {
  const [products, setProducts] = useState();

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
    const controller = new AbortController();

    async function getProducts() {
      try {
        const req = await fetchShopItems();
        const res = await req.json();
        setProducts(res);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error("Fetch Error:", err.message);
        }
      }
    }
    getProducts();
    return () => controller.abort();
  }, []);

  useEffect(() => {
    if (cart !== undefined && cart !== null)
      localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <ItemsContext.Provider
      value={{
        products,
        setProducts,
        cart,
        dispatch,
      }}
    >
      <nav>
        <Navbar />
      </nav>
      <main>
        <Outlet />
      </main>
    </ItemsContext.Provider>
  );
}
