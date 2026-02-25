import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import FetchShopItems from "./components/FetchShopItems";
import { ItemsContext } from "./context/ItemsContext";
import { useEffect, useState } from "react";

export default function App() {
  const [products, setProducts] = useState();
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    const initialValue = JSON.parse(saved);
    return (
      initialValue || {
        items: [],
        cartNumber: 0,
      }
    );
  });

  useEffect(() => {
    const controller = new AbortController();

    async function test() {
      const req = await FetchShopItems();
      const res = await req.json();
      setProducts(res);
      console.log(res);
    }
    test();

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
        setCart,
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
