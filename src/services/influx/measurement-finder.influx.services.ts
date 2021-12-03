import { WeatherData } from "../../models";
import { InfluxMeasurement } from "./influx-measurement.model";

export const measurementFinder = (
  influxMeasurement: InfluxMeasurement[],
  measurementName: keyof WeatherData.WeatherData
): number =>
  influxMeasurement.find(
    (measurement) => measurement.measurement === measurementName
  )?.value || 0;
