import { getWeatherIcon, getWeatherLabel } from "@/utils/weatherCode";

type Props = {
  city: string;
  temp: number;
  weathercode: number;
};

export default function WeatherCard({ city, temp, weathercode }: Props) {
  return (
    <section className="rounded-2xl bg-white p-4 shadow-sm">
      <p className="text-sm text-slate-500">현재 지역</p>
      <p className="text-lg font-semibold">{city}</p>

      <div className="mt-2 flex items-center gap-2">
        {getWeatherIcon(weathercode, 40)}
        <span className="text-4xl font-bold">{Math.round(temp)}°</span>
      </div>

      <p className="mt-1 text-sm text-slate-600">
        {getWeatherLabel(weathercode)}
      </p>
    </section>
  );
}
