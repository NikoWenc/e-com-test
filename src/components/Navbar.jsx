import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ItemsContext } from "../context/ItemsContext";

export default function Navbar() {
  const { cart } = useContext(ItemsContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const cartNumberStyle =
    cart.cartNumber <= 0
      ? "hidden"
      : "absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-amber-300 text-[12px] font-bold text-black";

  return (
    <nav className="fixed top-0 z-50 w-full bg-gray-500 shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="shrink-0">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <h1 className="text-3xl">-👕-</h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className="text-xl text-white hover:text-yellow-500 transition-colors"
              >
                Home
              </Link>
              <Link
                to="shop"
                className="text-xl text-white hover:text-yellow-500 transition-colors"
              >
                Shop
              </Link>
              <Link
                to="cart"
                className="relative text-xl text-white hover:text-yellow-500 transition-colors"
              >
                Cart
                <span className={cartNumberStyle}>{cart.cartNumber}</span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-600 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon for menu */}
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-8 w-8`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              {/* Icon for close */}
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-8 w-8`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${isMenuOpen ? "block" : "hidden"} md:hidden bg-gray-600`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
          <Link
            to="/"
            onClick={() => setIsMenuOpen(false)}
            className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-500 hover:text-yellow-500"
          >
            Home
          </Link>
          <Link
            to="shop"
            onClick={() => setIsMenuOpen(false)}
            className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-500 hover:text-yellow-500"
          >
            Shop
          </Link>
          <Link
            to="cart"
            onClick={() => setIsMenuOpen(false)}
            className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-500 hover:text-yellow-500"
          >
            Cart ({cart.cartNumber})
          </Link>
        </div>
      </div>
    </nav>
  );
}
