import { WeatherData } from "../../models";
import * as Environment from "../environment";
import { calculateAggregateWindow } from "./calculate-aggregate-window.influx.service";
import { doQuery } from "./do-query.influx.service";
import { mapMultipleToWeatherData } from "./map-multiple-to-weather-data.influx.services";

export const getRange = (
  start: Date,
  end: Date
): Promise<WeatherData.WeatherData[]> =>
  doQuery(`
|> range(start: ${Math.round(start.getTime() / 1000)}, stop: ${Math.round(
    end.getTime() / 1000
  )})
|> filter(fn: (r) => r["station"] == "${Environment.getEnvVar("STATION")}")
|> aggregateWindow(every: ${calculateAggregateWindow(
    start,
    end
  )}, fn: mean, createEmpty: false) 
|> yield(name:"mean")`).then(mapMultipleToWeatherData);
