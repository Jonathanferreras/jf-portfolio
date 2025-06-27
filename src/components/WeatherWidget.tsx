"use client";

import { useWeather } from "@/lib/weather/weather-hook";
import { location } from "@/lib/weather/types/location";

type WeatherWidgetProps = {
  location: location;
};

export default function WeatherWidget({ location }: WeatherWidgetProps) {
  const { weatherData, error } = useWeather(location.lat, location.lon);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between border border-white rounded-xl px-6 py-6 my-4 w-fit text-white text-sm md:text-base gap-6">
      <div className="text-left">
        <div className="uppercase font-bold text-sm md:text-base">Based in</div>
        <div className="text-lg md:text-xl font-light">
          {location.city.toUpperCase()}, {location.state.toUpperCase()}
        </div>
      </div>
      <div className="hidden md:block h-12 border-l border-white opacity-50" />
      {error ? (
        <div className="text-red-500">{error}</div>
      ) : weatherData ? (
        <div className="flex items-center gap-6 min-h-[64px] min-w-[200px]">
          <div className="text-4xl font-light tracking-tight">
            {weatherData.temp}F
          </div>
          <div className="flex flex-col items-start text-sm md:text-base font-light">
            <div className="flex items-center gap-2">
              <img
                src={weatherData.icon}
                alt={weatherData.description}
                className="w-8 h-8 animate-pulse"
              />
              <span>{weatherData.description}</span>
            </div>
            <div className="flex items-center gap-2 text-xl w-full">
              <div>H:{weatherData.high}</div>
              <div className="ml-auto">L:{weatherData.low}</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-6 min-h-[64px] min-w-[200px] justify-center">
          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}
