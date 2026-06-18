import { Component, OnInit, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherService } from '../../services/weather.service';
import { WeatherData } from '../../models/weather.model';
import { SearchBar } from '../search-bar/search-bar';
import { ForecastCards } from '../forecast-cards/forecast-cards';

@Component({
  selector: 'app-weather-dashboard',
  standalone: true,
  imports: [CommonModule, SearchBar, ForecastCards],
  templateUrl: './weather-dashboard.html',
  styleUrl: './weather-dashboard.scss',
})
export class WeatherDashboard implements OnInit {
  weatherData?: WeatherData;
  isCelcius: boolean = true;
  errorMessage: string = '';
  loading: boolean = false;

  constructor(
    private weatherService: WeatherService,
    private zone: NgZone
  ) {}

  ngOnInit():void {
    this.fetchWeather('Los Angeles');   // Base profile startup on page load
  }

  fetchWeather(city: string): void {
    this.loading = true;
    this.errorMessage = '';

    this.weatherService.getForecast(city).subscribe({
      next: (data) => {
        this.zone.run(() => {
          this.weatherData = data;
          this.loading = false;
      });
    },
      error: (err) => {
        this.zone.run(() => {
          this.errorMessage = 'Unable to fetch data for the requested city.';
          this.loading = false;
        });
      }
    });
  }

  toggleUnit(): void {
    this.isCelcius = !this.isCelcius;
  }
}