import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './cars.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarHeaderComponent } from './sidebar/header/sidebar-header.component';
import { SidebarFooterComponent } from './sidebar/footer/sidebar-footer.component';
import { SidebarMenuComponent } from './sidebar/menu/sidebar-menu.component';
import { MenuItemComponent } from './sidebar/menu/menu-item/menu-item.component';
import { CarCreateComponent } from './create/car-create.component';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CarsComponent,
    CarCreateComponent,
    SidebarComponent,
    SidebarHeaderComponent,
    SidebarFooterComponent,
    SidebarMenuComponent,
    MenuItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CarsRoutingModule,

    CarsRoutingModule,
    CoreModule,
    SharedModule
  ]
})
export class CarsModule { }
