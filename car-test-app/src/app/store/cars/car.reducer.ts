import { Action, createReducer, on } from '@ngrx/store';
import { Car } from 'src/app/core/car.model';

import { AppState, initializeState } from '../app-state';
import * as CarActions from './car.action';

const addCar = createReducer(
  initializeState,
  on(CarActions.CreateCar, (s: AppState, c: Car) => {
    return { ...s, cars: [c, ...s.cars] };
  })
);

export function addCarReducer(s: AppState, action: Action): AppState {
  return addCar(s, action);
}
