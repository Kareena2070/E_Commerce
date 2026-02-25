"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLocation } from "../context/LocationContext";
import { geocodeAddress } from "../services/location.service";
import { Address } from "../types/address";

export default function LocationPage() {
  const router = useRouter();
  const { addAddress } = useLocation();

  const [formData, setFormData] = useState({
    fullAddress: "",
    city: "",
    state: "",
    pincode: "",
    landmark: "",
    label: "Home",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullAddress || !formData.city || !formData.pincode) {
      alert("Please fill required fields");
      return;
    }

    try {
      setLoading(true);

      const geoData = await geocodeAddress(
        `${formData.fullAddress}, ${formData.city}, ${formData.pincode}`
      );

      const newAddress: Address = {
        id: Date.now().toString(),
        fullAddress: formData.fullAddress,
        city: formData.city,
        state: formData.state,
        pincode: formData.pincode,
        landmark: formData.landmark,
        lat: geoData.lat,
        lng: geoData.lng,
        label: formData.label as "Home" | "Work" | "Other",
        isDefault: true,
        createdAt: new Date().toISOString(),
      };

      addAddress(newAddress);

      router.push("/");
    } catch (error) {
      alert("Invalid address. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow-lg p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Add New Address</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          name="fullAddress"
          placeholder="Full Address"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />

        <input
          name="landmark"
          placeholder="Landmark (Optional)"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />

        <input
          name="city"
          placeholder="City"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />

        <input
          name="state"
          placeholder="State"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />

        <input
          name="pincode"
          placeholder="Pincode"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        />

        <select
          name="label"
          className="w-full border p-2 rounded"
          onChange={handleChange}
        >
          <option value="Home">Home</option>
          <option value="Work">Work</option>
          <option value="Other">Other</option>
        </select>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-500 text-white p-2 rounded"
        >
          {loading ? "Saving..." : "Save Address"}
        </button>

      </form>
    </div>
  );
}
