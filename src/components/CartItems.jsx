import { useOutletContext } from "react-router-dom";
import { ItemsContext } from "../context/ItemsContext";
import AddToCartBTN from "./AddToCartBTN";

export default function Cart() {
  const { cart } = useOutletContext(ItemsContext);

  return (
    <>
      {cart.items.map((product) => (
        <div
          key={product.id}
          className="flex w-full gap-5 items-center shadow-md px-10 py-5"
        >
          <div className="flex items-center justify-center flex-1">
            <img
              className="w-20 h-25"
              src={product.image}
              alt="product image"
            />
          </div>
          <div className="flex-4">
            <h1 className="text-3xl">{product.title}</h1>
            <p className="text-[16px] mt-2">{product.description}</p>
            <p className="pt-10 text-2xl">${product.price}</p>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center gap-3">
            <AddToCartBTN product={product} />
          </div>
        </div>
      ))}
    </>
  );
}
