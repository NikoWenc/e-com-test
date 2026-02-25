import { Outlet } from "react-router-dom";
import { useContext, useState } from "react";
import { ItemsContext } from "../context/ItemsContext";
import LoadingPage from "../components/LoadingPage";
import SideFilter from "../components/SideFilter";

export default function Shop() {
  const { products, cart } = useContext(ItemsContext);
  const [activeCategory, setActiveCategory] = useState({
    products: [],
    prices: [],
  });

  const hasProductFilters = activeCategory.products.length > 0;
  const hasPriceFilters = activeCategory.prices.length > 0;

  const displayProducts =
    !hasProductFilters && !hasPriceFilters
      ? products
      : products.filter((item) => {
          // Match product category if any are selected
          const matchesCategory = hasProductFilters
            ? activeCategory.products.includes(item.category)
            : true;

          // Match price if any are selected
          const matchesPrice = hasPriceFilters
            ? activeCategory.prices.some((maxPrice) => item.price <= maxPrice)
            : true;

          return matchesCategory && matchesPrice;
        });

  function filterClick(category, type) {
    setActiveCategory((prev) => {
      const isPresent = prev[type].includes(category);
      return {
        ...prev,
        [type]: isPresent
          ? prev[type].filter((i) => i !== category)
          : [...prev[type], category],
      };
    });
  }

  return (
    <>
      {!products ? (
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
