import * as Domain from "../domain";
import { WeatherDataMaxMin } from "../weather-data.model";
import { getRange } from "./get-range.handlers.weather-data";

export const getMaxMin = (
  start?: Date,
  end?: Date
): Promise<WeatherDataMaxMin> =>
  getRange(start, end).then((measurements) => ({
    barometer: Domain.getMaxMin(measurements, "barometer"),
    temperature: Domain.getMaxMin(measurements, "temperature"),
    humidity: Domain.getMaxMin(measurements, "humidity"),
    windSpeed: Domain.getMaxMin(measurements, "windSpeed"),
    windDirection: Domain.getMaxMin(measurements, "windDirection"),
    rain: Domain.getMaxMin(measurements, "rain"),
    solarRadiation: Domain.getMaxMin(measurements, "solarRadiation"),
    uv: Domain.getMaxMin(measurements, "uv"),
    dailyRain: Domain.getMaxMin(measurements, "dailyRain"),
    dewPoint: Domain.getMaxMin(measurements, "dewPoint"),
    windGust: Domain.getMaxMin(measurements, "windGust"),
  }));
