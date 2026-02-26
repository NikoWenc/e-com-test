import { useOutletContext } from "react-router-dom";
import { ItemsContext } from "../context/ItemsContext";
import AddToCartBTN from "./AddToCartBTN";

export default function CartItems() {
  const { cart } = useOutletContext(ItemsContext);

  return (
    <div className="space-y-6">
      {cart.items.map((product) => (
        <div
          key={product.id}
          className="flex flex-col sm:flex-row w-full gap-6 items-center shadow-sm border border-gray-100 rounded-xl p-4 sm:p-6 bg-white transition-shadow hover:shadow-md"
        >
          {/* Product Image */}
          <div className="flex items-center justify-center w-32 h-32 sm:w-40 sm:h-40 shrink-0 bg-gray-50 rounded-lg p-2">
            <img
              className="max-w-full max-h-full object-contain"
              src={product.image}
              alt={product.title}
            />
          </div>

          {/* Product Info */}
          <div className="grow text-center sm:text-left">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 line-clamp-2">
              {product.title}
            </h2>
            <p className="text-gray-500 mt-2 text-sm sm:text-base line-clamp-3">
              {product.description}
            </p>
            <p className="mt-4 text-2xl font-bold text-gray-900">
              ${product.price}
            </p>
          </div>

          {/* Quantity Controls */}
          <div className="flex flex-col items-center justify-center gap-4 bg-gray-50 p-4 rounded-xl w-full sm:w-auto min-w-35">
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
              Quantity
            </span>
            <AddToCartBTN product={product} />
          </div>
        </div>
      ))}
    </div>
  );
}
