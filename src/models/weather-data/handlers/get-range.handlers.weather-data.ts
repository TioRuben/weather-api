import Services from "../../../services";

export const getRange = (start?: Date, end?: Date) =>
  Services.Influx.getRange(
    start || new Date(new Date().getTime() - 24 * 60 * 60 * 1000),
    end || new Date()
  );
