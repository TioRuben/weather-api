import { RequestHandler } from "express";

import Services from "../../../services";
import * as Handlers from "../handlers";
import { WeatherData } from "../weather-data.model";

export const getRange: RequestHandler<
  {},
  WeatherData[],
  {},
  { start?: Date; end?: Date }
> = (req, res) => {
  Handlers.getRange(req.query.start, req.query.end)
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      Services.Log.logError("Error requesting range", error);
      res.status(500).send();
    });
};
