import { IndianRupee } from 'lucide-react';
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";

function OrderSummary() {
    const { cart } = useCart();
    const router = useRouter();

    const subtotal = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const totalItems = cart.reduce(
        (acc, item) => acc + item.quantity,
        0
    );

    const packaging = 5;
    const platformFee = Math.round(subtotal * 0.05);
    const total = subtotal + packaging + platformFee;

    return (
        <div className="bg-white p-5 md:p-6 rounded-2xl border border-gray-200 shadow-sm h-fit md:sticky md:top-24">
            <h2 className="text-lg md:text-xl font-semibold mb-5">
                Order Summary
            </h2>

            <div className="flex justify-between mb-3 text-gray-700 text-sm md:text-base">
                <span>Subtotal</span>
                <span className="flex items-center">  <IndianRupee size={13} />{subtotal}</span>
            </div>

            <div className="flex justify-between mb-3 text-gray-700 text-sm md:text-base">
                <span>Packaging</span>
                <span className="flex items-center">  <IndianRupee size={13} />{packaging}</span>
            </div>

            <div className="flex justify-between mb-4 text-gray-700 text-sm md:text-base">
                <span>Platform Fee (5%)</span>
                <span className="flex items-center">  <IndianRupee size={13} />{platformFee}</span>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between font-semibold text-base md:text-lg">
                <span>Total</span>
                <span className="flex items-center">  <IndianRupee size={15} />{total}</span>
            </div>

            <button
                onClick={() => router.push("/Payment")}
                className="mt-6 w-full bg-green-600 hover:bg-green-700 transition text-white py-2.5 rounded-xl font-semibold text-sm md:text-base">
                Proceed to Checkout
            </button>
        </div>
    );
}

export default OrderSummary