import { Car } from '../core/car.model';

export interface AppState {
  readonly cars: Car[];
}

const empty: Car[] = [];

export const initializeState: AppState = {
   cars: empty };
