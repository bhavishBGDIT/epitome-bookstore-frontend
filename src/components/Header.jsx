import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Header = ({ search, setSearch }) => {
  const { cartCount } = useCart();

  return (
    <header className="bg-[#131921] text-white px-4 py-3">
      <div className="max-w-[1500px] mx-auto flex flex-wrap items-center gap-4">
        <h1 className="text-2xl font-bold whitespace-nowrap">
          Epitome<span className="text-orange-400">Books</span>
        </h1>

        <div className="flex flex-1 min-w-[200px]">
          <input
            type="text"
            placeholder="Search books by title or publisher"
            value={search || ""}
            onChange={(e) => setSearch && setSearch(e.target.value)}
            className="w-full px-4 py-2 rounded-l-md text-black bg-white outline-none"
          />
          <button className="bg-orange-400 hover:bg-orange-500 text-black px-5 rounded-r-md">
            🔍
          </button>
        </div>

        <button className="font-semibold hover:text-orange-300">
          Account
        </button>

        <Link to="/cart" className="relative font-semibold hover:text-orange-300">
          🛒 Cart
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-orange-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;
