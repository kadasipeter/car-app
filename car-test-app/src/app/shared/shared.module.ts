import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { IsFairCarPipe } from './is-fair-car.pipe';
import { GetSummaryPipe } from './get-summary.pipe';

@NgModule({
  declarations: [
    NavbarComponent,
    IsFairCarPipe,
    GetSummaryPipe
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    IsFairCarPipe,
    GetSummaryPipe
  ],
})
export class SharedModule {}
