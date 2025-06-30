import { NextResponse } from "next/server";
import { fetchWeather } from "@/lib/weather/weather-service";
import { withAllowedOrigins } from "@/middlewares/cors";

export async function postHandler(req: Request) {
  const { lat, lon } = await req.json();

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
    console.log(err);
    return NextResponse.json({ error: "API error" }, { status: 500 });
  }
}

export const POST = withAllowedOrigins(postHandler);
