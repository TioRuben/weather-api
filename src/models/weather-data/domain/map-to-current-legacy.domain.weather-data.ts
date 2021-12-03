import { Current } from "../legacy-weather-data.model";
import { WeatherData } from "../weather-data.model";
import { calculateHeatIndex } from ".";
import { calculateWindchill } from "./calculate-windchill-domain.weather-data";
import { windDirectionToText } from "./wind-direction-to-text.domain.weather-data";

export const mapToCurrentLegacy = (current: WeatherData): Current => ({
  UV: `${current.uv}`,
  barometer: `${current.barometer}mbar`,
  barometerTrendData: "0",
  barometerTrendDelta: "0",
  dewpoint: `${current.dewPoint}&#176;C`,
  heatIndex: `${calculateHeatIndex(
    current.temperature,
    current.humidity
  )}&#176;C`,
  humidity: `${current.humidity}%`,
  insideHumidity: "N/A",
  insideTemp: "N/A",
  outTemp: `${current.temperature}&#176;C`,
  rainRate: `${current.rain}mm/h`,
  solarRadiation: `${current.solarRadiation}w/m2`,
  windDir: `${current.windDirection}&deg;`,
  windGust: `${current.windGust}km/h`,
  windSpeed: `${current.windSpeed}km/h`,
  windDirText: `${windDirectionToText(current.windDirection)}`,
  windGustDir: `${current.windDirection}&deg;`,
  windchill: `${calculateWindchill(
    current.windSpeed,
    current.temperature
  )}&#176;C`,
});
