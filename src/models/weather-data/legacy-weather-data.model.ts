export interface LegacyWeatherData {
  title: string;
  location: string;
  time: string;
  lat: string;
  lon: string;
  alt: string;
  hardware: string;
  uptime: string;
  serverUptime: string;
  weewxVersion: string;
  stats: Stats;
  almanach: Almanach;
}

export interface Almanach {
  sun: Sun;
  moon: Moon;
}

export interface Moon {
  rise: string;
  transit: string;
  set: string;
  azimuth: string;
  altitude: string;
  rightAscension: string;
  declination: string;
  fullMoon: string;
  newMoon: string;
  phase: string;
  fullness: string;
}

export interface Sun {
  startCivilTwilight: string;
  sunrise: string;
  transit: string;
  sunset: string;
  endCivilTwilight: string;
  azimuth: string;
  altitude: string;
  rightAscension: string;
  declination: string;
  equinox: string;
  solstice: string;
}

export interface Stats {
  current: Current;
  sinceMidnight: SinceMidnight;
}

export interface Current {
  outTemp: string;
  windchill: string;
  heatIndex: string;
  dewpoint: string;
  humidity: string;
  insideHumidity: string;
  barometer: string;
  barometerTrendDelta: string;
  barometerTrendData: string;
  windSpeed: string;
  windDir: string;
  windDirText: string;
  windGust: string;
  windGustDir: string;
  rainRate: string;
  UV: string;
  solarRadiation: string;
  insideTemp: string;
}

export interface SinceMidnight {
  tempMaxValue: string;
  tempMaxTime: string;
  tempMinValue: string;
  tempMinTime: string;
  heatIndexMaxValue: string;
  heatIndexMaxTime: string;
  windchillMinValue: string;
  windchillMinTime: string;
  humidityMaxValue: string;
  humidityMaxTime: string;
  humidityMinValue: string;
  humidityMinTime: string;
  dewpointMaxValue: string;
  dewpointMaxTime: string;
  dewpointMinValue: string;
  dewpointMinTime: string;
  barometerMaxValue: string;
  barometerMaxTime: string;
  barometerMinValue: string;
  barometerMinTime: string;
  rainSum: string;
  rainRateMaxValue: string;
  rainRateMaxTime: string;
  windMaxValue: string;
  windMaxGustDir: string;
  windMaxTime: string;
  windAvg: string;
  windRms: string;
  windVecAvg: string;
  windVecDir: string;
  UVMaxValue: string;
  UVMaxTime: string;
  UVMinValue: string;
  UVMinTime: string;
  radiationMaxValue: string;
  radiationMaxTime: string;
  radiationMinValue: string;
  radiationMinTime: string;
  inTempMaxValue: string;
  inTempMaxTime: string;
  inTempMinValue: string;
  inTempMinTime: string;
}
