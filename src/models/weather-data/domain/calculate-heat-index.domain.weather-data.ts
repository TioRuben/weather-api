export const calculateHeatIndex = (
  temperature: number,
  humidity: number
): number => {
  const t = temperature;
  const rh = humidity;
  const c1 = -42.379;
  const c2 = 2.04901523;
  const c3 = 10.1433127;
  const c4 = -0.22475541;
  const c5 = -6.83783e-3;
  const c6 = -5.481717e-2;
  const c7 = 1.22874e-3;
  const c8 = 8.5282e-4;
  const c9 = -1.99e-6;
  const hi =
    c1 +
    c2 * t +
    c3 * rh +
    c4 * t * rh +
    c5 * t * t +
    c6 * rh * rh +
    c7 * t * t * rh +
    c8 * t * rh * rh +
    c9 * t * t * rh * rh;
  return hi;
};
