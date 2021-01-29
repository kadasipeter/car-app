import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';

import { CarSelectorsService } from './cars/car-selectors.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({})
  ],
  providers: [CarSelectorsService]
})
export class AppStateModule { }
