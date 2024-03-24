import { Component, ElementRef, Renderer2 } from '@angular/core';

interface SearchResult {
  id: string;
  make: string;
  model: string;
  year: string;
  fuelType: string;
  minPrice: string;
  maxPrice: string;
  transmission: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

export class HeroComponent {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

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
  displayResults(results: SearchResult[]): void { // Use the SearchResult interface here
    const container = this.el.nativeElement.querySelector('.results-container');
    // Clear previous results
    container.innerHTML = '';
    results.forEach((result: SearchResult) => { // Now, `result` is typed
      const card = this.renderer.createElement('div');
      this.renderer.addClass(card, 'result-card');
      this.renderer.setProperty(card, 'innerHTML', `
        <div class="font-bold text-xl mb-2">${result.make} ${result.model}</div>
        <!-- Add more details here -->
      `);
      this.renderer.appendChild(container, card);
    });
  }
}