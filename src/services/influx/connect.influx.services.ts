import { InfluxDB, QueryApi } from "@influxdata/influxdb-client";

import * as Environment from "../environment";

export const connect = (): QueryApi =>
  new InfluxDB({
    url: Environment.getEnvVar("INFLUX_URL"),
    token: Environment.getEnvVar("INFLUX_TOKEN"),
  }).getQueryApi(Environment.getEnvVar("INFLUX_ORG"));
