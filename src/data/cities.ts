export type CityPoint = {
  name: string;
  lat: number;
  lon: number;
};

export const cityPoints: CityPoint[] = [
  { name: "서울", lat: 37.5665, lon: 126.978 },
  { name: "부산", lat: 35.1796, lon: 129.0756 },
  { name: "대구", lat: 35.8714, lon: 128.6014 },
  { name: "인천", lat: 37.4563, lon: 126.7052 },
  { name: "광주", lat: 35.1595, lon: 126.8526 },
  { name: "대전", lat: 36.3504, lon: 127.3845 },
  { name: "울산", lat: 35.5384, lon: 129.3114 },
  { name: "제주", lat: 33.4996, lon: 126.5312 },

  // 해외 샘플
  { name: "도쿄", lat: 35.6762, lon: 139.6503 },
  { name: "뉴욕", lat: 40.7128, lon: -74.006 },
  { name: "런던", lat: 51.5074, lon: -0.1278 },
];
