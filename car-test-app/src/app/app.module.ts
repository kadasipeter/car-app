import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppStateModule } from './store/app-state.module';
import { CarsStateModule } from './store/cars/car-state.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,

    SharedModule,
    AppStateModule,
    CarsStateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
