/* eslint-disable security/detect-object-injection */
import { MaxMin, WeatherData } from "../weather-data.model";

export const getMaxMin = (
  data: WeatherData[],
  measurement: keyof Omit<WeatherData, "timestamp">
): MaxMin => {
  const max = data.sort((a, b) => b[measurement] - a[measurement])[0];
  const min = data.sort((a, b) => a[measurement] - b[measurement])[0];
  return {
    max: {
      timestamp: max.timestamp,
      value: max[measurement],
    },
    min: {
      timestamp: min.timestamp,
      value: min[measurement],
    },
  };
};
