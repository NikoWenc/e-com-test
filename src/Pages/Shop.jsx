import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { ItemsContext } from "../context/ItemsContext";
import LoadingPage from "../components/LoadingPage";

export default function Shop() {
  const { products } = useContext(ItemsContext);
  let loading = true;
  products ? (loading = false) : (loading = true);

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-25 sm:px-6 sm:py-30 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Productsss</h2>
            {/* for searching */}
            <div className="grid grid-cols-1 gap-x-6 gap-y-15 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              <Outlet context={products} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
