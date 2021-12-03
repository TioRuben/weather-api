import Services from "../../../services";

export const getLast = () => Services.Influx.getLastMeasurement();
