"use client";

import { Percent, ArrowRight } from "lucide-react";

export default function FreshDeals() {
    return (
        <section className="bg-gradient-to-r from-green-50  to-yellow-50 p-6">
            {/* Inner Card */}
            <div className="bg-white rounded-xl shadow-sm border p-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-4 md:px-24 lg:px-24">

                {/* Left Side */}
                <div className="flex items-center gap-4">
                    {/* Icon */}
                    <div className="bg-green-100 text-green-600 p-2 rounded-xl">
                        <Percent size={22} />
                    </div>

                    {/* Text */}
                    <div>
                        <h3 className="font-semibold text-lg">
                            Fresh Deals
                        </h3>
                        <p className="text-sm text-gray-500">
                            Up to 60% off on selected items
                        </p>
                    </div>
                </div>

                {/* Right Button */}
                <button className="flex items-center justify-center gap-2 border rounded-lg px-5 py-2 text-sm font-medium hover:bg-gray-100 transition w-fit">
                    View Deals
                    <ArrowRight size={16} />
                </button>

            </div>
        </section>
    );
}
