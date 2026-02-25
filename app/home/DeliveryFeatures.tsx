"use client";

import { Clock, ShieldCheck, Truck, Percent } from "lucide-react";

export default function DeliveryFeatures() {
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
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="flex items-center gap-4"
              >
                {/* Icon Box */}
                <div className="bg-green-100 text-green-600 p-3 rounded-xl">
                  <Icon size={22} />
                </div>

                {/* Text */}
                <div>
                  <h3 className="font-semibold text-sm md:text-base">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-gray-600">
                    {feature.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
