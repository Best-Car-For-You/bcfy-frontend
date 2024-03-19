import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

export class HeroComponent {
  showSearch = false;
  search = {
    make: '',
    model: '',
    priceFrom: '',
    priceTo: ''
  };

  getStarted(): void {
    this.showSearch = true;
  }

  onSearch(): void {
    console.log('Search:', this.search);
    // Add your search logic here...
  }
}
