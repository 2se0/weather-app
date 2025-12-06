src
├─ api/ # 외부 API 호출 (날씨 등)
│ └─ weatherApi.ts
├─ components/
│ ├─ layout/
│ │ └─ Header.tsx
│ ├─ weather/
│ │ └─ WeatherCard.tsx
│ ├─ outfit/
│ │ └─ OutfitCard.tsx
│ └─ common/
│ └─ SearchInput.tsx
├─ data/
│ └─ outfitTable.ts # 기온별 옷차림 정적 데이터
├─ hooks/
│ └─ useWeather.ts # 날씨 조회 훅
├─ pages/
│ └─ Home.tsx # 메인 페이지
├─ types/
│ └─ weather.ts # 날씨 응답 타입 정의
├─ utils/
│ └─ temperature.ts # 온도 관련 유틸 (옷차림 매핑 등)
├─ App.tsx
├─ main.tsx
└─ index.css
