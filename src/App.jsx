import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import FetchShopItems from "./components/FetchShopItems";
import { ItemsContext } from "./context/ItemsContext";
import { useEffect, useState } from "react";

export default function App() {
  const [products, setProducts] = useState();

  useEffect(() => {
    async function test() {
      const req = await FetchShopItems();
      const res = await req.json();
      setProducts(res);
    }
    test();
  }, []);

  return (
    <ItemsContext.Provider value={{ products, setProducts }}>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Outlet />
      </main>
    </ItemsContext.Provider>
  );
}
