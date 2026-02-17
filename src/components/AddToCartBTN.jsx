import { useState } from "react";

export default function AddToCartBTN() {
  const [addedToCart, setAddedToCart] = useState(false);
  const [counter, setCouter] = useState(0);

  return (
    <>
      {addedToCart && counter > 0 ? (
        <div className="flex justify-center items-center gap-10 mt-5">
          <button
            onClick={() => setCouter(counter - 1)}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-lg transition-colors duration-200 shadow-md active:scale-95 text-1xl"
          >
            -
          </button>
          <div className="flex justify-center items-center">{counter}</div>
          <button
            onClick={() => setCouter(counter + 1)}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-lg transition-colors duration-200 shadow-md active:scale-95 text-1xl"
          >
            +
          </button>
        </div>
      ) : (
        <button
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded-lg transition-colors duration-200 shadow-md active:scale-95 text-1xl mt-5"
          onClick={() => {
            setAddedToCart(true);
            setCouter(counter + 1);
            console.log(addedToCart);
          }}
        >
          Add to Cart
        </button>
      )}
    </>
  );
}
