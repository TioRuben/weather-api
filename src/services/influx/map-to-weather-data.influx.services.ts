import { WeatherData } from "../../models";
import { InfluxMeasurement } from "./influx-measurement.model";
import { measurementFinder } from "./measurement-finder.influx.services";

export const mapToWeatherData = (
  influxMeasurement: InfluxMeasurement[]
): WeatherData.WeatherData => ({
  timestamp: influxMeasurement[0].timestamp,
  barometer: +measurementFinder(influxMeasurement, "barometer").toFixed(0),
  temperature: +measurementFinder(influxMeasurement, "temperature").toFixed(1),
  humidity: +measurementFinder(influxMeasurement, "humidity").toFixed(0),
  windSpeed: +measurementFinder(influxMeasurement, "windSpeed").toFixed(1),
  windDirection: +measurementFinder(influxMeasurement, "windDirection").toFixed(
    0
  ),
  rain: +measurementFinder(influxMeasurement, "rain").toFixed(1),
  solarRadiation: +measurementFinder(
    influxMeasurement,
    "solarRadiation"
  ).toFixed(0),
  uv: +measurementFinder(influxMeasurement, "uv").toFixed(0),
  dewPoint: +measurementFinder(influxMeasurement, "dewPoint").toFixed(1),
  dailyRain: +measurementFinder(influxMeasurement, "dailyRain").toFixed(1),
  windGust: +measurementFinder(influxMeasurement, "windGust").toFixed(1),
});
