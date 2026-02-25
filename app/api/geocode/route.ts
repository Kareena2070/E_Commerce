import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const address = searchParams.get("address");

  if (!address) {
    return NextResponse.json({ error: "Address required" }, { status: 400 });
  }

  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`
  );

  const data = await response.json();

  if (!data.length) {
    return NextResponse.json({ error: "Address not found" }, { status: 404 });
  }

  return NextResponse.json({
    lat: parseFloat(data[0].lat),
    lng: parseFloat(data[0].lon),
  });
}
