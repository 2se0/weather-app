import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import WeatherMarker from "./WeatherMarker";
import { cityPoints, type CityPoint } from "@/data/cities";
import { MdMyLocation } from "react-icons/md";

type LatLng = { lat: number; lon: number };

function MapController({ center }: { center: LatLng }) {
  const map = useMap();

  useEffect(() => {
    map.setView([center.lat, center.lon], map.getZoom());
  }, [center.lat, center.lon, map]);

  return null;
}

export default function WeatherMap() {
  const [center, setCenter] = useState<LatLng>({
    lat: 36.5,
    lon: 127.5, // 대한민국 대충 가운데
  });
  const [myLocation, setMyLocation] = useState<CityPoint | null>(null);
  const [locError, setLocError] = useState<string | null>(null);

  const handleMyLocation = () => {
    if (!navigator.geolocation) {
      setLocError("브라우저에서 위치 정보를 지원하지 않습니다.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setCenter({ lat: latitude, lon: longitude });
        setMyLocation({
          name: "내 위치",
          lat: latitude,
          lon: longitude,
        });
        setLocError(null);
      },
      () => {
        setLocError("위치 권한이 거부되었습니다.");
      }
    );
  };

  return (
    <section className="space-y-2">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-slate-800">
          세계 지도 날씨
        </h2>
        <button
          type="button"
          onClick={handleMyLocation}
          className="inline-flex items-center gap-1 rounded-full bg-sky-500 px-3 py-1 text-xs font-medium text-white shadow-sm hover:bg-sky-600"
        >
          <MdMyLocation size={16} />내 위치
        </button>
      </div>
      {locError && <p className="text-xs text-red-500">{locError}</p>}

      <div className="h-[420px] overflow-hidden rounded-2xl border border-sky-100 shadow-sm">
        <MapContainer
          center={[center.lat, center.lon]}
          zoom={5}
          className="h-full w-full"
          scrollWheelZoom
        >
          <MapController center={center} />
          <TileLayer
            url="https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
            attribution="© Carto — © OpenStreetMap contributors"
          />

          {/* 기본 도시들 */}
          {cityPoints.map((c) => (
            <WeatherMarker key={c.name} city={c} />
          ))}

          {/* 내 위치 마커 */}
          {myLocation && <WeatherMarker city={myLocation} />}
        </MapContainer>
      </div>
    </section>
  );
}
