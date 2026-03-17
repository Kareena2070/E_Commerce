"use client";

import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartItems from "./CartItems";
import OrderSummary from "./OrderSummary";


export default function CartPage() {
  const { cart} = useCart();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex-1 bg-gray-50 py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4">

          {cart.length === 0 ? (
            <div className="flex justify-center items-center h-64">
              <h1 className="text-2xl md:text-3xl font-semibold">
                Your cart is empty
              </h1>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {/* LEFT - ITEMS */}
              <CartItems />

              {/* RIGHT - ORDER SUMMARY */}
              <OrderSummary />

            </div>
          )}

        </div>
      </div>

      <Footer />
    </div>
  );
}