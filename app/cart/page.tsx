"use client";

import Image from "next/image";
import { useCart } from "../context/CartContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Trash } from 'lucide-react';

export default function CartPage() {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useCart();

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const packaging = 5;
  const platformFee = Math.round(subtotal * 0.05);
  const total = subtotal + packaging + platformFee;

  const totalItems = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

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
              <div className="md:col-span-2 space-y-5">
                <h1 className="text-2xl md:text-3xl font-semibold mb-4">
                  Shopping Cart ({totalItems} items)
                </h1>

                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white p-4 md:p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition"
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">

                      {/* LEFT SECTION */}
                      <div className="flex gap-4 items-center">
                        <div className="relative w-20 h-20 flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                             sizes="(max-width: 768px) 100vw, 
         (max-width: 1200px) 50vw, 
         25vw"
                            className="object-cover rounded-lg"
                          />
                        </div>

                        <div>
                          <h2 className="font-medium text-base md:text-lg">
                            {item.name}
                          </h2>
                          <p className="text-sm text-gray-500">
                            {item.weight}
                          </p>
                          <p className="font-semibold mt-1">
                            ₹{item.price}
                          </p>
                        </div>
                      </div>

                      {/* RIGHT SECTION */}
                      <div className="flex flex-wrap items-center gap-4 sm:gap-6">

                        {/* Quantity */}
                        <div className="flex items-center bg-gray-100 rounded-lg overflow-hidden">
                          <button
                            className="px-3 py-1 text-lg hover:bg-gray-200 transition"
                            onClick={() => decreaseQty(item.id)}
                          >
                            -
                          </button>

                          <span className="px-4 font-medium">
                            {item.quantity}
                          </span>

                          <button
                            className="px-3 py-1 text-lg hover:bg-gray-200 transition"
                            onClick={() => increaseQty(item.id)}
                          >
                            +
                          </button>
                        </div>

                        {/* Item Total */}
                        <p className="font-semibold text-base md:text-lg">
                          ₹{item.price * item.quantity}
                        </p>

                        {/* Remove */}
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 text-sm hover:underline"
                        >
                           <Trash />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* RIGHT - ORDER SUMMARY */}
              <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-200 shadow-sm h-fit md:sticky md:top-24">
                <h2 className="text-lg md:text-xl font-semibold mb-5">
                  Order Summary
                </h2>

                <div className="flex justify-between mb-3 text-gray-700 text-sm md:text-base">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>

                <div className="flex justify-between mb-3 text-gray-700 text-sm md:text-base">
                  <span>Packaging</span>
                  <span>₹{packaging}</span>
                </div>

                <div className="flex justify-between mb-4 text-gray-700 text-sm md:text-base">
                  <span>Platform Fee (5%)</span>
                  <span>₹{platformFee}</span>
                </div>

                <hr className="my-4" />

                <div className="flex justify-between font-semibold text-base md:text-lg">
                  <span>Total</span>
                  <span>₹{total}</span>
                </div>

                <button className="mt-6 w-full bg-green-600 hover:bg-green-700 transition text-white py-2.5 rounded-xl font-semibold text-sm md:text-base">
                  Proceed to Checkout
                </button>
              </div>

            </div>
          )}

        </div>
      </div>

      <Footer />
    </div>
  );
}