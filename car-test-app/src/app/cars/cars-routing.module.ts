import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './cars.component';
import { CarCreateComponent } from './create/car-create.component';

const routes: Routes = [
  { path: '',  component: CarsComponent,
      children: [
        { path: '', redirectTo: 'create', pathMatch: 'full'},
        { path: 'create', component: CarCreateComponent}
      ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
