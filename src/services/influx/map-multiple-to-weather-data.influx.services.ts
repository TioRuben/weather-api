import { WeatherData } from "../../models";
import { findMultipleWeatherField } from "./find-multiple-weather-field.influx.services";
import { InfluxMeasurement } from "./influx-measurement.model";

export const mapMultipleToWeatherData = (
  multipleWeather: InfluxMeasurement[]
): WeatherData.WeatherData[] =>
  multipleWeather
    .sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime())
    .reduce<Date[]>(
      (prev, cur) => [
        ...prev.filter((el) => el.getTime() !== cur.timestamp.getTime()),
        cur.timestamp,
      ],
      [] as Date[]
    )
    .map<WeatherData.WeatherData>((timestamp) => ({
      timestamp,
      barometer: +findMultipleWeatherField(
        multipleWeather,
        timestamp,
        "barometer"
      ).toFixed(0),
      temperature: +findMultipleWeatherField(
        multipleWeather,
        timestamp,
        "temperature"
      ).toFixed(1),
      humidity: +findMultipleWeatherField(
        multipleWeather,
        timestamp,
        "humidity"
      ).toFixed(0),
      windSpeed: +findMultipleWeatherField(
        multipleWeather,
        timestamp,
        "windSpeed"
      ).toFixed(1),
      windDirection: +findMultipleWeatherField(
        multipleWeather,
        timestamp,
        "windDirection"
      ).toFixed(0),
      rain: +findMultipleWeatherField(
        multipleWeather,
        timestamp,
        "rain"
      ).toFixed(1),
      solarRadiation: +findMultipleWeatherField(
        multipleWeather,
        timestamp,
        "solarRadiation"
      ).toFixed(0),
      uv: +findMultipleWeatherField(multipleWeather, timestamp, "uv").toFixed(
        0
      ),
      dewPoint: +findMultipleWeatherField(
        multipleWeather,
        timestamp,
        "dewPoint"
      ).toFixed(1),
      dailyRain: +findMultipleWeatherField(
        multipleWeather,
        timestamp,
        "dailyRain"
      ).toFixed(1),
      windGust: +findMultipleWeatherField(
        multipleWeather,
        timestamp,
        "windGust"
      ).toFixed(1),
    }));
