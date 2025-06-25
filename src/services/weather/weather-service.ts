import { weather } from "./types/weather";

const API_KEY = process.env.OPEN_WEATHER_API_KEY;

export const fetchWeather = async (coordinates: {
  lat: number;
  lon: number;
}): Promise<weather | null> => {
  const api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${API_KEY}`;

  try {
    const response = await fetch(api_url);

    if (!response.ok) {
      throw new Error("Error fetching weather!");
    }

    const data = await response.json();

    if (data) {
      return {
        temp: Math.round(((data.main.temp - 273.15) * 9) / 5 + 32),
        high: Math.round(((data.main.temp_max - 273.15) * 9) / 5 + 32),
        low: Math.round(((data.main.temp_min - 273.15) * 9) / 5 + 32),
        description: data.weather[0].description.toUpperCase(),
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
      };
    } else {
      return null;
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    } else {
      console.log(String(error));
    }

    return null;
  }
};
