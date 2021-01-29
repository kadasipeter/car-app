import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';

import { addCarReducer } from './car.reducer';
import { CarSelectorsService } from './car-selectors.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('cars', {cars: addCarReducer})
  ],
  providers: [CarSelectorsService]
})
export class CarsStateModule { }
