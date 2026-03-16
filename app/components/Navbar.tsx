"use client";

import Link from "next/link";
import { Search, User, ShoppingCart, Menu, X } from "lucide-react";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import LocationSelector from "./LocationSelector";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const { cart } = useCart();

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="bg-[#FF9F1C] w-full px-2 py-2 relative shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold">
          <div className="bg-black p-2 text-white rounded">F-G</div>
          <p className="hidden sm:block">FoodyGo</p>
        </Link>

        {/* Desktop Location */}
        <div className="hidden sm:block">
          <LocationSelector />
        </div>

        {/* Search */}
        <div className="flex-1 mx-2 min-w-0">
          <div className="bg-gray-100 rounded-lg px-3 h-10 flex items-center w-full">
            <input
              type="text"
              placeholder="Search anything you are craving"
              className="bg-transparent flex-1 text-sm w-full outline-none"
            />
            <Search />
          </div>
        </div>

        {/* Auth */}
        {user ? (
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <User size={14} />
            <span>{user.name}</span>
            <button onClick={logout} className="text-red-500 text-xs ml-2">
              Logout
            </button>
          </div>
        ) : (
          <div className="hidden sm:flex gap-3 text-sm">
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </div>
        )}

        {/* Cart */}
        <Link href="/cart" className="bg-green-500 px-3 py-2 rounded-lg text-white flex gap-2 items-center">
          <ShoppingCart size={18} className="hidden sm:inline" />
          {/* Cart */}
          <span>{totalItems} items</span>
        </Link>

        {/* Hamburger (Mobile) */}
        <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Drawer */}
        {isOpen && (
          <div className="sm:hidden absolute right-2 left-2 top-16 bg-white shadow-lg rounded-lg w-full p-4 flex flex-col gap-4 z-20">
            {/* Mobile Location (Reusing Component) */}
            <LocationSelector />

            <div className="bg-black w-full h-[1px]" />

            {/* Mobile Auth */}
            {user ? (
              <Link href="/account" className="flex items-center gap-2 text-sm">
                <User size={14} />
                Account
              </Link>
            ) : (
              <Link href="/login">Login</Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
