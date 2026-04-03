import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import ItemCard from "../components/ItemCard";
import CartItems from "../components/CartItems";
import SideFilter from "../components/SideFilter";
import Login from "../pages/Login";
import ProtectedRoute from "../components/ProtectedRoute";
import UnderRepairPage from "../components/UnderRepairPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "maintenance",
        element: <UnderRepairPage />,
      },
      {
        element: <ProtectedRoute />,
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
    ],
  },
]);

export default router;
