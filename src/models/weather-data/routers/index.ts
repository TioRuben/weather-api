import { Router } from "express";

import { currentConditionsRouter } from "./current-conditions.router.weather-data";
import { getLegacyDaily } from "./get-legacy-daily.router.weather-data";
import { getMaxMin } from "./max-min.router.weather-data";
import { getRange } from "./range.router.weather-data";

export default Router()
  .get("/", currentConditionsRouter)
  .get("/range", getRange)
  .get("/max-min", getMaxMin)
  .get("/daily.json", getLegacyDaily);
