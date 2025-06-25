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
    <div>
      <div>
        <div>Based in</div>
        <div>
          {location.city}, {location.state}
        </div>
      </div>
      <div>
        {error ? (
          <div>{error}</div>
        ) : (
          <>
            <div>{weather?.temp ?? "---"}F</div>
            <div>
              <img src={weather?.icon} />
              <div>
                H: {weather?.high}, L: {weather?.low}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
