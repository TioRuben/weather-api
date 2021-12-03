import Services from "../../../services";
import { LegacyWeatherData } from "../legacy-weather-data.model";
import { WeatherData, WeatherDataMaxMin } from "../weather-data.model";
import { almanach } from "./almanach.domain.weather-data";
import { mapToCurrentLegacy } from "./map-to-current-legacy.domain.weather-data";
import { mapToSinceMidnight } from "./map-to-since-midnight.domain.weather-data";

export const mapToLegacyWeather = (
  current: WeatherData,
  maxMin: WeatherDataMaxMin
): LegacyWeatherData => ({
  title: "Condiciones Actuales",
  location: "Torrevieja, Alicante (Spain)",
  time: "03/12/21 18:50:00",
  lat: `${Services.Environment.getEnvVar("LATITUDE")}`,
  lon: `${Services.Environment.getEnvVar("LONGITUDE")}`,
  alt: "20 metros",
  hardware: "SDR",
  uptime: "360 days, 8 hours, 8 minutes",
  serverUptime: "360 days, 8 hours, 8 minutes",
  weewxVersion: "4.5.0",
  stats: {
    current: mapToCurrentLegacy(current),
    sinceMidnight: mapToSinceMidnight(maxMin),
  },
  almanach: almanach(
    Services.Environment.getEnvVar("LATITUDE"),
    Services.Environment.getEnvVar("LONGITUDE")
  ),
});
