import Image from "next/image";
import { useCart } from "../context/CartContext";
import { Trash, IndianRupee } from 'lucide-react';

function CartItems() {
    const { cart, increaseQty, decreaseQty, removeFromCart } = useCart();


    const subtotal = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const totalItems = cart.reduce(
        (acc, item) => acc + item.quantity,
        0
    );

    return (
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

                        {/* Left section */}
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
                                <p className="font-semibold mt-1 flex items-center">
                                    <IndianRupee size={15} />{item.price}
                                </p>
                            </div>
                        </div>

                        {/* right section */}
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

                            {/* Total items*/}
                            <p className="font-semibold text-base md:text-lg flex items-center">
                                <IndianRupee size={15} />{item.price * item.quantity}
                            </p>

                            {/* Remove */}
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500 text-sm hover:underline"
                            >
                                <Trash size={25} />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CartItems