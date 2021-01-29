import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState } from '../store/app-state';
import { Car } from './car.model';
import { CarSelectorsService } from '../store/cars/car-selectors.service';
import * as CarActions from '../store/cars/car.action';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  cars$: Observable<Car[]>;

  constructor(
    private store: Store<{ cars: AppState }>,
    private carsSelectorsService: CarSelectorsService
  ) {
    this.createCars();
    this.cars$ = carsSelectorsService.getAllCars$();
  }

  addCar(brand: string): void {
    const newCar = this.createCar();
    if (brand.length > 0) {
      newCar.brand = brand;
    }

    this.store.dispatch(CarActions.CreateCar(newCar));
  }

  private createCar(): Car {
    return {
      brand: makeBrand(),
      color: makeColor(),
      price: makePrice(),
      productionYear: makeYear(),
    };
  }

  private createCars(count: number = 300): void {
    for (let i = 1; i <= count; i++) {
      const newCar = this.createCar();

      this.store.dispatch(CarActions.CreateCar(newCar));
    }
  }
}

export function makeBrand(): string {
  const brands = [
    'Acura',
    'Audi',
    'BMW',
    'Citroen',
    'Chevrolet',
    'Dodge',
    'Lexus',
    'Ferrari',
    'Jeep',
    'Kia',
    'Mazda',
    'Mercedes-Benz',
  ];
  return brands[randomIndex(brands.length)];
}

export function makeColor(): string {
  const colors = [
    'black',
    'white',
    'red',
    'gray',
    'silver',
    'blue',
    'green',
    'rainbow',
  ];
  return colors[randomIndex(colors.length)];
}

export function randomIndex(range: number): number {
  return Math.floor(Math.random() * range);
}

export function makePrice(): number {
  return (10 + randomIndex(21)) * 1000;
}

export function makeYear(): number {
  return new Date().getFullYear() - randomIndex(21);
}
