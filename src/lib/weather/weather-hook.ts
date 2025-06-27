import { useEffect, useState } from "react";
import { weather } from "@/lib/weather/types/weather";

export function useWeather(
  lat: number,
  lon: number
): { weatherData: weather | null; error: string } {
  const [weatherData, setWeatherData] = useState<weather | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWithCache = async () => {
      const cacheKey = `weather-${lat}-${lon}`;
      const cached = localStorage.getItem(cacheKey);
      const oneHour = 60 * 60 * 1000;

      if (cached) {
        try {
          const { timestamp, data } = JSON.parse(cached);
          if (Date.now() - timestamp < oneHour) {
            setWeatherData(data);
            return;
          } else {
            localStorage.removeItem(cacheKey);
          }
        } catch {
          localStorage.removeItem(cacheKey);
        }
      }

      try {
        const res = await fetch(`/api/v1/weather?lat=${lat}&lon=${lon}`);
        const data = await res.json();

        if (res.ok) {
          localStorage.setItem(
            cacheKey,
            JSON.stringify({ timestamp: Date.now(), data })
          );
          setWeatherData(data);
        } else {
          setError(data.error || "Failed to fetch weather.");
        }
      } catch {
        setError("Network error");
      }
    };

    fetchWithCache();
  }, [lat, lon]);

  return { weatherData, error };
}
