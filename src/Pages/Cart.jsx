import { useContext } from "react";
import { ItemsContext } from "../context/ItemsContext";
import { Outlet, Link } from "react-router-dom";

export default function Cart() {
  const { cart } = useContext(ItemsContext);

  if (cart.items.length == 0) {
    return (
      <div className="flex items-center justify-center h-screen flex-col border-2 border-amber-600">
        <div className="text-4xl">No products on cart yet...</div>
        <Link to="/shop">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-lg transition-colors duration-200 shadow-md active:scale-95 mt-5 text-2xl">
            Shop Now!
          </button>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="pt-20">
        <div className="grid grid-cols-1 gap-x-6 gap-y-5 mx-auto max-w-2xl px-4 py-25 sm:px-6 sm:py-5 lg:max-w-7xl lg:px-8">
          <h1 className="text-7xl">Cart 🛒</h1>
          <Outlet context={{ cart }} />
        </div>
      </div>
    );
  }
}
