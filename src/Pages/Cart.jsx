import { useContext } from "react";
import { ItemsContext } from "../context/ItemsContext";
import { Outlet, Link } from "react-router-dom";

export default function Cart() {
  const { cart } = useContext(ItemsContext);

  if (cart.items.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] mt-20 flex-col px-4 text-center">
        <div className="text-2xl sm:text-4xl font-semibold text-gray-700">
          Your cart is empty...
        </div>
        <p className="mt-4 text-gray-500">
          Looks like you haven't added anything yet.
        </p>
        <Link to="/shop">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-lg transition-all duration-200 shadow-md active:scale-95 mt-8 text-xl sm:text-2xl">
            Go Shopping
          </button>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="pt-24 pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-8">
            Cart 🛒
          </h1>
          <div className="grid grid-cols-1 gap-8">
            <Outlet context={{ cart }} />
          </div>
        </div>
      </div>
    );
  }
}
