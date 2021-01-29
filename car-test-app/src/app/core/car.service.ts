import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Car } from './car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  cars$: Observable<Car[]>;

  private carsSubject: BehaviorSubject<Car[]>;
  private cars: Car[] = [];
  private index = 1;

  constructor() {
    this.createCars();
    this.carsSubject = new BehaviorSubject(this.cars);
    this.cars$ = this.carsSubject.asObservable();
  }

  addCar(brand: string): void {
    const newCar = this.createCar();
    if (brand.length > 0) {
      newCar.brand = brand;
    }
    this.cars = [newCar, ...this.cars];
    this.carsSubject.next(this.cars);
  }

  private createCar(): Car {
    return {
      brand: makeBrand(),
      color: makeColor(),
      price: makePrice(),
      productionYear: makeYear()
    };
  }

  private createCars(count: number = 300): void {
    for (let i = 1; i <= count; i++) {
      const newCar = this.createCar();
      this.cars = [newCar, ...this.cars];
    }
  }
}

export function makeBrand(): string {
  const brands = ['Acura', 'Audi', 'BMW', 'Citroen', 'Chevrolet', 'Dodge', 'Lexus', 'Ferrari', 'Jeep', 'Kia', 'Mazda', 'Mercedes-Benz'];
  return brands[randomIndex(brands.length)];
}
export function makeColor(): string {
  const colors = ['black', 'white', 'red', 'gray', 'silver', 'blue', 'green', 'rainbow'];
  return colors[randomIndex(colors.length)];
}

export function randomIndex(range: number): number {
  return Math.floor(Math.random() * range);
}

export function makePrice(): number {
  return (10 + randomIndex(21)) * 1000;
}

export function makeYear(): number {
  return (new Date()).getFullYear() - (randomIndex(21));
}
