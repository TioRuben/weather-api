import { Router } from "express";

import { currentConditionsRouter } from "./current-conditions.router.weather-data";
import { getRange } from "./range.router.weather-data";

export default Router()
  .get("/", currentConditionsRouter)
  .get("/range", getRange);
