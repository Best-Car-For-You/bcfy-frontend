import { Component, ElementRef, Renderer2 } from '@angular/core';
import { CarSearchQuery, CarsService } from '../cars.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  constructor(
    private el: ElementRef, 
    private renderer: Renderer2, 
    private carsService: CarsService,
    private router: Router 
  ) {}

  showSearch = false;
  search: CarSearchQuery = {
    make: '',
    model: '',
    minPrice: 0,
    maxPrice: 0
  };

  ngOnInit(): void {
  }

  getStarted(): void {
    this.showSearch = true;
  }

  onSearch(): void {
    this.router.navigate(['/search-results'], { queryParams: this.search });
    console.log('Search:', this.search);
  }
}
