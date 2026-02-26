import { useContext } from "react";
import { Link } from "react-router-dom";
import { ItemsContext } from "../context/ItemsContext";

export default function Navbar() {
  const { cart } = useContext(ItemsContext);
  const cartNumberStyle =
    cart.cartNumber <= 0
      ? "sr-only"
      : "absolute w-5 h-5 text-[15px] font-bold -top-2.5 rounded-full bg-amber-300 ";

  return (
    <div className="flex py-5 px-30 bg-gray-500 w-screen h-20 fixed">
      <div className="grow">
        <Link to="/">
          <h1 className="text-3xl">-👕-</h1>
        </Link>
      </div>
      <div className="grow flex items-center justify-end gap-10">
        <Link to="/">
          <button className="text-2xl hover:text-yellow-500">Home</button>
        </Link>
        <Link to="shop">
          <button className="text-2xl hover:text-yellow-500">Shop</button>
        </Link>
        <Link to="cart">
          <button className="text-2xl relative hover:text-yellow-500">
            Cart <span className={cartNumberStyle}>{cart.cartNumber}</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
