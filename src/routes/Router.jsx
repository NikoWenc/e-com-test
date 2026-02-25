import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Shop from "../Pages/Shop";
import Cart from "../Pages/Cart";
import ItemCard from "../components/ItemCard";
import AddToCartBTN from "../components/AddToCartBTN";
import CartItems from "../components/CartItems";
import SideFilter from "../components/SideFilter";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
        children: [
          {
            index: true,
            element: <ItemCard />,
          },
        ],
      },
      {
        path: "cart",
        element: <Cart />,
        children: [
          {
            index: true,
            element: <CartItems />,
          },
        ],
      },
      {
        element: <SideFilter />,
      },
    ],
  },
]);

export default router;
