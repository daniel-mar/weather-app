export interface WeatherData {
    city: string;
    currentTemp: number;
    condition: string;
    icon: string;
    forecast: ForecastDay[];
}

export interface ForecastDay {
    date: string;
    temp: number;
    condition: string;
    icon: string;
}