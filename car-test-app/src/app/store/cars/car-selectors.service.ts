import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { AppState } from '../app-state';
import { Car } from 'src/app/core/car.model';

const selectCarsFeature = createFeatureSelector<{ cars: AppState }>('cars');

export const selectAll = createSelector(
  selectCarsFeature,
  (state) => state.cars.cars
);

@Injectable({
  providedIn: 'root',
})
export class CarSelectorsService {
  constructor(private store: Store<{ cars: AppState }>) {}

  getAllCars$(): Observable<Car[]> {
    return this.store.select(selectAll);
  }
}
