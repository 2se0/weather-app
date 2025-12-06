import { Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import type { CityPoint } from "@/data/cities";
import { getWeatherIcon, getWeatherLabel } from "@/utils/weatherCode";

type Props = {
  city: CityPoint;
};

type CurrentWeather = {
  temperature: number;
  weathercode: number;
  windspeed: number;
};

export default function WeatherMarker({ city }: Props) {
  const [weather, setWeather] = useState<CurrentWeather | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${city.lat}&longitude=${city.lon}&current_weather=true&timezone=auto`;
      const res = await fetch(url);
      const data = await res.json();
      setWeather(data.current_weather);
    };

    fetchWeather();
  }, [city.lat, city.lon]);

  return (
    <Marker position={[city.lat, city.lon]}>
      <Popup>
        <div className="min-w-[140px] space-y-1 text-center">
          <p className="text-sm font-semibold">{city.name}</p>
          {weather ? (
            <>
              <div className="flex items-center justify-center gap-2">
                {getWeatherIcon(weather.weathercode, 30)}
                <span className="text-xl font-bold">
                  {Math.round(weather.temperature)}°
                </span>
              </div>
              <p className="text-xs text-slate-600">
                {getWeatherLabel(weather.weathercode)}
              </p>
              <p className="text-xs text-slate-500">
                풍속 {weather.windspeed.toFixed(1)} m/s
              </p>
            </>
          ) : (
            <p className="text-xs text-slate-500">날씨 불러오는 중...</p>
          )}
        </div>
      </Popup>
    </Marker>
  );
}
