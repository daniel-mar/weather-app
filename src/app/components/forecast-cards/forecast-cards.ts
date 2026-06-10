import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForecastDay } from '../../models/weather.model';

@Component({
  selector: 'app-forecast-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forecast-cards.html',
  styleUrl: './forecast-cards.scss',
})
export class ForecastCards {
  @Input() days: ForecastDay[] = [];
  @Input() isCelcius: boolean = true;

  trackByDate(index: number, item: ForecastDay): string {
    return item.date;
  }
}