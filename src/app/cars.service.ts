import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Car {
  id: string;
  make: string;
  model: string;
  version: string;
  minPrice: number;
  maxPrice: number;
  transmission: string;
  fuelType: string;
  bodyType: string;
  engineSize: string;
  numberOfDoors: number;
  numberOfSeats: number;
  year: number;
  insuranceGroup: number;
}

export interface CarSearchQuery {
  make: string;
  model: string;
  minPrice: number;
  maxPrice: number;
}

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  private _http: HttpClient;
  private _url: string =
    'https://cjlli8y393.execute-api.eu-west-2.amazonaws.com/search';

  constructor(private http: HttpClient) {
    this._http = http;
  }

  public searchCars(query: CarSearchQuery): Observable<Car[]> {
    return this._http.post<Car[]>(this._url, query);
  }
}
