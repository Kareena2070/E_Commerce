export const geocodeAddress = async (address: string) => {
  const res = await fetch(`/api/geocode?address=${encodeURIComponent(address)}`);
  
  if (!res.ok) {
    throw new Error("Failed to geocode address");
  }

  return res.json();
};

export const reverseGeocode = async (lat: number, lng: number) => {
  const res = await fetch(`/api/reverse-geocode?lat=${lat}&lng=${lng}`);

  if (!res.ok) {
    throw new Error("Failed to reverse geocode");
  }

  return res.json();
};
