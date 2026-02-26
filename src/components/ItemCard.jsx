import { useOutletContext } from "react-router-dom";
import AddToCartBTN from "./AddToCartBTN";

export default function ItemCard() {
  const { products } = useOutletContext();

  return (
    <>
      {products.map((product) => (
        <div key={product.id} className="shadow-md p-3">
          <a className="group">
            <img
              alt={"test Pic"}
              src={product.image}
              className="aspect-square w-full rounded-lg bg-gray-200 object-cover xl:aspect-7/8"
            />
            <h3 className="mt-4 text-sm text-gray-700 w-full h-20">
              {product.title}
            </h3>
            <p className="mt-10 text-lg font-medium text-gray-900">
              ${product.price}
            </p>
            {/* buttons */}
            <AddToCartBTN product={product} />
          </a>
        </div>
      ))}
    </>
  );
}
