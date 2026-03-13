"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { mockProducts } from "../../../services/products";
import DeliveryFeatures from '../../../home/DeliveryFeatures'
import { useCart } from "../../../context/CartContext";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function ClientProduct() {
    const { id } = useParams<{ id: string }>();
    const { addToCart, increaseQty, decreaseQty, getQuantity } = useCart();

    const product = mockProducts.find((p) => String(p.id) === id);

    if (!product) {
        return (
            <div className="text-center mt-20">
                <h2 className="text-xl font-semibold">Product not found</h2>
            </div>
        );
    }
    const quantity = getQuantity(product.id);
    const relatedProducts = mockProducts.filter(
        (p) => p.category === product.category && p.id !== product.id
    );

    return (
        <>
            <div className="flex flex-col min-h-screen bg-[#fff9f2]">
                <Navbar />
                <div className="max-w-7xl mx-auto px-6 py-5 grid md:grid-cols-2 gap-5 lg:gap-8 flex-1">

                    {/* Image */}
                    <div className="relative w-full h-[400px]">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover rounded-xl"
                        />
                    </div>

                    {/* Details */}
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl font-bold">{product.name}</h1>
                        <p className="text-gray-500">{product.weight}</p>
                        <div className="flex items-center gap-1 lg:gap-2 mt-2">
                            <span className="text-3xl font-bold">
                                ₹{product.price}
                            </span>
                            {product.oldPrice && (
                                <>
                                    <span className="line-through text-gray-400">
                                        ₹{product.oldPrice}
                                    </span>

                                    <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
                                        Save ₹{product.oldPrice - product.price}
                                    </span>
                                </>
                            )}

                        </div>
                        {/* Stock check */}

                        <p className="text-green-600">
                            {product.inStock ? "In Stock" : "Out of Stock"}
                        </p>

                        <div className="mt-4 mb-0 lg:mb-4">
                            <DeliveryFeatures cols="grid-cols-2" />
                        </div>

                        {/* Button condition */}
                        {product.inStock ? (
                            quantity === 0 ? (
                                <button
                                    onClick={() => addToCart(product)}
                                    className="bg-green-600 text-white px-6 py-3 rounded-lg w-fit hover:bg-green-700 transition "
                                >
                                    Add to Cart
                                </button>
                            ) : (
                                <div className="flex items-center gap-4 bg-green-600 text-white px-4 py-2 rounded-lg w-fit">
                                    <button
                                        onClick={() => decreaseQty(product.id)}
                                        className="text-lg font-bold"
                                    >
                                        -
                                    </button>

                                    <span className="font-semibold">{quantity}</span>

                                    <button
                                        onClick={() => increaseQty(product.id)}
                                        className="text-lg font-bold"
                                    >
                                        +
                                    </button>
                                </div>
                            )
                        ) : (
                            <span className="text-red-500 text-sm">Out of Stock</span>
                        )}
                    </div>
                </div>

                {/* Related Products */}
                <div className="w-full px-6 sm:px-10 md:px-28 lg:px-36 pb-10">
                    <h2 className="text-2xl font-bold mb-6">Related Products</h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-10">
                        {relatedProducts.map((item) => {
                            const qty = getQuantity(item.id);

                            return (
                                <div
                                    key={item.id}
                                    className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition duration-300 p-6 flex flex-col"
                                >
                                    {/* Image */}
                                    <div className="relative w-full h-28 lg:h-44 mb-4 overflow-hidden rounded-xl bg-gray-50">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover rounded-lg"
                                        />
                                    </div>

                                    {/* Name */}
                                    <h3 className="font-semibold text-base leading-tight line-clamp-2">
                                        {item.name}
                                    </h3>

                                    {/* Weight */}
                                    <p className="text-xs text-gray-500">{item.weight}</p>

                                    {/* Price */}
                                    <div className="flex items-center gap-2 mt-2">
                                        <span className="font-bold text-sm">₹{item.price}</span>

                                        {item.oldPrice && (
                                            <span className="line-through text-gray-400 text-xs">
                                                ₹{item.oldPrice}
                                            </span>
                                        )}
                                    </div>

                                    {/* Cart Button condition */}
                                    <div className="mt-auto pt-3">
                                        {item.inStock ? (
                                            qty === 0 ? (
                                                <button
                                                    onClick={() => addToCart(item)}
                                                    className="w-full bg-green-600 text-white text-sm font-semibold py-2.5 rounded-lg hover:bg-green-700 transition"
                                                >
                                                    ADD
                                                </button>
                                            ) : (
                                                <div className="flex items-center justify-between bg-green-600 text-white rounded-lg px-3 py-2 font-semibold">
                                                    <button onClick={() => decreaseQty(item.id)}>-</button>
                                                    <span>{qty}</span>
                                                    <button onClick={() => increaseQty(item.id)}>+</button>
                                                </div>
                                            )
                                        ) : (
                                            <span className="text-xs text-red-500">Out of stock</span>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}