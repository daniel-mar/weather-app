import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.scss',
})
export class SearchBar {
  city: string = '';
  @Output() search =new EventEmitter<string>();

  onSearch(): void {
    if (this.city.trim()) {
      this.search.emit(this.city); // Invoke emit() to send the payload to the parent (used in app.component.html)
      this.city = '';
    }
  }

}
