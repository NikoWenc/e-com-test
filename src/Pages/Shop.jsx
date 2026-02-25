import { Outlet } from "react-router-dom";
import { useContext, useState } from "react";
import { ItemsContext } from "../context/ItemsContext";
import LoadingPage from "../components/LoadingPage";
import SideFilter from "../components/SideFilter";

export default function Shop() {
  const { products, cart } = useContext(ItemsContext);
  const [activeCategory, setActiveCategory] = useState([]);

  let loading = true;
  products ? (loading = false) : (loading = true);

  const displayProducts =
    activeCategory.length === 0
      ? products
      : products.filter((item) => activeCategory.includes(item.category));

  function filterClick(category) {
    setActiveCategory((prev) => {
      if (prev.includes(category)) {
        return prev.filter((item) => item !== category);
      } else {
        return [...prev, category];
      }
    });
  }

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <div className="bg-white flex">
          <div className="flex mx-auto max-w-2xl px-4 py-25 sm:px-6 sm:py-30 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Productsss</h2>
            <div>
              <SideFilter
                onClick={filterClick}
                activeCategory={activeCategory}
              />
            </div>
            {/* for searching */}
            <div className="grid grid-cols-1 gap-x-6 gap-y-15 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              <Outlet context={{ products: displayProducts, cart }} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
