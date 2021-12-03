import { SinceMidnight } from "../legacy-weather-data.model";
import { WeatherDataMaxMin } from "../weather-data.model";
import { calculateHeatIndex } from ".";
import { calculateWindchill } from "./calculate-windchill-domain.weather-data";

export const mapToSinceMidnight = (
  maxMin: WeatherDataMaxMin
): SinceMidnight => ({
  UVMaxTime: maxMin.uv.max.timestamp.toLocaleTimeString("es-ES"),
  UVMaxValue: `${maxMin.uv.max.value}`,
  UVMinTime: maxMin.uv.min.timestamp.toLocaleTimeString("es-ES"),
  UVMinValue: `${maxMin.uv.min.value}`,
  barometerMaxTime: maxMin.barometer.max.timestamp.toLocaleTimeString("es-ES"),
  barometerMaxValue: `${maxMin.barometer.max.value}mbar`,
  barometerMinTime: maxMin.barometer.min.timestamp.toLocaleTimeString("es-ES"),
  barometerMinValue: `${maxMin.barometer.min.value}mbar`,
  tempMaxTime: maxMin.temperature.max.timestamp.toLocaleTimeString("es-ES"),
  tempMaxValue: `${maxMin.temperature.max.value}&#176;C`,
  tempMinTime: maxMin.temperature.min.timestamp.toLocaleTimeString("es-ES"),
  tempMinValue: `${maxMin.temperature.min.value}&#176;C`,
  dewpointMaxTime: maxMin.dewPoint.max.timestamp.toLocaleTimeString("es-ES"),
  dewpointMaxValue: `${maxMin.dewPoint.max.value}&#176;C`,
  dewpointMinTime: maxMin.dewPoint.min.timestamp.toLocaleTimeString("es-ES"),
  dewpointMinValue: `${maxMin.dewPoint.min.value}&#176;C`,
  heatIndexMaxTime:
    maxMin.temperature.max.timestamp.toLocaleTimeString("es-ES"),
  heatIndexMaxValue: `${calculateHeatIndex(
    maxMin.temperature.max.value,
    maxMin.humidity.max.value
  )}&#176;C`,
  humidityMaxTime: maxMin.humidity.max.timestamp.toLocaleTimeString("es-ES"),
  humidityMaxValue: `${maxMin.humidity.max.value}%`,
  humidityMinTime: maxMin.humidity.min.timestamp.toLocaleTimeString("es-ES"),
  humidityMinValue: `${maxMin.humidity.min.value}%`,
  inTempMaxTime: "00:00:00",
  inTempMaxValue: "0&#176;C",
  inTempMinTime: "00:00:00",
  inTempMinValue: "0&#176;C",
  radiationMaxTime:
    maxMin.solarRadiation.max.timestamp.toLocaleTimeString("es-ES"),
  radiationMaxValue: `${maxMin.solarRadiation.max.value}W/m2`,
  radiationMinTime:
    maxMin.solarRadiation.min.timestamp.toLocaleTimeString("es-ES"),
  radiationMinValue: `${maxMin.solarRadiation.min.value}W/m2`,
  rainRateMaxTime: maxMin.rain.max.timestamp.toLocaleTimeString("es-ES"),
  rainRateMaxValue: `${maxMin.rain.max.value}mm/h`,
  rainSum: `${maxMin.dailyRain.max.value}mm`,
  windAvg: `${maxMin.windSpeed.max.value}km/h`,
  windMaxGustDir: `${maxMin.windDirection.max.value}&deg;`,
  windMaxTime: maxMin.windGust.max.timestamp.toLocaleTimeString("es-ES"),
  windMaxValue: `${maxMin.windGust.max.value}km/h`,
  windchillMinTime:
    maxMin.temperature.min.timestamp.toLocaleTimeString("es-ES"),
  windchillMinValue: `${calculateWindchill(
    maxMin.windSpeed.max.value,
    maxMin.temperature.min.value
  )}&#176;C`,
  windRms: "0",
  windVecAvg: "0",
  windVecDir: "0",
});
