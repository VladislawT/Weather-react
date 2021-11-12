export type Weather = {
  main: {
    temp: number;
    pressure: number,
    humidity: number,
  },
  wind: {
    speed: number,
  }
};