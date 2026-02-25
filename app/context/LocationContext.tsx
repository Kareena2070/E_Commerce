"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Address } from "../types/address";

interface LocationContextType {
  addresses: Address[];
  activeAddress: Address | null;
  addAddress: (address: Address) => void;
  setActiveAddress: (id: string) => void;
}

const LocationContext = createContext<LocationContextType | null>(null);

export const LocationProvider = ({ children }: { children: React.ReactNode }) => {
  // initialize from localStorage synchronously to avoid setState-in-effect
  const [addresses, setAddresses] = useState<Address[]>(() => {
    try {
      if (typeof window === "undefined") return [];
      const stored = localStorage.getItem("addresses");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [activeAddress, setActiveAddressState] = useState<Address | null>(() => {
    try {
      if (typeof window === "undefined") return null;
      const stored = localStorage.getItem("addresses");
      if (!stored) return null;
      const parsed: Address[] = JSON.parse(stored);
      return parsed.find(a => a.isDefault) || null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    localStorage.setItem("addresses", JSON.stringify(addresses));
  }, [addresses]);

  const addAddress = (address: Address) => {
    const updated = addresses.map(a => ({ ...a, isDefault: false }));
    setAddresses([...updated, address]);
    setActiveAddressState(address);
  };

  const setActiveAddress = (id: string) => {
    const updated = addresses.map(a => ({
      ...a,
      isDefault: a.id === id,
    }));

    setAddresses(updated);
    setActiveAddressState(updated.find(a => a.id === id) || null);
  };

  return (
    <LocationContext.Provider
      value={{ addresses, activeAddress, addAddress, setActiveAddress }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => {
  const context = useContext(LocationContext);
  if (!context) throw new Error("useLocation must be used inside LocationProvider");
  return context;
};
