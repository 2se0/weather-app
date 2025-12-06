import { useEffect, useState } from "react";
import { fetchGeo } from "@/api/geoApi";
import { fetchWeather } from "@/api/weatherApi";

export function useWeather(defaultCity = "서울") {
  const [city, setCity] = useState(defaultCity);
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [useLocation, setUseLocation] = useState(true);

  // 1) 내 위치 기반
  useEffect(() => {
    if (!useLocation) return;

    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        const { latitude, longitude } = pos.coords;
        const data = await fetchWeather(latitude, longitude);
        setWeather(data.current_weather);
        setLoading(false);
      },
      () => {
        // 위치 권한 거부됨 → 도시 검색으로 전환
        setUseLocation(false);
      }
    );
  }, [useLocation]);

  // 2) 도시명 기반 (한글 포함)
  useEffect(() => {
    if (useLocation) return;

    async function load() {
      setLoading(true);

      const geo = await fetchGeo(city);
      if (!geo.results || geo.results.length === 0) {
        setLoading(false);
        return;
      }

      const { latitude, longitude, name } = geo.results[0];
      const data = await fetchWeather(latitude, longitude);

      setWeather({ ...data.current_weather, name });
      setLoading(false);
    }

    load();
  }, [city, useLocation]);

  return {
    weather,
    loading,
    city,
    setCity,
    disableLocation: () => setUseLocation(false),
    enableLocation: () => setUseLocation(true),
  };
}
