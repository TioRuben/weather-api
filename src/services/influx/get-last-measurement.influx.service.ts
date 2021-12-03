import { WeatherData } from "../../models";
import { doQuery } from "./do-query.influx.service";
import { mapToWeatherData } from "./map-to-weather-data.influx.services";

export const getLastMeasurement = (): Promise<WeatherData.WeatherData> =>
  doQuery("|> range(start: -1h) |> last()").then(mapToWeatherData);
