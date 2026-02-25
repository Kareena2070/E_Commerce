"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, ChevronDown } from "lucide-react";
import { useLocation } from "../context/LocationContext";
import { Address } from "../types/address";

function LocationSelector() {
  const { activeAddress, addresses, setActiveAddress, addAddress } = useLocation();
  const [showLocationMenu, setShowLocationMenu] = useState(false);

  const handleUseCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        const data = await fetch(
          `/api/reverse-geocode?lat=${latitude}&lng=${longitude}`
        ).then((res) => res.json());

        const newAddress: Address = {
          id: Date.now().toString(),
          fullAddress: data.fullAddress,
          city: "",
          state: "",
          pincode: "",
          lat: latitude,
          lng: longitude,
          label: "Home",
          isDefault: true,
          createdAt: new Date().toISOString(),
        };

        addAddress(newAddress);
        setShowLocationMenu(false);
      },
      () => {
        alert("Location permission denied");
      }
    );
  };

  return (
    <div className="flex flex-col leading-tight relative">
      <div className="text-sm font-semibold">
        Delivery in 8 minutes
      </div>

      {/* Clickable */}
      <div
        className="flex items-center gap-1 text-sm text-gray-700 font-medium cursor-pointer"
        onClick={() => setShowLocationMenu((prev) => !prev)}
      >
        <MapPin size={14} />
        <span className="max-w-[150px] truncate">
          {activeAddress ? activeAddress.fullAddress : "Select Location"}
        </span>
        <ChevronDown size={14} />
      </div>

      {/* Dropdown */}
      {showLocationMenu && (
        <div className="absolute top-full mt-2 bg-white shadow-lg rounded-lg p-4 w-72 z-30 space-y-3">

          <button
            className="w-full text-left text-sm font-medium text-green-600 hover:bg-gray-100 p-2 rounded"
            onClick={handleUseCurrentLocation}
          >
            📍 Use Current Location
          </button>

          <div className="border-t pt-2">
            <p className="text-xs text-gray-500 mb-2">
              Saved Addresses
            </p>

            {addresses.length === 0 && (
              <p className="text-sm text-gray-400">
                No saved addresses
              </p>
            )}

            {addresses.map((address) => (
              <div
                key={address.id}
                className={`p-2 rounded cursor-pointer text-sm ${
                  address.isDefault
                    ? "bg-yellow-100"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => {
                  setActiveAddress(address.id);
                  setShowLocationMenu(false);
                }}
              >
                {address.fullAddress}
              </div>
            ))}
          </div>

          <div className="border-t pt-2">
            <Link
              href="/location"
              className="text-sm font-medium text-blue-600"
              onClick={() => setShowLocationMenu(false)}
            >
              ➕ Add New Address
            </Link>
          </div>

        </div>
      )}
    </div>
  );
}

export default LocationSelector;
