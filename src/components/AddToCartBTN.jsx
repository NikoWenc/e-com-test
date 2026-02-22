import { useContext, useState } from "react";
import { ItemsContext } from "../context/ItemsContext";

export default function AddToCartBTN({ product }) {
  // add to cart button state
  const [addToCartButtonState, setAddToCartButtonState] = useState(() => {
    const getCart = localStorage.getItem("cart");
    const savedCart = JSON.parse(getCart);

    if (savedCart.items) {
      const initialValue = savedCart.items.find(
        (items) => items.id == product.id,
      );
      return initialValue?.addedToCart || false;
    }
  });

  // item quantity count
  const [quantityCounter, setQuantityCounter] = useState(() => {
    const getCart = localStorage.getItem("cart");
    const savedCart = JSON.parse(getCart);

    if (savedCart.items) {
      const initialValue = savedCart.items.find(
        (items) => items.id == product.id,
      );
      return initialValue?.quantityAdded || 0;
    }
  });

  const { setCart } = useContext(ItemsContext);

  // for the + / - quantity button
  function changeQuantity(operator) {
    const getCart = localStorage.getItem("cart");
    const savedCart = JSON.parse(getCart);

    // update quantity property
    savedCart.items.map((items) => {
      if (items.id == product.id) {
        items.quantityAdded = items.quantityAdded + operator;
      }
    });

    // update the cart items array
    const updatedItemList = savedCart.items.filter((items) => {
      if (items.id === product.id && items.quantityAdded <= 0) {
        items.addedToCart = false;
        setAddToCartButtonState(false);
        return false;
      }
      return true;
    });

    // save new array for saving to storage
    savedCart.items = updatedItemList;

    return localStorage.setItem("cart", JSON.stringify(savedCart));
  }

  // cart update
  function updateCart(operator) {
    setCart((prev) => {
      const newCount = prev.cartNumber + operator;

      const getCart = localStorage.getItem("cart");
      const savedCart = JSON.parse(getCart);

      savedCart.items.map((items) => {
        if (items.id === product.id) setQuantityCounter(items.quantityAdded);
      });

      savedCart.cartNumber = newCount;
      localStorage.setItem("cart", JSON.stringify(savedCart));

      return {
        ...prev,
        items: savedCart.items,
        cartNumber: newCount,
      };
    });
  }

  // add to cart button
  function addItemToCart() {
    const getCart = localStorage.getItem("cart");
    const savedCart = JSON.parse(getCart);

    setAddToCartButtonState(true);

    savedCart.items.push({
      ...product,
      addedToCart: true,
      quantityAdded: 1,
    });

    localStorage.setItem("cart", JSON.stringify(savedCart));
  }

  return (
    <>
      {addToCartButtonState ? (
        <div className="flex justify-center items-center gap-5 mt-5">
          <button
            onClick={() => {
              changeQuantity(-1);
              updateCart(-1);
            }}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-lg transition-colors duration-200 shadow-md active:scale-95 text-1xl"
          >
            -
          </button>
          <div className="flex justify-center items-center">
            {quantityCounter}
          </div>
          <button
            onClick={() => {
              changeQuantity(1);
              updateCart(1);
            }}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-lg transition-colors duration-200 shadow-md active:scale-95 text-1xl"
          >
            +
          </button>
        </div>
      ) : (
        <button
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-lg transition-colors duration-200 shadow-md active:scale-95 text-1xl mt-5"
          onClick={() => {
            addItemToCart();
            updateCart(1);
          }}
        >
          Add to Cart
        </button>
      )}
    </>
  );
}
