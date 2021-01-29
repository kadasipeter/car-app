import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GetSummaryPipe } from './get-summary.pipe';
import { IsFairCarPipe } from './is-fair-car.pipe';
import { NavbarComponent } from './navbar/navbar.component';

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
