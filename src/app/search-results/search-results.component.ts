import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Car, CarSearchQuery, CarsService } from '../cars.service';
import { HeaderComponent } from '../header/header.component';
import { SearchFiltersComponent } from '../search-filters/search-filters.component';
import { SvgIconComponent, provideAngularSvgIcon } from 'angular-svg-icon';
@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, SearchFiltersComponent, SvgIconComponent],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent {
  searchCars: Car[] = []
  showSearch = false;
  resultsLoading = false;
  showMobileFilters = false;
  search: CarSearchQuery = {
    make: '',
    model: '',
    minPrice: 0,
    maxPrice: 0
  };

  constructor(private activatedRoute: ActivatedRoute, private carsService: CarsService, private router: Router) {
    this.handleSearch = this.handleSearch.bind(this);
  }

  getCarImageUrl(car: Car): string {
    return `https://bcfy-bucket.s3.eu-west-2.amazonaws.com/${car.make}-${car.model}-${car.year}.png`;
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log('Query Params:', params);
      
      // if (!this.validateQueryParams(params)) {
      //   this.router.navigate(['/']);
      // }

      this.handleSearch(params);
    });
  }

  openMobileFilters(): void {
    this.showMobileFilters = true;
  }

  closeMobileFilters(): void {
    this.showMobileFilters = false;
  }

  handleSearch(params: any) {
    let query: CarSearchQuery = {
      make: params['make'],
      model: params['model'],
      minPrice: parseInt(params['minPrice']),
      maxPrice: parseInt(params['maxPrice'])
    };
    this.search = query;
    this.resultsLoading = true;
    this.carsService.searchCars(query).subscribe((results: Car[]) => {
      this.searchCars = results;
      this.resultsLoading = false;
      this.updateQueryParams();
    });
  }

  private validateQueryParams(params: any): boolean {
    return !params.make || !params.model || !params.minPrice || !params.maxPrice;
  }

  private updateQueryParams(): void {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: {
        make: this.search.make,
        model: this.search.model,
        minPrice: this.search.minPrice,
        maxPrice: this.search.maxPrice
      },
      queryParamsHandling: 'merge'
      });
  }

  onSearch(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    console.log('Search:', this.search);
    this.handleSearch(this.search);
  }
  
}
