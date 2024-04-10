import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Car, CarSearchQuery, CarsService } from '../cars.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent {
  searchCars: Car[] = []
  showSearch = false;
  search: CarSearchQuery = {
    make: '',
    model: '',
    minPrice: 0,
    maxPrice: 0
  };

  constructor(private activatedRoute: ActivatedRoute, private carsService: CarsService, private router: Router) {}

  getCarImageUrl(car: Car): string {
    // https://bcfy-bucket.s3.eu-west-2.amazonaws.com/toyota-yaris-2006.png
    return `https://bcfy-bucket.s3.eu-west-2.amazonaws.com/${car.make}-${car.model}-${car.year}.png`;
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log('Query Params:', params);
      
      // if (!this.validateQueryParams(params)) {
      //   this.router.navigate(['/']);
      // }

      let query: CarSearchQuery = { 
        make: params['make'], 
        model: params['model'], 
        minPrice: parseInt(params['minPrice']), 
        maxPrice: parseInt(params['maxPrice'])
       }
      
      this.carsService.searchCars(query).subscribe((results: Car[]) => {
        this.searchCars = results;
      });
    });
  }

  private validateQueryParams(params: any): boolean {
    return !params.make || !params.model || !params.minPrice || !params.maxPrice;
  }

  onSearch(): void {
    console.log('Search:', this.search);
    this.carsService.searchCars(this.search).subscribe((results: Car[]) => {
      console.log('Results:', results)
      this.searchCars = results;
    });
  }

}
