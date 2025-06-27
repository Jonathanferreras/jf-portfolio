// /app/api/weather/route.ts (or pages/api/weather.ts for Pages router)

import { fetchWeather } from "@/lib/weather/weather-service";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  if (!lat || !lon) {
    return NextResponse.json({ error: "Missing coordinates" }, { status: 400 });
  }

  try {
    const data = await fetchWeather({
      lat: parseFloat(lat),
      lon: parseFloat(lon),
    });

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: "API error" }, { status: 500 });
  }
}
