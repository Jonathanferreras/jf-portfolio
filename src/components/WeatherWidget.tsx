import { fetchWeather } from "@/services/weather/weather-service";
import { location } from "@/services/weather/types/location";
import { weather } from "@/services/weather/types/weather";

type WeatherWidgetProps = {
  location: location;
};

export default async function WeatherWidget({ location }: WeatherWidgetProps) {
  let error = "";
  const weather = await fetchWeather({
    lat: location.lat,
    lon: location.lon,
  });

  if (!weather) {
    error = "Failed to fetch weather data.";
  }

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
      ) : (
        <div className="flex items-center gap-6">
          <div className="text-4xl font-light tracking-tight">
            {weather?.temp ?? "---"}F
          </div>

          <div className="flex flex-col items-start text-sm md:text-base font-light">
            <div className="flex items-center gap-2">
              <img
                src={weather?.icon}
                alt={weather?.description}
                className="w-8 h-8"
              />
              <span>{weather?.description}</span>
            </div>
            <div className="flex items-center gap-2 text-xl w-full">
              <div>H:{weather?.high ?? "--"}</div>
              <div className="ml-auto">L:{weather?.low ?? "--"}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
