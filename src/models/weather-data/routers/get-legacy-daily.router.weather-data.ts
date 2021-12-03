import { RequestHandler } from "express";

import Services from "../../../services";
import * as Domain from "../domain";
import * as Handlers from "../handlers";
import { LegacyWeatherData } from "../legacy-weather-data.model";

export const getLegacyDaily: RequestHandler<
  {},
  LegacyWeatherData,
  {},
  { start?: Date; end?: Date }
> = (req, res) => {
  Promise.all([Handlers.getLast(), Handlers.getMaxMin()])
    .then(([current, maxMin]) => {
      res.send(Domain.mapToLegacyWeather(current, maxMin));
    })
    .catch((error) => {
      Services.Log.logError(
        "Error generating legacy daily weather data",
        error
      );
      res.status(500).send();
    });
};
