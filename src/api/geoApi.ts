export async function fetchGeo(city: string) {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=ko&format=json`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("Geocoding failed");

  return res.json(); // { results: [{ latitude, longitude, name }]}
}
