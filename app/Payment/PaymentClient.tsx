"use client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";

function PaymentClient() {
    const { user } = useAuth();

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Navbar />
            <main className="flex-1 flex items-center justify-center px-4">
                {!user ? (
                    <div className="bg-white p-8 rounded-2xl shadow-md text-center max-w-md w-full">
                        <h2 className="text-xl font-semibold mb-3">
                            Please login to checkout
                        </h2>

                        <p className="text-gray-500 mb-6">
                            You need to be logged in to place an order
                        </p>

                        <Link
                            href="/login"
                            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium"
                        >
                            Login to Continue
                        </Link>
                    </div>
                ) :(
                    <div></div>
                )}
            </main>

            <Footer />
        </div>
    );
}

export default PaymentClient