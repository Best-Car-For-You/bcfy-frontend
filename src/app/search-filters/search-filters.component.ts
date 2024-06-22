import { Component, Input } from '@angular/core';
import { CarSearchQuery } from '../cars.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-filters',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-filters.component.html',
  styleUrl: './search-filters.component.css'
})
export class SearchFiltersComponent {
  @Input() closeHandler!: () => void;
  @Input() searchHandler!: (params: any) => void;
  search: CarSearchQuery = {
    make: '',
    model: '',
    minPrice: 0,
    maxPrice: 0
  };
  
  constructor() {}

  onSearch(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    console.log('Search:', this.search);
    this.searchHandler(this.search);
    this.closeHandler();
  }
}
