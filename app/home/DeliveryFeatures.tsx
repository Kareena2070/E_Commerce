"use client";

import { Clock, ShieldCheck, Truck, Percent } from "lucide-react";

export default function DeliveryFeatures({ cols = "grid-cols-4", className = "" }) {
  const features = [
    {
      icon: Clock,
      title: "10 Minutes Delivery",
      subtitle: "Fastest delivery in your area",
    },
    {
      icon: ShieldCheck,
      title: "Best Quality",
      subtitle: "Top quality products guaranteed",
    },
    {
      icon: Truck,
      title: "Free Delivery",
      subtitle: "On orders above ₹199",
    },
    {
      icon: Percent,
      title: "Best Prices",
      subtitle: "Price match guarantee",
    },
  ];

  return (
    <section className="w-full bg-gray-100 border-y">
    <div className={`w-full border rounded-lg p-4 bg-gray-50 ${className}`}>
      <div className={`grid ${cols} gap-6`}>
        {features.map((feature, index) => (
          <div key={index} className="flex gap-3 items-center ">
            <div className="text-green-500 bg-green-100 p-2 rounded">
              {features.icon}
            </div>
            <div>
              <h1 className="text-sm font-semibold leading-tight">{feature.title}</h1>
              <p className="text-xs">{feature.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
}
