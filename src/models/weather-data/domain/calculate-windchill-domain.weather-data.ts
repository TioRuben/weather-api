export const calculateWindchill = (
  windSpeed: number,
  temperature: number
): number => {
  const temperatureF = temperature * 1.8 + 32;
  const windSpeedMPH = windSpeed * 2.23694;
  if (windSpeedMPH > 3.0) {
    return (
      (-35.74 +
        0.6215 * temperatureF +
        (0.4275 * temperatureF - 35.75) * Math.pow(windSpeedMPH, 0.16) -
        32) /
      1.8
    );
  } else {
    return temperature;
  }
};
