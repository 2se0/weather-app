import {
  WiDaySunny,
  WiDayCloudy,
  WiCloud,
  WiCloudy,
  WiFog,
  WiRain,
  WiShowers,
  WiThunderstorm,
  WiSnow,
  WiSleet,
} from "react-icons/wi";
import type { ReactElement } from "react";

/**
 * Open-Meteo weathercode 매핑
 * 참고: https://open-meteo.com/en/docs
 */
export function getWeatherLabel(code: number): string {
  if (code === 0) return "맑음";
  if ([1, 2, 3].includes(code)) return "부분·대체로 흐림";
  if ([45, 48].includes(code)) return "안개";
  if ([51, 53, 55].includes(code)) return "이슬비";
  if ([61, 63, 65].includes(code)) return "비";
  if ([66, 67].includes(code)) return "어는 비";
  if ([71, 73, 75].includes(code)) return "눈";
  if ([77].includes(code)) return "진눈깨비";
  if ([80, 81, 82].includes(code)) return "소나기";
  if ([85, 86].includes(code)) return "소나기 눈";
  if ([95].includes(code)) return "천둥번개";
  if ([96, 99].includes(code)) return "우박 동반 천둥번개";
  return "알 수 없음";
}

export function getWeatherIcon(code: number, size = 28): ReactElement {
  if (code === 0) return <WiDaySunny size={size} color="#f6c453" />;
  if ([1, 2].includes(code)) return <WiDayCloudy size={size} color="#90a4ae" />;
  if ([3].includes(code)) return <WiCloud size={size} color="#78909c" />;
  if ([45, 48].includes(code)) return <WiFog size={size} color="#b0bec5" />;
  if ([51, 53, 55].includes(code))
    return <WiShowers size={size} color="#4fc3f7" />;
  if ([61, 63, 65].includes(code))
    return <WiRain size={size} color="#42a5f5" />;
  if ([66, 67].includes(code)) return <WiSleet size={size} color="#4dd0e1" />;
  if ([71, 73, 75].includes(code))
    return <WiSnow size={size} color="#81d4fa" />;
  if ([77].includes(code)) return <WiSnow size={size} color="#b3e5fc" />;
  if ([80, 81, 82].includes(code))
    return <WiShowers size={size} color="#29b6f6" />;
  if ([85, 86].includes(code)) return <WiSnow size={size} color="#90caf9" />;
  if ([95].includes(code))
    return <WiThunderstorm size={size} color="#9575cd" />;
  if ([96, 99].includes(code))
    return <WiThunderstorm size={size} color="#7e57c2" />;

  return <WiCloudy size={size} color="#90a4ae" />;
}
