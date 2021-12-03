import { RequestHandler } from "express";

import Services from "../../../services";
import * as Handlers from "../handlers";
import { WeatherData } from "../weather-data.model";

export const currentConditionsRouter: RequestHandler<{}, WeatherData> = (
  req,
  res
) => {
  Handlers.getLast()
    .then((data) => {
      res.send(data);
    })
    .catch((error) => {
      Services.Log.logError("Error requesting current conditions", error);
      res.status(500).send();
    });
};
