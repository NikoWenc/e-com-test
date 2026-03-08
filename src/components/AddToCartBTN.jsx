import { useContext } from "react";
import { ItemsContext } from "../context/ItemsContext";

export default function AddToCartBTN({ product }) {
  const { cart, dispatch } = useContext(ItemsContext);

  // Find if the item is already in the cart and what its quantity is
  const cartItem = cart.items.find((item) => item.id === product.id);
  const isAddedToCart = cartItem ? cartItem.addedToCart : false;
  const quantityAdded = cartItem ? cartItem.quantityAdded : 0;

  // Dispatch functions for the reducer
  function handleAddToCart() {
    dispatch({ type: "ADD_TO_CART", payload: product });
  }

  function handleIncrement() {
    dispatch({ type: "INCREMENT", payload: product.id });
  }

  function handleDecrement() {
    dispatch({ type: "DECREMENT", payload: product.id });
  }

  return (
    <>
      {isAddedToCart ? (
        <div className="flex justify-center items-center gap-5 mt-2">
          <button
            onClick={handleDecrement}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-lg transition-colors duration-200 shadow-md active:scale-95 text-1xl"
          >
            -
          </button>
          <div className="flex justify-center items-center">
            {quantityAdded}
          </div>
          <button
            onClick={handleIncrement}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-lg transition-colors duration-200 shadow-md active:scale-95 text-1xl"
          >
            +
          </button>
        </div>
      ) : (
        <button
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-lg transition-colors duration-200 shadow-md active:scale-95 text-1xl mt-2"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      )}
    </>
  );
}
