export interface WeatherbitResponse {
    data: WeatherData[];
    count: number;
  }
  
  export interface WeatherData {
    city_name: string;
    temp: number;
    weather: {
      icon: string;
      code: number;
      description: string;
    };
    wind_spd: number;
    rh: number; // Relative Humidity
    datetime: string;
    lat: number;
    lon: number;
  }
  