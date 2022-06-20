//33 + (Taire- 33)*(0.474 + 0.454√(v)-0.0454.v)

export const calculateThermalSensation = (
  temperature: number,
  windSpeed: number
): number =>
  33 +
  (temperature - 33) *
    (0.474 + 0.454 * Math.sqrt(windSpeed) - 0.0454 * windSpeed);
