import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Car, CarSearchQuery, CarsService } from '../cars.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

export class HeroComponent {
  constructor(private el: ElementRef, private renderer: Renderer2, private carsService: CarsService) {}

  showSearch = false;
  search: CarSearchQuery = {
    make: '',
    model: '',
    minPrice: 0,
    maxPrice: 0
  };
  searchResults: Car[] = [];


  ngOnInit(): void {
  }

  getStarted(): void {
    this.showSearch = true;
  }

  onSearch(): void {
    console.log('Search:', this.search);
    this.carsService.searchCars(this.search).subscribe((results: Car[]) => {
      console.log('Results:', results)
      this.searchResults = results;
    });
  }
  
}