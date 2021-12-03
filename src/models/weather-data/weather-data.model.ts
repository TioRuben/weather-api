export interface WeatherData {
  timestamp: Date;
  barometer: number;
  dailyRain: number;
  dewPoint: number;
  humidity: number;
  rain: number;
  solarRadiation: number;
  temperature: number;
  uv: number;
  windDirection: number;
  windSpeed: number;
  windGust: number;
}

export interface WeatherPoint {
  timestamp: Date;
  value: number;
}

export interface MaxMin {
  max: WeatherPoint;
  min: WeatherPoint;
}

export interface WeatherDataMaxMin {
  barometer: MaxMin;
  dailyRain: MaxMin;
  dewPoint: MaxMin;
  humidity: MaxMin;
  rain: MaxMin;
  solarRadiation: MaxMin;
  temperature: MaxMin;
  uv: MaxMin;
  windDirection: MaxMin;
  windSpeed: MaxMin;
  windGust: MaxMin;
}
