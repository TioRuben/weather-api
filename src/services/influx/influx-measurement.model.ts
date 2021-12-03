export interface InfluxMeasurement {
  measurement: string;
  timestamp: Date;
  value: number;
}
