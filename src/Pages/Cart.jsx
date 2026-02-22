import { useContext } from "react";
import { Link } from "react-router-dom";
import { ItemsContext } from "../context/ItemsContext";

export default function Cart() {
  const { products, cart } = useContext(ItemsContext);
  console.log(cart);

  if (cart.items == undefined || cart.items == null) {
    return (
      <div className="flex items-center justify-center h-screen flex-col border-2 border-amber-600">
        <div>No products on cart yet...</div>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-center h-screen flex-col border-2 border-amber-600">
        {cart.items.map((product) => {
          <div id={product.id}>
            <img src={product.image} alt="product image" />
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </div>;
        })}
      </div>
    );
  }
}
