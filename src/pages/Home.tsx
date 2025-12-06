import OutfitCard from "@/components/outfit/OutfitCard";
import WeatherCard from "@/components/weather/WeatherCard";
import SearchInput from "@/components/common/SearchInput";
import { useWeather } from "@/hooks/useWeather";
import Header from "@/components/layout/Header";
import WeatherMap from "@/components/map/WeatherMap";

export default function Home() {
  const { weather, loading, disableLocation, setCity } = useWeather();

  return (
    <div className="flex min-h-screen flex-col bg-sky-50">
      <Header />
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-6 p-4">
        <section className="space-y-4">
          <SearchInput
            onSearch={(value) => {
              if (!value) return;
              disableLocation();
              setCity(value);
            }}
          />

          {loading && (
            <p className="text-sm text-slate-500">날씨 불러오는 중...</p>
          )}

          {weather && (
            <div className="grid gap-4 md:grid-cols-2">
              <WeatherCard
                city={weather.name}
                temp={weather.temperature}
                weathercode={weather.weathercode}
              />
              <OutfitCard temp={weather.temperature} />
            </div>
          )}
        </section>

        {/* 하단: 지도 */}
        <WeatherMap />
      </main>
    </div>
  );
}
