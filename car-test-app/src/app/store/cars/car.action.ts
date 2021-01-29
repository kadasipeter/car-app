import { createAction, props } from '@ngrx/store';

import { Car } from 'src/app/core/car.model';

export const CreateCar = createAction(
  '[CarModel] - Create Car',
  props<Car>());


