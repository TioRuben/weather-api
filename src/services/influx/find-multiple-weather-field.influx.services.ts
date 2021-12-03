import { WeatherData } from "../../models";
import { InfluxMeasurement } from "./influx-measurement.model";

export const findMultipleWeatherField = (
  multipleWeather: InfluxMeasurement[],
  timestamp: Date,
  field: keyof WeatherData.WeatherData
): number =>
  multipleWeather.find(
    (mw) =>
      mw.measurement === field && mw.timestamp.getTime() === timestamp.getTime()
  )?.value || 0;
