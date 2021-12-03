import Astronomy from "astronomy-engine";

import { Almanach } from "../legacy-weather-data.model";

export const almanach = (lat: number, lon: number): Almanach => ({
  sun: {
    altitude: "",
    azimuth: "",
    declination: "",
    endCivilTwilight: "",
    equinox: "",
    rightAscension: "",
    solstice: "",
    startCivilTwilight: "",
    sunrise: "",
    sunset: "",
    transit: "",
  },
  moon: {
    altitude: "",
    azimuth: "",
    declination: "",
    fullMoon: "",
    newMoon: "",
    fullness: "",
    phase: "",
    rightAscension: "",
    rise: "",
    set: "",
    transit: "",
  },
});
