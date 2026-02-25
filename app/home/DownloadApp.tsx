"use client";

import { Smartphone, Star } from "lucide-react";

export default function DownloadApp() {
  return (
    <section className="bg-black text-white py-14 px-4 md:px-24 lg:px-28">
      <div className="w-full mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Left Content */}
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold mb-4">
            Download the app now
          </h2>

          <p className="text-gray-400 mb-6">
            Get exclusive app-only deals, order tracking, and faster
            checkout.
          </p>

          <button className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-lg font-medium hover:bg-gray-200 transition">
            <Smartphone size={18} />
            Get the App
          </button>
        </div>

        {/* Right Stats */}
        <div className="flex gap-12 text-center">
          
          <div>
            <p className="text-yellow-400 text-3xl font-bold">
              10L+
            </p>
            <p className="text-gray-400 text-sm">
              Downloads
            </p>
          </div>

          <div>
            <p className="text-yellow-400 text-3xl font-bold flex items-center justify-center gap-1">
              4.8 <Star size={20} fill="currentColor" />
            </p>
            <p className="text-gray-400 text-sm">
              Rating
            </p>
          </div>

          <div>
            <p className="text-yellow-400 text-3xl font-bold">
              50K+
            </p>
            <p className="text-gray-400 text-sm">
              Reviews
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
