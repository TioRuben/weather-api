import { FluxTableMetaData } from "@influxdata/influxdb-client";

import * as Environment from "../environment";
import { connect } from "./connect.influx.services";
import { InfluxMeasurement } from "./influx-measurement.model";

export const doQuery = (query: string): Promise<InfluxMeasurement[]> =>
  new Promise((resolve, reject) => {
    const result: InfluxMeasurement[] = [];
    connect().queryRows(
      `from(bucket: "${Environment.getEnvVar("INFLUX_BUCKET")}")
          ${query}`,
      {
        next(row: string[], tableMeta: FluxTableMetaData) {
          const thisRow = tableMeta.toObject(row);
          result.push({
            measurement: thisRow["_measurement"],
            timestamp: new Date(thisRow["_time"]),
            value: thisRow["_value"],
          });
        },
        error(error: Error) {
          reject(error);
        },
        complete() {
          resolve(result);
        },
      }
    );
  });
