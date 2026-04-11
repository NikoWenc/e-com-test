import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { AuthProvider } from "./context/AuthProvider";
import ItemsProvider from "./context/ItemsProvider";

export default function App() {
  return (
    <AuthProvider>
      <ItemsProvider>
        <nav>
          <Navbar />
        </nav>
        <main>
          <Outlet />
        </main>
      </ItemsProvider>
    </AuthProvider>
  );
}
