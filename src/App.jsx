import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ItemsContext } from "./context/ItemsContext";
import { useEffect, useReducer } from "react";
import { cartReducer } from "./reducer/cartReducer";
import { AuthProvider } from "./context/AuthProvider";

export default function App() {
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
    <AuthProvider>
      <ItemsContext.Provider
        value={{
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
    </AuthProvider>
  );
}
