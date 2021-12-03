import { RequestHandler } from "express";

import Services from "../../../services";
import * as Handlers from "../handlers";
import { WeatherDataMaxMin } from "../weather-data.model";

export const getMaxMin: RequestHandler<
  {},
  WeatherDataMaxMin,
  {},
  { start?: Date; end?: Date }
> = (req, res) => {
  Handlers.getMaxMin(
    req.query.start || new Date(new Date().setHours(0, 0, 0, 0)),
    req.query.end || new Date()
  )
    .then((result) => {
      res.send(result);
    })
    .catch((error) => {
      Services.Log.logError("Error requesting range", error);
      res.status(500).send();
    });
};
