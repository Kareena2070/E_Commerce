"use client";

import Image from "next/image";
import { mockProducts } from "../services/products";
import { MoveRight, IndianRupee } from "lucide-react";
import { useCart } from "../context/CartContext";
import Link from "next/link";

export default function Essentials() {
  const { addToCart, increaseQty, decreaseQty, getQuantity } = useCart();

  return (
    <section className="bg-[#fff9f2] py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-xl font-semibold">Dairy, Bread & Eggs</h2>
            <p className="text-sm text-gray-500">
              Daily essentials delivered fresh
            </p>
          </div>
          <Link
            href={`/Products?category=${encodeURIComponent("Dairy & Breakfast")}`} className="text-green-600 text-sm font-medium hover:underline flex items-center">
            see all <MoveRight />
          </Link>
        </div>

        {/* Product Scroll */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {mockProducts
            .filter((product) => product.category === "Dairy & Breakfast")
            .slice(0, 6).map((product) => {
              const quantity = getQuantity(product.id);
              return (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-sm border p-3"
                >
                  <Link href={`/cart/Product/${product.id}`}>
                    {/* Image Section */}
                    <div className="relative w-full h-40 rounded-lg overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />

                      {/* Discount Badge */}
                      {product.discount && (
                        <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-md">
                          {product.discount}% OFF
                        </span>
                      )}

                      {/* Delivery Badge */}
                      <span className="absolute bottom-2 left-2 bg-green-100 text-green-600 text-xs px-2 py-1 rounded-md">
                        8 MINS
                      </span>
                    </div>
                  </Link>
                  {/* Product Info */}
                  <div className="mt-3 space-y-1">
                    <h3 className="font-medium text-sm">{product.name}</h3>
                    <p className="text-xs text-gray-500">{product.weight}</p>

                    {/* Price Row */}
                    <div className="flex items-center justify-between mt-2">
                      <div>
                        <p className="font-semibold text-sm"><IndianRupee size={15} />{product.price}</p>
                        {product.oldPrice && (
                          <p className="text-xs text-gray-400 line-through">
                            <IndianRupee size={12} />{product.oldPrice}
                          </p>
                        )}
                      </div>

                      {/* Add / Stepper */}
                      {quantity > 0 ? (
                        <div className="flex items-center bg-green-600 text-white rounded-md">
                          <button
                            onClick={() => decreaseQty(product.id)}
                            className="px-2 py-1"
                          >
                            -
                          </button>
                          <span className="px-3 text-sm">{quantity}</span>
                          <button
                            onClick={() => increaseQty(product.id)}
                            className="px-2 py-1"
                          >
                            +
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => addToCart(product)}
                          className="border border-green-600 text-green-600 px-4 py-1 rounded-md text-sm font-medium hover:bg-green-50"
                        >
                          ADD
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
