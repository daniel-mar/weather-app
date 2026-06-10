import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { WeatherData } from '../models/weather.model';

@Injectable({
    providedIn: 'root',
})
export class WeatherService {
    private proxyUrl = '/api/weather';

    constructor(private http: HttpClient) {}

    getForecast(city: string): Observable<WeatherData> {
        const url = `${this.proxyUrl}?city=${city}`;

        return this.http.get<any>(url).pipe(
            map(data => ({
                city: data.location.name,
                currentTemp: data.current.temp_c,
                condition: data.current.condition.text,
                icon: data.current.condition.icon,
                forecast: data.forecast.forecastday.map((day: any) => ({
                    date: day.date,
                    temp: day.day.avgtemp_c,
                    condition: day.day.condition.text,
                    icon: day.day.condition.icon,
                })),
            }))
        );
    }
}